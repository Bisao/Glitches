
import Scene from './Scene.js';
import { SCREEN, MAP_SIZE } from '../constants.js';

class GameScene extends Scene {
  constructor(game) {
    super(game);
    this.map = Array(MAP_SIZE).fill().map(() => Array(MAP_SIZE).fill('#a3d6d4'));
    this.cameraOffset = { x: SCREEN.WIDTH / 2, y: 100 };
    this.tileWidth = 64;
    this.tileHeight = 32;
  }

  update() {
    if (this.game.input.touch.active) {
      const touch = this.game.input.touch;
      // Movimentação da câmera com toque
      this.cameraOffset.x = touch.x - SCREEN.WIDTH / 2;
      this.cameraOffset.y = touch.y - SCREEN.HEIGHT / 2;
    }
  }

  render() {
    const ctx = this.game.renderer.ctx;
    
    // Limpa a tela
    ctx.fillStyle = '#87CEEB'; // Cor do céu
    ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    
    // Desenha o mapa isométrico
    for (let y = 0; y < MAP_SIZE; y++) {
      for (let x = 0; x < MAP_SIZE; x++) {
        this.drawIsometricTile(ctx, x, y, this.map[y][x]);
      }
    }
  }

  drawIsometricTile(ctx, x, y, color) {
    const zoom = this.game.input.zoom.level;
    const isoX = ((x - y) * this.tileWidth / 2 * zoom) + this.cameraOffset.x;
    const isoY = ((x + y) * this.tileHeight / 2 * zoom) + this.cameraOffset.y;

    if (isoX < -this.tileWidth || isoX > SCREEN.WIDTH + this.tileWidth ||
        isoY < -this.tileHeight || isoY > SCREEN.HEIGHT + this.tileHeight) {
      return; // Não renderiza tiles fora da tela
    }

    ctx.save();
    ctx.translate(isoX, isoY);

    // Desenha o tile isométrico
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.tileWidth / 2, this.tileHeight / 2);
    ctx.lineTo(0, this.tileHeight);
    ctx.lineTo(-this.tileWidth / 2, this.tileHeight / 2);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();

    ctx.restore();
  }
}

export default GameScene;
