// Sección Kanji: fichas con lecturas; se despliegan al tocar.
"use strict";

(() => {
  const { $, esc, moraMatch, normQuery } = N5;

  function render() {
    const q = normQuery($("#kSearch").value);
    let html = "", n = 0;
    for (const k of N5.data.kanji) {
      if (q && !(k.kanji.includes(q) || k.significado.toLowerCase().includes(q) ||
                 k.on.includes(q) || k.kun.includes(q) || moraMatch(k.on, q) || moraMatch(k.kun, q))) continue;
      n++;
      html += `<div class="kcard" tabindex="0" role="button" aria-expanded="false">
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
    id: "kanji", glyph: "漢", titulo: "Kanji",
    init() {
      $("#kSearch").addEventListener("input", render);
      $("#kGrid").addEventListener("click", e => {
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
