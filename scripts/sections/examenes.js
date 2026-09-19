// Sección Exámenes: hacer un examen del N5 como si fuera el de verdad, con su
// reloj por bloque y la corrección al final.
//
// Los exámenes los monta scripts/examen.js a partir de una semilla, así que el
// «Examen 7» es siempre el mismo y se puede repetir para ver si vas mejorando.
// Aquí solo está la mesa de examen: navegación, cronómetro, marcar para
// revisar, corregir y guardar la nota.
//
// Lo único que se guarda es el historial de notas (localStorage), no las
// respuestas: si repites el examen, lo haces de cero.
"use strict";

(() => {
  const { $, esc } = N5;
  const CLAVE = "n5-examenes";

  // ------------------------------------------------------------- historial
  let historial = {};
  try { historial = JSON.parse(localStorage.getItem(CLAVE) || "{}"); } catch { historial = {}; }
  const guarda = () => { try { localStorage.setItem(CLAVE, JSON.stringify(historial)); } catch { /* lleno o privado */ } };

  function anota(semilla, intento) {
    const lista = historial[semilla] ||= [];
    lista.unshift(intento);
    lista.length = Math.min(lista.length, 5);   // con los cinco últimos sobra
    guarda();
  }
  const mejorDe = s => (historial[s] || []).reduce((m, i) => Math.max(m, i.aciertos / i.total), 0);
  const pct = x => Math.round(x * 100) + "%";

  // ---------------------------------------------------------------- estado
  let vista = "catalogo";     // catalogo · portada · test · descanso · resultado
  let ex = null;              // examen generado
  let bloques = [];           // los bloques que se están haciendo
  let bi = 0, ii = 0;         // bloque e ítem actuales
  const respuestas = new Map();
  const marcadas = new Set();
  let restante = 0, reloj = null, pausado = false, inicio = 0;

  // Los ítems de un bloque, en fila y sabiendo cada uno de qué もんだい viene.
  const enFila = b => b.problemas.flatMap(p => p.items.map(it => ({ ...it, problema: p })));

  // ---------------------------------------------------------------- reloj
  function arranca(segundos) {
    para();
    restante = segundos; pausado = false;
    reloj = setInterval(() => {
      if (pausado) return;
      restante--;
      if (restante <= 0) { para(); acabaBloque(true); return; }
      const t = $("#exReloj");
      if (t) { t.textContent = mmss(restante); t.classList.toggle("poco", restante <= 60); }
    }, 1000);
  }
  const para = () => { if (reloj) clearInterval(reloj); reloj = null; };
  const mmss = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

  // ------------------------------------------------------------- catálogo
  function pintaCatalogo() {
    const tarjetas = [];
    for (let n = 1; n <= N5.examen.CUANTOS; n++) {
      const s = N5.examen.semillaDe(n);
      const hechos = (historial[s] || []).length;
      const mejor = mejorDe(s);
      tarjetas.push(`<button class="excard${hechos ? " hecho" : ""}" data-n="${n}">
        <span class="exnum">${n}</span>
        <span class="exnota">${hechos ? pct(mejor) : "—"}</span>
        <span class="exveces muted">${hechos ? (hechos === 1 ? "1 vez" : hechos + " veces") : "sin hacer"}</span>
      </button>`);
    }
    $("#exView").innerHTML = `
      <h2>Exámenes</h2>
      <p class="lead">Exámenes del estilo del N5, con sus <b>もんだい</b>, su reloj y su corrección. Cada número es siempre
      el mismo examen, así que puedes repetirlo dentro de un tiempo y ver si has mejorado. Las preguntas se generan con el
      vocabulario, los kanji y la gramática de esta guía: no son exámenes oficiales, pero siguen su formato.</p>
      <div class="exaviso">De momento están los dos bloques de <b>言語知識</b>: 文字・語彙 (vocabulario y escritura) y 文法
      (gramática). Faltan 読解 (lectura) y 聴解 (audición), que necesitan textos y audios escritos aparte.</div>
      <div class="exgrid">${tarjetas.join("")}</div>`;
  }

  // -------------------------------------------------------------- portada
  function pintaPortada() {
    const s = ex.semilla;
    const n = +s.slice(-4);
    const intentos = historial[s] || [];
    $("#exView").innerHTML = `
      <div class="exportada">
        <button class="btn secondary" id="exVolver">← Todos los exámenes</button>
        <h2>Examen ${n}</h2>
        <table class="extabla">
          <thead><tr><th>Bloque</th><th>Preguntas</th><th class="num">Tiempo</th></tr></thead>
          <tbody>${ex.bloques.map(b => `<tr>
            <td><span class="jp">${esc(b.kanji)}</span> <span class="muted">${esc(b.titulo)}</span></td>
            <td>${b.total}</td><td class="num">${b.minutos} min</td></tr>`).join("")}
          <tr class="total"><td>Total</td><td>${ex.total}</td>
            <td class="num">${ex.bloques.reduce((t, b) => t + b.minutos, 0)} min</td></tr></tbody>
        </table>
        <div class="exbotones">
          <button class="btn" data-empezar="todo">Hacer el examen entero</button>
          ${ex.bloques.map(b => `<button class="btn secondary" data-empezar="${b.id}">Solo ${esc(b.titulo.toLowerCase())}</button>`).join("")}
        </div>
        ${intentos.length ? `<div class="exhist">
          <h3 class="hsub">Lo que llevas</h3>
          <ul>${intentos.map(i => `<li><b>${i.aciertos}/${i.total}</b> (${pct(i.aciertos / i.total)})
            · ${esc(i.fecha)} · ${mmss(i.segundos)}${i.parcial ? " · solo " + esc(i.parcial) : ""}</li>`).join("")}</ul>
        </div>` : ""}
      </div>`;
  }

  // ------------------------------------------------------------------ test
  function empieza(cual) {
    bloques = cual === "todo" ? ex.bloques : ex.bloques.filter(b => b.id === cual);
    bi = 0; ii = 0;
    respuestas.clear(); marcadas.clear();
    inicio = Date.now();
    vista = "test";
    arranca(bloques[0].minutos * 60);
    pinta();
  }

  // Cómo se enseña cada tipo de pregunta. La frase va siempre sin furigana:
  // en el examen de verdad tampoco lo hay, y en 問題1 sería la respuesta.
  function cuerpo(it) {
    const e = esc(it.frase || "");
    // se corta por «pos» y no por búsqueda de texto: la palabra puede repetirse
    const parte = dentro => esc(it.frase.slice(0, it.pos)) + dentro + esc(it.frase.slice(it.pos + it.marca.length));
    if (it.modo === "subrayado") return parte(`<u class="exsub">${esc(it.marca)}</u>`);
    if (it.modo === "hueco") return parte(`<span class="exhueco">（　）</span>`);
    if (it.modo === "prehueco") return e.replace("（　）", `<span class="exhueco">（　）</span>`);
    if (it.modo === "orden") {
      const huecos = [0, 1, 2, 3].map(k =>
        k === it.estrella ? `<span class="exhueco">＿★＿</span>` : `<span class="exhueco">＿＿</span>`).join(" ");
      return esc(it.antes) + " " + huecos + " " + esc(it.despues);
    }
    return e;
  }

  function pinta() {
    const b = bloques[bi];
    const items = enFila(b);
    const it = items[ii];
    const prob = it.problema;
    // La cabecera del もんだい solo se repite cuando se cambia de もんだい
    const primeraDelProblema = ii === 0 || items[ii - 1].problema !== prob;

    $("#exView").innerHTML = `
      <div class="exbarra">
        <span class="exbloque jp">${esc(b.kanji)}</span>
        <span class="exprog">${ii + 1} / ${items.length}</span>
        <span class="exreloj${restante <= 60 ? " poco" : ""}" id="exReloj">${mmss(restante)}</span>
        <button class="btn secondary" id="exPausa">${pausado ? "▶ Seguir" : "⏸ Pausa"}</button>
        <button class="btn secondary" id="exFin">Terminar bloque</button>
      </div>

      ${pausado ? `<div class="expausa">Examen en pausa. El reloj está parado.</div>` : `
      <div class="exitem">
        ${primeraDelProblema ? `<div class="exprob">
          <span class="jp">もんだい${prob.n}</span> <span class="muted jp">${esc(prob.kanji)}</span>
          <p class="muted">${esc(prob.instruccion)}</p></div>` : ""}
        <p class="exfrase jp">${cuerpo(it)}</p>
        <div class="exops">${it.opciones.map((o, k) => `
          <button class="exop jp${respuestas.get(it.ref) === k ? " elegida" : ""}" data-k="${k}">
            <span class="exnumop">${k + 1}</span>${esc(o)}</button>`).join("")}</div>
        <div class="exnav">
          <button class="btn secondary" id="exPrev"${ii === 0 && bi === 0 ? " disabled" : ""}>← Anterior</button>
          <button class="btn secondary${marcadas.has(it.ref) ? " on" : ""}" id="exMarca">
            ${marcadas.has(it.ref) ? "★ Marcada" : "☆ Marcar para revisar"}</button>
          <button class="btn" id="exNext">${ii === items.length - 1 ? "Terminar bloque" : "Siguiente →"}</button>
        </div>
      </div>
      <div class="exmapa">${items.map((x, k) => `<button class="exbola${
        k === ii ? " actual" : ""}${respuestas.has(x.ref) ? " puesta" : ""}${
        marcadas.has(x.ref) ? " marcada" : ""}" data-i="${k}">${k + 1}</button>`).join("")}</div>`}`;
  }

  function acabaBloque(porTiempo) {
    para();
    if (bi + 1 < bloques.length) {
      vista = "descanso";
      const sig = bloques[bi + 1];
      $("#exView").innerHTML = `<div class="exdescanso">
        <h2>Bloque terminado</h2>
        <p class="lead">${porTiempo ? "Se acabó el tiempo." : "Has cerrado el bloque."}
        Ahora viene <b class="jp">${esc(sig.kanji)}</b> (${esc(sig.titulo.toLowerCase())}):
        ${sig.total} preguntas en ${sig.minutos} minutos.</p>
        <p class="muted">Todavía no se corrige nada: la nota sale al final, como en el examen de verdad.</p>
        <button class="btn" id="exSigue">Empezar el bloque</button>
      </div>`;
      return;
    }
    corrige();
  }

  // ------------------------------------------------------------ corrección
  function corrige() {
    para();
    vista = "resultado";
    const segundos = Math.round((Date.now() - inicio) / 1000);
    let aciertos = 0, total = 0;
    const detalle = bloques.map(b => {
      const probs = b.problemas.map(p => {
        const ok = p.items.filter(it => respuestas.get(it.ref) === it.correcta).length;
        aciertos += ok; total += p.items.length;
        return { p, ok };
      });
      return { b, probs };
    });
    anota(ex.semilla, {
      fecha: new Date().toLocaleDateString("es-ES"), aciertos, total, segundos,
      parcial: bloques.length < ex.bloques.length ? bloques[0].titulo.toLowerCase() : ""
    });

    const falladas = bloques.flatMap(b => b.problemas.flatMap(p => p.items
      .filter(it => respuestas.get(it.ref) !== it.correcta)
      .map(it => ({ it, p, b }))));

    $("#exView").innerHTML = `
      <div class="exresultado">
        <div class="exnotagrande">${aciertos} <span class="muted">/ ${total}</span></div>
        <p class="lead">${pct(aciertos / total)} · ${mmss(segundos)}
          ${aciertos / total >= 0.6 ? "— por ahí va la cosa." : "— a seguir dándole."}</p>
        <table class="extabla">
          <thead><tr><th>Bloque</th><th>もんだい</th><th class="num">Aciertos</th></tr></thead>
          <tbody>${detalle.map(d => d.probs.map((x, k) => `<tr>
            <td>${k === 0 ? `<span class="jp">${esc(d.b.kanji)}</span>` : ""}</td>
            <td><span class="jp">もんだい${x.p.n}</span> <span class="muted jp">${esc(x.p.kanji)}</span></td>
            <td class="num">${x.ok} / ${x.p.items.length}</td></tr>`).join("")).join("")}</tbody>
        </table>

        ${falladas.length ? `<h3 class="hsub">Las que fallaste</h3>
        <div class="exrepaso">${falladas.map(({ it, p }) => {
          const tuya = respuestas.get(it.ref);
          return `<div class="exfallo">
            <div class="muted">もんだい${p.n}</div>
            <p class="jp">${cuerpo(it)}</p>
            <p><span class="ok jp">${it.correcta + 1}. ${esc(it.opciones[it.correcta])}</span>
              ${tuya === undefined ? `<span class="muted"> · en blanco</span>`
                : `<span class="mal jp"> · tú: ${tuya + 1}. ${esc(it.opciones[tuya])}</span>`}</p>
            ${it.tipo === "orden" ? `<p class="muted jp">Orden: ${esc(it.orden.join(" / "))}</p>` : ""}
            ${it.nota ? `<p class="muted">${esc(it.nota)}</p>` : ""}
            ${it.traduccion ? `<p class="muted">«${esc(it.traduccion)}»</p>` : ""}
          </div>`;
        }).join("")}</div>` : `<p class="lead">Ni una fallada. 完璧です。</p>`}

        <div class="exbotones">
          <button class="btn" id="exOtra">Repetir este examen</button>
          <button class="btn secondary" id="exVolver">← Todos los exámenes</button>
        </div>
      </div>`;
  }

  // ------------------------------------------------------------ navegación
  const items = () => enFila(bloques[bi]);
  function vaA(k) {
    const n = items().length;
    if (k >= n) return acabaBloque(false);
    if (k < 0) { if (bi === 0) return; return; }
    ii = k; pinta();
  }

  function abre(n) {
    ex = N5.examen.genera(N5.examen.semillaDe(n));
    vista = "portada";
    pintaPortada();
  }

  N5.registerSection({
    id: "examenes", titulo: "Exámenes",
    init() {
      $("#exView").addEventListener("click", e => {
        const t = e.target;
        const card = t.closest(".excard");
        if (card) return N5.go("#/examenes/" + card.dataset.n);
        if (t.closest("#exVolver")) { para(); return N5.go("#/examenes"); }

        const emp = t.closest("[data-empezar]");
        if (emp) return empieza(emp.dataset.empezar);
        if (t.closest("#exSigue")) { bi++; ii = 0; vista = "test"; arranca(bloques[bi].minutos * 60); return pinta(); }
        if (t.closest("#exOtra")) return pintaPortada();

        if (vista !== "test") return;
        const op = t.closest(".exop");
        if (op) {
          const it = items()[ii];
          respuestas.set(it.ref, +op.dataset.k);
          // se pasa sola a la siguiente, como en Bunpro; la última se queda
          if (ii < items().length - 1) { ii++; pinta(); } else pinta();
          return;
        }
        const bola = t.closest(".exbola");
        if (bola) return vaA(+bola.dataset.i);
        if (t.closest("#exNext")) return vaA(ii + 1);
        if (t.closest("#exPrev")) return vaA(ii - 1);
        if (t.closest("#exMarca")) {
          const ref = items()[ii].ref;
          marcadas.has(ref) ? marcadas.delete(ref) : marcadas.add(ref);
          return pinta();
        }
        if (t.closest("#exPausa")) { pausado = !pausado; return pinta(); }
        if (t.closest("#exFin")) {
          const sin = items().filter(x => !respuestas.has(x.ref)).length;
          if (sin && !confirm(`Te quedan ${sin} sin contestar. ¿Cierras el bloque igual?`)) return;
          return acabaBloque(false);
        }
      });
      pintaCatalogo();
    },
    onRoute({ sub }) {
      const n = +sub;
      // Volver al catálogo con un examen a medias lo abandona y para el reloj.
      // Irse a otra pestaña no: el reloj del examen sigue corriendo, como el de verdad.
      if (vista === "test" && (!n || !ex || ex.semilla !== N5.examen.semillaDe(n))) para();
      if (n >= 1 && n <= N5.examen.CUANTOS) {
        if (vista === "test" && ex && ex.semilla === N5.examen.semillaDe(n)) return;  // seguir donde estabas
        return abre(n);
      }
      vista = "catalogo";
      pintaCatalogo();
    }
  });
})();
