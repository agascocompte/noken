// Sección Vocabulario: tabla con buscador (kana/kanji/romaji/español) y filtro por lección.
"use strict";

(() => {
  const { $, esc, normQuery } = N5;

  function render() {
    const q = normQuery($("#vSearch").value);
    const les = $("#vLesson").value;

    // Sin búsqueda se respeta el orden por lección; con búsqueda manda la relevancia,
    // para que «ki» dé 木 el primero y no en el puesto 41.
    const lista = [];
    for (const w of N5.data.vocab) {
      if (les.startsWith("f:") ? w.fuente !== les.slice(2)
          : les !== "all" && (w.fuente || String(w.leccion) !== les)) continue;
      if (!q) { lista.push(w); continue; }
      const pts = N5.relevancia(q, [w.kana, w.kanji], w.es);
      if (pts) lista.push({ pts, item: w });
    }
    const finales = q ? N5.porRelevancia(lista).map(x => x.item) : lista;

    let rows = "", n = 0;
    for (const w of finales) {
      n++;
      const f = N5.fuenteDe(w);
      const origen = f
        ? `<a href="#/vocabulario?leccion=f:${w.fuente}" class="fuente" title="${esc(f.titulo)}">${f.sigla}</a>`
        : `<a href="#/vocabulario?leccion=${w.leccion}" class="muted" style="text-decoration:none">${w.leccion}</a>`;
      rows += `<tr><td class="selcell">${N5.selBox(N5.selId.vocab(w))}</td><td class="jpcell jp">${esc(w.kana)}</td><td class="kanjicell">${esc(w.kanji) || "—"}</td><td>${esc(w.es)}</td><td class="num">${origen}</td></tr>`;
    }
    $("#vTable tbody").innerHTML = rows || `<tr><td colspan="5" class="muted" style="text-align:center;padding:24px">Sin resultados</td></tr>`;
    $("#vCount").textContent = n + " palabras";
  }

  N5.registerSection({
    id: "vocabulario", glyph: "語", titulo: "Vocabulario",
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
