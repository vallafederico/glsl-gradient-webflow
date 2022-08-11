#define PI 3.1415926538
attribute vec4 position;
attribute vec2 texcoord;

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

// rotation
mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}


void main() {
  vec4 pos = position;
  //pos.xy *= u_vs;

  pos.xyz = rotate(pos.xyz, vec3(1., 1., 0.), sin(u_time * .2) * 10.);
  pos.xyz *= .5;
  pos.z += 1.;


  gl_Position = u_camera * vec4(pos);

  v_res = u_res;
  v_time = u_time;
  v_uv = texcoord;

  v_num0 = u_num0;

  /* TEST OBJ */ 
  v_TEST = vec3(0., 0., 0.);
}

  
