// Validación de los datos de la guía. Sin dependencias: `node tools/check.mjs`
// Comprueba esquemas, duplicados, furigana bien formado y conteos.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const N5 = { data: {} };
globalThis.window = { N5 };
globalThis.N5 = N5;

for (const f of ["vocab", "grammar", "verbs", "kanji", "reference", "drills", "kana"])
  new Function("window", "N5", readFileSync(join(root, "data", f + ".js"), "utf8"))(globalThis.window, N5);

const d = N5.data;
let errores = 0;
const err = m => { console.error("  ✗", m); errores++; };
const ok = m => console.log("  ✓", m);

// furigana: corchetes de lectura siempre precedidos de kanji y bien cerrados
const furiganaMal = s => {
  const t = String(s);
  for (const m of t.matchAll(/\[([^\]]*)\]/g)) {
    const inside = m[1];
    if (/^[ぁ-ゖァ-ヺー]+$/.test(inside)) {
      const prev = t[m.index - 1] || "";
      if (!/[一-鿿々〇]/.test(prev)) return `lectura sin kanji delante: …${t.slice(Math.max(0, m.index - 6), m.index + inside.length + 2)}`;
    }
  }
  return null;
};

console.log("vocab");
{
  const seen = new Set();
  for (const w of d.vocab) {
    for (const c of ["kana", "kanji", "es", "leccion"]) if (!(c in w)) err(`campo ${c} ausente en ${JSON.stringify(w)}`);
    const k = w.kana + "|" + w.kanji;
    if (seen.has(k)) err("duplicado: " + k); else seen.add(k);
    if (typeof w.leccion !== "number" || w.leccion < 1 || w.leccion > 25) err("lección inválida: " + JSON.stringify(w));
  }
  ok(d.vocab.length + " palabras, sin duplicados");
}

console.log("verbs");
{
  const seen = new Set();
  for (const v of d.verbs) {
    for (const c of ["kana", "kanji", "grupo", "masu", "te", "ta", "nai", "es", "particula", "ejemplo"])
      if (!(c in v)) err(`campo ${c} ausente en ${v.kana}`);
    const k = v.kana + "|" + v.kanji;
    if (seen.has(k)) err("duplicado: " + k); else seen.add(k);
    if (![1, 2, 3].includes(v.grupo)) err("grupo inválido: " + v.kana);
    const f = furiganaMal(v.ejemplo); if (f) err(v.kana + ": " + f);
  }
  ok(d.verbs.length + " verbos, sin duplicados");
}

console.log("grammar");
{
  if (d.grammar.length !== 25) err("deberían ser 25 lecciones, hay " + d.grammar.length);
  let puntos = 0;
  for (const L of d.grammar) for (const p of L.puntos) {
    puntos++;
    if (!p.temas?.length) err(`L${L.leccion} «${p.patron}» sin temas`);
    for (const e of p.ejemplos) {
      if (!e.jp || !e.es) err(`L${L.leccion} «${p.patron}» ejemplo incompleto`);
      const f = furiganaMal(e.jp); if (f) err(`L${L.leccion}: ${f}`);
    }
    const f = furiganaMal(p.patron) || furiganaMal(p.explicacion);
    if (f) err(`L${L.leccion}: ${f}`);
  }
  ok(d.grammar.length + " lecciones, " + puntos + " puntos");
}

console.log("kanji");
{
  const seen = new Set();
  for (const k of d.kanji) {
    if (seen.has(k.kanji)) err("duplicado: " + k.kanji); else seen.add(k.kanji);
    if (!k.ejemplos?.length) err(k.kanji + " sin ejemplos");
  }
  ok(d.kanji.length + " kanji, sin duplicados");
}

console.log("reference / drills / kana");
{
  for (const c of d.reference) if (!c.icono || !c.titulo || !c.html) err("tarjeta incompleta: " + c.titulo);
  for (const x of d.drills) {
    for (const c of ["tema", "pregunta", "respuesta", "explicacion"]) if (!(c in x)) err("drill incompleto: " + x.pregunta);
    const f = furiganaMal(x.pregunta) || furiganaMal(x.respuesta) || furiganaMal(x.explicacion);
    if (f) err("drill: " + f);
  }
  if (d.kana.basicos.length !== 11) err("filas de kana básicos: " + d.kana.basicos.length);
  ok(d.reference.length + " tarjetas, " + d.drills.length + " ejercicios, kana OK");
}

console.log(errores ? `\n${errores} error(es)` : "\nTodo correcto ✔");
process.exit(errores ? 1 : 0);
