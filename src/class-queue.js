export default class _Queue {
  constructor() {
    this.index = 0;
    this.current = 0;
    this.next = 0;
    this.previous = 0;
    this.length = 0;
    this.public = this._public;
  }

  get _public() {
    const _this = this;
    return new class Queue {
      get index() { return _this.index; }
      get current() { return _this.current; }
      get next() { return _this.next; }
      get previous() { return _this.previous; }
      get length() { return _this.length; }
    };
  }

}