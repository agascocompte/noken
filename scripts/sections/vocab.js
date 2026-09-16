// Sección Vocabulario: tabla con buscador (kana/kanji/romaji/español) y filtros por
// lección y por sección del libro: la lista de vocabulario de cada lección o su hoja
// de «Palabras e informaciones de referencia».
//
// Los verbos viven en su propia pestaña, pero el libro los enseña dentro de la lista
// de vocabulario de cada lección, así que aquí también salen, en forma ます y con un
// enlace a Verbos para ver todas sus formas. Marcarlos aquí o allí es lo mismo.
"use strict";

(() => {
  const { $, $$, esc, normQuery } = N5;
  let seccion = "todo";   // "todo" | "vocabulario" | "referencia"

  const esRef = w => w.seccion === "referencia";

  // Un verbo puede estar en varias lecciones (だす sale en la 13, la 16 y la 17):
  // se muestra en cada una, y una sola vez cuando no hay lección elegida.
  const comoPalabra = (v, leccion) => ({
    kana: v.masu, kanji: N5.masuKanji(v), es: v.es, leccion,
    seccion: v.seccion, verbo: v
  });
  function verbosDe(les) {
    if (les.startsWith("f:")) return [];
    const out = [];
    for (const v of N5.data.verbs) {
      if (!v.lecciones?.length) continue;
      if (les === "all") out.push(comoPalabra(v, v.lecciones[0]));
      else if (v.lecciones.includes(+les)) out.push(comoPalabra(v, +les));
    }
    return out;
  }

  function render() {
    const q = normQuery($("#vSearch").value);
    const les = $("#vLesson").value;
    const palabras = N5.data.vocab.filter(w => les.startsWith("f:")
      ? w.fuente === les.slice(2)
      : les === "all" || (!w.fuente && String(w.leccion) === les));
    // En el libro los verbos encabezan la lista de cada lección; con «todas» irían
    // 153 seguidos al principio, así que ahí van detrás.
    const verbos = verbosDe(les);
    const porLeccion = les === "all" ? palabras.concat(verbos) : verbos.concat(palabras);

    // El filtro de sección solo tiene sentido con contenido del Minna
    const conSeccion = !les.startsWith("f:");
    $("#vSecciones").hidden = !conSeccion;
    if (conSeccion) {
      const minna = porLeccion.filter(w => !w.fuente);
      const cuenta = { todo: porLeccion.length, vocabulario: minna.filter(w => !esRef(w)).length, referencia: minna.filter(esRef).length };
      for (const b of $$("#vSecciones button")) b.querySelector(".muted").textContent = cuenta[b.dataset.s];
    }
    // Las otras fuentes (Sōmatome, extra) no son ni lo uno ni lo otro: fuera al filtrar.
    const delFiltro = !conSeccion || seccion === "todo" ? porLeccion
      : porLeccion.filter(w => !w.fuente && (seccion === "referencia") === esRef(w));
    const finales = N5.rankea(delFiltro, q, w => [w.kana, w.kanji], w => w.es);

    let rows = "", n = 0;
    for (const w of finales) {
      n++;
      const origen = w.fuente
        ? N5.fuenteHTML(w, `#/vocabulario?leccion=f:${w.fuente}`)
        : `<a href="#/vocabulario?leccion=${w.leccion}" class="muted" style="text-decoration:none">${w.leccion}</a>` +
          (esRef(w) ? ` <a href="#/vocabulario?leccion=${w.leccion}&seccion=referencia" class="reftag" title="De la hoja de referencia de la lección ${w.leccion}">ref</a>` : "");
      const marca = w.verbo
        ? ` <a href="#/verbos?q=${encodeURIComponent(w.verbo.kana)}" class="verbotag" title="Verbo: ver todas sus formas">動</a>` : "";
      const id = w.verbo ? N5.selId.verbo(w.verbo) : N5.selId.vocab(w);
      rows += `<tr><td class="selcell">${N5.selBox(id)}</td>` +
        `<td class="jpcell jp">${esc(w.kana)}${marca}</td>` +
        `<td class="romaji muted">${esc(N5.romajiDe(w.kana))}</td>` +
        `<td class="kanjicell">${esc(w.kanji) || "—"}</td><td>${esc(w.es)}</td><td class="num">${origen}</td></tr>`;
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
