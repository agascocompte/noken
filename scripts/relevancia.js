// Relevancia de un resultado de búsqueda, compartida por el buscador global y
// por los de cada sección.
//
// Sin esto los resultados salen en el orden del fichero de datos: «ki» dejaba
// 木 en el puesto 41 de 73, y «oto» dejaba 音 fuera del corte del buscador
// global. Lo que se busca entero debe ir primero.
"use strict";

(() => {
  const EXACTO = 100, EXACTO_ES = 90, EMPIEZA = 70, PALABRA_ES = 50, DENTRO = 40, DENTRO_ES = 30;
  const escapa = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Contra las formas japonesas (kana, kanji, conjugaciones…) y su romaji.
  function puntuaJa(q, formas) {
    let mejor = 0;
    for (const f of formas) {
      if (!f) continue;
      const r = N5.romaji(f);
      if (f === q || r === q) return EXACTO;
      if (f.startsWith(q) || r.startsWith(q)) mejor = Math.max(mejor, EMPIEZA);
      else if (f.includes(q) || N5.moraMatch(f, q)) mejor = Math.max(mejor, DENTRO);
    }
    return mejor;
  }

  // Contra el español. «otoño» empieza por «oto»; «fotografía» solo lo contiene.
  function puntuaEs(q, es) {
    if (!es) return 0;
    const t = String(es).toLowerCase();
    if (t === q || t.split(/[,;·]|\s+\(/).some(x => x.trim() === q)) return EXACTO_ES;
    if (new RegExp("\\b" + escapa(q)).test(t)) return PALABRA_ES;
    return t.includes(q) ? DENTRO_ES : 0;
  }

  // 0 = no coincide. Cuanto más alto, más arriba va.
  N5.relevancia = (q, formasJa, es) => Math.max(puntuaJa(q, formasJa), puntuaEs(q, es));

  // Ordena de más a menos relevante. El orden original (lección, frecuencia…)
  // se conserva entre empates porque Array.sort es estable.
  N5.porRelevancia = lista => lista.sort((a, b) => b.pts - a.pts);
})();
