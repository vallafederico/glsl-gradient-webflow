import {
  createProgramInfo,
  primitives,
  m4,
  setBuffersAndAttributes,
  setUniforms,
  drawBufferInfo
} from "twgl.js";

// import loadTexture from "../utils/texture-loader.js";
import shaders from "../mat/cam";

export default class {
  constructor(
    gl,
    data = {
      x: 0,
      y: 0,
      z: 0
    }
  ) {
    this.gl = gl;
    this.data = data;
    this.createProgram();

    this.mat = m4.create();
    m4.translation([this.data.x, this.data.y, this.data.z], this.mat);

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.setUniforms();
  }

  createProgram() {
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);
  }

  setBuffAtt() {
    this.bufferInfo = primitives.createPlaneBufferInfo(
      this.gl,
      1, // width
      1, // height
      1, // subdx
      1, // subdy
      m4.rotationX(Math.PI / 2)
    );

    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
  }

  setProgram(val) {
    return val || shaders;
  }

  setUniforms() {
    // this.texture = loadTexture(this.gl, LIB.img);

    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_vs: this.gl.vp.viewSize,
      u_camera: this.gl.camera.mat,
      u_id: this.mat,
      rand: this.data.rand
      //u_diff: this.texture
    };

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, this.uniforms);
  }

  render(t) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, {
      u_time: t
      //u_diff: this.texture
    });

    drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_id: this.mat,
      u_camera: gl.camera.mat
    });
  }
}
