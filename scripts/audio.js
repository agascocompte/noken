// Escuchar en bucle lo que tengas marcado: dice el japonés, deja un hueco para
// que intentes recordarlo, y dice el español. Al terminar la vuelta baraja y
// vuelve a empezar, sin límite.
//
// Usa la voz del navegador (SpeechSynthesis), que los móviles suspenden al
// bloquear la pantalla. Para que aguante toda la noche hacen falta DOS cosas, y
// cada una resuelve un problema distinto:
//   · un Wake Lock, que evita que la pantalla se apague sola
//   · un audio en silencio en bucle, que hace que iOS trate la página como un
//     reproductor y siga hablando aunque bloquees el móvil a mano
// Ver los comentarios de pideWakeLock() y mantenVivo() antes de tocar ninguna.
"use strict";

(() => {
  const { $, $$, esc, limpiaEntrada } = N5;

  // ---------- qué se dice de cada cosa ----------
  // Solo estorban los paréntesis con japonés dentro («気分が悪いです: me encuentro
  // mal»), que la voz española destrozaría. El resto del paréntesis se conserva,
  // porque suele ser justo lo que desambigua: «ponerse (gafas)» sin el «gafas» no
  // distingue de 着る ni de かぶる.
  const CON_JAPONES = /[぀-ヿ一-鿿〜～]/;
  const soloEs = s => String(s)
    .replace(/\s*[（(]([^）)]*)[）)]/g, (todo, dentro) => CON_JAPONES.test(dentro) ? "" : " " + dentro)
    .replace(/;/g, ",")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.])/g, "$1")
    .trim();
  // De 「あ・ける、ひら・く」 se queda con あける
  const soloLectura = s => limpiaEntrada(s).replace(/・/g, "").split("、")[0].trim();

  function cola() {
    const s = N5.seleccion?.();
    if (!s) return [];
    const items = [];
    // Los verbos van en forma ます, como en el CSV
    for (const v of s.verbos) items.push({ ja: v.masu, es: soloEs(v.es) });
    for (const w of s.vocabulario) {
      if (w.kana.includes("〜")) continue;          // sufijos y partículas no se dicen solos
      items.push({ ja: limpiaEntrada(w.kana), es: soloEs(w.es) });
    }
    // Un kanji suelto no se puede leer en voz alta sin ambigüedad: se lee su lectura
    for (const k of s.kanji) {
      const lect = soloLectura(k.kun || k.on);
      if (lect) items.push({ ja: lect, es: soloEs(k.significado) });
    }
    return items.filter(x => x.ja && x.es);
  }

  // ---------- voces ----------
  const vozDe = pre => speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith(pre)) || null;
  let vozJa = null, vozEs = null;
  const cargaVoces = () => { vozJa = vozDe("ja"); vozEs = vozDe("es"); };
  cargaVoces();
  speechSynthesis.addEventListener?.("voiceschanged", cargaVoces);

  // ---------- estado ----------
  const RITMOS = {
    normal:  { rate: 0.95, huecoJa: 1200, huecoEs: 700 },
    pausado: { rate: 0.85, huecoJa: 2200, huecoEs: 1200 },
    rapido:  { rate: 1.1,  huecoJa: 600,  huecoEs: 400 }
  };
  let lista = [], i = 0, sonando = false, wakeLock = null, ping = null;
  let silencio = null, sinBloqueo = false;

  const espera = ms => new Promise(r => setTimeout(r, ms));
  const ritmo = () => RITMOS[$("#playRitmo").value] || RITMOS.normal;

  function di(texto, voz, rate) {
    return new Promise(resolver => {
      const u = new SpeechSynthesisUtterance(texto);
      if (voz) { u.voice = voz; u.lang = voz.lang; }
      u.rate = rate;
      let listo = false;
      const fin = () => { if (!listo) { listo = true; clearTimeout(reloj); resolver(); } };
      u.onend = fin;
      u.onerror = fin;   // si una falla, seguimos con la siguiente
      // Red de seguridad: si el navegador se traga el «he terminado», el bucle se
      // quedaría colgado para siempre. Se calcula un techo generoso y se sigue.
      const reloj = setTimeout(fin, 1500 + texto.length * 260 / rate);
      speechSynthesis.speak(u);
    });
  }

  // El móvil apaga la pantalla y con ella la voz; esto lo evita mientras suena.
  // No está en todas partes: Chrome del iPhone (que por dentro es WKWebView) no
  // lo trae. Si no se consigue hay que decirlo, no callárselo.
  async function pideWakeLock() {
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      wakeLock.addEventListener?.("release", () => { wakeLock = null; });
      sinBloqueo = false;
    } catch {
      wakeLock = null; sinBloqueo = true;
    }
    pinta();
  }

  // ⚠ NO QUITAR: parece un truco inútil y es lo que sostiene el caso de uso.
  // Un audio en silencio en bucle hace que iOS trate la página como un
  // reproductor de verdad, y entonces la voz SIGUE SONANDO con el móvil
  // bloqueado. Sin esto, iOS suspende la síntesis en cuanto se apaga la
  // pantalla, y escuchar la lista en la cama deja de funcionar.
  // (Comprobado en un iPhone real; en escritorio no se nota nada.)
  function wavSilencioso() {
    const sr = 8000, n = sr;                       // un segundo
    const buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
    const txt = (off, s) => [...s].forEach((c, i) => v.setUint8(off + i, c.charCodeAt(0)));
    txt(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); txt(8, "WAVEfmt ");
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true);
    v.setUint16(34, 16, true); txt(36, "data"); v.setUint32(40, n * 2, true);
    return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
  }
  function mantenVivo(si) {
    if (si) {
      if (!silencio) { silencio = new Audio(wavSilencioso()); silencio.loop = true; }
      silencio.play().catch(() => {});
    } else silencio?.pause();
  }
  // Al volver de segundo plano el bloqueo se pierde: se vuelve a pedir.
  document.addEventListener("visibilitychange", () => {
    if (sonando && document.visibilityState === "visible" && !wakeLock) pideWakeLock();
  });

  function pinta() {
    $("#selBar").classList.toggle("tocando", sonando);
    $("#playNow").textContent = sonando && lista[i]
      ? `${lista[i].ja} — ${lista[i].es}` : "";
    $("#playWarn").hidden = !(sonando && sinBloqueo);
  }

  async function bucle() {
    while (sonando) {
      if (i >= lista.length) { lista = N5.shuffle(lista); i = 0; }   // otra vuelta, en otro orden
      const it = lista[i];
      const r = ritmo();
      pinta();
      await di(it.ja, vozJa, r.rate);
      if (!sonando) break;
      await espera(r.huecoJa);
      if (!sonando) break;
      await di(it.es, vozEs, r.rate);
      if (!sonando) break;
      await espera(r.huecoEs);
      i++;
    }
  }

  function arranca() {
    lista = N5.shuffle(cola());
    if (!lista.length) return;
    i = 0; sonando = true;
    // algunos navegadores dejan la síntesis en pausa tras un rato: esto la despierta
    ping = setInterval(() => speechSynthesis.resume(), 8000);
    pinta();
    // En iOS (y por tanto en cualquier navegador del iPhone, que por dentro son
    // WebKit) la primera locución solo suena si sale dentro del gesto que la pidió.
    // Por eso el bucle arranca aquí, sin ningún await por delante…
    bucle();
    mantenVivo(true);
    // …y el bloqueo de pantalla se pide después, sin esperarlo.
    pideWakeLock();
  }

  function para() {
    sonando = false;
    speechSynthesis.cancel();
    clearInterval(ping); ping = null;
    mantenVivo(false);
    wakeLock?.release?.().catch(() => {}); wakeLock = null;
    sinBloqueo = false;
    pinta();
  }

  N5.pararAudio = para;
  N5.hayVozJaponesa = () => !!vozJa;

  N5.initAudio = () => {
    $("#selPlay").addEventListener("click", () => {
      if (!N5.selTotal()) return;
      if (!vozJa) {
        alert("Tu navegador no tiene ninguna voz japonesa instalada, así que el japonés no sonaría bien.\n\n" +
              "En Windows: Configuración › Hora e idioma › Idioma › añadir japonés con «Voz».\n" +
              "En iPhone/Mac: Ajustes › Accesibilidad › Contenido leído › Voces › japonés.");
        return;
      }
      arranca();
    });
    $("#playStop").addEventListener("click", para);
    $("#playRitmo").addEventListener("change", () => { if (sonando) speechSynthesis.cancel(); });
  };
})();
