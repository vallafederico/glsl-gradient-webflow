#define PI 3.1415926538
attribute vec4 position;
attribute vec2 texcoord;
attribute vec2 ai_trasl;

uniform mat4 u_camera;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_vs;

uniform float u_num0;

varying vec2 v_res;
varying float v_time;
varying vec2 v_uv;

varying float v_num0;
varying vec3 v_TEST;


void main() {
  vec4 pos = position;
  pos.xy += ai_trasl.xy;


  gl_Position = u_camera * vec4(pos);

  v_res = u_res;
  v_time = u_time;
  v_uv = texcoord;
}

  
