window.addEventListener("load", function () {
  const from = document.querySelector(".todo-form");
  function createTodoitem() {
    const template = ` <div class="todo-item">
    <span class="todo-text">${title}</span>
    <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
  </div>`;
  }
  from.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = this.elements["todo"].value;

    this.elements["todo"].value = "";
  });
});
