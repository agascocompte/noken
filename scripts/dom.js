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

// Insignia de procedencia. Con href sale como enlace al filtro de esa fuente.
N5.fuenteHTML = (x, href) => {
  const f = N5.fuenteDe(x);
  if (!f) return "";
  const attrs = `class="fuente" title="${N5.esc(f.titulo)}"`;
  return href ? `<a href="${href}" ${attrs}>${f.sigla}</a>` : `<span ${attrs}>${f.sigla}</span>`;
};

// Escapa texto para insertarlo en HTML.
N5.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Convención de furigana de todos los archivos de data/: 漢字[かんじ].
N5.FURIGANA = /([一-鿿々〇]+)\[([ぁ-ゖァ-ヺー]+)\]/g;

// 漢字[かんじ] → <ruby>漢字<rt>かんじ</rt></ruby>
N5.ruby = s => String(s).replace(N5.FURIGANA, "<ruby>$1<rt>$2</rt></ruby>");

// 漢字[かんじ] → かんじ (solo la lectura); 東京[とうきょう]へ → とうきょうへ
N5.lectura = s => String(s).replace(N5.FURIGANA, "$2");

// 漢字[かんじ] → 漢字 (quita la lectura y deja el texto corrido)
N5.sinFurigana = s => String(s).replace(/\[[ぁ-ゖァ-ヺー]+\]/g, "");

// Quita los adornos de opcionalidad de una entrada: [お]てら → おてら, きれい（な） → きれいな
N5.limpiaEntrada = s => String(s).replace(/[\[\]（）]/g, "");

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
