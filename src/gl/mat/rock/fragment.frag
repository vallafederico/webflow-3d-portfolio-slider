precision highp float;

uniform sampler2D u_diff;

varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;
varying vec3 v_pos;



void main() {

    vec4 diff = texture2D(u_diff, v_uv);

    gl_FragColor.rgb = diff.rgb;
    gl_FragColor.a = 1.0;
}
