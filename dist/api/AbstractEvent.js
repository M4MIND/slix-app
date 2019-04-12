"use strict";

exports.default = void 0;

class AbstractEvent {
  constructor() {
    this._break = false;
  }

  get break() {
    return this._break;
  }

  set break(value) {
    this._break = value;
  }

  breakEvent() {
    this._break = true;
  }

}

exports.default = AbstractEvent;