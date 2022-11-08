// MVC
class Modol {
  constructor() {}
}
class View {
  constructor() {
    this.app = this.getElement("body");
    this.todoWrapper = this.createlement("div", "todo");
    this.form = this.createlement("from", "todo");
    this.form.autocomplete = "off";

    this.input = this.createlement("input", "todo-input");
    this.input.type = "text";
    this.input.placeholder = "Enter your task";
    this.input.name = "todo";

    this.submit = this.createlement("button", "todo-submit");
    this.submit.type = "submit";
    this.submit.textContent = "Add";

    this.form.append(this.input, this.submit);

    this.todoList = this.createlement("div", "todo-list");
    this.todoWrapper.append(this.form, this.todoList);
    this.app.append(this.todoWrapper);
  }
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
