import modes from './data/default-modes.json';

class Modes {
  constructor(modes) {
    for (let mode in modes) this[mode] = Object.freeze(modes[mode]);
    return Object.freeze(this);
  }
}

export default new Modes(modes);