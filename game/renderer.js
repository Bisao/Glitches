
import { toIsometric } from './utils.js';
import { TILE_WIDTH, TILE_HEIGHT } from './constants.js';

class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  drawTile(x, y, color) {
    const pos = toIsometric(x, y);
    const screenX = this.canvas.width / 2 + pos.x;
    const screenY = 100 + pos.y;

    this.ctx.beginPath();
    this.ctx.moveTo(screenX, screenY);
    this.ctx.lineTo(screenX + TILE_WIDTH / 2, screenY + TILE_HEIGHT / 2);
    this.ctx.lineTo(screenX, screenY + TILE_HEIGHT);
    this.ctx.lineTo(screenX - TILE_WIDTH / 2, screenY + TILE_HEIGHT / 2);
    this.ctx.closePath();

    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.strokeStyle = '#000';
    this.ctx.stroke();
  }
}

export default Renderer;
