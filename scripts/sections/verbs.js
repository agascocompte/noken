// Sección Verbos: tabla de conjugación con partícula regida y ejemplo.
// Filtros combinables: grupo, partícula regida y búsqueda (esta ordena por
// relevancia; las formas conjugadas casan por moras, nunca a media mora).
"use strict";

(() => {
  const { $, $$, esc, rubyEsc, normQuery } = N5;
  let group = "all", part = "all";

  // 32 verbos rigen dos partículas («おくる 〜を／〜に»): al filtrar por を
  // tienen que salir también, así que se compara contra cada una por separado.
  const particulasDe = v => v.particula === "—" ? [] : v.particula.split("／").map(p => p.replace(/^〜/, "").trim());
  const cuadra = v => part === "all" || (part === "sin" ? v.particula === "—" : particulasDe(v).includes(part));

  const dicLabel = v => v.kana + (v.kanji ? " " + v.kanji : "") + (v.grupoTrampa ? " ★" : "");
  const cell = (v, forma) => esc(v[forma]) + ((v.irregularEn || []).includes(forma) ? " ★" : "");

  function render() {
    const q = normQuery($("#vbSearch").value);

    const delFiltro = N5.data.verbs.filter(v =>
      (group === "all" || String(v.grupo) === group) && cuadra(v));
    const finales = N5.rankea(delFiltro, q,
      v => [v.kana, v.kanji, v.masu, v.te, v.ta, v.nai], v => v.es);

    let rows = "", n = 0;
    for (const v of finales) {
      n++;
      const badge = v.particula !== "—"
        ? `<span class="pbadge${v.particulaDestacada ? " hot" : ""}">${esc(v.particula)}</span>` : "";
      const ej = v.ejemplo ? `<span class="vej jp">${rubyEsc(v.ejemplo)}</span>` : "";
      rows += `<tr><td class="selcell">${N5.selBox(N5.selId.verbo(v))}</td>` +
        `<td class="jpcell jp"><b>${esc(dicLabel(v))}</b>${N5.fuenteHTML(v)}${badge}</td>` +
        `<td class="num">${v.grupo === 3 ? "III" : v.grupo === 2 ? "II" : "I"}</td>` +
        `<td class="jpcell">${cell(v, "masu")}</td><td class="jpcell">${cell(v, "te")}</td>` +
        `<td class="jpcell">${cell(v, "ta")}</td><td class="jpcell">${cell(v, "nai")}</td>` +
        `<td>${esc(v.es)}${ej}</td></tr>`;
    }
    $("#vbTable tbody").innerHTML = rows || `<tr><td colspan="${$$("#vbTable thead th").length}" class="muted" style="text-align:center;padding:24px">Sin resultados</td></tr>`;
    $("#vbCount").textContent = n + " verbos";
  }

  N5.registerSection({
    id: "verbos", seleccionable: true, titulo: "Verbos",
    init() {
      // Las pastillas salen de los datos, ordenadas por frecuencia; las partículas
      // de un solo verbo (〜く de なる, 〜について de かんがえる) no merecen filtro.
      const cuenta = new Map();
      for (const v of N5.data.verbs) for (const p of particulasDe(v)) cuenta.set(p, (cuenta.get(p) || 0) + 1);
      const sinParticula = N5.data.verbs.filter(v => v.particula === "—").length;
      $("#vbParticles").innerHTML =
        `<button data-p="all" class="on">Todas</button>` +
        [...cuenta].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1])
          .map(([p, n]) => `<button data-p="${esc(p)}" class="jp">〜${esc(p)} <span class="muted">${n}</span></button>`).join("") +
        (sinParticula ? `<button data-p="sin">Sin partícula <span class="muted">${sinParticula}</span></button>` : "");

      $("#vbSearch").addEventListener("input", render);
      $("#vbGroups").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        group = b.dataset.g;
        $$("#vbGroups button").forEach(x => x.classList.toggle("on", x === b));
        render();
      });
      $("#vbParticles").addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        part = b.dataset.p;
        $$("#vbParticles button").forEach(x => x.classList.toggle("on", x === b));
        render();
      });
      render();
    },
    onRoute({ params }) {
      if (params.has("particula")) {
        // sin pastilla para esa partícula el filtro quedaría sin forma de deshacerse
        const pedida = params.get("particula");
        part = [...$$("#vbParticles button")].some(b => b.dataset.p === pedida) ? pedida : "all";
        $$("#vbParticles button").forEach(x => x.classList.toggle("on", x.dataset.p === part));
      }
      if (params.has("q")) $("#vbSearch").value = params.get("q");
      if (params.has("q") || params.has("particula")) render();
    }
  });
})();
