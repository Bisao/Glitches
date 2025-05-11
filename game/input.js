
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
      e.preventDefault();
      this.touch.active = true;
      this.touch.x = e.touches[0].clientX;
      this.touch.y = e.touches[0].clientY;
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.touch.active) {
        this.touch.x = e.touches[0].clientX;
        this.touch.y = e.touches[0].clientY;
      }
    }, { passive: false });

    document.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.touch.active = false;
    }, { passive: false });
  }
}

export default InputHandler;
