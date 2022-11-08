// MVC
class Modol {
  constructor() {}
}
class View {
  constructor() {}
  createlement(tag, className) {
    const eml = document.createElement(tag);
    if (className) {
      eml.classList.add(className);
    }
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const add = new Controller(new Modol(), new View());
