// MVC
class Modol {
  constructor() {}
}
class View {
  constructor() {}
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const add = new Controller(new Modol(), new View());
