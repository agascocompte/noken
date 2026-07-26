// Motor de romaji por moras.
// Cada mora japonesa (あ, か, きゃ, っ+consonante, ー…) se convierte en UN
// bloque de romaji, y la búsqueda solo puede casar cortando entre bloques,
// nunca a media mora. Así "arimasu" encuentra あります pero no かかります
// (cuyo romaji plano contiene esas letras seguidas: ka·ka·ri·ma·su).
"use strict";

(() => {
  const YOON = {"きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo","ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo","じゃ":"ja","じゅ":"ju","じょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo",
  "てぃ":"ti","でぃ":"di","でゅ":"dyu","ふぁ":"fa","ふぃ":"fi","ふぇ":"fe","ふぉ":"fo","うぃ":"wi","うぇ":"we","うぉ":"wo","しぇ":"she","ちぇ":"che","じぇ":"je","つぁ":"tsa","つぇ":"tse","つぉ":"tso","とぅ":"tu","どぅ":"du"};
  const BASE = {"ゔ":"vu","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o",
  "あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","さ":"sa","し":"shi","す":"su","せ":"se","そ":"so","た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","や":"ya","ゆ":"yu","よ":"yo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","わ":"wa","を":"o","ん":"n","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo","だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po"};

  function moraChunks(kana) {
    kana = String(kana).replace(/[\[\]]/g, ""); // corchetes de prefijo opcional: "[お]てら"
    const hira = [...kana].map(c => {
      const o = c.codePointAt(0);
      return (o >= 0x30A1 && o <= 0x30F6) ? String.fromCodePoint(o - 0x60) : c;
    }).join("");
    const chunks = []; let i = 0, dbl = false;
    while (i < hira.length) {
      const c = hira[i];
      if (c === "っ") { dbl = true; i++; continue; }        // dobla la consonante siguiente
      if (c === "ー") {                                      // alargador: koo, seetaa…
        const prev = chunks[chunks.length - 1];
        if (prev) { const v = prev[prev.length - 1]; if ("aeiou".includes(v)) chunks[chunks.length - 1] = prev + v; }
        i++; continue;
      }
      const two = hira.slice(i, i + 2);
      let piece, adv;
      if (YOON[two]) { piece = YOON[two]; adv = 2; }
      else { piece = BASE[c] ?? c; adv = 1; }
      if (dbl) { piece = piece[0] + piece; dbl = false; }
      chunks.push(piece); i += adv;
    }
    return chunks;
  }

  N5.romaji = kana => moraChunks(kana).join("");

  // ¿Aparece q como secuencia de moras completas (o prefijo de la última,
  // para poder buscar mientras se teclea) dentro de kana?
  N5.moraMatch = (kana, q) => {
    if (!q) return true;
    const chunks = moraChunks(kana);
    for (let s = 0; s < chunks.length; s++) {
      let acc = "";
      for (let e = s; e < chunks.length; e++) {
        acc += chunks[e];
        if (acc === q) return true;
        if (acc.length > q.length) { if (acc.startsWith(q)) return true; break; }
        if (!q.startsWith(acc)) break;
      }
    }
    return false;
  };

  // Normaliza una consulta romaji: "ko-to" → "kooto".
  N5.normQuery = q => q.trim().toLowerCase().replace(/([aeiou])-/g, "$1$1");
})();
