// Sección Verbos: tabla de conjugación con partícula regida y ejemplo.
// Búsqueda: diccionario y significado por coincidencia parcial;
// formas conjugadas por moras (nunca a media mora).
"use strict";

(() => {
  const { $, $$, esc, rubyEsc, moraMatch, normQuery } = N5;
  let group = "all";

  const dicLabel = v => v.kana + (v.kanji ? " " + v.kanji : "") + (v.grupoTrampa ? " ★" : "");
  const cell = (v, forma) => esc(v[forma]) + ((v.irregularEn || []).includes(forma) ? " ★" : "");

  function render() {
    const q = normQuery($("#vbSearch").value);
    let rows = "", n = 0;
    for (const v of N5.data.verbs) {
      if (group !== "all" && String(v.grupo) !== group) continue;
      if (q) {
        const broad = dicLabel(v).includes(q) || v.es.toLowerCase().includes(q);
        const exact = [v.kana, v.masu, v.te, v.ta, v.nai].some(x => moraMatch(x, q));
        if (!broad && !exact) continue;
      }
      n++;
      const badge = v.particula !== "—"
        ? `<span class="pbadge${v.particulaDestacada ? " hot" : ""}">${esc(v.particula)}</span>` : "";
      const ej = v.ejemplo ? `<span class="vej jp">${rubyEsc(v.ejemplo)}</span>` : "";
      rows += `<tr><td class="selcell">${N5.selBox(N5.selId.verbo(v))}</td>` +
        `<td class="jpcell jp"><b>${esc(dicLabel(v))}</b>${badge}</td>` +
        `<td class="num">${v.grupo === 3 ? "III" : v.grupo === 2 ? "II" : "I"}</td>` +
        `<td class="jpcell">${cell(v, "masu")}</td><td class="jpcell">${cell(v, "te")}</td>` +
        `<td class="jpcell">${cell(v, "ta")}</td><td class="jpcell">${cell(v, "nai")}</td>` +
        `<td>${esc(v.es)}${ej}</td></tr>`;
    }
    $("#vbTable tbody").innerHTML = rows || `<tr><td colspan="8" class="muted" style="text-align:center;padding:24px">Sin resultados</td></tr>`;
    $("#vbCount").textContent = n + " verbos";
  }

  N5.registerSection({
    id: "verbos", glyph: "動", titulo: "Verbos",
    init() {
      $("#vbSearch").addEventListener("input", render);
      $("#vbGroups").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        group = b.dataset.g;
        $$("#vbGroups button").forEach(x => x.classList.toggle("on", x === b));
        render();
      });
      render();
    },
    onRoute({ params }) {
      if (params.has("q")) { $("#vbSearch").value = params.get("q"); render(); }
    }
  });
})();
