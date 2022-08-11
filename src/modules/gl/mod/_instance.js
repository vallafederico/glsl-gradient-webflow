import {
  addExtensionsToContext,
  createProgramInfo,
  primitives,
  m4,
  createBufferInfoFromArrays,
  createVertexArrayInfo,
  createTexture,
  setUniforms,
  drawBufferInfo,
  setBuffersAndAttributes
} from "twgl.js";

import shaders from "../mat/instanced";

import { LIB } from "../../../assets/lib.js";
//console.log(LIB);

export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);

    // instanced code
    addExtensionsToContext(this.gl);
    if (!this.gl.drawArraysInstanced || !this.gl.createVertexArray) {
      alert("need drawArraysInstanced and createVertexArray");
      return;
    }

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.calcAttrib();
    this.setUniforms();
  }

  setBuffAtt() {
    this.arrays = primitives.createPlaneVertices(
      1, // width
      1, // height
      1, // subdx
      1, // subdy
      m4.rotationX(Math.PI / 2)
    );
  }

  calcAttrib() {
    this.instNumber = 2;

    // additional instances attributes - translation
    const translations = [0.5, 0.2, -1, 0];

    Object.assign(this.arrays, {
      ai_trasl: {
        numComponents: 2,
        data: translations,
        divisor: 1
      }
    });

    this.bufferInfo = createBufferInfoFromArrays(this.gl, this.arrays);
    this.vertexArrayInfo = createVertexArrayInfo(this.gl, this.programInfo, this.bufferInfo);
    //twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
  }

  setUniforms() {
    this.textures = {
      diff0: createTexture(this.gl, {
        src: LIB.img,
        mag: this.gl.NEAREST
      })
    };

    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_vs: this.gl.vp.viewSize,
      u_camera: this.gl.camera.mat,
      u_num0: 0,
      u_diff: this.textures.diff0
    };

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, this.uniforms);
  }

  render(t) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.vertexArrayInfo);
    setUniforms(this.programInfo, { u_time: t });

    drawBufferInfo(this.gl, this.bufferInfo);

    drawBufferInfo(
      this.gl,
      this.vertexArrayInfo,
      this.gl.TRIANGLES,
      this.vertexArrayInfo.numelements,
      0,
      this.instNumber
    );
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_camera: gl.camera.mat
    });
  }
}

/* Helpers */
//const tmat = m4.translation([1, 2, 3]);
