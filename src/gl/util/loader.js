import { ASSETS } from "../asset/";
import { loadTexture } from "./texture-loader";
import { loadModel } from "./model-loader";

export default class {
  constructor(gl) {
    this.gl = gl;
  }

  async load() {
    console.time("load::");

    const [model, rockTexture, ipadTexture] = await Promise.all([
      loadModel(this.gl, ASSETS.model),
      loadTexture(this.gl, ASSETS.rockTexture),
      loadTexture(this.gl, ASSETS.ipadTexture),
    ]);

    rockTexture.flipY = false;
    ipadTexture.flipY = false;

    console.timeEnd("load::");

    return {
      model,
      rockTexture,
      ipadTexture,
    };
  }
}
