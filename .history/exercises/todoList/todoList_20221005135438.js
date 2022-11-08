window.addEventListener("load", function () {
  const from = document.querySelector(".todo-form");
  from.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});
