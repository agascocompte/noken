// Validación de los datos de la guía. Sin dependencias: `node tools/check.mjs`
// Comprueba esquemas, duplicados, furigana bien formado y conteos.
import { cargaN5 } from "./datos.mjs";

const N5 = cargaN5();
const d = N5.data;
const FUENTES = Object.keys(N5.FUENTES);
let errores = 0;
const err = m => { console.error("  ✗", m); errores++; };
const ok = m => console.log("  ✓", m);

// «fuente» marca contenido ajeno al Minna; existe en vocab, verbs y grammar
const fuenteMal = (x, quien) => {
  if (x.fuente && !FUENTES.includes(x.fuente)) err(`${quien}: fuente desconocida «${x.fuente}»`);
};

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
    // las del Minna llevan lección; las de otras fuentes van sin ella
    fuenteMal(w, w.kana);
    // «seccion» solo tiene sentido en palabras del Minna: la hoja de referencia de la lección
    if (w.seccion !== undefined && (w.seccion !== "referencia" || w.fuente))
      err(`${w.kana}: seccion inválida «${w.seccion}»${w.fuente ? " (no es del Minna)" : ""}`);
    if (w.fuente) {
      if (w.leccion !== null) err(`${w.kana}: con fuente «${w.fuente}» la lección debe ser null`);
    } else if (typeof w.leccion !== "number" || w.leccion < 1 || w.leccion > 25) {
      err("lección inválida: " + JSON.stringify(w));
    }
  }
  const otras = d.vocab.filter(w => w.fuente).length;
  const ref = d.vocab.filter(w => w.seccion === "referencia").length;
  ok(d.vocab.length + " palabras, sin duplicados" + (otras ? ` (${otras} de fuentes distintas del Minna)` : ""));
  ok(`del Minna: ${d.vocab.length - otras - ref} de vocabulario y ${ref} de las hojas de referencia`);
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
    fuenteMal(v, v.kana);
    // «lecciones»: en qué listas de vocabulario del libro aparece el verbo
    if (v.lecciones !== undefined && (!Array.isArray(v.lecciones) || !v.lecciones.length
        || v.lecciones.some(l => !Number.isInteger(l) || l < 1 || l > 25)))
      err(`${v.kana}: lecciones inválidas ${JSON.stringify(v.lecciones)}`);
    if (v.seccion !== undefined && (v.seccion !== "referencia" || !v.lecciones))
      err(`${v.kana}: seccion inválida «${v.seccion}»`);
    const f = furiganaMal(v.ejemplo); if (f) err(v.kana + ": " + f);
  }
  const conL = d.verbs.filter(v => v.lecciones).length;
  ok(d.verbs.length + ` verbos, sin duplicados (${conL} situados en su lección)`);
}

console.log("grammar");
{
  if (d.grammar.length !== 25) err("deberían ser 25 lecciones, hay " + d.grammar.length);
  let puntos = 0;
  for (const L of d.grammar) for (const p of L.puntos) {
    puntos++;
    if (!p.temas?.length) err(`L${L.leccion} «${p.patron}» sin temas`);
    fuenteMal(p, `L${L.leccion} «${p.patron}»`);
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
    if (k.n5 !== undefined && !["seguro", "posible"].includes(k.n5)) err(`${k.kanji}: n5 inválido «${k.n5}»`);
  }
  const n5 = t => d.kanji.filter(k => k.n5 === t).length;
  ok(d.kanji.length + ` kanji, sin duplicados (N5: ${n5("seguro")} seguros y ${n5("posible")} posibles)`);
}

console.log("reference / drills / kana");
{
  for (const c of d.reference) {
    if (!c.icono || !c.titulo || !c.html) err("tarjeta incompleta: " + c.titulo);
    if (c.ancha !== undefined && c.ancha !== true) err(`${c.titulo}: «ancha» solo puede ser true`);
  }
  for (const x of d.drills) {
    for (const c of ["tema", "pregunta", "respuesta", "explicacion"]) if (!(c in x)) err("drill incompleto: " + x.pregunta);
    const f = furiganaMal(x.pregunta) || furiganaMal(x.respuesta) || furiganaMal(x.explicacion);
    if (f) err("drill: " + f);
  }
  if (d.kana.basicos.length !== 11) err("filas de kana básicos: " + d.kana.basicos.length);
  ok(d.reference.length + " tarjetas, " + d.drills.length + " ejercicios, kana OK");
}

console.log("examenes");
{
  // もんだい４: la opción correcta es SIEMPRE la primera; el generador las baraja
  const vistas = new Set();
  for (const p of d.examenes.parafrasis) {
    for (const c of ["frase", "opciones", "es", "nota"]) if (!(c in p)) err(`paráfrasis «${p.frase}»: falta ${c}`);
    if (p.opciones?.length !== 4) err(`paráfrasis «${p.frase}»: deben ser 4 opciones, hay ${p.opciones?.length}`);
    if (new Set(p.opciones).size !== 4) err(`paráfrasis «${p.frase}»: opciones repetidas`);
    if (vistas.has(p.frase)) err("paráfrasis duplicada: " + p.frase); else vistas.add(p.frase);
    if (/[\[\]]/.test(p.frase + p.opciones.join(""))) err(`paráfrasis «${p.frase}»: se escriben sin furigana`);
  }
  // frases portadoras escritas a mano para los kanji que el libro no usa
  for (const f of d.examenes.frases) {
    if (!f.jp || !f.es) err("frase de examen incompleta: " + JSON.stringify(f));
    const m = furiganaMal(f.jp); if (m) err("frase de examen: " + m);
    if (!/[。？]$/.test(f.jp)) err(`frase de examen sin punto final: ${f.jp}`);
  }
  // Todo lo que se escribe a mano para el examen tiene que poder pasarse a la
  // escritura del examen: los kanji que no son del N5 van en kana, y para eso
  // el generador necesita su lectura. Un kanji de fuera del nivel SIN furigana
  // se quedaría en el papel y el examen pediría algo que no toca.
  const N5SET = new Set(d.kanji.filter(k => k.n5 === "seguro" || k.n5 === "posible").map(k => k.kanji));
  const fueraDelN5 = t => {
    const resto = String(t).replace(/([一-鿿々〇]+)\[[ぁ-ゖァ-ヺー]+\]/g, "");
    return [...new Set([...resto].filter(c => /[一-鿿々〇]/.test(c) && !N5SET.has(c)))];
  };
  const revisa = (t, quien) => {
    const malos = fueraDelN5(t);
    if (malos.length) err(`${quien}: ${malos.join("")} no ${malos.length === 1 ? "es kanji" : "son kanji"} del N5 y va${malos.length === 1 ? "" : "n"} sin furigana`);
    const m = furiganaMal(t); if (m) err(`${quien}: ${m}`);
  };
  const L = d.examenes.lecturas;
  for (const t of L.cortas) {
    for (const c of ["texto", "es", "pregunta", "opciones", "nota"]) if (!(c in t)) err(`もんだい４: falta ${c}`);
    if (t.opciones.length !== 4 || new Set(t.opciones).size !== 4) err("もんだい４: deben ser 4 opciones distintas — " + t.pregunta);
    revisa(t.texto, "texto corto"); revisa(t.pregunta, "pregunta");
    for (const o of t.opciones) revisa(o, "opción de 「" + t.pregunta + "」");
  }
  for (const t of L.medias) {
    if (t.preguntas.length !== 2) err("もんだい５: cada texto lleva 2 preguntas");
    revisa(t.texto, "texto medio");
    for (const q of t.preguntas) {
      if (q.opciones.length !== 4 || new Set(q.opciones).size !== 4) err("もんだい５: deben ser 4 opciones distintas — " + q.pregunta);
      revisa(q.pregunta, "pregunta"); for (const o of q.opciones) revisa(o, "opción de 「" + q.pregunta + "」");
    }
  }
  for (const t of L.informacion) {
    if (t.opciones.length !== 4 || new Set(t.opciones).size !== 4) err("もんだい６: deben ser 4 opciones distintas — " + t.titulo);
    for (const x of [t.titulo, ...(t.notas || []), ...(t.cabecera || []), ...(t.filas || []).flat(), t.pregunta, ...t.opciones])
      revisa(x, "información 「" + t.titulo + "」");
  }
  ok(`${L.cortas.length} textos cortos, ${L.medias.length} medios y ${L.informacion.length} de información`);
  ok(d.examenes.frases.length + " frases portadoras y "
    + d.examenes.parafrasis.length + " paráfrasis para もんだい４");
}

console.log(errores ? `\n${errores} error(es)` : "\nTodo correcto ✔");
process.exit(errores ? 1 : 0);
