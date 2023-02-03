import * as THREE from "three";
import Experience from "../Experience";
import Cube from "./Cube";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.sizes = this.experience.sizes;

    this.cube = new Cube();
  }

  resize() {}

  update() {}
}
