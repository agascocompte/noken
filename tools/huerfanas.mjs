// Palabras que la guía usa en sus ejemplos pero no define en ningún sitio.
// Pásalo después de añadir contenido:  node tools/huerfanas.mjs
//
// Todos los textos japoneses de la guía llevan furigana (漢字[かんじ]), así que
// cada 漢字[かな] es ya una palabra delimitada y se puede cruzar con las entradas
// de vocabulario y verbos sin necesidad de un analizador morfológico.
//
// El ruido esperado, que el script descarta solo:
//   · nombres propios (東京, 木村, 富士山…): decisión deliberada, no se listan
//   · la raíz de un verbo する que sí está definido (結婚 de けっこんする)
//   · palabras que solo cambian por okurigana (面白 de 面白い)
import { cargaN5 } from "./datos.mjs";

const N5 = cargaN5();
const d = N5.data;

// Nombres propios: por criterio no son vocabulario de estudio (el JLPT no los pregunta).
const PROPIOS = /^(東京|大阪|京都|奈良|神戸|沖縄|北海道|富士山|甲子園|千葉県|木村|山田|田中|佐藤|鈴木|大学前|日本橋)$/;

// Todo texto japonés de la guía, venga de donde venga.
const textos = [];
for (const L of d.grammar) for (const p of L.puntos) {
  textos.push(p.patron, p.explicacion);
  for (const e of p.ejemplos) textos.push(e.jp);
}
for (const v of d.verbs) textos.push(v.ejemplo);
for (const x of d.drills) textos.push(x.pregunta, x.respuesta, x.explicacion);
for (const c of d.reference) textos.push(c.html);

const usos = new Map();   // 漢字 → { veces, lectura }
for (const t of textos)
  for (const m of String(t).matchAll(N5.FURIGANA)) {
    const v = usos.get(m[1]) || { veces: 0, lectura: m[2] };
    v.veces++; usos.set(m[1], v);
  }

// Lo que la guía sí define, en todas sus variantes: 〜週間 cuenta como 週間, y
// （お）弁当 cuenta tanto como お弁当 como 弁当.
const definido = new Set();
const registra = s => {
  const base = String(s).replace(/[\[\]（）()〜～]/g, "");
  if (!base) return;
  definido.add(base);
  if (base.startsWith("お") || base.startsWith("ご")) definido.add(base.slice(1));
};
for (const w of d.vocab) { registra(w.kanji); registra(w.kana); }
for (const v of d.verbs) { registra(v.kanji); registra(v.kana); }
for (const k of d.kanji) { registra(k.kanji); for (const e of k.ejemplos) registra(e.palabra); }

// ¿Es el trozo en kanji de algo ya definido? (結婚 dentro de 結婚する, 面白 dentro de 面白い)
const prefijos = new Set();
for (const x of definido) for (let i = 1; i < x.length; i++) prefijos.add(x.slice(0, i));
const esParteDeAlgoDefinido = kanji => prefijos.has(kanji);
// ¿Es la suma de dos palabras que ya están? (日本料理 = 日本 + 料理)
const esCompuesta = kanji => {
  for (let i = 1; i < kanji.length; i++)
    if (definido.has(kanji.slice(0, i)) && definido.has(kanji.slice(i))) return true;
  return false;
};

const huerfanas = [...usos]
  .filter(([k]) => k.length > 1 && !definido.has(k) && !PROPIOS.test(k)
                   && !esParteDeAlgoDefinido(k) && !esCompuesta(k))
  .sort((a, b) => b[1].veces - a[1].veces);

console.log(`${usos.size} palabras con furigana en los ejemplos de la guía.`);
if (!huerfanas.length) {
  console.log("\nTodas están definidas ✔");
} else {
  console.log(`\n${huerfanas.length} sin entrada propia:\n`);
  for (const [kanji, { veces, lectura }] of huerfanas)
    console.log(`  ${kanji.padEnd(8)} ${lectura.padEnd(12)} ×${veces}`);
  console.log("\nRevisa si merecen entrada en data/vocab.js; si es un nombre propio, añádelo a PROPIOS.");
}
