(function () {
  var tabButtons = document.querySelectorAll(".tabswitch button");
  var panels = {
    manual: document.getElementById("panel-manual"),
    script: document.getElementById("panel-script"),
  };

  // 교육 진행 스크립트 탭은 진행자 본인만 보도록 기본적으로 숨겨두고,
  // 아는 사람만 ?script 쿼리 파라미터로 접속했을 때만 탭 버튼을 드러낸다.
  if (new URLSearchParams(window.location.search).has("script")) {
    var scriptTabButton = document.querySelector('[data-tab="script"]');
    if (scriptTabButton) scriptTabButton.hidden = false;
  }

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
