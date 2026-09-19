# Nōken — Guía de estudio

Guía de consulta para el JLPT, de momento nivel N5, basada en el Minna no
Nihongo I (lecciones 1–25). Web estática, sin dependencias ni build: se abre
con doble clic en `index.html` y se despliega tal cual en GitHub Pages.

**Web**: https://agascocompte.github.io/noken/

## Estructura

```
index.html            esqueleto (estructura y contenido fijo de secciones)
styles/main.css       tema claro/oscuro y componentes
scripts/
  dom.js              helpers ($, esc, ruby, shuffle)
  romaji.js           motor de romaji por moras (búsqueda)
  examen.js           genera exámenes tipo JLPT a partir de una semilla
  router.js           rutas por hash (#/gramatica/l13, #/verbos?q=…)
  search.js           búsqueda global (tecla /)
  app.js              arranque (tema, furigana, pestañas)
  sections/*.js       una sección por archivo
data/                 TODO el contenido vive aquí (JSON puro + 1 línea de envoltura)
tools/
  check.mjs           valida los datos      → node tools/check.mjs
  examen.mjs          imprime un examen     → node tools/examen.mjs 7
  build-single.mjs    genera dist/noken5.html autocontenido
```

## Editar contenido

Cada archivo de `data/` es JSON puro asignado a `N5.data.*` (la envoltura de una
línea existe para que la web funcione también abierta como archivo local, donde
los navegadores bloquean `fetch` de JSON). Añadir contenido = añadir un objeto:

```js
// data/vocab.js
{"kana":"ねこ","kanji":"猫","es":"gato","leccion":10}

// data/verbs.js  (grupo 1=godan, 2=ichidan, 3=irregular)
{"kana":"のむ","kanji":"飲む","grupo":1,"masu":"のみます","te":"のんで",
 "ta":"のんだ","nai":"のまない","es":"beber","particula":"〜を",
 "ejemplo":"水[みず]を飲[の]みます"}

// data/grammar.js — cada punto lleva "temas" (alimenta la vista «Por tema»;
// etiquetas válidas en scripts/sections/grammar.js)
```

**Furigana**: escribe `漢字[かんじ]` y el renderizador lo convierte en `<ruby>`.

Tras editar, ejecuta `node tools/check.mjs` (esquemas, duplicados, furigana).

## Exámenes

La pestaña Exámenes no guarda exámenes: guarda **semillas**. `scripts/examen.js`
monta el «Examen 7» siempre igual a partir de `noken5-0007`, con el reparto de
もんだい del formato vigente desde diciembre de 2020, y las preguntas salen del
vocabulario, los kanji, los verbos y las frases de ejemplo que ya hay en `data/`.
No son exámenes oficiales: son del mismo formato, generados con este contenido.

Lo único escrito a mano es `data/examenes.js` (もんだい４, las frases equivalentes),
porque «decir lo mismo con otras palabras» no se puede sacar de una tabla. Faltan
los bloques 読解 y 聴解, que necesitan textos y audios aparte.

Para ver qué preguntas salen sin abrir el navegador:
`node tools/examen.mjs 7` (uno) o `node tools/examen.mjs 1 50` (valida los 50).

## Rutas

`#/vocabulario?q=neko&leccion=6` · `#/gramatica/l13` · `#/gramatica/tema/forma-te`
· `#/verbos?q=nonde` · `#/kanji?q=agua` · `#/examenes/7` — todas enlazables y con
historial.

## Ampliar a otros niveles (N4…)

El contenido está desacoplado del código: un N4 sería otro juego de archivos de
datos (p. ej. `data/n4/…`) y un selector de nivel que decida qué juego cargar.
Las secciones no cambiarían.

## Publicar

- **GitHub Pages**: servir el repo tal cual (rama `main`, raíz).
- **Archivo único** (Artifact, compartir por correo…): `node tools/build-single.mjs`
  → `dist/noken5.html`.
