
import Scene from './Scene.js';

class GameScene extends Scene {
  constructor(game) {
    super(game);
    this.map = Array(MAP_SIZE).fill().map(() => Array(MAP_SIZE).fill('#a3d6d4'));
    this.cameraOffset = { x: 0, y: 0 };
  }

  update() {
    if (this.game.input.keys['ArrowLeft']) this.cameraOffset.x += 5;
    if (this.game.input.keys['ArrowRight']) this.cameraOffset.x -= 5;
    if (this.game.input.keys['ArrowUp']) this.cameraOffset.y += 5;
    if (this.game.input.keys['ArrowDown']) this.cameraOffset.y -= 5;
  }

  render() {
    const ctx = this.game.renderer.ctx;
    ctx.save();
    ctx.translate(this.cameraOffset.x, this.cameraOffset.y);
    
    ctx.clearRect(-this.cameraOffset.x, -this.cameraOffset.y, SCREEN.WIDTH, SCREEN.HEIGHT);
    
    for (let y = 0; y < MAP_SIZE; y++) {
      for (let x = 0; x < MAP_SIZE; x++) {
        this.game.renderer.drawTile(x, y, this.map[y][x]);
      }
    }
    
    ctx.restore();
  }
}

export default GameScene;
