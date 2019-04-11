"use strict";

exports.default = void 0;

var _Slix = require("../Slix");

var _EventDispatcher = require("../providers/event/EventDispatcher");

class AbstractProvider {
  /** @param {Slix} App */
  registration(App) {}
  /** @param {Slix} App */


  boot(App) {}
  /**
   * @param {Slix} App
   * @param {EventDispatcher} EventDispatcher
   * */


  subscribe(App, EventDispatcher) {}
  /** @return {string} */


  getName() {
    return this.constructor.name;
  }
  /** @return {string} */


  static getName() {
    return this.constructor.name;
  }

}

exports.default = AbstractProvider;