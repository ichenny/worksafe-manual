(function () {
  var tabButtons = document.querySelectorAll(".tabswitch button");
  var panels = {
    manual: document.getElementById("panel-manual"),
    script: document.getElementById("panel-script"),
  };
  tabButtons.forEach(function (tabButton) {
    tabButton.addEventListener("click", function () {
      var target = tabButton.getAttribute("data-tab");
      tabButtons.forEach(function (button) {
        button.setAttribute("aria-selected", String(button === tabButton));
      });
      Object.keys(panels).forEach(function (key) {
        panels[key].hidden = key !== target;
      });
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  });
})();
