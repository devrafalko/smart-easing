import type from 'of-type';
import _modes from './class-modes.js';
import _Animation from './class-animation.js';

export default class SmartEasing {
  constructor(config) {
    const _animation = new _Animation(config, _modes);

    return new class Animation {
      get modes() { return _animation.modes; }
      get state() { return _animation.state.public; }
      get time() { return _animation.time.public; }
      get queue() { return _animation.queue.public; }
      get defaults() { return _animation.defaults.public; }
      get motions() { return _animation.motions.public; }

      set beforeAll(f) {
        if (type(f, Function)) _animation.events.beforeAll = f;
      }

      get beforeAll() {
        let event = _animation.events.beforeAll;
        return type(event, Function) ? event : null;
      }

      set afterAll(f) {
        if (type(f, Function)) _animation.events.afterAll = f;
      }

      get afterAll() {
        let event = _animation.events.afterAll;
        return type(event, Function) ? event : null;
      }

      set beforeEach(f) {
        if (type(f, Function)) _animation.events.beforeEach = f;
      }

      get beforeEach() {
        let event = _animation.events.beforeEach;
        return type(event, Function) ? event : null;
      }

      set afterEach(f) {
        if (type(f, Function)) _animation.events.afterEach = f;
      }

      get afterEach() {
        let event = _animation.events.afterEach;
        return type(event, Function) ? event : null;
      }

      set afterDelay(f) {
        if (type(f, Function)) _animation.events.afterDelay = f;
      }

      get afterDelay() {
        let event = _animation.events.afterDelay;
        return type(event, Function) ? event : null;
      }

      set render(f) {
        if (type(f, Function)) _animation.events.render = f;
      }

      get render() {
        let event = _animation.events.render;
        return type(event, Function) ? event : null;
      }

      set onPause(f) {
        if (type(f, Function)) _animation.events.onPause = f;
      }

      get onPause() {
        let event = _animation.events.onPause;
        return type(event, Function) ? event : null;
      }

      set onResume(f) {
        if (type(f, Function)) _animation.events.onResume = f;
      }

      get onResume() {
        let event = _animation.events.onResume;
        return type(event, Function) ? event : null;
      }

      first() { return _animation.first(...arguments); }
      last() { return _animation.last(...arguments); }
      previous() { return _animation.previous(...arguments); }
      next() { return _animation.next(...arguments); }
      go() { return _animation.go(...arguments); }
      chain() { return _animation.chain(...arguments); }
      all() { return _animation.all(...arguments); }
      reverse() { return _animation.reverse(...arguments); }
      boomerang() { return _animation.boomerang(...arguments); }
      repeat() { return _animation.repeat(...arguments); }

      pause() { return _animation.pause(...arguments); }
      resume() { return _animation.resume(...arguments); }
      reset() { return _animation.reset(...arguments); }

    };
  }

  static get modes() {
    return _modes;
  }

}