
import Scene from './Scene.js';
import { SCREEN } from '../constants.js';
import SettingsScene from './SettingsScene.js';
import GameScene from './GameScene.js';

class MenuScene extends Scene {
  constructor(game) {
    super(game);
    const ui = SCREEN.MOBILE ? SCREEN.UI.MOBILE : SCREEN.UI.DESKTOP;
    
    this.playButton = {
      x: SCREEN.WIDTH / 2 - ui.BUTTON_WIDTH / 2,
      y: SCREEN.HEIGHT / 2 - ui.BUTTON_HEIGHT,
      width: ui.BUTTON_WIDTH,
      height: ui.BUTTON_HEIGHT
    };

    this.settingsButton = {
      x: SCREEN.WIDTH / 2 - ui.BUTTON_WIDTH / 2,
      y: SCREEN.HEIGHT / 2 + ui.BUTTON_HEIGHT / 2,
      width: ui.BUTTON_WIDTH,
      height: ui.BUTTON_HEIGHT
    };
    
    this.ui = ui;
  }

  update() {
    if (this.game.input.touch.active) {
      const touch = this.game.input.touch;
      if (this.isButtonClicked(this.playButton, touch.x, touch.y)) {
        this.game.currentScene = new GameScene(this.game);
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
    ctx.font = this.ui.TITLE_FONT;
    ctx.textAlign = 'center';
    ctx.fillText('Isometric Game', SCREEN.WIDTH / 2, SCREEN.HEIGHT / 3);

    this.drawButton(ctx, this.playButton, 'Play');
    this.drawButton(ctx, this.settingsButton, 'Settings');
  }

  isButtonClicked(button, x, y) {
    return x >= button.x && x <= button.x + button.width && 
           y >= button.y && y <= button.y + button.height;
  }

  drawButton(ctx, button, text) {
    ctx.fillStyle = '#3498db';
    ctx.fillRect(button.x, button.y, button.width, button.height);

    ctx.fillStyle = '#fff';
    ctx.font = this.ui.BUTTON_FONT;
    ctx.textAlign = 'center';
    ctx.fillText(text, button.x + button.width / 2, button.y + button.height / 2 + 8);
  }
}

export default MenuScene;
