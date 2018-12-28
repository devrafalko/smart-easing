export default class _State {
  constructor() {
    this.coords = 0;
    this.paused = false;
    this.pending = false;
    this.started = false;
    this.finished = false;
    this.public = this._public;
  }

  get _public() {
    const _this = this;
    return new class State {
      get coords() { return _this.coords; }
      get paused() { return _this.paused; }
      get pending() { return _this.pending; }
      get started() { return _this.started; }
      get finished() { return _this.finished; }
    };
  }

}