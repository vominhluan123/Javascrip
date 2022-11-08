window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("keypress", handlerHighlight);
  let filter = "";
  function handlerHighlight(e) {
    filter = filter + e.key;
    filter = filter.toLowerCase();
  }
});
