import type from 'of-type';

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
    this.defaults = new Defaults({ modes: modes });
    this.motions = new Motions({ defaults: this.defaults, modes });
    this.modes = modes;
    this.events = {};

    if (type(config, Object)) {
      this.defaults.init(config.defaults);
      this.motions.init(config.motions);
      this._addInitialEvents(config);
    }



  }

  _addInitialEvents(config) {

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