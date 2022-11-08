// MVC
class Modol {
  constructor() {}
}
class View {
  constructor() {}
  createlement(tag, className) {
    const eml = document.createElement(tag);
    if (className) eml.classList.add(className);
    return eml;
  }
  getElement(selector) {
    const eml = document.querySelector(selector);
    return eml;
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const add = new Controller(new Modol(), new View());
