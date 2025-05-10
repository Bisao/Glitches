
class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = SCREEN.WIDTH;
    this.canvas.height = SCREEN.HEIGHT;
  }

  drawTile(x, y, color) {
    const iso = toIsometric(x, y);
    const screenX = this.canvas.width / 2 + iso.x;
    const screenY = this.canvas.height / 4 + iso.y;

    this.ctx.beginPath();
    this.ctx.moveTo(screenX, screenY);
    this.ctx.lineTo(screenX + TILE_WIDTH / 2, screenY + TILE_HEIGHT / 2);
    this.ctx.lineTo(screenX, screenY + TILE_HEIGHT);
    this.ctx.lineTo(screenX - TILE_WIDTH / 2, screenY + TILE_HEIGHT / 2);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.stroke();
  }
}
