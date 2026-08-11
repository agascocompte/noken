// Exportar a CSV: marcas palabras, verbos y kanji por las secciones y te los
// llevas a cualquier app de autoevaluación por columnas.
// Cabecera fija: Español,Romaji,Hiragana,Katakana,Kanji
//  · las palabras en hiragana dejan Katakana vacío, y al revés (no se inventan lecturas)
//  · los verbos salen en forma ます, también en kanji (会う → 会います)
//  · en los kanji, kun va a Hiragana y ON a Katakana, que es como ya están escritos
"use strict";

(() => {
  const { $, $$, esc } = N5;
  const CLAVE = "n5-seleccion";

  // ---------- selección (persiste entre secciones y entre visitas) ----------
  let sel = new Set();
  try { sel = new Set(JSON.parse(localStorage.getItem(CLAVE) || "[]")); } catch { /* vacía */ }
  const guarda = () => localStorage.setItem(CLAVE, JSON.stringify([...sel]));

  N5.selId = {
    vocab: w => "v|" + w.kana + "|" + w.kanji,
    verbo: v => "b|" + v.kana + "|" + v.kanji,
    kanji: k => "k|" + k.kanji
  };

  // Casilla que cada sección pinta en su fila o ficha (oculta salvo en modo selección).
  N5.selBox = id =>
    `<input type="checkbox" class="selbox" data-id="${esc(id)}"${sel.has(id) ? " checked" : ""} aria-label="Marcar para exportar">`;

  // Partículas y sufijos (〜さん) y siglas (CD, ATM) no dan una tarjeta decente:
  // se pueden marcar a mano, pero «marcar lo visible» los salta.
  const esRuido = id => id.startsWith("v|") && (id.includes("〜") || /^v\|[A-Za-z]+\|/.test(id));

  // ---------- de dato a fila ----------
  const esKana   = c => /[ぁ-ゖァ-ヺー]/.test(c);
  const soloKata = s => /^[ァ-ヶー]+$/.test(s.replace(/[・\s]/g, ""));
  // Romaji de la primera lectura: 「あ・ける、ひら・く」 → akeru
  const romaji   = s => (s ? N5.romaji(N5.limpiaEntrada(s).replace(/・/g, "").split("、")[0]) : "");

  // Forma ます en kanji: se cambia la cola kana del diccionario por la de ます.
  // 会う+あう+あいます → 会います.  Se corta por longitud, así 来る+くる+きます → 来ます.
  function masuKanji(v) {
    if (!v.kanji) return "";
    let n = 0;
    while (n < v.kanji.length && esKana(v.kanji[v.kanji.length - 1 - n])) n++;
    if (!n || !v.kana.endsWith(v.kanji.slice(-n))) return "";
    const corte = v.kana.length - n;
    return v.masu.length > corte ? v.kanji.slice(0, -n) + v.masu.slice(corte) : "";
  }

  function filas() {
    const out = [];
    for (const w of N5.data.vocab) if (sel.has(N5.selId.vocab(w))) {
      const k = N5.limpiaEntrada(w.kana), kata = soloKata(k);
      out.push([w.es, romaji(k), kata ? "" : k, kata ? k : "", N5.limpiaEntrada(w.kanji)]);
    }
    for (const v of N5.data.verbs) if (sel.has(N5.selId.verbo(v)))
      out.push([v.es, romaji(v.masu), v.masu, "", masuKanji(v)]);
    for (const k of N5.data.kanji) if (sel.has(N5.selId.kanji(k)))
      out.push([k.significado, romaji(k.kun || k.on), k.kun, k.on, k.kanji]);
    return out;
  }

  // ---------- CSV ----------
  const CABECERA = ["Español", "Romaji", "Hiragana", "Katakana", "Kanji"];
  const campo = s => /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  // BOM para que Excel y Sheets no destrocen el japonés al abrirlo.
  const aCSV = f => "﻿" + [CABECERA, ...f].map(r => r.map(campo).join(",")).join("\r\n") + "\r\n";

  function descargar() {
    const f = filas();
    if (!f.length) return;
    const url = URL.createObjectURL(new Blob([aCSV(f)], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "noken-" + new Date().toISOString().slice(0, 10) + ".csv";
    a.click();
    URL.revokeObjectURL(url);
    aviso(f.length + (f.length === 1 ? " fila exportada" : " filas exportadas"));
  }

  // ---------- barra ----------
  const plural = (n, uno, varios) => n + " " + (n === 1 ? uno : varios);
  let mensaje = "";
  const aviso = m => { mensaje = m; pinta(); setTimeout(() => { mensaje = ""; pinta(); }, 3000); };

  function pinta() {
    const modo = document.body.classList.contains("selmode");
    const visible = modo || sel.size > 0;
    $("#selBar").hidden = !visible;
    document.body.classList.toggle("con-selbar", visible);
    const n = N5.selTotal();
    $("#selCount").textContent = mensaje ||
      (n ? plural(n, "marcado", "marcados") : "Marca lo que quieras exportar");
    $("#selCsv").disabled = !n;
    const b = $("#selBtn");
    b.classList.toggle("on", modo);
    b.textContent = modo ? "✕ Salir de selección" : "☑ Seleccionar";
    b.title = modo ? "Salir del modo selección" : "Marcar palabras, verbos y kanji para exportar o para el test";
    N5.onSelChange?.();
  }

  // El botón solo tiene sentido en las secciones que declaran ser seleccionables;
  // mirar si hay casillas pintadas fallaba cuando un filtro dejaba la tabla vacía.
  function refrescaContexto(def) {
    const hay = !!def?.seleccionable;
    $("#selBtn").hidden = !hay;
    if (!hay && !sel.size) document.body.classList.remove("selmode");
    pinta();
  }

  // Lo marcado, ya resuelto a datos (lo usa el test para preguntar solo de eso).
  N5.seleccion = () => ({
    vocabulario: N5.data.vocab.filter(w => sel.has(N5.selId.vocab(w))),
    verbos: N5.data.verbs.filter(v => sel.has(N5.selId.verbo(v))),
    kanji: N5.data.kanji.filter(k => sel.has(N5.selId.kanji(k)))
  });
  // Cuenta sobre datos resueltos, no sobre los ids guardados: si una entrada se
  // renombra en data/, su id queda huérfano y el contador mentiría.
  N5.selTotal = () => {
    const s = N5.seleccion();
    return s.vocabulario.length + s.verbos.length + s.kanji.length;
  };

  // Marca lo que la sección activa está mostrando: las secciones solo pintan
  // lo que pasa sus filtros, así que basta con mirar el DOM.
  function marcaVisible() {
    const cajas = $$(".panel.active .selbox");
    let n = 0, saltadas = 0;
    for (const c of cajas) {
      if (esRuido(c.dataset.id)) { saltadas++; continue; }
      if (!sel.has(c.dataset.id)) { sel.add(c.dataset.id); n++; }
      c.checked = true;
    }
    guarda();
    aviso(!cajas.length ? "No hay nada visible" :
      plural(n, "añadido", "añadidos") +
      (saltadas ? ` · ${plural(saltadas, "omitido", "omitidos")} (partículas y siglas)` : ""));
  }

  function vaciar() {
    sel.clear(); guarda();
    $$(".selbox").forEach(c => { c.checked = false; });
    pinta();
  }

  N5.initExport = () => {
    // un único botón en la cabecera enciende y apaga el modo
    $("#selBtn").addEventListener("click", () => {
      document.body.classList.toggle("selmode");
      pinta();
    });
    // una sola casilla: delegación, así vale para tablas y fichas repintadas
    document.addEventListener("change", e => {
      const c = e.target.closest(".selbox");
      if (!c) return;
      c.checked ? sel.add(c.dataset.id) : sel.delete(c.dataset.id);
      guarda(); pinta();
    });
    $("#selAll").addEventListener("click", marcaVisible);
    $("#selNone").addEventListener("click", vaciar);
    $("#selCsv").addEventListener("click", descargar);
    N5.afterRoute = (_, def) => refrescaContexto(def);
    // el router ya activó una ruta antes de esto: se arranca con la sección visible
    refrescaContexto(N5.sections.get($(".panel.active")?.id.replace(/^p-/, "")));
  };
})();
