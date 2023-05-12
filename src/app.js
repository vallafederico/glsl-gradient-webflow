import Gl from "./modules/gl/gl.js";

export class App {
  constructor() {
    this.call = {
      mode: (name) => {
        console.log("light mode", name);
        this.gl.scene.quad.mode(name);
      }
    };

    this.gl = new Gl("c");
  }
}

window.Gradient = new App();

/** Interface */
// console.log(window.Gradient.call.mode("light"));

// document.onclick = () => {
//   window.Gradient.call.mode();
// };
