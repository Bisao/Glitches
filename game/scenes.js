class Scene {
  constructor(game) {
    this.game = game;
  }

  update() {}
  render() {}
}

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

    // Background
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);

    // Title
    ctx.fillStyle = '#ecf0f1';
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Isometric Game', SCREEN.WIDTH / 2, SCREEN.HEIGHT / 3);

    // Play Button
    this.drawButton(ctx, this.playButton, 'Play');

    // Settings Button
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
    return x > button.x && 
           x < button.x + button.width && 
           y > button.y && 
           y < button.y + button.height;
  }
}

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

    // Background
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);

    // Title
    ctx.fillStyle = '#ecf0f1';
    ctx.font = '36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Settings', SCREEN.WIDTH / 2, SCREEN.HEIGHT / 4);

    // Back Button
    this.drawButton(ctx, this.backButton, 'Back');

    // Volume Slider
    ctx.fillStyle = '#34495e';
    ctx.fillRect(this.volumeSlider.x, this.volumeSlider.y, this.volumeSlider.width, this.volumeSlider.height);
    ctx.fillStyle = '#3498db';
    ctx.fillRect(this.volumeSlider.x, this.volumeSlider.y, 
                (this.volumeLevel / 100) * this.volumeSlider.width, this.volumeSlider.height);

    ctx.fillStyle = '#ecf0f1';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Volume: ${Math.round(this.volumeLevel)}%`, 
                this.volumeSlider.x, this.volumeSlider.y - 10);

    // Control Toggle
    this.drawButton(ctx, this.controlToggle, `Controls: ${this.controlType}`);
  }

  isButtonClicked(button, x, y) {
    return x > button.x && 
           x < button.x + button.width && 
           y > button.y && 
           y < button.y + button.height;
  }

  drawButton(ctx, button, text) {
    ctx.fillStyle = '#3498db';
    ctx.fillRect(button.x, button.y, button.width, button.height);

    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, button.x + button.width / 2, button.y + button.height / 2 + 6);
  }
}