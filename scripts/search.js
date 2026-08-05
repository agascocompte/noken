// Búsqueda global: un solo campo que consulta vocabulario, verbos, kanji y
// gramática, agrupa los resultados y navega a la sección correspondiente.
// Atajo: «/» enfoca; Esc cierra; Enter abre el primer resultado.
"use strict";

(() => {
  const { $, esc, moraMatch, normQuery } = N5;
  const LIMIT = 5;

  // 漢字[かんじ] → かんじ (lectura), y katakana → hiragana para comparar kana.
  const lectura = s => s.replace(/([一-鿿々〇]+)\[([ぁ-ゖァ-ヺー]+)\]/g, "$2");
  const aHira = s => s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));

  // Puntuación en scripts/relevancia.js, compartida con los buscadores de sección.
  const { relevancia, porRelevancia } = N5;
  // Suelo: aparece en el texto de la explicación pero no en el patrón ni como palabra.
  const COINCIDENCIA_DEBIL = 10;

  // Los mejores LIMIT, y a igualdad de puntos se respeta el orden de los datos.
  const mejores = lista => porRelevancia(lista).slice(0, LIMIT).map(x => x.item);

  function buscar(qRaw) {
    const q = normQuery(qRaw);
    if (!q) return null;
    const vocab = [], verbos = [], kanji = [], gramatica = [];

    for (const w of N5.data.vocab) {
      const pts = relevancia(q, [w.kana, w.kanji], w.es);
      if (pts) vocab.push({ pts, item: w });
    }
    for (const v of N5.data.verbs) {
      const pts = relevancia(q, [v.kana, v.kanji, v.masu, v.te, v.ta, v.nai], v.es);
      if (pts) verbos.push({ pts, item: v });
    }
    for (const k of N5.data.kanji) {
      const pts = relevancia(q, [k.kanji, k.on, k.kun], k.significado);
      if (pts) kanji.push({ pts, item: k });
    }
    const qJa = aHira(q.replace(/\s+/g, ""));  // «と おもいます» → «とおもいます»
    for (const L of N5.data.grammar) {
      for (let i = 0; i < L.puntos.length; i++) {
        const p = L.puntos[i];
        const texto = p.patron + " " + p.explicacion;
        const plano = texto.replace(/\[[ぁ-ゖァ-ヺー]+\]/g, "");
        const kana = aHira(lectura(texto));
        let pts = Math.max(relevancia(qJa, [limpio(p.patron)], ""), relevancia(q, [], p.explicacion));
        if (!pts && (plano.toLowerCase().includes(q) || plano.includes(qRaw.trim()) ||
                     kana.includes(qJa) || moraMatch(kana, qJa))) pts = COINCIDENCIA_DEBIL;
        if (pts) gramatica.push({ pts, item: { leccion: L.leccion, idx: i, p } });
      }
    }
    return { vocab: mejores(vocab), verbos: mejores(verbos), kanji: mejores(kanji), gramatica: mejores(gramatica) };
  }

  const limpio = s => s.replace(/\[[ぁ-ゖァ-ヺー]+\]/g, "");

  // Primera frase de la explicación: el patrón por sí solo (「V てあげます」) no
  // dice qué significa, así que en los resultados va acompañado de su glosa.
  const glosa = s => {
    const t = limpio(s).split(/(?<=\.)\s+/)[0].replace(/\s+$/, "");
    return t.length > 68 ? t.slice(0, 67).trimEnd() + "…" : t;
  };

  function pintar(r, q) {
    const box = $("#gResults");
    if (!r) { box.classList.remove("open"); box.innerHTML = ""; return; }
    const qs = encodeURIComponent(q.trim());
    const grupos = [];
    if (r.vocab.length) grupos.push(`<div class="ggroup">Vocabulario</div>` + r.vocab.map(w =>
      `<button class="gitem" data-go="#/vocabulario?q=${qs}"><span class="gja">${esc(w.kana)}${w.kanji ? " " + esc(w.kanji) : ""}</span><span class="ges">${esc(w.es)} · ${N5.fuenteDe(w)?.nombre || "L" + w.leccion}</span></button>`).join(""));
    if (r.verbos.length) grupos.push(`<div class="ggroup">Verbos</div>` + r.verbos.map(v =>
      `<button class="gitem" data-go="#/verbos?q=${qs}"><span class="gja">${esc(v.kana)}${v.kanji ? " " + esc(v.kanji) : ""}</span><span class="ges">${esc(v.es)}</span></button>`).join(""));
    if (r.kanji.length) grupos.push(`<div class="ggroup">Kanji</div>` + r.kanji.map(k =>
      `<button class="gitem" data-go="#/kanji?q=${qs}"><span class="gja">${k.kanji}</span><span class="ges">${esc(k.significado)}</span></button>`).join(""));
    if (r.gramatica.length) grupos.push(`<div class="ggroup">Gramática</div>` + r.gramatica.map(g =>
      `<button class="gitem" data-go="#/gramatica/l${g.leccion}?p=${g.idx}"><span class="gja">${esc(limpio(g.p.patron))}</span><span class="ges">${esc(glosa(g.p.explicacion))} · 第${g.leccion}課</span></button>`).join(""));
    box.innerHTML = grupos.length ? grupos.join("") : `<div class="gnone">Sin resultados para «${esc(q)}»</div>`;
    box.classList.add("open");
  }

  function cerrar() { $("#gResults").classList.remove("open"); }

  N5.initSearch = () => {
    const input = $("#gSearch");
    let t;
    input.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => pintar(buscar(input.value), input.value), 120);
    });
    input.addEventListener("keydown", e => {
      if (e.key === "Escape") { input.value = ""; cerrar(); input.blur(); }
      if (e.key === "Enter") {
        const first = $("#gResults .gitem");
        if (first) { N5.go(first.dataset.go); cerrar(); input.blur(); }
      }
    });
    $("#gResults").addEventListener("click", e => {
      const b = e.target.closest(".gitem"); if (!b) return;
      N5.go(b.dataset.go); cerrar(); input.value = "";
    });
    document.addEventListener("click", e => {
      if (!e.target.closest(".gsearch")) cerrar();
    });
    // atajo «/»: enfoca la búsqueda desde cualquier sitio (salvo si ya escribes en un campo)
    document.addEventListener("keydown", e => {
      if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault(); input.focus(); input.select();
      }
    });
  };
})();
