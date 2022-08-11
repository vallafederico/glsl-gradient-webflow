import Quad from "./quad";

export default class {
  constructor(gl) {
    this.gl = gl;
  }

  create() {
    // CREATE FRAMEBUFFER
    this.fbi = this.gl.createFramebuffer();

    // CREATE TEXTURE
    this.texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.gl.canvas.width,
      this.gl.canvas.height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      null
    );

    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

    // CREATE RENDER BUFFER
    this.depthBuffer = this.gl.createRenderbuffer();
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
    this.gl.renderbufferStorage(
      this.gl.RENDERBUFFER,
      this.gl.DEPTH_COMPONENT16,
      this.gl.canvas.width,
      this.gl.canvas.height
    );

    this.attach();
    this.createPlane();
    this.unbind();

    //this.isActive = true;
  }

  /**
   * FBO ops
   */

  attach() {
    // attach texture and bugger to FBO -- BIND!
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbi);

    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      this.texture,
      0
    );

    this.gl.framebufferRenderbuffer(
      this.gl.FRAMEBUFFER,
      this.gl.DEPTH_ATTACHMENT,
      this.gl.RENDERBUFFER,
      this.depthBuffer
    );
  }

  unbind() {
    // unbind buffer object
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
  }

  /**
   * Geometry ops
   */

  createPlane() {
    this.quad = new Quad(this.gl);
  }

  /**
   * Render Ops
   */

  setupRender() {
    if (!this.isActive) return;
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbi);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
  }

  render(t) {
    if (!this.isActive) return;
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    if (this.quad) this.quad.render(t, this.texture);
  }

  resize(gl) {
    this.gl = gl;
    this.create();
    if (this.quad) this.quad.resize(this.gl);
  }
}
