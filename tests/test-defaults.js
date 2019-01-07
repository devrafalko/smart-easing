/* global describe, it, expect */
import type from 'of-type';

describe('When the [Object] defaults is passed through the constructor', function () {
  describe('with the correct motion properties', function () {
    it('the passed "mode" property should be accessible via the [Defaults].mode getter', function () {
      for (let mode of this.data.defaults.mode.correct) {
        let animation = new this.SmartEasing({
          defaults: { mode: mode.initial }
        });
        expect(animation.defaults.mode).toEqual(mode.final || mode.initial);
      }
    });
    it('the passed "fps" property should be accessible via the [Defaults].fps getter', function () {
      for (let fps of this.data.defaults.fps.correct) {
        let animation = new this.SmartEasing({
          defaults: { fps: fps.initial }
        });
        expect(animation.defaults.fps).toEqual(fps.final || fps.finitial);
      }
    });
    it('the passed "smooth" property should be accessible via the [Defaults].smooth getter', function () {
      for (let smooth of this.data.defaults.smooth.correct) {
        let animation = new this.SmartEasing({
          defaults: { smooth: smooth.initial }
        });
        expect(animation.defaults.smooth).toEqual(smooth.final || smooth.initial);
      }
    });
    it('the passed "start" property should be accessible via the [Defaults].start getter', function () {
      for (let start of this.data.defaults.start.correct) {
        let animation = new this.SmartEasing({
          defaults: { start: start.initial }
        });
        expect(animation.defaults.start).toEqual(start.final || start.initial);
      }
    });
    it('the passed "stop" property should be accessible via the [Defaults].stop getter', function () {
      for (let stop of this.data.defaults.stop.correct) {
        let animation = new this.SmartEasing({
          defaults: { stop: stop.initial }
        });
        expect(animation.defaults.stop).toEqual(stop.final || stop.initial);
      }
    });
    it('the passed "autostart" property should be accessible via the [Defaults].autostart getter', function () {
      for (let autostart of this.data.defaults.autostart.correct) {
        let animation = new this.SmartEasing({
          defaults: { autostart: autostart.initial }
        });
        expect(animation.defaults.autostart).toEqual(autostart.final || autostart.initial);
      }
    });
    it('the passed "time" property should be accessible via the [Defaults].time getter', function () {
      for (let time of this.data.defaults.time.correct) {
        let animation = new this.SmartEasing({
          defaults: { time: time.initial }
        });
        expect(animation.defaults.time).toEqual(time.final || time.initial);
      }
    });
    it('the passed "speed" property should be accessible via the [Defaults].time getter', function () {
      for (let speed of this.data.defaults.speed.correct) {
        let animation = new this.SmartEasing({
          defaults: { speed: speed.initial }
        });
        expect(animation.defaults.speed).toEqual(speed.final || speed.initial);
      }
    });
    it('the passed "delay" property should be accessible via the [Defaults].delay getter', function () {
      for (let delay of this.data.defaults.delay.correct) {
        let animation = new this.SmartEasing({
          defaults: { delay: delay.initial }
        });
        expect(animation.defaults.delay).toEqual(type(delay.final, Number) ? delay.final : delay.initial);
      }
    });
    it('the passed "repeat" property should be accessible via the [Defaults].repeat getter', function () {
      for (let repeat of this.data.defaults.repeat.correct) {
        let animation = new this.SmartEasing({
          defaults: { repeat: repeat.initial }
        });
        expect(animation.defaults.repeat).toEqual(repeat.final || repeat.initial);
      }
    });
  });
  describe('with the incorrect motion properties', function () {
    it('the [Defaults].mode getter should return the default value rather than the passed incorrect one', function () {
      for (let mode of this.data.defaults.mode.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { mode }
        });
        expect(animation.defaults.mode).toEqual(this.data.defaults.mode.default);
      }
    });
    it('the [Defaults].fps getter should return the default value rather than the passed incorrect one', function () {
      for (let fps of this.data.defaults.fps.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { fps }
        });
        expect(animation.defaults.fps).toEqual(this.data.defaults.fps.default);
      }
    });
    it('the [Defaults].smooth getter should return the default value rather than the passed incorrect one', function () {
      for (let smooth of this.data.defaults.smooth.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { smooth }
        });
        expect(animation.defaults.smooth).toEqual(this.data.defaults.smooth.default);
      }
    });
    it('the [Defaults].start getter should return the default value rather than the passed incorrect one', function () {
      for (let start of this.data.defaults.start.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { start }
        });
        expect(animation.defaults.start).toEqual(this.data.defaults.start.default);
      }
    });
    it('the [Defaults].stop getter should return the default value rather than the passed incorrect one', function () {
      for (let stop of this.data.defaults.stop.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { stop }
        });
        expect(animation.defaults.stop).toEqual(this.data.defaults.stop.default);
      }
    });
    it('the [Defaults].autostart getter should return the default value rather than the passed incorrect one', function () {
      for (let autostart of this.data.defaults.autostart.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { autostart }
        });
        expect(animation.defaults.autostart).toEqual(this.data.defaults.autostart.default);
      }
    });
    it('the [Defaults].time getter should return the default value rather than the passed incorrect one', function () {
      for (let time of this.data.defaults.time.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { time }
        });
        expect(animation.defaults.time).toEqual(this.data.defaults.time.default);
      }
    });
    it('the [Defaults].speed getter should return the default value rather than the passed incorrect one', function () {
      for (let speed of this.data.defaults.speed.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { speed }
        });
        expect(animation.defaults.speed).toEqual(this.data.defaults.speed.default);
      }
    });
    it('the [Defaults].delay getter should return the default value rather than the passed incorrect one', function () {
      for (let delay of this.data.defaults.delay.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { delay }
        });
        expect(animation.defaults.delay).toEqual(this.data.defaults.delay.default);
      }
    });
    it('the [Defaults].repeat getter should return the default value rather than the passed incorrect one', function () {
      for (let repeat of this.data.defaults.repeat.incorrect) {
        let animation = new this.SmartEasing({
          defaults: { repeat }
        });
        expect(animation.defaults.repeat).toEqual(this.data.defaults.repeat.default);
      }
    });
  });
});

/*

When the new [Animation] instance is created
  it has the [Animation].defaults property with [Defaults] instance
    that has the 'mode', 'fps', 'smooth', 'start', 'stop', 'autostart', 'time', 'speed', 'delay', 'repeat' getters and setters
    that has not the 'id' getter and setter

The [Defaults] instance should not
  have any other than public methods, properties, getters and setters
  let to define any new methods, properties, getters and setters
  let to delete any existing methods, properties, getters and setters
  let to modify any existing methods, properties, getters and setters

When the 'id' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].id (setter)
      it should throw an error, that the setter is inaccessible
  is not set for the [Defaults]
    the [Defaults].id (getter) should return undefined

When the 'mode' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].mode setter
      as the [String] value
        that indicates one of accessible native easing modes
          with lower case letters or regardler the lower or upper case letters are used
            the [Defaults].mode getter should return this value
        that does not indicate any of the native easing modes
            the [Defaults].mode getter should return default value
      as the [Array] object
        that is a correct custom easing mode
          the [Defaults].mode getter should return this [Array] object
        that is empty
        that contains less than 4 items
        that contains more than 34 items
        that contains items that are not of [Number] type
        that has the odd number of items
        that has odd-number [Number] items (x coord) that is lower than 0 or higher than 1
        that has even-number [Number] items (y coord) that is lower than -1 or higher than 2
        that has the last but one [Number] item (x coord) other than 1 value
          the [Defaults].mode getter should return default value
      as any other type value or object
        the [Defaults].mode getter should return default value
  is not set for the [Defaults]
    the [Defaults].mode getter should return default value

When the 'fps' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].fps setter
      as the [Number] value
        higher than 75 or Infinity
          the [Defaults].fps getter should return the [Number] 75
        lower than 1 or -Infinity
          the [Defaults].fps getter should return the [Number] 1
      as the [Number] integer between 1 and 75
        the [Defaults].fps getter should return this [Number] value
      as the [Number] decimal fraction between 1 and 75
        the [Defaults].fps getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Defaults].fps getter should return the default value
  is not set for the [Defaults]
    the [Defaults].fps getter should return the default value

When the 'smooth' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].smooth setter
      as the [Boolean] true|false
        the [Defaults].smooth getter should return this [Boolean] true|false
      as any other type value or object
        the [Defaults].smooth getter should return the default value
  is not set for the [Defaults]
    the [Defaults].smooth getter should return the default value

When the 'start' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].start setter
      as the [Number] value
        lower than 0, decimal fraction or integer
          the [Defaults].start getter should return this [Number] value
        -Infinity, Infinity or NaN
          the [Defaults].start getter should return the default value
      as the [Array] object
        but empty
          the [Defaults].start getter should return the default value
        but with some not [Number] items
          the [Defaults].start getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with NaN, Infinity or -Infinity
          the [Defaults].start getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with more than 16 items
          the [Defaults].start getter should return the [Array] object with all items
      as any other type value or object
        the [Defaults].start getter should return the default value
  is not set for the [Defaults]
    the [Defaults].start getter should return the default value

When the 'stop' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].stop setter
      as the [Number] value
        lower than 0, decimal fraction or integer
          the [Defaults].stop getter should return this [Number] value
        -Infinity, Infinity or NaN
          the [Defaults].stop getter should return the default value
      as the [Array] object
        but empty
          the [Defaults].stop getter should return the default value
        but with some not [Number] items
          the [Defaults].stop getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with NaN, Infinity or -Infinity
          the [Defaults].stop getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with more than 16 items
          the [Defaults].stop getter should return the [Array] object with all items
      as any other type value or object
        the [Defaults].stop getter should return the default value
  is not set for the [Defaults]
    the [Defaults].stop getter should return the default value

When the 'autostart' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].autostart setter
      as the [Boolean] true|false
        the [Defaults].autostart getter should return this [Boolean] true|false
      as any other type value or object
        the [Defaults].autostart getter should return the default value
  is not set for the [Defaults]
    the [Defaults].autostart getter should return the default value

When the 'time' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].time setter
      as the [Number] value
        that is Infinity
          the [Defaults].time getter should return the default value
        lower than 1 or -Infinity
          the [Defaults].time getter should return the [Number] 1
      as the [Number] integer
        the [Defaults].time getter should return this [Number] value
      as the [Number] decimal fraction higher than 1
        the [Defaults].time getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Defaults].time getter should return the default value
  is not set for the [Defaults]
    the [Defaults].time getter should return the default value

When the 'speed' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].speed setter
      as the [Number] value
        that equals 0
          the [Defaults].speed getter should return the default value
        that is negative or -Infinity
          the [Defaults].speed getter should return the default value
        that is positive integer
          the [Defaults].speed getter should return this [Number] value
        that is positive decimal fraction
          the [Defaults].speed getter should return this [Number] value
        that is Infinity
          the [Defaults].speed getter should return [Number] Infinity
  is not set for the [Defaults]
    the [Defaults].speed getter should return the default value

When the 'delay' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].delay setter
      as the [Number] value
        that is Infinity
          the [Defaults].delay getter should return the default value
        lower than 0 or -Infinity
          the [Defaults].delay getter should return the [Number] 0
        that is integer equal or higher than 0
          the [Defaults].delay getter should return this [Number] value
        that is decimal fraction higher than 0
          the [Defaults].delay getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Defaults].delay getter should return the default value
  is not set for the [Defaults]
    the [Defaults].delay getter should return the default value

When the 'repeat' motion property
  is set for the [Defaults]
    in the constructor or with [Defaults].repeat setter
      as the [Number] value
        that is Infinity
          the [Defaults].repeat getter should return the [Number] Infinity
        lower than 1 or -Infinity
          the [Defaults].repeat getter should return the [Number] 1
        that is integer equal or higher than 1
          the [Defaults].repeat getter should return this [Number] value
        that is decimal fraction higher than 1
          the [Defaults].repeat getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Defaults].repeat getter should return the default value
  is not set for the [Defaults]
    the [Defaults].repeat getter should return the default value

*/