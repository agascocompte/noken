// Autoevaluación: test aleatorios generados desde los datos existentes.
// Sin progreso, sin almacenamiento: eliges tipos y nº de preguntas, respondes,
// ves tu nota y las falladas. Nada más.
//
// Se puede preguntar solo de lo que tengas marcado (la misma selección que
// exporta a CSV) y elegir la dirección.
//
// Los distractores salen del MISMO sitio que la pregunta. Si estás repasando
// solo los verbos del grupo III y las otras opciones son de otros grupos, se
// descartan de un vistazo sin saberte nada. Solo cuando lo marcado no da para
// tres opciones distintas se completa con el temario entero.
"use strict";

(() => {
  const { $, esc, rubyEsc, shuffle, sample } = N5;

  // ---- generadores ----
  // origen = de dónde sale la pregunta y, a ser posible, también los distractores.
  // todo = temario completo, solo como relleno si el origen se queda corto.
  function distractores(origen, todo, n, valor, correcta) {
    const vistos = new Set([correcta]);
    const saca = lista => {
      const out = [];
      for (const x of shuffle(lista)) {
        const v = valor(x);
        if (!v || vistos.has(v)) continue;
        vistos.add(v); out.push(v);
        if (out.length === n) break;
      }
      return out;
    };
    const d = saca(origen);
    return d.length === n ? d : d.concat(saca(todo)).slice(0, n);
  }


  function qVocab(origen, todo, dir) {
    const V = origen.filter(w => !w.kana.includes("〜"));
    if (!V.length) return null;
    const w = sample(V, 1)[0];
    const label = w.kana + (w.kanji ? "（" + w.kanji + "）" : "");
    const haciaEs = dir === "ja-es" || (dir === "azar" && Math.random() < 0.5);
    if (haciaEs) {
      const distr = distractores(origen, todo, 3, x => x.es, w.es);
      return { q: `¿Qué significa 「${esc(label)}」?`, opciones: shuffle([w.es, ...distr]), correcta: w.es };
    }
    const distr = distractores(origen, todo, 3, x => x.kana, w.kana);
    return { q: `¿Cómo se dice «${esc(w.es)}»?`, opciones: shuffle([w.kana, ...distr]), correcta: w.kana };
  }

  function qKanji(origen, todo, dir) {
    const k = sample(origen, 1)[0];
    if (dir === "es-ja") {
      const distr = distractores(origen, todo, 3, x => x.kanji, k.kanji);
      return { q: `¿Qué kanji es «${esc(k.significado)}»?`, opciones: shuffle([k.kanji, ...distr]), correcta: k.kanji };
    }
    // en «al azar» se cuelan también preguntas de lectura kun
    if (dir === "ja-es" || !k.kun || Math.random() < 0.5) {
      const distr = distractores(origen, todo, 3, x => x.significado, k.significado);
      return { q: `¿Qué significa 「${k.kanji}」?`, opciones: shuffle([k.significado, ...distr]), correcta: k.significado };
    }
    const distr = distractores(origen, todo, 3, x => x.kun, k.kun);
    return { q: `¿Cuál es la lectura kun de 「${k.kanji}」 (${esc(k.significado)})?`, opciones: shuffle([k.kun, ...distr]), correcta: k.kun };
  }

  function qVerbo(origen, todo, dir) {
    const v = sample(origen, 1)[0];
    if (dir === "ja-es") {
      const distr = distractores(origen, todo, 3, x => x.es, v.es);
      return { q: `¿Qué significa 「${esc(v.masu)}」?`, opciones: shuffle([v.es, ...distr]), correcta: v.es };
    }
    if (dir === "es-ja") {
      const distr = distractores(origen, todo, 3, x => x.masu, v.masu);
      return { q: `¿Cómo se dice «${esc(v.es)}»?`, opciones: shuffle([v.masu, ...distr]), correcta: v.masu };
    }
    if (Math.random() < 0.6) {   // conjugación
      const forma = sample(["te", "ta", "nai"], 1)[0];
      const nombre = { te: "て", ta: "た", nai: "ない" }[forma];
      const distr = distractores(origen, todo, 3, o => o[forma], v[forma]);
      return { q: `¿Cuál es la forma ${nombre} de 「${esc(v.masu)}」 (${esc(v.es)})?`, opciones: shuffle([v[forma], ...distr]), correcta: v[forma] };
    }
    // partícula regida
    const con = origen.filter(x => x.particula.startsWith("〜") && !x.particula.includes("／") && x.ejemplo);
    const v2 = sample(con, 1)[0] || v;
    const p = v2.particula.replace("〜", "");
    const distr = ["を", "に", "で", "が", "へ", "と"].filter(x => x !== p);
    return {
      q: `¿Qué partícula pide 「${esc(v2.kana)}${v2.kanji ? "（" + v2.kanji + "）" : ""}」 (${esc(v2.es)})?`,
      opciones: shuffle([p, ...sample(distr, 3)]), correcta: p
    };
  }

  // La gramática no se puede marcar, así que aquí origen y temario son lo mismo.
  function qGramatica(D) {
    const d = sample(D, 1)[0];
    const mismos = D.filter(x => x !== d && x.tema === d.tema).map(x => x.respuesta);
    const otros = D.filter(x => x !== d).map(x => x.respuesta);
    const distr = [];
    for (const r of shuffle(mismos).concat(shuffle(otros)))
      if (r !== d.respuesta && !distr.includes(r) && distr.length < 3) distr.push(r);
    return { q: rubyEsc(d.pregunta), opciones: shuffle([d.respuesta, ...distr]), correcta: d.respuesta, nota: d.explicacion };
  }

  const GEN = { vocabulario: qVocab, kanji: qKanji, verbos: qVerbo, gramatica: qGramatica };
  const TODO = {
    vocabulario: N5.data.vocab, kanji: N5.data.kanji,
    verbos: N5.data.verbs, gramatica: N5.data.drills
  };

  // ---- estado del test ----
  let preguntas = [], idx = 0, aciertos = 0, falladas = [], respondida = false, faltan = 0;

  function empezar() {
    const soloSel = $("#quizSel").checked;
    const dir = $("#quizDir").value;
    const todo = TODO;
    // La gramática no se puede marcar, así que queda fuera al filtrar por selección.
    const origen = soloSel ? { ...N5.seleccion(), gramatica: [] } : todo;
    const tipos = [...N5.$$("#quizCfg input.qtipo:checked")]
      .map(c => c.value)
      .filter(t => origen[t].length);
    if (!tipos.length) {
      $("#quizBox").innerHTML = `<p class="muted">${soloSel
        ? "No tienes nada marcado de ese contenido. Marca palabras, verbos o kanji con «Seleccionar» en la cabecera."
        : "Elige al menos un tipo de contenido."}</p>`;
      return;
    }
    const n = +$("#quizN").value;
    preguntas = [];
    for (let i = 0; preguntas.length < n && i < n * 6; i++) {
      const t = tipos[i % tipos.length];
      const p = GEN[t](origen[t], todo[t], dir);
      if (p) preguntas.push(p);
    }
    preguntas = shuffle(preguntas);
    idx = 0; aciertos = 0; falladas = []; respondida = false;
    // con una selección pequeña puede no haber material para las n pedidas
    faltan = n - preguntas.length;
    pinta();
  }

  function pinta() {
    const box = $("#quizBox");
    if (idx >= preguntas.length) return pintaResultado();
    const p = preguntas[idx];
    box.innerHTML = `<div class="quiz-card">
      <div class="quiz-progress">Pregunta ${idx + 1} de ${preguntas.length}${
        faltan > 0 ? ` · pediste ${preguntas.length + faltan}, pero con lo marcado no da para más` : ""}</div>
      <p class="quiz-q jp">${p.q}</p>
      <div class="qopts">${p.opciones.map(o => `<button class="qopt jp" data-v="${esc(o)}">${rubyEsc(o)}</button>`).join("")}</div>
      <button class="btn quiz-next" id="quizNext" hidden>Siguiente</button>
    </div>`;
    respondida = false;
  }

  function pintaResultado() {
    const box = $("#quizBox");
    box.innerHTML = `<div class="quiz-card quiz-result">
      <div class="score">${aciertos} / ${preguntas.length}</div>
      <p class="muted">${aciertos === preguntas.length ? "Perfecto. 素晴らしい！" : "Las que fallaste, con su respuesta:"}</p>
      ${falladas.length ? `<div class="quiz-review">${falladas.map(f =>
        `<div class="item"><span class="jp">${f.q}</span><br>→ <span class="ok jp">${rubyEsc(f.correcta)}</span>${f.nota ? `<br><span class="muted">${N5.ruby(f.nota)}</span>` : ""}</div>`).join("")}</div>` : ""}
      <button class="btn" id="quizAgain" style="margin-top:14px">Otro test</button>
    </div>`;
  }

  // La etiqueta de «solo lo marcado» lleva la cuenta al día. La llama export.js
  // en cada cambio de selección, que es el único sitio donde puede cambiar.
  N5.onSelChange = () => {
    const n = N5.selTotal();
    const cb = $("#quizSel");
    $("#quizSelN").textContent = n ? `(${n})` : "(nada marcado)";
    cb.disabled = !n;
    if (!n) cb.checked = false;
  };

  N5.registerSection({
    id: "test", titulo: "Test",
    init() {
      $("#quizStart").addEventListener("click", empezar);
      $("#quizBox").addEventListener("click", e => {
        if (e.target.id === "quizAgain") { $("#quizBox").innerHTML = ""; return; }
        if (e.target.id === "quizNext") { idx++; pinta(); return; }
        const b = e.target.closest(".qopt");
        if (!b || respondida) return;
        respondida = true;
        const p = preguntas[idx];
        const ok = b.dataset.v === p.correcta;
        if (ok) aciertos++; else falladas.push(p);
        for (const o of $("#quizBox").querySelectorAll(".qopt")) {
          o.disabled = true;
          if (o.dataset.v === p.correcta) o.classList.add("correct");
          else if (o === b) o.classList.add("wrong");
        }
        $("#quizNext").hidden = false;
        $("#quizNext").focus();
      });
    }
  });
})();
