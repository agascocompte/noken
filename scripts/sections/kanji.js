// Sección Kanji: fichas con lecturas; se despliegan al tocar.
"use strict";

(() => {
  const { $, esc, normQuery } = N5;

  function render() {
    const q = normQuery($("#kSearch").value);

    const finales = N5.rankea(N5.data.kanji, q, k => [k.kanji, k.on, k.kun], k => k.significado);

    let html = "", n = 0;
    for (const k of finales) {
      n++;
      html += `<div class="kcard" tabindex="0" role="button" aria-expanded="false">
        <span class="selcell">${N5.selBox(N5.selId.kanji(k))}</span>
        <span class="glyph">${k.kanji}</span>
        <div class="kmean">${esc(k.significado)}</div>
        <div class="kread">${k.on ? `<b>ON</b> ${esc(k.on)}` : ""}${k.on && k.kun ? " · " : ""}${k.kun ? `<b>kun</b> ${esc(k.kun)}` : ""}</div>
        <div class="kex">${k.ejemplos.map(e => `<div><span class="jp">${esc(e.palabra)}</span> <span class="muted">${esc(e.lectura)}</span> — ${esc(e.es)}</div>`).join("")}</div>
      </div>`;
    }
    $("#kGrid").innerHTML = html || `<p class="muted">Sin resultados</p>`;
    $("#kCount").textContent = n + " kanji";
  }

  N5.registerSection({
    id: "kanji", seleccionable: true, titulo: "Kanji",
    init() {
      $("#kSearch").addEventListener("input", render);
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
      if (params.has("q")) { $("#kSearch").value = params.get("q"); render(); }
    }
  });
})();
