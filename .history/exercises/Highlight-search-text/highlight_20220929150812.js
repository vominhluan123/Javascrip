window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("keypress", handlerHighlight);
  let filter = "";
  function handlerHighlight(e) {
    filter = filter + e.key;
    filter = filter.toLowerCase();
    [...items].forEach((item) => {
      const text = item.textContent;
      const index = text.toLowerCase().indexOf(filter);
      if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}`;
      }
    });
  }
});
