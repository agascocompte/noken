// Sección Vocabulario: tabla con buscador (kana/kanji/romaji/español) y filtro por lección.
"use strict";

(() => {
  const { $, esc, moraMatch, normQuery } = N5;

  function render() {
    const q = normQuery($("#vSearch").value);
    const les = $("#vLesson").value;
    let rows = "", n = 0;
    for (const w of N5.data.vocab) {
      if (les !== "all" && String(w.leccion) !== les) continue;
      if (q && !(w.kana.includes(q) || w.kanji.includes(q) || w.es.toLowerCase().includes(q) || moraMatch(w.kana, q))) continue;
      n++;
      rows += `<tr><td class="jpcell jp">${esc(w.kana)}</td><td class="kanjicell">${esc(w.kanji) || "—"}</td><td>${esc(w.es)}</td><td class="num"><a href="#/vocabulario?leccion=${w.leccion}" class="muted" style="text-decoration:none">${w.leccion}</a></td></tr>`;
    }
    $("#vTable tbody").innerHTML = rows || `<tr><td colspan="4" class="muted" style="text-align:center;padding:24px">Sin resultados</td></tr>`;
    $("#vCount").textContent = n + " palabras";
  }

  N5.registerSection({
    id: "vocabulario", glyph: "語", titulo: "Vocabulario",
    init() {
      const lessons = [...new Set(N5.data.vocab.map(w => w.leccion))].sort((a, b) => a - b);
      $("#vLesson").innerHTML = `<option value="all">Todas las lecciones</option>` +
        lessons.map(l => `<option value="${l}">Lección ${l}</option>`).join("");
      $("#vSearch").addEventListener("input", render);
      $("#vLesson").addEventListener("change", render);
      render();
    },
    onRoute({ params }) {
      if (params.has("q")) $("#vSearch").value = params.get("q");
      if (params.has("leccion")) $("#vLesson").value = params.get("leccion");
      if (params.has("q") || params.has("leccion")) render();
    }
  });
})();
