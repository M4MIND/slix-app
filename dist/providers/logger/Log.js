"use strict";

exports.default = void 0;

class Log {
  /**
   * @param {string} message
   * @param {number} level
   * */
  static console(message, level = this.constructor.DEFAULT()) {
    console.log(this.getColor(level) + message);
  }
  /** @return {number} */


  static DEFAULT() {
    return 100;
  }
  /** @return {number} */


  static INFO() {
    return 200;
  }
  /** @return {number} */


  static WARNING() {
    return 300;
  }
  /** @return {number} */


  static ERROR() {
    return 500;
  }
  /** @return {string} */


  static getColor(level = this.constructor.DEFAULT()) {
    return '';
  }

}

exports.default = Log;