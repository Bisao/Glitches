import Scene from './Scene.js';
import { SCREEN } from '../constants.js';

class GameScene extends Scene {
  constructor(game) {
    super(game);
  }

  update() {
    // Game logic update
  }

  render() {
    const ctx = this.game.renderer.ctx;
    ctx.fillStyle = '#34495e';
    ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);

    ctx.fillStyle = '#fff';
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Scene', SCREEN.WIDTH / 2, SCREEN.HEIGHT / 2);
  }
}

export default GameScene;