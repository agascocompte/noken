// Enrutado por hash. Cada sección, lección y búsqueda tiene URL propia:
//   #/vocabulario            #/vocabulario?q=neko&leccion=6
//   #/gramatica/l13          #/gramatica/tema/forma-te
//   #/verbos?q=noru          #/kanji?q=agua
"use strict";

(() => {
  const sections = new Map(); // id → definición

  N5.registerSection = def => sections.set(def.id, def);
  N5.sections = sections;

  function parse() {
    const h = location.hash.replace(/^#\/?/, "");
    const [path, query = ""] = h.split("?");
    const [id = "inicio", ...rest] = path.split("/").filter(Boolean);
    return { id, sub: rest.join("/"), params: new URLSearchParams(query) };
  }

  function activate() {
    const route = parse();
    const def = sections.get(route.id) || sections.get("inicio");
    for (const [id, s] of sections) {
      const el = document.getElementById("p-" + id);
      if (el) el.classList.toggle("active", s === def);
    }
    for (const b of N5.$$("#tabs button"))
      b.classList.toggle("active", b.dataset.t === def.id);
    def.onRoute?.(route);
    if (!route.params.toString() && !route.sub) window.scrollTo({ top: 0 });
    document.title = (def.id === "inicio" ? "" : def.titulo + " · ") + "Nōken 5 — Guía de estudio";
  }

  N5.go = hash => {
    if (location.hash === hash) activate();   // re-navegar a la misma ruta refresca
    else location.hash = hash;
  };

  N5.startRouter = () => {
    addEventListener("hashchange", activate);
    activate();
  };
})();
