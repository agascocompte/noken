// Sección Kanji: fichas con lecturas; se despliegan al tocar.
//
// Filtro por nivel. No hay lista oficial de kanji del N5 desde 2010, así que la
// marca sale de cruzar tres listas públicas (JLPT Sensei, Japanesetest4you y la
// antigua de 103 del nivel 4 que recoge Nihongo Ichiban):
//   · seguro  — está en al menos dos de las tres (81)
//   · posible — solo en la lista antigua de 103 (22)
//   · el resto son los que añade Japonés en viñetas por encima del N5
"use strict";

(() => {
  const { $, $$, esc, normQuery } = N5;
  let nivel = "todos";   // "todos" | "seguro" | "posible" | "resto"

  const NIVELES = {
    todos:   { etiqueta: "Todos",       cuadra: () => true },
    seguro:  { etiqueta: "N5 seguros",  cuadra: k => k.n5 === "seguro" },
    posible: { etiqueta: "N5 posibles", cuadra: k => k.n5 === "posible" },
    resto:   { etiqueta: "Por encima del N5", cuadra: k => !k.n5 }
  };
  const INSIGNIA = { seguro: "N5", posible: "N5?" };

  function render() {
    const q = normQuery($("#kSearch").value);
    const delNivel = N5.data.kanji.filter(NIVELES[nivel].cuadra);
    const finales = N5.rankea(delNivel, q, k => [k.kanji, k.on, k.kun], k => k.significado);

    let html = "", n = 0;
    for (const k of finales) {
      n++;
      const insignia = k.n5
        ? `<span class="n5tag ${k.n5}" title="${k.n5 === "seguro" ? "Coinciden en darlo por N5 al menos dos de las tres listas consultadas" : "Solo en la lista antigua de 103"}">${INSIGNIA[k.n5]}</span>` : "";
      html += `<div class="kcard" tabindex="0" role="button" aria-expanded="false">
        <span class="selcell">${N5.selBox(N5.selId.kanji(k))}</span>
        <span class="glyph">${k.kanji}</span>
        <div class="kmean">${esc(k.significado)} ${insignia}</div>
        <div class="kread">${k.on ? `<b>ON</b> ${esc(k.on)}` : ""}${k.on && k.kun ? " · " : ""}${k.kun ? `<b>kun</b> ${esc(k.kun)}` : ""}</div>
        <div class="kex">${k.ejemplos.map(e => `<div><span class="jp">${esc(e.palabra)}</span> <span class="muted">${esc(e.lectura)}</span> — ${esc(e.es)}</div>`).join("")}</div>
      </div>`;
    }
    $("#kGrid").innerHTML = html || `<p class="muted">Sin resultados</p>`;
    $("#kCount").textContent = n + " kanji";
  }

  function marcaNivel(v) {
    nivel = NIVELES[v] ? v : "todos";
    $$("#kNiveles button").forEach(b => b.classList.toggle("on", b.dataset.n === nivel));
  }

  N5.registerSection({
    id: "kanji", seleccionable: true, titulo: "Kanji",
    init() {
      $("#kNiveles").innerHTML = Object.entries(NIVELES).map(([id, nv]) =>
        `<button data-n="${id}"${id === nivel ? ' class="on"' : ""}>${nv.etiqueta} <span class="muted">${N5.data.kanji.filter(nv.cuadra).length}</span></button>`).join("");
      $("#kSearch").addEventListener("input", render);
      $("#kNiveles").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        marcaNivel(b.dataset.n); render();
      });
      $("#kGrid").addEventListener("click", e => {
        if (e.target.closest(".selcell")) return;   // marcar no despliega la ficha
        const c = e.target.closest(".kcard"); if (!c) return;
        c.classList.toggle("open");
        c.setAttribute("aria-expanded", c.classList.contains("open"));
      });
      $("#kGrid").addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          const c = e.target.closest(".kcard");
          if (c) { e.preventDefault(); c.click(); }
        }
      });
      render();
    },
    onRoute({ params }) {
      if (params.has("q")) $("#kSearch").value = params.get("q");
      if (params.has("nivel")) marcaNivel(params.get("nivel"));
      if (params.has("q") || params.has("nivel")) render();
    }
  });
})();
