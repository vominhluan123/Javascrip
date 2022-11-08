window.addEventListener("load", function () {
  const from = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todos = [];
  function createTodoitem(title) {
    const template = ` <div class="todo-item">
    <span class="todo-text">${title}</span>
    <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
  </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  from.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = this.elements["todo"].value;
    createTodoitem(todoVal);
    todos.push(todoVal);
    // save to localStorage
    this.elements["todo"].value = "";
  });
});
