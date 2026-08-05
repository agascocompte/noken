// Sección Referencia: tablas de kana (generadas desde data/kana.js)
// + chuletas (data/reference.js).
"use strict";

(() => {
  const { $, ruby, romaji } = N5;

  const toKata = s => [...s].map(c => String.fromCodePoint(c.codePointAt(0) + 0x60)).join("");

  function kanaTable(rows, kata) {
    return `<div class="tablewrap" style="box-shadow:none;border:none"><table class="kanatable"><tbody>` +
      rows.map(r => `<tr>` + r.map(c => {
        if (!c) return `<td class="kanacell"></td>`;
        const k = kata ? toKata(c) : c;
        return `<td class="kanacell"><span class="jp">${k}</span><span class="r">${romaji(c)}</span></td>`;
      }).join("") + `</tr>`).join("") + `</tbody></table></div>`;
  }

  function kanaCard(kata) {
    const K = N5.data.kana;
    const note = kata
      ? `<p class="muted" style="margin:8px 0 0">La vocal larga se escribe con ー: コーヒー (kōhī). Se usa para palabras extranjeras y nombres.</p>`
      : `<p class="muted" style="margin:8px 0 0">っ pequeño dobla la consonante siguiente: きって (kitte). Las partículas は・へ・を se leen wa・e・o.</p>`;
    return `<h4 style="margin:10px 0 4px">Básicos (五十音)</h4>${kanaTable(K.basicos, kata)}
    <h4 style="margin:14px 0 4px">Con ゛y ゜(dakuten)</h4>${kanaTable(K.dakuten, kata)}
    <h4 style="margin:14px 0 4px">Combinaciones (拗音[ようおん])</h4>${kanaTable(K.yoon, kata)}${note}`;
  }

  N5.registerSection({
    id: "referencia", titulo: "Referencia",
    init() {
      const cards = [
        { icono: "あ", titulo: "Hiragana", html: kanaCard(false) },
        { icono: "ア", titulo: "Katakana", html: kanaCard(true) },
        ...N5.data.reference
      ];
      $("#refGrid").innerHTML = cards.map(c => `
        <div class="refcard">
          <h3><span class="k jp">${c.icono}</span>${c.titulo}</h3>
          ${ruby(c.html)}
        </div>`).join("");
    }
  });
})();
