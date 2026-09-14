// Sección Vocabulario: tabla con buscador (kana/kanji/romaji/español) y filtros por
// lección y por sección del libro: la lista de vocabulario de cada lección o su hoja
// de «Palabras e informaciones de referencia».
"use strict";

(() => {
  const { $, $$, esc, normQuery } = N5;
  let seccion = "todo";   // "todo" | "vocabulario" | "referencia"

  const esRef = w => w.seccion === "referencia";
  const deLeccion = les => w => les.startsWith("f:")
    ? w.fuente === les.slice(2)
    : les === "all" || (!w.fuente && String(w.leccion) === les);
  // Las otras fuentes (Sōmatome, extra) no son ni lo uno ni lo otro: fuera al filtrar.
  const deSeccion = w => seccion === "todo" || (!w.fuente && (seccion === "referencia") === esRef(w));

  function render() {
    const q = normQuery($("#vSearch").value);
    const les = $("#vLesson").value;
    const porLeccion = N5.data.vocab.filter(deLeccion(les));

    // El filtro de sección solo tiene sentido con palabras del Minna
    const conSeccion = !les.startsWith("f:");
    $("#vSecciones").hidden = !conSeccion;
    if (conSeccion) {
      const minna = porLeccion.filter(w => !w.fuente);
      const cuenta = { todo: porLeccion.length, vocabulario: minna.filter(w => !esRef(w)).length, referencia: minna.filter(esRef).length };
      for (const b of $$("#vSecciones button")) b.querySelector(".muted").textContent = cuenta[b.dataset.s];
    }

    const delFiltro = conSeccion ? porLeccion.filter(deSeccion) : porLeccion;
    const finales = N5.rankea(delFiltro, q, w => [w.kana, w.kanji], w => w.es);

    let rows = "", n = 0;
    for (const w of finales) {
      n++;
      const origen = w.fuente
        ? N5.fuenteHTML(w, `#/vocabulario?leccion=f:${w.fuente}`)
        : `<a href="#/vocabulario?leccion=${w.leccion}" class="muted" style="text-decoration:none">${w.leccion}</a>` +
          (esRef(w) ? ` <a href="#/vocabulario?leccion=${w.leccion}&seccion=referencia" class="reftag" title="De la hoja de referencia de la lección ${w.leccion}">ref</a>` : "");
      rows += `<tr><td class="selcell">${N5.selBox(N5.selId.vocab(w))}</td><td class="jpcell jp">${esc(w.kana)}</td><td class="kanjicell">${esc(w.kanji) || "—"}</td><td>${esc(w.es)}</td><td class="num">${origen}</td></tr>`;
    }
    $("#vTable tbody").innerHTML = rows || `<tr><td colspan="${$$("#vTable thead th").length}" class="muted" style="text-align:center;padding:24px">Sin resultados</td></tr>`;
    $("#vCount").textContent = n + " palabras";
  }

  function marcaSeccion(s) {
    seccion = ["vocabulario", "referencia"].includes(s) ? s : "todo";
    $$("#vSecciones button").forEach(b => b.classList.toggle("on", b.dataset.s === seccion));
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
      $("#vSecciones").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        marcaSeccion(b.dataset.s); render();
      });
      render();
    },
    onRoute({ params }) {
      if (params.has("q")) $("#vSearch").value = params.get("q");
      if (params.has("leccion")) $("#vLesson").value = params.get("leccion");
      if (params.has("seccion")) marcaSeccion(params.get("seccion"));
      if (params.has("q") || params.has("leccion") || params.has("seccion")) render();
    }
  });
})();
