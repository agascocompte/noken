// Portada: presentación breve + accesos rápidos con el tamaño de cada sección.
"use strict";

(() => {
  const { $ } = N5;

  N5.registerSection({
    id: "inicio", titulo: "Inicio",
    init() {
      const d = N5.data;
      const cards = [
        ["vocabulario", "語", "Vocabulario", d.vocab.length + " palabras", "todas las lecciones del Minna, con buscador"],
        ["gramatica", "文", "Gramática", d.grammar.reduce((a, l) => a + l.puntos.length, 0) + " puntos", "por lección o por tema"],
        ["verbos", "動", "Verbos", d.verbs.length + " verbos", "conjugaciones y partícula que rige cada uno"],
        ["kanji", "漢", "Kanji", d.kanji.length + " kanji", "lecturas y palabras de ejemplo"],
        ["referencia", "参", "Referencia", (d.reference.length + 2) + " chuletas", "kana, partículas, contadores, fechas…"],
        ["ejercicios", "練", "Ejercicios", d.drills.length + " resueltos", "preguntas tipo examen con explicación"],
        ["test", "試", "Test", "a tu medida", "autoevaluación aleatoria desde el contenido"]
      ];
      $("#quickGrid").innerHTML = cards.map(([id, k, t, n, desc]) => `
        <a class="qcard" href="#/${id}">
          <span class="qn">${n.split(" ")[0].match(/^\d+$/) ? n.split(" ")[0] : ""}</span>
          <span class="qk">${k}</span><span class="qt">${t}</span>
          <span class="qd">${desc}</span>
        </a>`).join("");
    }
  });
})();
