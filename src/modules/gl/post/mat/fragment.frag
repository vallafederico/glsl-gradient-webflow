precision mediump float;

uniform vec2 u_res;
uniform float u_time;

uniform sampler2D u_diff;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;

  vec3 img = texture2D(u_diff, uv).rgb;

  //img.rg += uv * .1;

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = 1.;
}
  