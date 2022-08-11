export default class {
  constructor(gl) {
    this.gl = gl;
    this.y = 0;
    this.isActive = this.canScroll;

    document.onscroll = (e) => this.onScroll(e);
  }

  onScroll(e) {
    if (!this.isActive) return;
    //console.log("scroll", e);

    this.y = window.scrollY * this.gl.vp.px;
  }

  resize(gl) {
    this.gl = gl;
    this.isActive = this.canScroll;
    this.y = window.scrollY * this.gl.vp.px;
  }

  get canScroll() {
    //console.log(document.documentElement.scrollHeight, window.innerHeight);
    return document.documentElement.scrollHeight > window.innerHeight;
  }
}
