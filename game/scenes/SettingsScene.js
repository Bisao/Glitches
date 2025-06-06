
import Scene from './Scene.js';
import MenuScene from './MenuScene.js';
import { SCREEN } from '../constants.js';

class SettingsScene extends Scene {
  constructor(game) {
    super(game);
    this.volumeLevel = 100;
    this.controlType = 'keyboard';
    this.backButton = {
      x: 20,
      y: 20,
      width: 100,
      height: 40
    };
    this.volumeSlider = {
      x: SCREEN.WIDTH / 2 - 100,
      y: SCREEN.HEIGHT / 2 - 50,
      width: 200,
      height: 20
    };
    this.controlToggle = {
      x: SCREEN.WIDTH / 2 - 100,
      y: SCREEN.HEIGHT / 2 + 20,
      width: 200,
      height: 40
    };
  }

  isButtonClicked(button, x, y) {
    return x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height;
  }

  update() {
    if (this.game.input.touch.active) {
      const touch = this.game.input.touch;
      if (this.isButtonClicked(this.backButton, touch.x, touch.y)) {
        this.game.currentScene = new MenuScene(this.game);
      }
      if (this.isButtonClicked(this.volumeSlider, touch.x, touch.y)) {
        this.volumeLevel = ((touch.x - this.volumeSlider.x) / this.volumeSlider.width) * 100;
        this.volumeLevel = Math.max(0, Math.min(100, this.volumeLevel));
      }
      if (this.isButtonClicked(this.controlToggle, touch.x, touch.y)) {
        this.controlType = this.controlType === 'keyboard' ? 'touch' : 'keyboard';
      }
    }
  }

  render() {
    const ctx = this.game.renderer.ctx;
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);

    ctx.fillStyle = '#ecf0f1';
    ctx.font = '36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Settings', SCREEN.WIDTH / 2, SCREEN.HEIGHT / 4);

    this.drawButton(ctx, this.backButton, 'Back');
    this.drawVolumeSlider(ctx);
    this.drawControlToggle(ctx);
  }

  drawButton(ctx, button, text) {
    ctx.fillStyle = '#3498db';
    ctx.fillRect(button.x, button.y, button.width, button.height);
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, button.x + button.width / 2, button.y + button.height / 2 + 6);
  }

  drawVolumeSlider(ctx) {
    ctx.fillStyle = '#7f8c8d';
    ctx.fillRect(this.volumeSlider.x, this.volumeSlider.y, this.volumeSlider.width, this.volumeSlider.height);
    ctx.fillStyle = '#2ecc71';
    ctx.fillRect(this.volumeSlider.x, this.volumeSlider.y, this.volumeSlider.width * (this.volumeLevel / 100), this.volumeSlider.height);
    ctx.fillStyle = '#fff';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Volume: ${Math.round(this.volumeLevel)}%`, this.volumeSlider.x + this.volumeSlider.width / 2, this.volumeSlider.y - 10);
  }

  drawControlToggle(ctx) {
    this.drawButton(ctx, this.controlToggle, `Controls: ${this.controlType}`);
  }
}

export default SettingsScene;
