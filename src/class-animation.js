import State from './class-state.js';
import Time from './class-time.js';
import Queue from './class-queue.js';
import Defaults from './class-defaults.js';
import Motions from './class-motions.js';

export default class _SmartEasing {
  constructor(config, modes) {
    this.state = new State();
    this.time = new Time();
    this.queue = new Queue();
    this.defaults = new Defaults();
    this.motions = new Motions();
    this.modes = modes;
    this.events = {};
  }

  first() {

  }

  last() {

  }

  previous() {

  }

  next() {

  }

  go() {

  }

  chain() {

  }

  all() {

  }

  reverse() {

  }

  boomerang() {

  }

  repeat() {

  }

  pause() {

  }

  resume() {

  }

  reset() {

  }


}