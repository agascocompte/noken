// Autoevaluación: test aleatorios generados desde los datos existentes.
// Sin progreso, sin almacenamiento: eliges tipos y nº de preguntas, respondes,
// ves tu nota y las falladas. Nada más.
"use strict";

(() => {
  const { $, esc, rubyEsc, shuffle, sample } = N5;

  // ---- generadores de preguntas (cada uno devuelve {q, opciones, correcta}) ----

  function qVocab() {
    const V = N5.data.vocab.filter(w => !w.kana.includes("〜"));
    const w = sample(V, 1)[0];
    const label = w.kana + (w.kanji ? "（" + w.kanji + "）" : "");
    if (Math.random() < 0.5) {
      const distr = sample(V.filter(x => x.es !== w.es), 3).map(x => x.es);
      return { q: `¿Qué significa 「${esc(label)}」?`, opciones: shuffle([w.es, ...distr]), correcta: w.es };
    }
    const distr = sample(V.filter(x => x.kana !== w.kana), 3).map(x => x.kana);
    return { q: `¿Cómo se dice «${esc(w.es)}»?`, opciones: shuffle([w.kana, ...distr]), correcta: w.kana };
  }

  function qKanji() {
    const K = N5.data.kanji;
    const k = sample(K, 1)[0];
    if (Math.random() < 0.5 || !k.kun) {
      const distr = sample(K.filter(x => x.significado !== k.significado), 3).map(x => x.significado);
      return { q: `¿Qué significa 「${k.kanji}」?`, opciones: shuffle([k.significado, ...distr]), correcta: k.significado };
    }
    const pool = K.filter(x => x.kun && x.kun !== k.kun);
    const distr = sample(pool, 3).map(x => x.kun);
    return { q: `¿Cuál es la lectura kun de 「${k.kanji}」 (${esc(k.significado)})?`, opciones: shuffle([k.kun, ...distr]), correcta: k.kun };
  }

  function qVerbo() {
    const V = N5.data.verbs;
    const v = sample(V, 1)[0];
    if (Math.random() < 0.6) {
      const forma = sample(["te", "ta", "nai"], 1)[0];
      const nombre = { te: "て", ta: "た", nai: "ない" }[forma];
      const distr = [];
      for (const o of shuffle(V)) {
        if (o[forma] !== v[forma] && !distr.includes(o[forma])) distr.push(o[forma]);
        if (distr.length === 3) break;
      }
      return { q: `¿Cuál es la forma ${nombre} de 「${esc(v.masu)}」 (${esc(v.es)})?`, opciones: shuffle([v[forma], ...distr]), correcta: v[forma] };
    }
    // pregunta de partícula regida
    const con = V.filter(x => x.particula.startsWith("〜") && !x.particula.includes("／") && x.ejemplo);
    const v2 = sample(con, 1)[0] || v;
    const p = v2.particula.replace("〜", "");
    const distr = ["を", "に", "で", "が", "へ", "と"].filter(x => x !== p);
    return {
      q: `¿Qué partícula pide 「${esc(v2.kana)}${v2.kanji ? "（" + v2.kanji + "）" : ""}」 (${esc(v2.es)})?`,
      opciones: shuffle([p, ...sample(distr, 3)]), correcta: p
    };
  }

  function qGramatica() {
    const D = N5.data.drills;
    const d = sample(D, 1)[0];
    const mismos = D.filter(x => x !== d && x.tema === d.tema).map(x => x.respuesta);
    const otros = D.filter(x => x !== d).map(x => x.respuesta);
    const distr = [];
    for (const r of shuffle(mismos).concat(shuffle(otros)))
      if (r !== d.respuesta && !distr.includes(r) && distr.length < 3) distr.push(r);
    return { q: rubyEsc(d.pregunta), esHTML: true, opciones: shuffle([d.respuesta, ...distr]), correcta: d.respuesta, nota: d.explicacion };
  }

  const GEN = { vocabulario: qVocab, kanji: qKanji, verbos: qVerbo, gramatica: qGramatica };

  // ---- estado del test ----
  let preguntas = [], idx = 0, aciertos = 0, falladas = [], respondida = false;

  function empezar() {
    const tipos = [...N5.$$("#quizCfg input[type=checkbox]:checked")].map(c => c.value);
    if (!tipos.length) return;
    const n = +$("#quizN").value;
    preguntas = Array.from({ length: n }, (_, i) => GEN[tipos[i % tipos.length]]());
    preguntas = shuffle(preguntas);
    idx = 0; aciertos = 0; falladas = []; respondida = false;
    pinta();
  }

  function pinta() {
    const box = $("#quizBox");
    if (idx >= preguntas.length) return pintaResultado();
    const p = preguntas[idx];
    box.innerHTML = `<div class="quiz-card">
      <div class="quiz-progress">Pregunta ${idx + 1} de ${preguntas.length}</div>
      <p class="quiz-q jp">${p.esHTML ? p.q : p.q}</p>
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
        `<div class="item"><span class="jp">${f.esHTML ? f.q : f.q}</span><br>→ <span class="ok jp">${rubyEsc(f.correcta)}</span>${f.nota ? `<br><span class="muted">${N5.ruby(f.nota)}</span>` : ""}</div>`).join("")}</div>` : ""}
      <button class="btn" id="quizAgain" style="margin-top:14px">Otro test</button>
    </div>`;
  }

  N5.registerSection({
    id: "test", glyph: "試", titulo: "Test",
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
