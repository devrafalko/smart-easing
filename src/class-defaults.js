export default class _Defaults {
  constructor() {
    this.id = null;
    this.mode = 'linear';
    this.fps = 32;
    this.smooth = false;
    this.start = 0;
    this.stop = 1;
    this.autostart = true;
    this.time = 1000;
    this.speed = undefined;
    this.delay = 0;
    this.repeat = 1;
    this.public = this._public;
  }

  get _public() {
    const _this = this;
    return new class Defaults {
      get id() { return _this.id; }
      get mode() { return _this.mode; }
      get fps() { return _this.fps; }
      get smooth() { return _this.smooth; }
      get start() { return _this.start; }
      get stop() { return _this.stop; }
      get autostart() { return _this.autostart; }
      get time() { return _this.time; }
      get speed() { return _this.speed; }
      get delay() { return _this.delay; }
      get repeat() { return _this.repeat; }

      set id(value) { _this.id = value; }
      set mode(value) { _this.mode = value; }
      set fps(value) { _this.fps = value; }
      set smooth(value) { _this.smooth = value; }
      set start(value) { _this.start = value; }
      set stop(value) { _this.stop = value; }
      set autostart(value) { _this.autostart = value; }
      set time(value) { _this.time = value; }
      set speed(value) { _this.speed = value; }
      set delay(value) { _this.delay = value; }
      set repeat(value) { _this.repeat = value; }
    };
  }
}