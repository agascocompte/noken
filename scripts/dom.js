// Utilidades de DOM y renderizado compartidas.
"use strict";
window.N5 = window.N5 || { data: {} };

N5.$  = s => document.querySelector(s);
N5.$$ = s => document.querySelectorAll(s);

// Procedencia del contenido que no sale de las listas del Minna no Nihongo.
// Sin «fuente» = del Minna, con su número de lección.
N5.FUENTES = {
  soumatome: { sigla: "総", nombre: "Sōmatome", titulo: "Del Sōmatome N5, no del Minna" },
  extra:     { sigla: "＋", nombre: "Extra",    titulo: "No sale en el Minna: la guía la usa en sus ejemplos" }
};
N5.fuenteDe = x => N5.FUENTES[x?.fuente] || null;

// Escapa texto para insertarlo en HTML.
N5.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Convierte la notación 漢字[かんじ] en <ruby>漢字<rt>かんじ</rt></ruby>.
// Es la convención de furigana de todos los archivos de data/.
N5.ruby = s => String(s).replace(/([一-鿿々〇]+)\[([ぁ-ゖァ-ヺー]+)\]/g, "<ruby>$1<rt>$2</rt></ruby>");

// Texto ruby ya escapado (atajo habitual al renderizar datos).
N5.rubyEsc = s => N5.ruby(N5.esc(s));

// Baraja una copia del array (Fisher–Yates).
N5.shuffle = arr => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

N5.sample = (arr, n) => N5.shuffle(arr).slice(0, n);
