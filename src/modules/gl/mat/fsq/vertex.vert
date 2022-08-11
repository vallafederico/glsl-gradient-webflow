attribute vec4 position;

varying vec2 v_xy;

void main() {
  gl_Position = position;
  v_xy = position.xy;
}
  