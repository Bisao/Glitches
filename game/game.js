
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';
import Renderer from './renderer.js';
import InputHandler from './input.js';
import { MAP_SIZE } from './constants.js';

class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.renderer = new Renderer(this.canvas);
    this.input = new InputHandler();
    this.map = Array(MAP_SIZE).fill().map(() => Array(MAP_SIZE).fill('#a3d6d4'));
    this.currentScene = new MenuScene(this);
  }

  update() {
    this.currentScene.update();
  }

  render() {
    this.renderer.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.currentScene.render();
  }

  gameLoop() {
    this.update();
    this.render();
    requestAnimationFrame(() => this.gameLoop());
  }

  startGame() {
    this.currentScene = new GameScene(this);
  }

  start() {
    this.gameLoop();
  }
}

export default Game;
