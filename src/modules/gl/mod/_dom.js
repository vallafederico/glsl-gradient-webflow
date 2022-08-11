import {
  createProgramInfo,
  drawBufferInfo,
  m4,
  setBuffersAndAttributes,
  setUniforms
} from "twgl.js";

import { calcDomPosition } from "../utils/dom-utils.js";

import Quad from "./_quad.js";
import shaders from "../mat/dom/";

export default class extends Quad {
  constructor(gl, ref) {
    super(gl, {});

    this.gl = gl;
    this.ref = ref;
    // this.texture = loadTexture(this.gl, LIB.img);
  }

  createProgram() {
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);
  }

  resize(gl) {
    const pos = calcDomPosition(this.ref, this.gl.vp);
    this.gl = gl;

    m4.translation([pos.x, pos.y, 0], this.mat);

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_id: this.mat,
      u_camera: gl.camera.mat,
      u_scale: [pos.width, pos.height]
    });
  }

  render(t, y) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, {
      u_time: t,
      u_id: this.mat,
      u_y: y
      // u_diff: this.texture
    });

    drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }
}
