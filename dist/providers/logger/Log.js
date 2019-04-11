"use strict";

exports.default = void 0;

class Log {
  constructor(level = this.constructor.DEFAULT(), message) {}

  static DEFAULT() {}

  static INFO() {}

  static WARNING() {}

  static ERROR() {}

}

exports.default = Log;