// Sección Gramática: mismo contenido, dos vistas.
//  · Por lección: los 25 acordeones de siempre.
//  · Por tema: los mismos puntos agrupados por etiqueta (temas en data/grammar.js).
// Deep links: #/gramatica/l13  ·  #/gramatica/tema/forma-te
"use strict";

(() => {
  const { $, $$, esc, ruby, rubyEsc } = N5;

  // Nombres visibles de las etiquetas (el orden define el orden de los chips).
  const TEMAS = {
    "particulas": "Partículas",
    "forma-masu": "Forma ます",
    "forma-te": "Forma て",
    "forma-ta": "Forma た",
    "forma-nai": "Forma ない",
    "forma-diccionario": "Forma de diccionario",
    "adjetivos": "Adjetivos",
    "sustantivos": "Frases con sustantivos",
    "demostrativos": "Demostrativos",
    "existencia": "Existencia (あります・います)",
    "contadores": "Contadores y cantidades",
    "comparaciones": "Comparaciones",
    "deseos": "Deseos",
    "dar-recibir": "Dar y recibir",
    "opinion-cita": "Opinión y cita",
    "oracion-relativo": "Oraciones de relativo",
    "condicional": "Condicionales",
    "tiempo": "Tiempo y plazos",
    "interrogativos": "Interrogativos",
    "adverbios": "Adverbios de grado",
    "estilo-informal": "Estilo informal"
  };

  let vista = "leccion";       // "leccion" | "tema"
  let temaActivo = "particulas";

  const puntoHTML = (p, extra = "") => `
    <div class="gpoint">
      <h4><span class="pat jp">${rubyEsc(p.patron)}</span>${extra}</h4>
      <p>${ruby(p.explicacion)}</p>
      ${p.ejemplos.map(x => `<div class="ex"><span class="j jp">${rubyEsc(x.jp)}</span><span class="s">${esc(x.es)}</span></div>`).join("")}
      <div class="gtags">${p.temas.map(t => TEMAS[t] ? `<button data-tema="${t}">${TEMAS[t]}</button>` : "").join("")}</div>
    </div>`;

  function renderLecciones() {
    $("#gList").innerHTML = N5.data.grammar.map(L => `
      <details class="lesson-block" id="gl${L.leccion}">
        <summary><span class="lnum">第${L.leccion}課</span><span class="ltitle">${rubyEsc(L.titulo)}</span></summary>
        <div class="lesson-body">${L.puntos.map(p => puntoHTML(p)).join("")}</div>
      </details>`).join("");
  }

  function renderTema() {
    const grupos = [];
    for (const L of N5.data.grammar)
      for (const p of L.puntos)
        if (p.temas.includes(temaActivo))
          grupos.push({ leccion: L.leccion, p });
    $("#gList").innerHTML =
      `<div class="lesson-block" style="padding:4px 16px 8px">` +
      grupos.map(({ leccion, p }) => puntoHTML(p,
        ` <span class="gsrc">· <a href="#/gramatica/l${leccion}">第${leccion}課</a></span>`)).join("") +
      `</div>`;
  }

  function renderToolbar() {
    $("#gViewSeg .seg-leccion").classList.toggle("on", vista === "leccion");
    $("#gViewSeg .seg-tema").classList.toggle("on", vista === "tema");
    if (vista === "leccion") {
      $("#gSubnav").innerHTML =
        `<button class="btn" id="gOpenAll">Abrir todas</button>
        <button class="btn secondary" id="gCloseAll">Cerrar todas</button>`;
    } else {
      $("#gSubnav").innerHTML =
        `<div class="chips">` +
        Object.entries(TEMAS).map(([id, nombre]) =>
          `<button data-tema="${id}" class="${id === temaActivo ? "on" : ""}">${nombre}</button>`).join("") +
        `</div>`;
    }
  }

  function renderAll() {
    renderToolbar();
    vista === "leccion" ? renderLecciones() : renderTema();
  }

  function abrirLeccion(n, destacar) {
    vista = "leccion"; renderAll();
    const det = $("#gl" + n);
    if (!det) return;
    det.open = true;
    det.scrollIntoView?.({ block: "start", behavior: "auto" });
    if (destacar != null) {
      const p = det.querySelectorAll(".gpoint")[destacar];
      if (p) { p.classList.add("flash"); p.scrollIntoView?.({ block: "center" }); }
    }
  }

  N5.registerSection({
    id: "gramatica", glyph: "文", titulo: "Gramática",
    init() {
      renderAll();
      $("#gViewSeg").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        N5.go(b.classList.contains("seg-tema") ? "#/gramatica/tema/" + temaActivo : "#/gramatica");
      });
      $("#gSubnav").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        if (b.dataset.l) return abrirLeccion(+b.dataset.l);
        if (b.dataset.tema) return N5.go("#/gramatica/tema/" + b.dataset.tema);
        if (b.id === "gOpenAll") $$("#gList details").forEach(d => d.open = true);
        if (b.id === "gCloseAll") $$("#gList details").forEach(d => d.open = false);
      });
      // los tags bajo cada punto también navegan a su tema
      $("#gList").addEventListener("click", e => {
        const b = e.target.closest(".gtags button");
        if (b) N5.go("#/gramatica/tema/" + b.dataset.tema);
      });
    },
    onRoute({ sub, params }) {
      const mL = sub.match(/^l(\d+)$/);
      const mT = sub.match(/^tema\/([\w-]+)$/);
      if (mL) { abrirLeccion(+mL[1], params.has("p") ? +params.get("p") : null); return; }
      if (mT && TEMAS[mT[1]]) { vista = "tema"; temaActivo = mT[1]; renderAll(); return; }
      if (vista !== "leccion") { vista = "leccion"; renderAll(); }
    }
  });
})();
