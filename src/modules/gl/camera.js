import * as twgl from "twgl.js";

export default class {
  constructor(
    gl,
    data = {
      z: -9,
      fov: 0.6,
      near: 1,
      far: 1024
    }
  ) {
    data.fov = degToRad(35);
    this.camera = data;
    // this.get(gl);
  }

  get(gl) {
    this.camera.mat = twgl.m4.translate(
      twgl.m4.perspective(
        this.camera.fov,
        gl.canvas.width / gl.canvas.height,
        this.camera.near,
        this.camera.far
      ),
      [0, 0, this.camera.z]
    );

    return this.camera;
  }
}

function degToRad(d) {
  return (d * Math.PI) / 180;
}
