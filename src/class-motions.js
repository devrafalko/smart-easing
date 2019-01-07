import type from 'of-type';
import _Motion from './class-motion.js';

export default class _Motions {
  constructor({ defaults, modes }) {
    this.defaults = defaults;
    this.modes = modes;
    this.public = this._public;
    this._defaultIdentifier = 0;
    this.list = [];
    this.reversed = [];
    this.maps = {
      motion: new Map(),
      public: new Map(),
      id: new Map(),
      index: new Map()
    };
  }

  add(properties) {
    if (type(properties, [Object, 'Motion']) && type(properties.id, String)) {
      const foundMotion = this.get(properties.id);
      if (type(foundMotion, _Motion)) {
        foundMotion.update(properties);
        return foundMotion.public;
      }
    }
    const newMotion = new _Motion({
      modes: this.modes,
      motions: this,
      defaults: this.defaults.defaults,
      properties: properties
    });
    this.maps.motion.set(newMotion, this.maps.index.size);
    this.maps.public.set(newMotion.public, newMotion);
    this.maps.index.set(this.maps.index.size, newMotion);
    this.maps.id.set(newMotion.properties.id, newMotion);
    this.updateLists();
    return newMotion.public;
  }

  remove(indicator) {
    const found = this.get(indicator);
    if (type(found, _Motion)) {
      const index = this.maps.motion.get(found);
      this.maps.motion.delete(found);
      this.maps.public.set(found.public);
      this.maps.id.delete(found.id);
      this.updateLists();
      for (let i = index; i < this.maps.index.size; i++) this.maps.index.set(i, this.maps.index.get(i + 1));
      this.maps.index.delete(this.maps.index.size - 1);
    }
    return found.public;
  }

  updateLists() {
    this.list = Array.from(this.maps.id.keys());
    this.reversed = this.list.slice().reverse();
  }

  get(indicator) {
    let _indicator;
    switch (true) {
      case type(indicator, String):
        return this.maps.id.has(indicator) ? this.maps.id.get(indicator) : null;
      case type(indicator, Number):
        return this.maps.index.has(indicator) ? this.maps.index.get(indicator) : null;
      case type(indicator, Object):
        return type(indicator.id, String) && this.maps.id.has(indicator.id) ? this.maps.id.get(indicator) : null;
      case type(indicator, 'Motion'):
        return this.maps.public.has(indicator) ? this.maps.public.get(indicator) : null;
      case type(indicator, Function):
        _indicator = indicator();
        return !type(_indicator, Function) ? this.get(_indicator) : null;
      default:
        return null;
    }
  }

  get defaultIdentifier(){
    return `${this._defaultIdentifier++}`;
  }

  get _public() {
    const _this = this;
    return new class Motions {
      get list() {
        return _this.list;
      }

      get reversed() {
        return _this.reversed;
      }

      get first() {
        const motion = _this.get(0);
        return motion ? motion.public : null;
      }

      get last() {
        const motion = _this.get(_this.list.length - 1);
        return motion ? motion.public : null;
      }

      get length() {
        return _this.list.length;
      }

      add(properties) {
        return _this.add(properties);
      }

      remove(indicator) {
        return _this.remove(indicator);
      }

      get(indicator) {
        const motion = _this.get(indicator);
        return motion ? motion.public : null;
      }

      has(indicator) {
        return type(_this.get(indicator), _Motion);
      }
    };
  }

  init(motions) {
    if (type(motions, Array)) {
      for (let item of motions) this.add(item);
    }
  }

}