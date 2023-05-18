import Gl from "./modules/gl/gl.js";

export class App {
  constructor() {
    this.call = {
      mode: (name) => {
        console.log("light mode", name);
        this.gl.scene.quad.mode(name);
      },
      swap: (name, params = { d: 0 }) => {
        console.log("swap", name, params);
        this.gl.scene.quad.swap(name, params);
      }
    };

    this.gl = new Gl("c");
  }
}

window.Gradient = new App();

/** Interface */
// console.log(window.Gradient.call.mode("light"));

document.onclick = () => {
  window.Gradient.call.swap(null, { d: 1.2 });
};
