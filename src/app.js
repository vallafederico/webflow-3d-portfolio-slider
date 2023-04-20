import Gl from "./gl/gl.js";

class App {
  constructor() {
    this.init();

    console.log("hello app");
  }

  init() {
    this.gl = new Gl();
  }
}

window.app = new App();
