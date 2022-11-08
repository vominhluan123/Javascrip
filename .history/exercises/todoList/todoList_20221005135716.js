window.addEventListener("load", function () {
  const from = document.querySelector(".todo-form");
  from.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = this.elements["todo"].value;

    this.elements["todo"].value = "";
  });
});
