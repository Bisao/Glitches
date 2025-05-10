
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
    this.currentScene = {
      update: () => {},
      render: () => {
        this.renderer.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let y = 0; y < MAP_SIZE; y++) {
          for (let x = 0; x < MAP_SIZE; x++) {
            this.renderer.drawTile(x, y, this.map[y][x]);
          }
        }
      }
    };
  }

  start() {
    this.gameLoop();
  }
}
