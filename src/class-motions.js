import Motion from './class-motion.js';

export default class _Motions {
  constructor() {
    this.motions = [];
    this.public = this._public;
  }

  list() {

  }

  add() {

  }

  get _public() {
    const _this = this;
    return new class Motions {
      get list() {
        return _this.list();
      }

      get reversed() {
        return _this.list().reverse();
      }

      get first() {
        return _this.list()[0];
      }

      get last() {
        const list = _this.list();
        return list[list.length - 1];
      }

      get length() {
        return _this.list().length;
      }

      add() { }
      get() { }
      has() { }
    };
  }
}