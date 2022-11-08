// MVC
class Modol {
  constructor() {
    this.app = this.getElement("body");
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
