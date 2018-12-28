export default class _Time {
  constructor() {
    this.current = {
      elapsed: 0,
      remaining: 0,
      delay: 0,
      duration: 0
    };
    this.all = {
      elapsed: 0,
      remaining: 0,
      duration: 0
    };
    this.public = this._public;
  }

  get _public() {
    const _this = this;
    const current = new class Current {
      get elapsed() { return _this.current.elapsed; }
      get remaining() { return _this.current.remaining; }
      get delay() { return _this.current.delay; }
      get duration() { return _this.current.duration; }
    };

    const all = new class All {
      get elapsed() { return _this.all.elapsed; }
      get remaining() { return _this.all.remaining; }
      get duration() { return _this.all.duration; }
    };

    return new class Time {
      get current() { return current; }
      get all() { return all; }
    };
  }
}