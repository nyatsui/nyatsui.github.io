// Picks ja/en from the saved choice or the browser language, and wires up the toggle button.
(function () {
  var root = document.documentElement;
  var KEY = "lang";

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var initial = saved || ((navigator.language || "ja").toLowerCase().indexOf("ja") === 0 ? "ja" : "en");
  apply(initial);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".lang-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "ja" ? "en" : "ja";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  });
})();
