
export class GameState {
  constructor() {
    this.states = {};
    this.currentState = null;
  }

  setState(name, value) {
    this.states[name] = value;
  }

  getState(name) {
    return this.states[name];
  }

  clearState(name) {
    delete this.states[name];
  }
}

export default new GameState();
