// MVC
class Modol {
  constructor() {}
}
class View {
  constructor() {}
  createlement(tag, className) {
    const eml = document.createElement(tag);
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const add = new Controller(new Modol(), new View());
