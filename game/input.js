
class InputHandler {
  constructor() {
    this.touch = {
      active: false,
      x: 0,
      y: 0,
      lastX: 0,
      lastY: 0,
      deltaX: 0,
      deltaY: 0
    };
    
    this.zoom = {
      level: 1,
      min: 0.5,
      max: 2
    };

    this.rightMouseDown = false;
    this.touchCount = 0;
    this.pinchStartDistance = 0;

    // Mouse controls
    document.addEventListener('mousedown', (e) => {
      if (e.button === 2) { // Right mouse button
        e.preventDefault();
        this.rightMouseDown = true;
        this.touch.lastX = e.clientX;
        this.touch.lastY = e.clientY;
      } else if (e.button === 0) { // Left mouse button
        this.touch.active = true;
        this.touch.x = e.clientX;
        this.touch.y = e.clientY;
      }
    });

    document.addEventListener('mouseup', (e) => {
      if (e.button === 2) {
        this.rightMouseDown = false;
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (this.rightMouseDown) {
        this.touch.deltaX = e.clientX - this.touch.lastX;
        this.touch.deltaY = e.clientY - this.touch.lastY;
        this.touch.lastX = e.clientX;
        this.touch.lastY = e.clientY;
        this.touch.x = e.clientX;
        this.touch.y = e.clientY;
        this.touch.active = true;
      }
    });

    document.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      this.zoom.level *= delta;
      this.zoom.level = Math.max(this.zoom.min, Math.min(this.zoom.max, this.zoom.level));
    });

    // Touch controls
    document.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.touchCount = e.touches.length;
      
      if (this.touchCount === 1) {
        this.touch.active = true;
        this.touch.x = e.touches[0].clientX;
        this.touch.y = e.touches[0].clientY;
        this.touch.lastX = e.touches[0].clientX;
        this.touch.lastY = e.touches[0].clientY;
      } else if (this.touchCount === 2) {
        this.pinchStartDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.touchCount === 1) {
        this.touch.deltaX = e.touches[0].clientX - this.touch.lastX;
        this.touch.deltaY = e.touches[0].clientY - this.touch.lastY;
        this.touch.lastX = e.touches[0].clientX;
        this.touch.lastY = e.touches[0].clientY;
        this.touch.x = e.touches[0].clientX;
        this.touch.y = e.touches[0].clientY;
      } else if (this.touchCount === 2) {
        const currentDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        
        const delta = currentDistance / this.pinchStartDistance;
        this.zoom.level *= delta;
        this.zoom.level = Math.max(this.zoom.min, Math.min(this.zoom.max, this.zoom.level));
        this.pinchStartDistance = currentDistance;
      }
    }, { passive: false });

    document.addEventListener('touchend', () => {
      this.touch.active = false;
      this.touchCount = 0;
    });

    // Prevent context menu
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
}

export default InputHandler;
