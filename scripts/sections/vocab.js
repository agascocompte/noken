// Sección Vocabulario: tabla con buscador (kana/kanji/romaji/español) y filtro por lección.
"use strict";

(() => {
  const { $, $$, esc, normQuery } = N5;

  function render() {
    const q = normQuery($("#vSearch").value);
    const les = $("#vLesson").value;

    const delFiltro = N5.data.vocab.filter(w => les.startsWith("f:")
      ? w.fuente === les.slice(2)
      : les === "all" || (!w.fuente && String(w.leccion) === les));
    const finales = N5.rankea(delFiltro, q, w => [w.kana, w.kanji], w => w.es);

    let rows = "", n = 0;
    for (const w of finales) {
      n++;
      const origen = w.fuente
        ? N5.fuenteHTML(w, `#/vocabulario?leccion=f:${w.fuente}`)
        : `<a href="#/vocabulario?leccion=${w.leccion}" class="muted" style="text-decoration:none">${w.leccion}</a>`;
      rows += `<tr><td class="selcell">${N5.selBox(N5.selId.vocab(w))}</td><td class="jpcell jp">${esc(w.kana)}</td><td class="kanjicell">${esc(w.kanji) || "—"}</td><td>${esc(w.es)}</td><td class="num">${origen}</td></tr>`;
    }
    $("#vTable tbody").innerHTML = rows || `<tr><td colspan="${$$("#vTable thead th").length}" class="muted" style="text-align:center;padding:24px">Sin resultados</td></tr>`;
    $("#vCount").textContent = n + " palabras";
  }

  N5.registerSection({
    id: "vocabulario", seleccionable: true, titulo: "Vocabulario",
    init() {
      const lessons = [...new Set(N5.data.vocab.filter(w => !w.fuente).map(w => w.leccion))].sort((a, b) => a - b);
      $("#vLesson").innerHTML = `<option value="all">Todas las lecciones</option>` +
        lessons.map(l => `<option value="${l}">Lección ${l}</option>`).join("") +
        Object.entries(N5.FUENTES).map(([id, f]) => {
          const n = N5.data.vocab.filter(w => w.fuente === id).length;
          return n ? `<option value="f:${id}">${f.nombre} (${n})</option>` : "";
        }).join("");
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
