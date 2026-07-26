// Búsqueda global: un solo campo que consulta vocabulario, verbos, kanji y
// gramática, agrupa los resultados y navega a la sección correspondiente.
// Atajo: «/» enfoca; Esc cierra; Enter abre el primer resultado.
"use strict";

(() => {
  const { $, esc, moraMatch, normQuery } = N5;
  const LIMIT = 5;

  function buscar(qRaw) {
    const q = normQuery(qRaw);
    if (!q) return null;
    const r = { vocab: [], verbos: [], kanji: [], gramatica: [] };

    for (const w of N5.data.vocab) {
      if (w.kana.includes(q) || w.kanji.includes(q) || w.es.toLowerCase().includes(q) || moraMatch(w.kana, q)) {
        r.vocab.push(w);
        if (r.vocab.length === LIMIT) break;
      }
    }
    for (const v of N5.data.verbs) {
      const dic = v.kana + " " + v.kanji;
      const hit = dic.includes(q) || v.es.toLowerCase().includes(q) ||
        [v.kana, v.masu, v.te, v.ta, v.nai].some(x => moraMatch(x, q));
      if (hit) { r.verbos.push(v); if (r.verbos.length === LIMIT) break; }
    }
    for (const k of N5.data.kanji) {
      if (k.kanji.includes(q) || k.significado.toLowerCase().includes(q) ||
          k.on.includes(q) || k.kun.includes(q) || moraMatch(k.on, q) || moraMatch(k.kun, q)) {
        r.kanji.push(k);
        if (r.kanji.length === LIMIT) break;
      }
    }
    outer:
    for (const L of N5.data.grammar) {
      for (let i = 0; i < L.puntos.length; i++) {
        const p = L.puntos[i];
        const plano = (p.patron + " " + p.explicacion).replace(/\[[ぁ-ゖァ-ヺー]+\]/g, "");
        if (plano.toLowerCase().includes(q) || plano.includes(qRaw.trim())) {
          r.gramatica.push({ leccion: L.leccion, idx: i, p });
          if (r.gramatica.length === LIMIT) break outer;
        }
      }
    }
    return r;
  }

  const limpio = s => s.replace(/\[[ぁ-ゖァ-ヺー]+\]/g, "");

  function pintar(r, q) {
    const box = $("#gResults");
    if (!r) { box.classList.remove("open"); box.innerHTML = ""; return; }
    const qs = encodeURIComponent(q.trim());
    const grupos = [];
    if (r.vocab.length) grupos.push(`<div class="ggroup">Vocabulario</div>` + r.vocab.map(w =>
      `<button class="gitem" data-go="#/vocabulario?q=${qs}"><span class="gja">${esc(w.kana)}${w.kanji ? " " + esc(w.kanji) : ""}</span><span class="ges">${esc(w.es)} · L${w.leccion}</span></button>`).join(""));
    if (r.verbos.length) grupos.push(`<div class="ggroup">Verbos</div>` + r.verbos.map(v =>
      `<button class="gitem" data-go="#/verbos?q=${qs}"><span class="gja">${esc(v.kana)}${v.kanji ? " " + esc(v.kanji) : ""}</span><span class="ges">${esc(v.es)}</span></button>`).join(""));
    if (r.kanji.length) grupos.push(`<div class="ggroup">Kanji</div>` + r.kanji.map(k =>
      `<button class="gitem" data-go="#/kanji?q=${qs}"><span class="gja">${k.kanji}</span><span class="ges">${esc(k.significado)}</span></button>`).join(""));
    if (r.gramatica.length) grupos.push(`<div class="ggroup">Gramática</div>` + r.gramatica.map(g =>
      `<button class="gitem" data-go="#/gramatica/l${g.leccion}?p=${g.idx}"><span class="gja">${esc(limpio(g.p.patron))}</span><span class="ges">第${g.leccion}課</span></button>`).join(""));
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
