
class DebugSystem {
  constructor() {
    this.enabled = false;
    this.logs = [];
    this.maxLogs = 10;
  }

  toggle() {
    this.enabled = !this.enabled;
  }

  log(message) {
    this.logs.unshift({
      message,
      timestamp: Date.now()
    });
    if (this.logs.length > this.maxLogs) {
      this.logs.pop();
    }
  }

  render(ctx) {
    if (!this.enabled) return;

    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(10, 10, 300, 150);
    
    ctx.fillStyle = 'white';
    ctx.font = '12px monospace';
    this.logs.forEach((log, i) => {
      ctx.fillText(log.message, 20, 30 + i * 20);
    });
    ctx.restore();
  }
}

export default new DebugSystem();
