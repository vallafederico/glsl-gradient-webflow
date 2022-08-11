import { m4 } from "twgl.js";

export class Spinner {
  constructor() {
    this.spin = { x: 0, y: 0 };
    // main
    this.velocity = { x: 0.005, y: 0.005 };
    this.pointerDown = false;
    this.pointer = {
      x: 0,
      y: 0
    };

    this.rmat = m4.translation([0, 0, 0]);

    this.addEvents();
  }

  addEvents() {
    if ("ontouchmove" in window) {
      window.addEventListener("touchstart", this.mouseDown.bind(this));
      window.addEventListener("touchmove", this.mouseMove.bind(this));
      window.addEventListener("touchend", this.mouseUp.bind(this));
    } else {
      window.addEventListener("mousedown", this.mouseDown.bind(this));
      window.addEventListener("mousemove", this.mouseMove.bind(this));
      window.addEventListener("mouseup", this.mouseUp.bind(this));
    }
  }

  mouseDown(e) {
    this.pointerDown = true;
    this.pointer.x = e.touches ? e.touches[0].clientX : e.clientX;
    this.pointer.y = e.touches ? e.touches[0].clientY : e.clientY;
  }

  mouseMove(e) {
    if (!this.pointerDown) return;

    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    this.velocity.x += (x - this.pointer.x) * 0.002;
    this.velocity.y += (y - this.pointer.y) * 0.002;

    this.pointer.x = x;
    this.pointer.y = y;
  }

  mouseUp() {
    this.pointerDown = false;
  }

  render() {
    // raf
    this.velocity.x *= 0.95;
    this.velocity.y *= 0.95;

    const mx = m4.axisRotation([1, 0, 0], this.velocity.y);
    const my = m4.axisRotation([0, 1, 0], this.velocity.x + 1.5);
    m4.multiply(mx, my, this.rmat);
  }
}

/*
    this.spin.x +=
      this.velocity.x + Math.sign(this.velocity.x) * 0.005 * (1 - Number(this.pointerDown));
    this.spin.y +=
      this.velocity.y + Math.sign(this.velocity.y) * 0.005 * (1 - Number(this.pointerDown));
    */
