// Escuchar en bucle lo que tengas marcado: dice el japonés, deja un hueco para
// que intentes recordarlo, y dice el español. Al terminar la vuelta baraja y
// vuelve a empezar, sin límite.
//
// Usa la voz del navegador (SpeechSynthesis). Los navegadores la suspenden al
// bloquear la pantalla, así que mientras suena se pide un Wake Lock para que el
// móvil no se apague: la idea es dejarlo boca abajo, como con un vídeo.
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

  const espera = ms => new Promise(r => setTimeout(r, ms));
  const ritmo = () => RITMOS[$("#playRitmo").value] || RITMOS.normal;

  function di(texto, voz, rate) {
    return new Promise(resolver => {
      const u = new SpeechSynthesisUtterance(texto);
      if (voz) { u.voice = voz; u.lang = voz.lang; }
      u.rate = rate;
      u.onend = resolver;
      u.onerror = resolver;   // si una falla, seguimos con la siguiente
      speechSynthesis.speak(u);
    });
  }

  // El móvil apaga la pantalla y con ella la voz; esto lo evita mientras suena.
  async function pideWakeLock() {
    try { wakeLock = await navigator.wakeLock?.request("screen") ?? null; } catch { wakeLock = null; }
  }
  // Al volver de segundo plano el bloqueo se pierde: se vuelve a pedir.
  document.addEventListener("visibilitychange", () => {
    if (sonando && document.visibilityState === "visible" && !wakeLock) pideWakeLock();
  });

  function pinta() {
    $("#selBar").classList.toggle("tocando", sonando);
    $("#playNow").textContent = sonando && lista[i]
      ? `${lista[i].ja} — ${lista[i].es}` : "";
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

  async function arranca() {
    lista = N5.shuffle(cola());
    if (!lista.length) return;
    i = 0; sonando = true;
    await pideWakeLock();
    // algunos navegadores dejan la síntesis en pausa tras un rato: esto la despierta
    ping = setInterval(() => speechSynthesis.resume(), 8000);
    pinta();
    bucle();
  }

  function para() {
    sonando = false;
    speechSynthesis.cancel();
    clearInterval(ping); ping = null;
    wakeLock?.release?.().catch(() => {}); wakeLock = null;
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
