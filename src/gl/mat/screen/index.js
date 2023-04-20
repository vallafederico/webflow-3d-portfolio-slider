import { Program, Texture } from "ogl";
import vertex from "./vertex.vert";
import fragment from "./fragment.frag";

export default class extends Program {
  constructor(gl, options = {}) {
    super(gl, {
      vertex: vertex,
      fragment: fragment,
    });

    // console.log(this.uniforms);
    this.transparent = null;
    this.cullFace = null;

    this.uniforms = {
      u_time: { value: 0 },
      u_diff: { value: options.diff || new Texture(this.gl) },
    };
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set texture(t) {
    this.uniforms.u_diff.value = t;
  }
}
