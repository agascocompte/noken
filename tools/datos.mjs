// Carga los datos de la guía fuera del navegador, para las herramientas de tools/.
// Los data/*.js son JSON puro con una línea de envoltura (window.N5.data.X = …),
// así que basta con evaluarlos contra un N5 de mentira.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const FICHEROS = ["vocab", "grammar", "verbs", "kanji", "reference", "drills", "kana"];

// scripts/dom.js define constantes compartidas (N5.FUENTES) y no toca el DOM al
// cargarse, así que las herramientas pueden leerlo y no duplicar esas listas.
export function cargaN5() {
  const N5 = { data: {} };
  const window = { N5 };
  const evalua = ruta => new Function("window", "N5", readFileSync(join(root, ruta), "utf8"))(window, N5);
  for (const f of FICHEROS) evalua(`data/${f}.js`);
  evalua("scripts/dom.js");
  return N5;
}
