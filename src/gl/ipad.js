import { Transform } from "ogl";
import Screen from "./screen.js";
import Material from "./mat/_model";

export default class extends Transform {
  constructor(gl, { mesh, texture }) {
    super(gl);
    this.gl = gl;

    this.program = new Material(this.gl, {
      diff: texture,
    });

    this.mesh = mesh;
    this.mesh.setParent(this);

    this.body = this.mesh.children[1].children[0];
    this.body.program = this.program;

    this.screen = new Screen(this.gl, {
      mesh: this.mesh.children[0].children[0],
    });

    // console.log(this.mesh.children);
    // this.mesh.position.x = 1;
    // this.load();
  }

  resize() {}

  render(t) {
    this.program.time = t;
    // this.position.x = Math.sin(t) * 0.2;
    this.screen?.render(t);
  }
}
