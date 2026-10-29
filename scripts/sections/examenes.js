// Sección Exámenes: hacer un examen del N5 como si fuera el de verdad, con su
// reloj por bloque y la corrección al final.
//
// Cada «Nuevo examen» se genera en el momento (scripts/examen.js) y procura no
// repetir nada de lo que ya has visto: hasta que no se gasta la bolsa entera de
// un もんだい no vuelve a salir una pregunta, y entonces vuelven primero las más
// antiguas. Lo que fallas se guarda para el «Examen de fallos», y sale de ahí
// cuando la aciertas.
//
// Todo se guarda en este navegador (localStorage): lo visto, los fallos y el
// historial con el detalle de cada examen.
"use strict";

(() => {
  const { $, esc } = N5;
  const CLAVE = "n5-examenes-v2";
  const ANTIGUA = "n5-examenes";          // los 50 exámenes fijos de antes
  const DETALLE = 100;                    // exámenes que guardan sus falladas

  // ------------------------------------------------------------- almacén
  let db = { vistas: {}, fallos: {}, hechos: [] };
  try { db = { ...db, ...JSON.parse(localStorage.getItem(CLAVE) || "{}") }; } catch { /* vacío */ }
  const guarda = () => {
    try { localStorage.setItem(CLAVE, JSON.stringify(db)); }
    catch {
      // lleno: se queda sin el detalle de los exámenes más viejos y se reintenta
      for (const h of db.hechos.slice(20)) delete h.falladas;
      try { localStorage.setItem(CLAVE, JSON.stringify(db)); } catch { /* nada */ }
    }
  };

  // Las notas de los antiguos «Examen 1…50» pasan al historial, y sus preguntas
  // cuentan como vistas para que el generador no te las vuelva a poner pronto.
  function migra() {
    if (db.migrado) return;
    db.migrado = true;
    let viejo = {};
    try { viejo = JSON.parse(localStorage.getItem(ANTIGUA) || "{}"); } catch { /* nada */ }
    for (const [semilla, intentos] of Object.entries(viejo)) {
      if (!Array.isArray(intentos)) continue;
      const n = +semilla.slice(-4);
      const ex = N5.examen.genera(semilla);
      for (const i of intentos) {
        const ts = fechaATs(i.fecha);
        db.hechos.push({ id: semilla + "-" + ts, ts, tipo: "antiguo", titulo: "Examen " + n + " (de los fijos)",
          aciertos: i.aciertos, total: i.total, segundos: i.segundos, bloques: [] });
        for (const b of ex.bloques) {
          if (i.parcial && b.titulo.toLowerCase() !== i.parcial) continue;
          for (const p of b.problemas) for (const it of p.items)
            db.vistas[it.clave] = Math.max(db.vistas[it.clave] || 0, ts);
        }
      }
    }
    db.hechos.sort((a, b) => b.ts - a.ts);
    guarda();
  }
  // «19/9/2026» → marca de tiempo
  const fechaATs = f => {
    const m = /^(\d+)\/(\d+)\/(\d+)$/.exec(f || "");
    return m ? new Date(+m[3], +m[2] - 1, +m[1], 12).getTime() : Date.now();
  };
  const fecha = ts => new Date(ts).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  const pct = x => Math.round(x * 100) + "%";
  const nFallos = () => Object.keys(db.fallos).length;

  // ---------------------------------------------------------------- estado
  let vista = "inicio";       // inicio · portada · test · descanso · resultado
  let ex = null;              // examen generado
  let bloques = [];           // los bloques que se están haciendo
  let bi = 0, ii = 0;         // bloque e ítem actuales
  const respuestas = new Map();
  const marcadas = new Set();
  // audios de 聴解 ya escuchados: como en el examen, cada uno se oye una vez
  const oidos = new Set();
  let restante = 0, reloj = null, pausado = false, usado = 0;

  // Los ítems de un bloque, en fila y sabiendo cada uno de qué もんだい viene.
  const enFila = b => b.problemas.flatMap(p => p.items.map(it => ({ ...it, problema: p })));

  // ---------------------------------------------------------------- reloj
  function arranca(segundos) {
    para();
    restante = segundos; pausado = false;
    reloj = setInterval(() => {
      if (pausado) return;
      restante--; usado++;
      if (restante % 5 === 0) guardaCurso();      // por si se recarga la página
      if (restante <= 0) { para(); acabaBloque(true); return; }
      const t = $("#exReloj");
      if (t) { t.textContent = mmss(restante); t.classList.toggle("poco", restante <= 60); }
    }, 1000);
  }
  const para = () => { if (reloj) clearInterval(reloj); reloj = null; };
  const mmss = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

  // ------------------------------------------------------- examen a medias
  // Cambiar de pestaña —o recargar sin querer— no puede costarte el examen: se
  // guarda por dónde ibas y el reloj se queda parado hasta que vuelvas.
  const CURSO = "n5-examen-curso-v2";
  function guardaCurso() {
    if (vista !== "test") return;
    try {
      // el examen entero: ya no sale de una semilla fija, depende de lo visto
      localStorage.setItem(CURSO, JSON.stringify({
        ex, ids: bloques.map(b => b.id), bi, ii, restante, usado,
        respuestas: [...respuestas], marcadas: [...marcadas], oidos: [...oidos]
      }));
    } catch { /* almacenamiento lleno o en privado: se pierde y ya está */ }
  }
  const olvidaCurso = () => { try { localStorage.removeItem(CURSO); } catch { /* nada */ } };
  function leeCurso() {
    try {
      const c = JSON.parse(localStorage.getItem(CURSO) || "null");
      return c && c.ex && c.ids?.length ? c : null;
    } catch { return null; }
  }

  function retoma(c) {
    ex = c.ex;
    bloques = ex.bloques.filter(b => c.ids.includes(b.id));
    if (!bloques.length) return olvidaCurso();
    bi = Math.min(c.bi, bloques.length - 1);
    ii = Math.min(c.ii, enFila(bloques[bi]).length - 1);
    respuestas.clear(); for (const [k, v] of c.respuestas || []) respuestas.set(k, v);
    marcadas.clear(); for (const k of c.marcadas || []) marcadas.add(k);
    oidos.clear(); for (const k of c.oidos || []) oidos.add(k);
    usado = c.usado || 0;
    vista = "test";
    arranca(c.restante > 0 ? c.restante : bloques[bi].minutos * 60);
    pinta();
  }

  // --------------------------------------------------------------- inicio
  const ETIQUETA = { nuevo: "Examen", fallos: "Fallos", antiguo: "Fijo" };
  function pintaInicio() {
    vista = "inicio";
    const vistas = Object.keys(db.vistas).length;
    const nf = nFallos();
    $("#exView").innerHTML = `
      <h2>Exámenes</h2>
      <p class="lead">Exámenes del estilo del N5, con sus <b>もんだい</b>, su reloj y su corrección. Cada examen nuevo
      se genera en el momento y evita lo que ya te ha salido: no se repite nada hasta que se gasta todo lo que hay.
      Las preguntas salen del vocabulario, los kanji y la gramática de esta guía: no son exámenes oficiales, pero
      siguen su formato.</p>
      <div class="exaviso">Tres bloques: <b>文字・語彙</b> (20 min), <b>文法・読解</b> (40 min) y <b>聴解</b>
      (30 min), que lee la voz japonesa del navegador. Falta もんだい３ de 文法 (el texto con huecos), y en 聴解 las
      opciones que en el examen son dibujos van escritas.</div>
      ${avisoCurso()}
      <div class="exbotones exprincipal">
        <button class="btn" id="exNuevo">＋ Nuevo examen</button>
        <button class="btn secondary" id="exFallos"${nf ? "" : " disabled"}>Examen de fallos (${nf})</button>
      </div>
      <p class="muted exnota-vistas">${vistas ? `Llevas ${vistas} preguntas vistas.` : "Aún no has hecho ninguno."}
        ${nf ? ` ${nf} ${nf === 1 ? "fallada espera" : "falladas esperan"} en el examen de fallos: salen de ahí cuando las aciertas.` : ""}</p>
      ${db.hechos.length ? `<h3 class="hsub">Historial</h3>
      <div class="tablewrap"><table class="extabla exhistorial">
        <thead><tr><th>Fecha</th><th>Qué</th><th class="num">Nota</th><th class="num">Tiempo</th><th></th></tr></thead>
        <tbody>${db.hechos.map(h => `<tr data-h="${esc(h.id)}"${h.falladas || h.desglose ? ' class="abre"' : ""}>
          <td>${fecha(h.ts)}</td>
          <td><span class="extipo ${h.tipo}">${ETIQUETA[h.tipo] || ""}</span> ${esc(h.titulo || "")}</td>
          <td class="num"><b>${h.aciertos}/${h.total}</b> <span class="muted">${pct(h.aciertos / h.total)}</span></td>
          <td class="num muted">${mmss(h.segundos || 0)}</td>
          <td class="num">${h.falladas || h.desglose ? "Ver →" : ""}</td></tr>`).join("")}</tbody>
      </table></div>` : ""}`;
  }

  function avisoCurso() {
    const c = vista === "test" ? null : leeCurso();
    if (!c) return "";
    const hechas = (c.respuestas || []).length;
    return `<div class="excurso">
      <div><b>${esc(c.ex.titulo || "Examen")} a medias</b> · ${hechas} ${hechas === 1 ? "respondida" : "respondidas"}
        · quedan ${mmss(Math.max(0, c.restante))} en este bloque</div>
      <div class="exbotones">
        <button class="btn" id="exRetoma">Seguir</button>
        <button class="btn secondary" id="exTira">Abandonar</button>
      </div></div>`;
  }

  // ------------------------------------------------------ exámenes nuevos
  function nuevo() {
    const semilla = "n5-" + Date.now().toString(36);
    ex = N5.examen.genera(semilla, { vistas: db.vistas });
    ex.tipo = "nuevo";
    ex.titulo = "Examen del " + fecha(Date.now());
    pintaPortada();
  }

  // Las falladas, agrupadas en sus bloques y もんだい como en un examen normal.
  // Tiempo proporcional: lo que daría el examen real para ese número de preguntas.
  const MAX_FALLOS = 40;
  function deFallos() {
    const lista = Object.values(db.fallos).sort((a, b) => a.ts - b.ts).slice(0, MAX_FALLOS);
    const bloquesEx = [];
    for (const plan of N5.examen.PLAN) {
      const delBloque = lista.filter(f => f.bloque === plan.id);
      if (!delBloque.length) continue;
      const totalPlan = plan.problemas.reduce((n, p) => n + p.cuantos, 0);
      const problemas = plan.problemas.map(p => {
        const items = delBloque.filter(f => f.n === p.n)
          .map((f, i) => ({ ...f.item, ref: `${plan.id}-${p.n}-${i + 1}` }));
        return items.length ? { n: p.n, kanji: p.kanji, instruccion: p.instruccion, items } : null;
      }).filter(Boolean);
      const total = problemas.reduce((n, p) => n + p.items.length, 0);
      bloquesEx.push({ id: plan.id, kanji: plan.kanji, titulo: plan.titulo, problemas, total,
        minutos: Math.max(3, Math.round(plan.minutos * total / totalPlan)) });
    }
    ex = { semilla: "fallos-" + Date.now().toString(36), bloques: bloquesEx, tipo: "fallos",
      titulo: "Examen de fallos", total: bloquesEx.reduce((n, b) => n + b.total, 0) };
    pintaPortada();
  }

  // -------------------------------------------------------------- portada
  function pintaPortada() {
    vista = "portada";
    $("#exView").innerHTML = `
      <div class="exportada">
        <button class="btn secondary" id="exVolver">← Exámenes</button>
        <h2>${esc(ex.titulo || "Examen")}</h2>
        ${ex.tipo === "fallos" ? `<p class="lead">Las ${ex.total} preguntas que tienes falladas${nFallos() > ex.total ?
          ` (las ${ex.total} más antiguas de ${nFallos()})` : ""}. Las que aciertes salen de la lista.</p>` : ""}
        <table class="extabla">
          <thead><tr><th>Bloque</th><th>Preguntas</th><th class="num">Tiempo</th></tr></thead>
          <tbody>${ex.bloques.map(b => `<tr>
            <td><span class="jp">${esc(b.kanji)}</span> <span class="muted">${esc(b.titulo)}</span></td>
            <td>${b.total}</td><td class="num">${b.minutos} min</td></tr>`).join("")}
          <tr class="total"><td>Total</td><td>${ex.total}</td>
            <td class="num">${ex.bloques.reduce((t, b) => t + b.minutos, 0)} min</td></tr></tbody>
        </table>
        <div class="exbotones">
          <button class="btn" data-empezar="todo">Hacer ${ex.bloques.length > 1 ? "el examen entero" : "el examen"}</button>
          ${ex.bloques.length > 1 ? ex.bloques.map(b => `<button class="btn secondary" data-empezar="${b.id}">Solo ${esc(b.titulo.toLowerCase())}</button>`).join("") : ""}
        </div>
        ${ex.tipo === "nuevo" ? `<p class="muted">Solo cuenta como visto lo que hagas: si haces un bloque, las preguntas
          de los otros pueden salirte en el siguiente examen.</p>` : ""}
      </div>`;
  }

  // ------------------------------------------------------------------ test
  function empieza(cual) {
    bloques = cual === "todo" ? ex.bloques : ex.bloques.filter(b => b.id === cual);
    bi = 0; ii = 0;
    respuestas.clear(); marcadas.clear(); oidos.clear();
    usado = 0;
    vista = "test";
    arranca(bloques[0].minutos * 60);
    pinta();
    guardaCurso();
  }

  // El texto llega escrito como en el papel: con espacios entre palabras y, en
  // 文法・読解, con la furigana en la convención de data/ (漢字[かんじ]), que
  // aquí se convierte en <ruby>. En 文字・語彙 no hay nada que convertir: va en
  // kana salvo la palabra preguntada.
  const jp = t => N5.rubyEsc(t || "");

  function cuerpo(it) {
    // se corta por «pos» y no por búsqueda de texto: la palabra puede repetirse
    const parte = dentro => jp(it.frase.slice(0, it.pos)) + dentro + jp(it.frase.slice(it.pos + it.marca.length));
    if (it.modo === "subrayado") return parte(`<u class="exsub">${jp(it.marca)}</u>`);
    if (it.modo === "hueco") return parte(`<span class="exhueco">（　　）</span>`);
    if (it.modo === "orden") {
      // rayas como las del examen, con la ★ encima de una de ellas
      const rayas = [0, 1, 2, 3].map(k =>
        `<span class="exraya">${k === it.estrella ? "★" : ""}</span>`).join("");
      return `${jp(it.antes)} ${rayas} ${jp(it.despues)}`;
    }
    return jp(it.frase);
  }

  // El texto de 読解 (o el cartel de もんだい６) va encima de la pregunta, y se
  // repite en las dos preguntas del mismo texto: en el papel lo tienes delante.
  function pasaje(it) {
    if (it.texto) return `<div class="expasaje jp">${jp(it.texto).replace(/\n/g, "<br>")}</div>`;
    if (!it.info) return "";
    const i = it.info;
    return `<div class="expasaje excartel jp">
      <h3>${jp(i.titulo)}</h3>
      ${i.filas?.length ? `<table>
        ${i.cabecera?.length ? `<thead><tr>${i.cabecera.map(c => `<th>${jp(c)}</th>`).join("")}</tr></thead>` : ""}
        <tbody>${i.filas.map(f => `<tr>${f.map(c => `<td>${jp(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>` : ""}
      ${i.notas?.length ? `<ul>${i.notas.map(n => `<li>${jp(n)}</li>`).join("")}</ul>` : ""}
    </div>`;
  }

  // 聴解: el botón de escuchar. En el examen el audio suena una sola vez y no se
  // puede repetir; aquí igual. Si el navegador no tiene voz japonesa se avisa y
  // se deja volver a intentarlo.
  function reproductor(it) {
    const oido = oidos.has(it.ref);
    return `<div class="exoir">
      <button class="btn" id="exOir"${oido ? " disabled" : ""}>${oido ? "✓ Escuchado" : "▶ Escuchar"}</button>
      <span class="muted" id="exOirNota">${oido ? "En el examen solo se oye una vez." :
        it.soloNumeros ? "Se oye la situación y luego las opciones 1, 2 y 3." : "Una sola vez, como en el examen."}</span>
    </div>`;
  }

  function oye(it) {
    if (!N5.escucha?.disponible()) {
      $("#exOirNota").textContent = "Este navegador no puede leer en voz alta.";
      return;
    }
    oidos.add(it.ref);
    guardaCurso();
    const b = $("#exOir");
    b.disabled = true; b.textContent = "🔊 Escuchando…";
    N5.escucha.reproduce(it.guion, ok => {
      const bb = $("#exOir");
      if (ok) { if (bb) bb.textContent = "✓ Escuchado"; return; }
      // no ha sonado (sin voz japonesa, o cortado por el sistema): otra oportunidad
      oidos.delete(it.ref);
      guardaCurso();
      if (bb) { bb.disabled = false; bb.textContent = "▶ Escuchar"; }
      const n = $("#exOirNota");
      if (n && !N5.escucha.hayJapones()) n.textContent = "No encuentro una voz japonesa en este dispositivo.";
    });
  }

  // En la corrección de 聴解 se ve lo que se dijo, y se puede volver a oír.
  const QUIEN = { N: "", M: "男", F: "女" };
  function guion(it, k) {
    const lineas = it.guion.filter(g => g.texto).map(g =>
      `<div class="exguion-l">${QUIEN[g.voz] ? `<span class="exquien">${QUIEN[g.voz]}</span>` : ""}<span>${jp(g.texto)}</span></div>`).join("");
    return `<div class="expasaje exguion jp">${lineas}</div>
      <button class="btn secondary" data-reoir="${k}">▶ Volver a escuchar</button>`;
  }

  function pinta() {
    N5.escucha?.para();
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
        ${pasaje(it)}
        ${it.guion ? reproductor(it) : `<p class="exfrase jp">${cuerpo(it)}</p>`}
        <div class="exops${it.soloNumeros ? " numeros" : ""}">${it.opciones.map((o, k) => `
          <button class="exop jp${respuestas.get(it.ref) === k ? " elegida" : ""}" data-k="${k}">
            <span class="exnumop">${k + 1}</span>${it.soloNumeros ? "" : `<span>${jp(o)}</span>`}</button>`).join("")}</div>
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
  // Una pregunta para guardar: sin lo que añade enFila (el もんだい entero).
  const limpia = it => { const { problema, ...resto } = it; return resto; };

  function corrige() {
    para();
    const segundos = usado;      // solo cuenta el tiempo con el reloj andando
    olvidaCurso();
    const ahora = Date.now();
    let aciertos = 0, total = 0;
    const desglose = [], falladas = [];
    for (const b of bloques) for (const p of b.problemas) {
      let ok = 0;
      for (const it of p.items) {
        const tuya = respuestas.get(it.ref);
        db.vistas[it.clave] = ahora;
        if (tuya === it.correcta) { ok++; delete db.fallos[it.clave]; continue; }
        const item = limpia(it);
        db.fallos[it.clave] = { item, bloque: b.id, n: p.n, veces: (db.fallos[it.clave]?.veces || 0) + 1, ts: ahora };
        falladas.push({ item, bloque: b.id, n: p.n, tuya });
      }
      aciertos += ok; total += p.items.length;
      desglose.push({ bloque: b.id, bkanji: b.kanji, n: p.n, pkanji: p.kanji, ok, total: p.items.length });
    }
    const h = {
      id: ex.semilla + "-" + ahora, ts: ahora, tipo: ex.tipo || "nuevo",
      titulo: bloques.length < ex.bloques.length ? `${ex.titulo} · solo ${bloques[0].titulo.toLowerCase()}` : ex.titulo,
      aciertos, total, segundos, desglose, falladas
    };
    db.hechos.unshift(h);
    for (const viejo of db.hechos.slice(DETALLE)) delete viejo.falladas;
    guarda();
    pintaInforme(h, true);
  }

  // El informe de un examen: la nota, cómo fue cada もんだい y las falladas con
  // su explicación. Sirve recién corregido y para abrirlo desde el historial.
  let informe = [];                       // las falladas que se están enseñando
  function pintaInforme(h, recien) {
    vista = "resultado";
    informe = h.falladas || [];
    $("#exView").innerHTML = `
      <div class="exresultado">
        ${recien ? "" : `<button class="btn secondary" id="exVolver">← Exámenes</button>`}
        <h2>${esc(h.titulo || "Examen")}</h2>
        <div class="exnotagrande">${h.aciertos} <span class="muted">/ ${h.total}</span></div>
        <p class="lead">${pct(h.aciertos / h.total)} · ${mmss(h.segundos || 0)} · ${fecha(h.ts)}
          ${recien ? (h.aciertos / h.total >= 0.6 ? "— por ahí va la cosa." : "— a seguir dándole.") : ""}</p>
        ${h.desglose?.length ? `<table class="extabla">
          <thead><tr><th>Bloque</th><th>もんだい</th><th class="num">Aciertos</th></tr></thead>
          <tbody>${h.desglose.map((x, k) => `<tr>
            <td>${k === 0 || h.desglose[k - 1].bloque !== x.bloque ? `<span class="jp">${esc(x.bkanji)}</span>` : ""}</td>
            <td><span class="jp">もんだい${x.n}</span> <span class="muted jp">${esc(x.pkanji)}</span></td>
            <td class="num">${x.ok} / ${x.total}</td></tr>`).join("")}</tbody>
        </table>` : ""}

        ${!h.falladas ? `<p class="muted">De este examen solo se guardó la nota.</p>`
          : h.falladas.length ? `<h3 class="hsub">Las que fallaste</h3>
        <div class="exrepaso">${h.falladas.map(({ item: it, n, tuya }, k) => `<div class="exfallo">
            <div class="muted">もんだい${n}${db.fallos[it.clave] ? "" : ` · <span class="ok">ya acertada después</span>`}</div>
            ${pasaje(it)}
            ${it.guion ? guion(it, k) : `<p class="jp">${cuerpo(it)}</p>`}
            <p><span class="ok jp">${it.correcta + 1}. ${jp(it.opciones[it.correcta])}</span>
              ${tuya === undefined || tuya === null ? `<span class="muted"> · en blanco</span>`
                : `<span class="mal jp"> · tú: ${tuya + 1}. ${jp(it.opciones[tuya])}</span>`}</p>
            ${it.tipo === "orden" ? `<p class="muted jp">Orden: ${jp(it.orden.join(" / "))}</p>` : ""}
            ${it.nota ? `<p class="muted">${N5.rubyEsc(it.nota)}</p>` : ""}
            ${it.traduccion ? `<p class="muted">«${esc(it.traduccion)}»</p>` : ""}
          </div>`).join("")}</div>` : `<p class="lead">Ni una fallada. 完璧です。</p>`}

        <div class="exbotones">
          ${recien ? `<button class="btn" id="exNuevo">＋ Nuevo examen</button>` : ""}
          ${nFallos() ? `<button class="btn secondary" id="exFallos">Examen de fallos (${nFallos()})</button>` : ""}
          <button class="btn secondary" id="exVolver">← Exámenes</button>
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


  N5.registerSection({
    id: "examenes", titulo: "Exámenes",
    init() {
      $("#exView").addEventListener("click", e => {
        const t = e.target;
        if (t.closest("#exRetoma")) { const c = leeCurso(); return c && retoma(c); }
        if (t.closest("#exTira")) { olvidaCurso(); return pintaInicio(); }
        if (t.closest("#exVolver")) { para(); N5.escucha?.para(); return pintaInicio(); }
        if (t.closest("#exNuevo")) { N5.escucha?.para(); return nuevo(); }
        if (t.closest("#exFallos")) { N5.escucha?.para(); return deFallos(); }
        const fila = t.closest("tr.abre");
        if (fila) { const h = db.hechos.find(x => x.id === fila.dataset.h); if (h) pintaInforme(h, false); return; }

        const emp = t.closest("[data-empezar]");
        if (emp) return empieza(emp.dataset.empezar);
        if (t.closest("#exSigue")) { bi++; ii = 0; vista = "test"; arranca(bloques[bi].minutos * 60); return pinta(); }

        const reoir = t.closest("[data-reoir]");
        if (reoir) {                        // en la corrección se puede volver a oír
          const f = informe[+reoir.dataset.reoir];
          if (f) N5.escucha.reproduce(f.item.guion);
          return;
        }
        if (vista !== "test") return;
        if (t.closest("#exOir")) return oye(items()[ii]);
        const op = t.closest(".exop");
        if (op) {
          const it = items()[ii];
          respuestas.set(it.ref, +op.dataset.k);
          guardaCurso();
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
        if (t.closest("#exPausa")) { pausado = !pausado; guardaCurso(); return pinta(); }
        if (t.closest("#exFin")) {
          const sin = items().filter(x => !respuestas.has(x.ref)).length;
          if (sin && !confirm(`Te quedan ${sin} sin contestar. ¿Cierras el bloque igual?`)) return;
          return acabaBloque(false);
        }
      });
      migra();
      pintaInicio();
    },
    // Al irse a otra pestaña el reloj se para y el examen queda guardado; al
    // volver, el catálogo ofrece seguir donde lo dejaste.
    onLeave() { N5.escucha?.para(); if (vista === "test") { pausado = true; guardaCurso(); para(); } },

    onRoute() {
      // volver a la pestaña con un examen a medias: no se abandona, se ofrece seguir
      if (vista === "test") { pausado = true; guardaCurso(); para(); }
      if (vista !== "portada" && vista !== "resultado" && vista !== "descanso") pintaInicio();
    }
  });
})();
