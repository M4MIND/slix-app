"use strict";

exports.default = void 0;

class Log {
  /**
   * @param {string} message
   * @param {number} level
   * */
  static console(message = '', level = this.DEFAULT) {
    console.log(this.getColor(level) + message);
  }
  /** @return {string} */


  static getColor(level = this.DEFAULT) {
    if (level === this.DEFAULT) {
      return '\x1b[37m';
    }

    if (level === this.INFO) {
      return '\x1b[34m';
    }

    if (level === this.SUCCESS) {
      return '\x1b[36m';
    }

    if (level === this.WARNING) {
      return '\x1b[33m';
    }

    if (level === this.ERROR) {
      return '\x1b[31m';
    }
  }

}

exports.default = Log;
Log.DEFAULT = 100;
Log.INFO = 200;
Log.WARNING = 300;
Log.SUCCESS = 400;
Log.ERROR = 500;