'use strict';

exports.default = void 0;

var _Slix = require('../Slix');

var _EventDispatcher = require('../providers/eventProvider/EventDispatcher');

class AbstractProvider {
  constructor() {
    this.__nameProvider = this.getName();
  }
  /** @param {Slix} App */

  registration(App) {}
  /** @param {Slix} App */

  boot(App) {}
  /**
   * @param {Slix} App
   * @param {EventDispatcher} EventDispatcher
   * */

  subscribe(App, EventDispatcher) {}
  /** @param {Slix} App */

  remove(App) {
    App.providers.delete(this.getName());
    App.params.delete(this.getName());
  }
  /** @return {string} */

  getName() {
    return this.constructor.name;
  }
  /** @return {string} */

  static getName() {
    return this.name;
  }
}

exports.default = AbstractProvider;
