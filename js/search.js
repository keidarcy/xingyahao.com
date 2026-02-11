(function () {
  function normalize(text) {
    return (text || "").toLowerCase().trim();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("[data-search-input]");
    if (!input) {
      return;
    }

    var items = Array.prototype.slice.call(document.querySelectorAll("[data-search-item]"));
    var emptyState = document.querySelector("[data-search-empty]");

    function runFilter() {
      var query = normalize(input.value);
      var visibleCount = 0;

      items.forEach(function (item) {
        var text = normalize(item.getAttribute("data-search-text"));
        var visible = query === "" || text.indexOf(query) !== -1;
        item.style.display = visible ? "" : "none";
        if (visible) {
          visibleCount += 1;
        }
      });

      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    }

    input.addEventListener("input", runFilter);
    runFilter();
  });
})();
