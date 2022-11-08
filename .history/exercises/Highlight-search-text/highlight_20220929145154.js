window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("keypress", handlerHighlight);
  let filter = "";
  function handlerHighlight(e) {
    filter = filter + e.key;
    filter = filter.toLowerCase();
    [...items].forEach((item) => {
      const text = items.textContent.toLowerCase();
      const index = text.indexOf(filter);
      if (index >= 0 && text.startsWith(filter.charAt)) {
      }
    });
  }
});
