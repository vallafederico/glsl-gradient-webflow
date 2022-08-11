import Gl from "./modules/gl/gl.js";

export class App {
  constructor() {
    this.gl = new Gl("c");
  }
}

new App();
