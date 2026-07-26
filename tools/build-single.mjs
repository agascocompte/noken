// Genera dist/noken5.html: la guía completa en un único archivo autocontenido
// (CSS y scripts inline). Útil para publicarla como Artifact o compartirla.
//   node tools/build-single.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let html = readFileSync(join(root, "index.html"), "utf8");

// CSS inline
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g,
  (_, href) => "<style>\n" + readFileSync(join(root, href), "utf8") + "</style>");

// scripts inline (mismo orden; al final del body la ejecución es equivalente)
html = html.replace(/<script defer src="([^"]+)"><\/script>/g,
  (_, src) => "<script>\n" + readFileSync(join(root, src), "utf8") + "</script>");

// El visor de Artifacts envuelve el archivo en su propio esqueleto html/head/body,
// así que la versión single-file va sin doctype ni etiquetas de documento.
html = html
  .replace(/<!doctype html>\s*<html lang="es">\s*<head>\s*/i, "")
  .replace(/<\/head>\s*<body>\s*/i, "")
  .replace(/<\/body>\s*<\/html>\s*$/i, "");

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist", "noken5.html"), html);
console.log("dist/noken5.html generado:", (html.length / 1024).toFixed(0), "KB");
