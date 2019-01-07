import type from 'of-type';
import Motion from './class-motion.js';

export default class _Defaults {
  constructor({ modes }) {
    this.public = this._public;
    this.modes = modes;
    this.setDefaults();
  }

  get _defaults() {
    return {
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
  }

  get _public() {
    const _this = this;
    return new class Defaults {
      get mode() { return _this.defaults.mode; }
      get fps() { return _this.defaults.fps; }
      get smooth() { return _this.defaults.smooth; }
      get start() { return _this.defaults.start; }
      get stop() { return _this.defaults.stop; }
      get autostart() { return _this.defaults.autostart; }
      get time() { return _this.defaults.time; }
      get speed() { return _this.defaults.speed; }
      get delay() { return _this.defaults.delay; }
      get repeat() { return _this.defaults.repeat; }

      set mode(value) {
        Motion.valid({
          property:'mode',
          modes: _this.modes,
          value: value,
          valid: (value) => _this.defaults.mode = value
        });
      }

      set fps(value) {
        Motion.valid({
          property:'fps',
          value: value,
          valid: (value) => _this.defaults.fps = value
        });
      }

      set smooth(value) {
        Motion.valid({
          property:'smooth',
          value: value,
          valid: (value) => _this.defaults.smooth = value
        });
      }

      set start(value) {
        Motion.valid({
          property:'start',
          value: value,
          valid: (value) => _this.defaults.start = value
        });
      }

      set stop(value) {
        Motion.valid({
          property:'stop',
          value: value,
          valid: (value) => _this.defaults.stop = value
        });
      }

      set autostart(value) {
        Motion.valid({
          property:'autostart',
          value: value,
          valid: (value) => _this.defaults.autostart = value
        });
      }

      set time(value) {
        Motion.valid({
          property:'time',
          value: value,
          valid: (value) => _this.defaults.time = value
        });
      }

      set speed(value) {
        Motion.valid({
          property:'speed',
          value: value,
          valid: (value) => _this.defaults.speed = value
        });
      }

      set delay(value) {
        Motion.valid({
          property:'delay',
          value: value,
          valid: (value) => _this.defaults.delay = value
        });
      }

      set repeat(value) {
        Motion.valid({
          property:'repeat',
          value: value,
          valid: (value) => _this.defaults.repeat = value
        });
      }
    };
  }

  setDefaults() {
    this.defaults = {};
    for (let name in this._defaults) {
      this.defaults[name] = this._defaults[name];
    }
  }

  init(defaults) {
    if(type(defaults, Object)){
      for (let name in this._defaults) {
        if (defaults.hasOwnProperty(name)) {
          this.public[name] = defaults[name];
        }
      }
    }
  }

}