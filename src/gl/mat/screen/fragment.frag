precision highp float;

uniform sampler2D u_diff;

varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;


void main() {
    vec2 map_uv = v_uv;
    map_uv -= vec2(.5);
    map_uv.y *= 1.5;
    map_uv *= .85;
    map_uv += vec2(.5);

    vec4 diff = texture2D(u_diff, map_uv);

    gl_FragColor.rgb = diff.rgb;
    gl_FragColor.a = 1.0;
}
