// Imprime un examen generado, para revisar a ojo lo que salen las preguntas.
//   node tools/examen.mjs 1          → el examen nº 1
//   node tools/examen.mjs 1 20       → del 1 al 20, solo el resumen
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cargaN5, root } from "./datos.mjs";

const N5 = cargaN5();
new Function("N5", readFileSync(join(root, "scripts/romaji.js"), "utf8"))(N5);
new Function("N5", readFileSync(join(root, "scripts/examen.js"), "utf8"))(N5);

const desde = +(process.argv[2] || 1);
const hasta = +(process.argv[3] || desde);

const CIRCULO = ["①", "②", "③", "④"];

function imprime(ex) {
  console.log(`\n══════ ${ex.semilla} · ${ex.total} preguntas ══════`);
  for (const b of ex.bloques) {
    console.log(`\n── ${b.kanji}（${b.titulo}）· ${b.minutos} min · ${b.total} preguntas ──`);
    for (const p of b.problemas) {
      console.log(`\nもんだい${p.n}  ${p.kanji}  [${p.items.length}]`);
      for (const it of p.items) {
        let linea;
        if (it.modo === "texto" || it.modo === "info") {
          if (it.texto) console.log("\n   ┌─ " + it.texto.replace(/\n/g, "\n   │  "));
          if (it.info) {
            console.log("\n   ┌─ " + it.info.titulo);
            if (it.info.cabecera?.length) console.log("   │  " + it.info.cabecera.join("  |  "));
            for (const f of it.info.filas || []) console.log("   │  " + f.join("  |  "));
            for (const n of it.info.notas || []) console.log("   │  " + n);
          }
          console.log("   └─");
        }
        if (it.tipo === "orden") {
          linea = `${it.antes} ＿＿ ＿★＿ ＿＿ ＿＿ ${it.despues}`;
        } else if (it.modo === "subrayado") {
          linea = it.frase.replace(it.marca, `_${it.marca}_`);
        } else if (it.modo === "hueco") {
          linea = it.frase.replace(it.marca, "（　）");
        } else {
          linea = it.frase;
        }
        console.log("   " + linea);
        console.log("     " + it.opciones.map((o, i) =>
          (i === it.correcta ? CIRCULO[i] : `${i + 1}`) + " " + o).join("   "));
        if (it.nota) console.log("     · " + it.nota);
      }
    }
  }
}

let malos = 0;
for (let n = desde; n <= hasta; n++) {
  const ex = N5.examen.genera(N5.examen.semillaDe(n));
  if (desde === hasta) imprime(ex);
  const falta = ex.bloques.flatMap(b => b.problemas.map(p => p.cuantos - p.items.length)).reduce((a, b) => a + b, 0);
  if (falta) { console.log(`examen ${n}: faltan ${falta} preguntas`); malos++; }
  // ninguna pregunta puede tener opciones repetidas ni respuesta fuera de rango
  for (const b of ex.bloques) for (const p of b.problemas) for (const it of p.items) {
    if (new Set(it.opciones).size !== 4) { console.log(`examen ${n} もんだい${p.n}: opciones repetidas`, it.opciones); malos++; }
    if (!(it.correcta >= 0 && it.correcta < 4)) { console.log(`examen ${n}: correcta inválida`, it); malos++; }
    if (it.pos !== undefined && it.frase.slice(it.pos, it.pos + it.marca.length) !== it.marca) {
      console.log(`examen ${n}: la marca no cae donde dice`, it.frase, it.marca); malos++;
    }
  }
  // もんだい２ de 文字・語彙 lleva siempre una palabra en katakana, como el de verdad
  const escritura = ex.bloques[0]?.problemas.find(p => p.n === 2);
  const katas = escritura?.items.filter(it => it.tipo === "katakana").length ?? 0;
  if (katas !== 1) { console.log(`examen ${n}: ${katas} preguntas de katakana en もんだい２ (debería haber 1)`); malos++; }
}
if (hasta > desde) console.log(malos ? `\n${malos} aviso(s)` : `\n${hasta - desde + 1} exámenes, todo completo ✔`);
