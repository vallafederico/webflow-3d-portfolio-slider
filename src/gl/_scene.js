import { Transform } from "ogl";

import Model from "./rock.js";
import Ipad from "./ipad.js";

export default class extends Transform {
  constructor(gl, data = {}) {
    super();
    this.gl = gl;
    this.isOn = true;

    const scale = 0.3;
    this.scale.set(scale, scale, scale);

    this.rotation.y = 0.3;
    this.position.y = 0.1;
  }

  create() {
    this.rock = new Model(this.gl, {
      mesh: window.assets.model.scene[0],
      texture: window.assets.rockTexture,
    });

    this.ipad = new Ipad(this.gl, {
      mesh: window.assets.model.scene[1],
      texture: window.assets.ipadTexture,
    });

    this.rock.setParent(this);
    this.ipad.setParent(this);
  }

  render(t) {
    if (!this.isOn) return;
    this.ipad?.render();

    // if (this.quad) this.quad.render(t);
    // if (this.quads) this.quads.forEach((item) => item.render(t));
  }

  resize(vp) {
    this.vp = vp;
    // if (this.quad) this.quad.resize(vp);
  }
}
