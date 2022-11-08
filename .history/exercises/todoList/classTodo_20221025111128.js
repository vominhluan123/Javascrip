// MVC
class Modol {
  constructor() {}
}
class View {
  constructor() {
    this.app = this.getElement("body");
    this.todoWrapper = this.createElement("div", "todo");
    this.form = this.createElement("from", "todo-form");
    this.form.autocomplete = "off";

    this.input = this.createElement("input", "todo-input");
    this.input.type = "text";
    this.input.placeholder = "Enter your task";
    this.input.name = "todo";

    this.submit = this.createElement("button", "todo-submit");
    this.submit.type = "submit";
    this.submit.textContent = "Add";

    this.form.append(this.input, this.submit);

    this.todoList = this.createElement("div", "todo-list");
    this.todoWrapper.append(this.form, this.todoList);
    this.app.append(this.todoWrapper);
  }
  createElement(tag, className) {
    const elm = document.createElement(tag);
    if (className) elm.classList.add(className);
    return elm;
  }
  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }

  get _todoValue() {
    return this.input.value;
  }
  _resetValue() {
    this.input.value = "";
  }
  displayTodos() {
    if (todos.length > 0) {
      todos.forEach((todoText) => {
        const todoItem = this.createElement("div", "todo-item");
        const span = this.createElement("span", "todo-text");
        span.textContent = todoText;
        const icon = this.createElement("i");
        icon.className = "fa fa-trash todo-remove";

        todoItem.append(span, icon);

        this.todoList.append(todoItem);
      });
    }
  }

  viewAddTodo;
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const add = new Controller(new Modol(), new View());
