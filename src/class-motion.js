export default class _Motion {
  constructor() {
    this.properties = {
      id: '',
      mode: 'linear',
      fps: 32,
      smooth: false,
      start: 0,
      stop: 1,
      autostart: true,
      time: 1000,
      speed: undefined,
      delay: 0,
      repeat: 1
    };
    this.public = this._public;
  }

  get _public() {
    const _this = this;
    const properties = new class Properties {
      get id() { return _this.properties.id; }
      get mode() { return _this.properties.mode; }
      get fps() { return _this.properties.fps; }
      get smooth() { return _this.properties.smooth; }
      get start() { return _this.properties.start; }
      get stop() { return _this.properties.stop; }
      get autostart() { return _this.properties.autostart; }
      get time() { return _this.properties.time; }
      get speed() { return _this.properties.speed; }
      get delay() { return _this.properties.delay; }
      get repeat() { return _this.properties.repeat; }

      set id(value) { _this.properties.id = value; }
      set mode(value) { _this.properties.mode = value; }
      set fps(value) { _this.properties.fps = value; }
      set smooth(value) { _this.properties.smooth = value; }
      set start(value) { _this.properties.start = value; }
      set stop(value) { _this.properties.stop = value; }
      set autostart(value) { _this.properties.autostart = value; }
      set time(value) { _this.properties.time = value; }
      set speed(value) { _this.properties.speed = value; }
      set delay(value) { _this.properties.delay = value; }
      set repeat(value) { _this.properties.repeat = value; }
    };

    return new class Motion {
      get index() { return 0; }
      get id() { return ''; }
      get properties() { return properties; }
      get repetition() { return 1; }
      get delayed() { return false; }
    };
  }
}