import {
  createBufferInfoFromArrays,
  createProgramInfo,
  drawBufferInfo,
  setBuffersAndAttributes,
  setUniforms
} from "twgl.js";
import GUI from "lil-gui";

import shaders from "../mat/fsq";

export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);
    console.log(this.data);

    if (this.data.test) this.initGui();

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.setUniforms();
  }

  setBuffAtt() {
    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };
    this.bufferInfo = createBufferInfoFromArrays(this.gl, arrays);
  }

  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0,
      u_params: [this.data.multx, this.data.multy, this.data.hue, this.data.brightness],
      u_params2: [this.data.mouse, this.data.scale, this.data.noise, this.data.bw],
      u_color: this.data.color
    };

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, this.uniforms);
  }

  render(t, { x, y }) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, {
      u_time: t * this.data.time,
      u_mouse: [x, y]
    });

    drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }

  initGui() {
    this.gui = new GUI();
    this.gui
      .add(this.data, "multx", 0, 10)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui
      .add(this.data, "multy", 0, 10)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui
      .add(this.data, "hue", 0, 1)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui
      .add(this.data, "brightness", 0, 5)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui
      .add(this.data, "mouse", -1, 1)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui
      .add(this.data, "scale", 0, 10)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui
      .add(this.data, "noise", 0, 10)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui
      .add(this.data, "bw", 0, 1)
      .onChange(() => {
        this.setUniforms();
      })
      .listen();
    this.gui.add(this.data, "time", 0, 1);
  }
}
