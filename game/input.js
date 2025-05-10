
import { SCREEN } from './constants.js';

class InputHandler {
  constructor() {
    this.keys = {};
    this.touch = { x: 0, y: 0, active: false };
    
    window.addEventListener('keydown', (e) => this.keys[e.key] = true);
    window.addEventListener('keyup', (e) => this.keys[e.key] = false);
    
    if (SCREEN.MOBILE) {
      window.addEventListener('touchstart', (e) => {
        this.touch.active = true;
        this.touch.x = e.touches[0].clientX;
        this.touch.y = e.touches[0].clientY;
      });
      window.addEventListener('touchend', () => this.touch.active = false);
    }
  }
}

export default InputHandler;
