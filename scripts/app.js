// Arranque de la aplicación: tema, furigana, pestañas, secciones y router.
// Debe cargarse el último.
"use strict";

(() => {
  const { $ } = N5;

  function initTema() {
    const saved = localStorage.getItem("n5-theme");
    if (saved) document.documentElement.dataset.theme = saved;
    $("#themeBtn").addEventListener("click", () => {
      const r = document.documentElement;
      const dark = r.dataset.theme ? r.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
      r.dataset.theme = dark ? "light" : "dark";
      localStorage.setItem("n5-theme", r.dataset.theme);
    });
  }

  function initFurigana() {
    const btn = $("#furiBtn");
    // Apagado tiene que verse a la primera: si no, parece que la guía no trae
    // furigana, cuando lo que pasa es que está oculta (y se recuerda por navegador).
    const apply = on => {
      document.body.classList.toggle("no-furigana", !on);
      btn.classList.toggle("on", on);
      btn.classList.toggle("off", !on);
      btn.textContent = on ? "ふりがな" : "ふりがな オフ";
      btn.title = on ? "Ocultar furigana" : "La furigana está oculta: pulsa para mostrarla";
    };
    let on = localStorage.getItem("n5-furigana") !== "off";
    apply(on);
    btn.addEventListener("click", () => {
      on = !on;
      localStorage.setItem("n5-furigana", on ? "on" : "off");
      apply(on);
    });
  }

  function initTabs() {
    $("#tabs").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      N5.go("#/" + b.dataset.t);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTema();
    initFurigana();
    initTabs();
    for (const [, s] of N5.sections) s.init?.();
    N5.initSearch();
    N5.startRouter();
    N5.initExport();   // después del router: necesita saber qué panel está activo
    N5.initAudio();
  });
})();
