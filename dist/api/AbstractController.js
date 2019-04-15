"use strict";

exports.default = void 0;

var _Slix = require("../Slix");

var _Request = require("../core/request/Request");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AbstractController {
  /**
   * @param {Slix} App
   * */
  constructor(App) {
    _defineProperty(this, "before", async request => {
      return null;
    });

    _defineProperty(this, "after", async request => {
      return null;
    });

    _defineProperty(this, "ALL", (route, handler) => {
      this.App._mount(route, '*', handler, this);
    });

    _defineProperty(this, "GET", (route, handler) => {
      this.App._mount(route, 'GET', handler, this);
    });

    _defineProperty(this, "POST", (route, handler) => {
      this.App._mount(route, 'POST', handler, this);
    });

    this._App = App;
  }
  /** @param {Request} request */


  /** Function: Mounts the controller's request handler. */
  mount() {
    return null;
  }
  /**
   * @param {string} route
   * @param {function} handler
   * */


  /** @return {Slix} */
  get App() {
    return this._App;
  }
  /** @param {Slix} value */


  set App(value) {
    this._App = value;
  }

}

exports.default = AbstractController;