
class InputHandler {
  constructor() {
    this.touch = {
      active: false,
      x: 0,
      y: 0
    };

    document.addEventListener('mousedown', (e) => {
      this.touch.active = true;
      this.touch.x = e.clientX;
      this.touch.y = e.clientY;
    });

    document.addEventListener('mouseup', () => {
      this.touch.active = false;
    });

    document.addEventListener('touchstart', (e) => {
      this.touch.active = true;
      this.touch.x = e.touches[0].clientX;
      this.touch.y = e.touches[0].clientY;
    });

    document.addEventListener('touchend', () => {
      this.touch.active = false;
    });
  }
}

export default InputHandler;
