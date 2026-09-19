// La voz del 聴解: lee un guion (narrador, hombre, mujer) con la síntesis de voz
// del navegador, con sus pausas, como la grabación del examen.
//
// Lo ideal son dos voces japonesas distintas (en el iPhone y en el Mac suelen
// estar Kyoko y Otoya). Si solo hay una, el hombre se distingue bajándole el
// tono. La primera frase tiene que empezar dentro del clic: iOS no deja hablar a
// una página si no lo ha pedido el usuario (ver audio.js, donde pasó lo mismo).
"use strict";

(() => {
  const E = N5.escucha = {};

  let voces = { N: null, F: null, M: null, dos: false };
  function cargaVoces() {
    const ja = speechSynthesis.getVoices().filter(v => /^ja/i.test(v.lang));
    // por orden de preferencia: las voces «de verdad» primero y luego las de
    // Apple con nombre inglés (Eddy, Reed… también hablan japonés)
    const busca = nombres => { for (const n of nombres) { const v = ja.find(x => x.name.toLowerCase().includes(n)); if (v) return v; } return null; };
    const hombre = busca(["otoya", "hattori", "ichiro", "keita", "daichi", "eddy", "reed", "rocko", "grandpa"]);
    const mujer = busca(["kyoko", "o-ren", "haruka", "ayumi", "nanami", "google", "flo", "sandy", "shelley"]) || ja.find(v => v !== hombre) || ja[0];
    voces = { N: mujer || null, F: mujer || null, M: hombre || mujer || null, dos: !!hombre };
  }
  if ("speechSynthesis" in window) {
    cargaVoces();
    speechSynthesis.addEventListener?.("voiceschanged", cargaVoces);
  }

  E.disponible = () => "speechSynthesis" in window;
  E.hayJapones = () => !!voces.F;

  // tono y velocidad de cada papel; el narrador, un poco más despacio
  const papel = v => ({
    N: { voz: voces.N, pitch: 1, rate: 0.9 },
    F: { voz: voces.F, pitch: voces.dos ? 1.05 : 1.2, rate: 0.95 },
    M: { voz: voces.M, pitch: voces.dos ? 1 : 0.7, rate: 0.95 }
  })[v] || { voz: voces.N, pitch: 1, rate: 0.9 };

  let turno = 0;                    // cada reproducción nueva invalida las anteriores
  let espera = null;

  E.para = () => {
    turno++;
    clearTimeout(espera);
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  };

  // guion: [{ voz: "N"|"M"|"F", texto }, { pausa: ms }, …]
  // alAcabar(ok) se llama al terminar (ok=false si se paró antes o no hay voz)
  E.reproduce = (guion, alAcabar = () => {}) => {
    E.para();
    if (!E.disponible()) { alAcabar(false); return; }
    const mio = ++turno;
    let i = 0;
    const siguiente = () => {
      if (mio !== turno) return;
      if (i >= guion.length) { alAcabar(true); return; }
      const paso = guion[i++];
      if (paso.pausa) { espera = setTimeout(siguiente, paso.pausa); return; }
      // se le da en kana: con los kanji la voz a veces elige la lectura que no es
      const u = new SpeechSynthesisUtterance(N5.sinFurigana(N5.lectura(paso.texto)).replace(/\s+/g, ""));
      const p = papel(paso.voz);
      u.lang = "ja-JP";
      if (p.voz) u.voice = p.voz;
      u.pitch = p.pitch;
      u.rate = p.rate;
      u.onend = () => { if (mio === turno) espera = setTimeout(siguiente, 350); };
      u.onerror = () => { if (mio === turno) { turno++; alAcabar(false); } };
      speechSynthesis.speak(u);
    };
    siguiente();                    // síncrono: tiene que salir del clic
  };
})();
