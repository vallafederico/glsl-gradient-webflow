import Quad from "./mod/_fsq";

export default class {
  constructor(gl) {
    this.gl = gl;

    this.computeParams();

    this.events();
    this.create();
  }

  events() {
    this.mouse = { x: 0, y: 0, wx: window.innerWidth, wy: window.innerHeight };

    document.addEventListener("mousemove", (e) => {
      this.mouse.x = (e.clientX / this.mouse.wx) * 2 - 1;
      this.mouse.y = -(e.clientY / this.mouse.wy) * 2 + 1;
      // console.log(this.mouse.x, this.mouse.y);
    });
  }

  create() {
    this.quad = new Quad(this.gl, this.params);
  }

  render(t, y) {
    if (this.quad) this.quad.render(t, this.mouse);
  }

  resize(gl) {
    this.gl = gl;
    this.mouse.wx = window.innerWidth;
    this.mouse.wy = window.innerHeight;

    if (this.quad) this.quad.resize(this.gl);
  }

  computeParams() {
    const wrapper = document.querySelector('[data-gradient="wrapper"]');

    const color = [
      parseFloat(wrapper.dataset.red) || 0.0,
      parseFloat(wrapper.dataset.green) || 0.33,
      parseFloat(wrapper.dataset.blue) || 0.66
    ];

    this.params = {
      test: wrapper.hasAttribute("data-test"),
      // shader
      multx: parseFloat(wrapper.dataset.multx) || 0.2,
      multy: parseFloat(wrapper.dataset.multy) || 0.8,
      hue: parseFloat(wrapper.dataset.hue) || 0,
      brightness: parseFloat(wrapper.dataset.brightness) || 0.8,
      mouse: parseFloat(wrapper.dataset.mouse) || 1,
      scale: parseFloat(wrapper.dataset.scale) || 0.2,
      noise: parseFloat(wrapper.dataset.noise) || 1,
      color: color,
      bw: parseFloat(wrapper.dataset.bw) || 0,
      // javascript
      time: parseFloat(wrapper.dataset.time) || 1
    };

    // console.log(this.params);
  }
}
