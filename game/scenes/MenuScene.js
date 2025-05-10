
import Scene from './Scene.js';

class MenuScene extends Scene {
  constructor(game) {
    super(game);
    this.playButton = {
      x: SCREEN.WIDTH / 2 - 100,
      y: SCREEN.HEIGHT / 2 - 50,
      width: 200,
      height: 50
    };

    this.settingsButton = {
      x: SCREEN.WIDTH / 2 - 100,
      y: SCREEN.HEIGHT / 2 + 20,
      width: 200,
      height: 50
    };
  }

  update() {
    if (this.game.input.touch.active) {
      const touch = this.game.input.touch;
      if (this.isButtonClicked(this.playButton, touch.x, touch.y)) {
        this.game.startGame();
      }
      if (this.isButtonClicked(this.settingsButton, touch.x, touch.y)) {
        this.game.currentScene = new SettingsScene(this.game);
      }
    }
  }

  render() {
    const ctx = this.game.renderer.ctx;

    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);

    ctx.fillStyle = '#ecf0f1';
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Isometric Game', SCREEN.WIDTH / 2, SCREEN.HEIGHT / 3);

    this.drawButton(ctx, this.playButton, 'Play');
    this.drawButton(ctx, this.settingsButton, 'Settings');
  }

  drawButton(ctx, button, text) {
    ctx.fillStyle = '#3498db';
    ctx.fillRect(button.x, button.y, button.width, button.height);

    ctx.fillStyle = '#fff';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, button.x + button.width / 2, button.y + button.height / 2 + 8);
  }

  isButtonClicked(button, x, y) {
    return x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height;
  }
}

export default MenuScene;
