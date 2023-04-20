import { Texture } from "ogl";
import Material from "./mat/screen";

export default class Screen {
  constructor(gl, { mesh }) {
    this.gl = gl;

    this.mesh = mesh;

    this.program = new Material(this.gl);
    this.mesh.program = this.program;

    this.initSlider();
  }

  async initSlider() {
    this.currentIndex = 0;
    this.items = [...document.querySelectorAll("[data-video]")];
    this.videos = await this.loadVideos();

    this.textures = this.videos.map(() => {
      return new Texture(this.gl, {
        generateMipmaps: false,
      });
    });

    this.items.forEach((item, index) => {
      item.onclick = () => (this.currentIndex = index);
    });
  }

  async loadVideos() {
    const loaded = await Promise.all(
      this.items.map((item) => loadVideo(item.dataset.video))
    );
    return loaded;
  }

  render(t) {
    if (this.textures) {
      this.textures[this.currentIndex].image = this.videos[this.currentIndex];
      this.textures[this.currentIndex].needsUpdate = true;
      this.program.texture = this.textures[this.currentIndex];
    }
  }
}

// load utils
async function loadVideo(src) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.src = src;
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";

    video.play().then(() => {
      //   console.log("canplay");
      resolve(video);
    });
  });
}
