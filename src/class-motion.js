/* global Motion */

import type from 'of-type';
import { isInRange, isEven, toIntegerRange } from './utils.js';

export default class _Motion {
  constructor({ modes, motions, defaults, properties, customTemplate = false }) {
    this.motions = motions;
    this.customTemplate = customTemplate;
    this.modes = modes;
    this.public = this._public;
    this.valid = this.constructor.valid;
    this.repetition = 1; /* build this feature when then chaining methods will be done */
    this.setDefaults(defaults);
    this.init(properties);
    this.setIdentifier(properties);
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

      set mode(value) {
        _this.valid({
          property: 'mode',
          modes: _this.modes,
          value: value,
          valid: (value) => _this.properties.mode = value
        });
      }

      set fps(value) {
        _this.valid({
          property: 'fps',
          value: value,
          valid: (value) => _this.properties.fps = value
        });
      }

      set smooth(value) {
        _this.valid({
          property: 'smooth',
          value: value,
          valid: (value) => _this.properties.smooth = value
        });
      }

      set start(value) {
        _this.valid({
          property: 'start',
          value: value,
          valid: (value) => _this.properties.start = value
        });
      }

      set stop(value) {
        _this.valid({
          property: 'stop',
          value: value,
          valid: (value) => _this.properties.stop = value
        });
      }

      set autostart(value) {
        _this.valid({
          property: 'autostart',
          value: value,
          valid: (value) => _this.properties.autostart = value
        });
      }

      set time(value) {
        _this.valid({
          property: 'time',
          value: value,
          valid: (value) => _this.properties.time = value
        });
      }

      set speed(value) {
        _this.valid({
          property: 'speed',
          value: value,
          valid: (value) => _this.properties.speed = value
        });
      }

      set delay(value) {
        _this.valid({
          property: 'delay',
          value: value,
          valid: (value) => _this.properties.delay = value
        });
      }

      set repeat(value) {
        _this.valid({
          property: 'repeat',
          value: value,
          valid: (value) => _this.properties.repeat = value
        });
      }

    };

    return new class Motion {
      get index() { return _this.motions.maps.motion.get(_this); }
      get id() { return properties.id; }
      get properties() { return properties; }
      get repetition() { return _this.repetition; }
      get delayed() { return properties.delay > 0; }
    };
  }

  setDefaults(defaults) {
    this.properties = {};
    for (let name in defaults) {
      this.properties[name] = defaults[name];
    }
  }

  init(properties) {
    if (!type(properties, [Object, 'Motion'])) return;
    const _properties = type(properties, 'Motion') ? _properties.properties : properties;
    for (let name in this.properties) {
      if (_properties.hasOwnProperty(name)) {
        this.public.properties[name] = _properties[name];
      }
    }
  }

  setIdentifier(properties){
    const id = type(properties, [Object, 'Motion']) ? properties.id:null;
    this.valid({
      property: 'id',
      value: id,
      valid: (value) => this.properties.id = value,
      invalid: () => this.properties.id = !this.customTemplate ? this.motions.defaultIdentifier : null
    });
  }

  update(properties) {
    if(!type(properties, [Object, Motion])) return;
    const isMotion = type(properties,Motion);
    const found = this.get(properties.id).public;
    if(isMotion && found === properties) return;
    const _properties = isMotion ? _properties.properties : properties;
    for(let name in found.properties){
      found.properties[name] = _properties[name];
    }
  }

  static valid({ property, value, modes, valid, invalid }) {
    switch (property) {
      case 'id': return respond(validId());
      case 'mode': return respond(validMode());
      case 'fps': return respond(validFps());
      case 'smooth': return respond(validSmooth());
      case 'start':
      case 'stop': return respond(validStartStop());
      case 'autostart': return respond(validAutostart());
      case 'time': return respond(validTime());
      case 'speed': return respond(validSpeed());
      case 'delay': return respond(validDelay());
      case 'repeat': return respond(validRepeat());
      default: break;
    }

    function respond(isValid) {
      if (isValid && type(valid, Function)) valid(value);
      if (!isValid && type(invalid, Function)) invalid();
    }

    function validId() {
      return (type(value, String));
    }

    function validMode() {
      if (type(value, String)) {
        value = value.toLowerCase();
        return type(modes[value], Array);
      }
      if (type(value, Array)) {
        if (!isEven(value.length) || !isInRange(value.length, 4, 34)) return false;
        return value.every((item, iter, arr) => {
          if (!type(item, Number)) return false;
          let isItemEven = isEven(iter);
          if (isItemEven && !isInRange(item, 0, 1)) return false;
          if (!isItemEven && !isInRange(item, -1, 2)) return false;
          if (iter === arr.length - 2 && item !== 1) return false;
          return true;
        });
      }
      return false;
    }

    function validFps() {
      if (!type(value, Number) || Number.isNaN(value)) return false;
      value = toIntegerRange(value, 1, 75);
      return true;
    }

    function validSmooth() {
      return type(value, Boolean);
    }

    function validStartStop() {
      const isNumerical = (v) => !Number.isNaN(v) && v !== Infinity && v !== -Infinity;
      if (type(value, Number)) return isNumerical(value);
      if (type(value, Array)) {
        if (!value.length) return false;
        value = value.slice(0, 16);
        return value.every((item) => type(item, Number) && isNumerical(item));
      }
      return false;
    }

    function validAutostart() {
      return type(value, Boolean);
    }

    function validTime() {
      if (!type(value, Number) || Number.isNaN(value) || value === Infinity) return false;
      value = toIntegerRange(value, 1, Infinity);
      return true;
    }

    function validSpeed() {
      return type(value, Number) && !Number.isNaN(value) && value > 0;
    }

    function validDelay() {
      if (!type(value, Number) || Number.isNaN(value) || value === Infinity) return false;
      value = toIntegerRange(value, 0, Infinity);
      return true;
    }

    function validRepeat() {
      if (!type(value, Number) || Number.isNaN(value)) return false;
      value = toIntegerRange(value, 1, Infinity);
      return true;
    }

  }



}



