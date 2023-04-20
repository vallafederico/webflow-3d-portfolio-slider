import { Transform } from "ogl";
import Material from "./mat/rock";

export default class extends Transform {
  constructor(gl, { mesh, texture }) {
    super(gl);
    this.gl = gl;

    this.program = new Material(this.gl, {
      diff: texture,
    });

    this.mesh = mesh;
    this.mesh.children.forEach((item) => (item.program = this.program));
    this.mesh.setParent(this);
  }

  resize() {}

  render(t) {
    this.program.time = t;
    // this.position.x = Math.sin(t) * 0.2;
  }
}
