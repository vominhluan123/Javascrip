window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  input.addEventListener("keypress", handlerHighlight);
  let filter = "";
  function handlerHighlight(e) {
    filter = filter + e.key;
    filter = filter.toLowerCase();
  }
});
