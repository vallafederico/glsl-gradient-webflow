precision mediump float;

uniform sampler2D u_diff;

varying vec2 v_res;
varying float v_time;
varying vec2 v_uv;



void main() {



    gl_FragColor.rgb = vec3(v_uv, 1.);
    gl_FragColor.a = 1.;

    //vec4 img = texture2D(u_diff, v_uv);
    //gl_FragColor = img;
  
}

// vec2 st = gl_FragCoord.xy/v_res.xy;

