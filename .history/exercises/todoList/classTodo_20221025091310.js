// MVC
class Modol {
  constructor() {
    this.app = this.getElement("body");
    this.todoWrapper = this.createElement("div", "todo");
    this.form = this.createElement("from", "todo");
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
}
class View {
  constructor() {}
  createlement(tag, className) {
    const elm = document.createElement(tag);
    if (className) eml.classList.add(className);
    return elm;
  }
  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const add = new Controller(new Modol(), new View());
