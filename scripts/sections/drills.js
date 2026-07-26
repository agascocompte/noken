// Sección Ejercicios: preguntas fijas resueltas, con la respuesta oculta.
"use strict";

(() => {
  const { $, $$, esc, ruby, rubyEsc } = N5;
  let tema = "all";

  function render() {
    let html = "";
    for (const d of N5.data.drills) {
      if (tema !== "all" && d.tema !== tema) continue;
      html += `<div class="exercise">
        <span class="etag">${esc(d.tema)}</span>
        <p class="eq jp">${ruby(d.pregunta)}</p>
        <button class="toggle" type="button">Ver respuesta</button>
        <div class="ans"><div class="a jp">${rubyEsc(d.respuesta)}</div><div class="why">${ruby(d.explicacion)}</div></div>
      </div>`;
    }
    $("#dList").innerHTML = html;
  }

  N5.registerSection({
    id: "ejercicios", glyph: "練", titulo: "Ejercicios",
    init() {
      const temas = [...new Set(N5.data.drills.map(d => d.tema))];
      $("#dTags").innerHTML = `<button data-tema="all" class="on">Todos</button>` +
        temas.map(t => `<button data-tema="${esc(t)}">${esc(t)}</button>`).join("");
      $("#dTags").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        tema = b.dataset.tema;
        $$("#dTags button").forEach(x => x.classList.toggle("on", x === b));
        render();
      });
      $("#dList").addEventListener("click", e => {
        const b = e.target.closest(".toggle"); if (!b) return;
        const ex = b.closest(".exercise");
        ex.classList.toggle("open");
        b.textContent = ex.classList.contains("open") ? "Ocultar respuesta" : "Ver respuesta";
      });
      render();
    }
  });
})();
