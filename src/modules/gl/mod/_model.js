import {
  createProgramInfo,
  // m4,
  setBuffersAndAttributes,
  setUniforms,
  drawBufferInfo,
  createBufferInfoFromArrays
} from "twgl.js";

import shaders from "../mat/model";
import { LIB } from "../../../assets/lib.js";
import { loadModelDeep } from "../utils/gltf-loader.js";

export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shouldRender = false;
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);

    this.tr = { x: 1, y: 0, z: 0, w: 0 };

    this.load();
  }

  async load() {
    const loaded = await loadModelDeep(LIB.m1);
    const final = loaded[0].arr;
    this.init(final);
  }

  init(arr) {
    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt(arr);
    this.setUniforms();
    this.shouldRender = true;
  }

  setBuffAtt(arr) {
    this.bufferInfo = createBufferInfoFromArrays(this.gl, arr);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
  }

  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_vs: this.gl.vp.viewSize,
      u_camera: this.gl.camera.mat
    };

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, this.uniforms);
  }

  render(t) {
    if (!this.shouldRender) return;

    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);

    setUniforms(this.programInfo, {
      u_time: t
    });

    drawBufferInfo(this.gl, this.bufferInfo);
  }

  resize(gl) {
    this.gl = gl;
    setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_camera: gl.camera.mat
    });
  }
}
