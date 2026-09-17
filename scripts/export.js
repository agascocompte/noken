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
  const soloKata = s => /^[ァ-ヶー]+$/.test(s.replace(/[・\s]/g, ""));
  // Romaji de la primera lectura: 「あ・ける、ひら・く」 → akeru
  const romaji   = s => (s ? N5.romaji(N5.limpiaEntrada(s).replace(/・/g, "").split("、")[0]) : "");

  function filas() {
    const out = [];
    for (const w of N5.data.vocab) if (sel.has(N5.selId.vocab(w))) {
      const k = N5.limpiaEntrada(w.kana), kata = soloKata(k);
      out.push([w.es, romaji(k), kata ? "" : k, kata ? k : "", N5.limpiaEntrada(w.kanji)]);
    }
    for (const v of N5.data.verbs) if (sel.has(N5.selId.verbo(v)))
      out.push([v.es, romaji(v.masu), v.masu, "", N5.masuKanji(v)]);
    for (const k of N5.data.kanji) if (sel.has(N5.selId.kanji(k)))
      out.push([k.significado, romaji(k.kun || k.on), k.kun, k.on, k.kanji]);
    return out;
  }

  // ---------- importar una selección ----------
  // El CSV no lleva identificadores, así que cada fila se reconoce por las mismas
  // columnas japonesas que escribió la exportación. El español se ignora, por si se
  // ha retocado en una hoja de cálculo.
  let indice = null;
  const claveDe = campos => campos.map(x => N5.limpiaEntrada(x).trim()).join("|");
  function indexa() {
    if (indice) return indice;
    indice = new Map();
    for (const w of N5.data.vocab) {
      const k = N5.limpiaEntrada(w.kana), kata = soloKata(k);
      indice.set(claveDe([kata ? "" : k, kata ? k : "", w.kanji]), N5.selId.vocab(w));
    }
    for (const v of N5.data.verbs) indice.set(claveDe([v.masu, "", N5.masuKanji(v)]), N5.selId.verbo(v));
    for (const k of N5.data.kanji) indice.set(claveDe([k.kun, k.on, k.kanji]), N5.selId.kanji(k));
    return indice;
  }

  // Lector de CSV con comillas: los significados llevan comas («tú, usted»).
  function leeCSV(texto) {
    const filas = []; let fila = [], campo = "", entreComillas = false;
    const t = texto.replace(/^\uFEFF/, "");
    const finDeFila = () => { fila.push(campo); campo = ""; if (fila.some(x => x !== "")) filas.push(fila); fila = []; };
    for (let i = 0; i < t.length; i++) {
      const c = t[i];
      if (entreComillas) {
        if (c !== '"') campo += c;
        else if (t[i + 1] === '"') { campo += '"'; i++; }
        else entreComillas = false;
      } else if (c === '"') entreComillas = true;
      else if (c === ",") { fila.push(campo); campo = ""; }
      else if (c === "\n" || c === "\r") { if (c === "\r" && t[i + 1] === "\n") i++; finDeFila(); }
      else campo += c;
    }
    finDeFila();
    return filas;
  }

  async function importa(fichero) {
    let filas;
    try { filas = leeCSV(await fichero.text()); } catch { filas = []; }
    const idx = indexa();
    let nuevas = 0, repetidas = 0, desconocidas = 0;
    for (const f of filas) {
      if (f[2] === "Hiragana") continue;                       // cabecera
      if (f.length < 5) { desconocidas++; continue; }           // no tiene las 5 columnas
      const id = idx.get(claveDe([f[2], f[3], f[4]]));
      if (!id) desconocidas++;
      else if (sel.has(id)) repetidas++;
      else { sel.add(id); nuevas++; }
    }
    guarda(); sincroniza(); pinta();
    if (!nuevas && !repetidas)
      return aviso(desconocidas ? "No parece un CSV exportado de la guía" : "El archivo no tiene filas");
    aviso(plural(nuevas, "añadida", "añadidas") +
      (repetidas ? ` · ${repetidas} ya estaban` : "") +
      (desconocidas ? ` · ${plural(desconocidas, "sin reconocer", "sin reconocer")}` : ""));
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
    // El hueco que se reserva abajo se mide de la barra: con los botones envueltos
    // en varias filas del móvil, un valor fijo se quedaba corto y tapaba contenido.
    document.body.style.setProperty("--alto-selbar", visible ? $("#selBar").offsetHeight + "px" : "0px");
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
    guarda(); sincroniza();
    aviso(!cajas.length ? "No hay nada visible" :
      plural(n, "añadido", "añadidos") +
      (saltadas ? ` · ${plural(saltadas, "omitido", "omitidos")} (partículas y siglas)` : ""));
  }

  function vaciar() { sel.clear(); guarda(); sincroniza(); pinta(); }

  // Una misma entrada puede tener casilla en dos sitios: un verbo sale en Verbos y
  // también en el vocabulario de su lección. Se mantienen las dos a la vez.
  const sincroniza = () => $$(".selbox").forEach(c => { c.checked = sel.has(c.dataset.id); });

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
      guarda(); sincroniza(); pinta();
    });
    $("#selAll").addEventListener("click", marcaVisible);
    $("#selNone").addEventListener("click", vaciar);
    $("#selCsv").addEventListener("click", descargar);
    $("#selImport").addEventListener("click", () => $("#selFile").click());
    $("#selFile").addEventListener("change", e => {
      const f = e.target.files[0];
      if (f) importa(f);
      e.target.value = "";   // así se puede volver a elegir el mismo archivo
    });
    N5.afterRoute = (_, def) => refrescaContexto(def);
    // el router ya activó una ruta antes de esto: se arranca con la sección visible
    refrescaContexto(N5.sections.get($(".panel.active")?.id.replace(/^p-/, "")));
  };
})();
