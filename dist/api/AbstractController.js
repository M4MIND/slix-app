"use strict";

exports.default = void 0;

var _Slix = require("../Slix");

var _SlixRequest = require("../core/request/SlixRequest");

var _Router = require("../providers/routerProvider/Router");

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
      this.App.mount(route, _Router.default.METHOD.ALL, handler, this);
    });

    _defineProperty(this, "GET", (route, handler) => {
      this.App.mount(route, _Router.default.METHOD.GET, handler, this);
    });

    _defineProperty(this, "POST", (route, handler) => {
      this.App.mount(route, _Router.default.METHOD.POST, handler, this);
    });

    _defineProperty(this, "HEAD", (route, handler) => {
      this.App.mount(route, _Router.default.METHOD.HEAD, handler, this);
    });

    _defineProperty(this, "DELETE", (route, handler) => {
      this.App.mount(route, _Router.default.METHOD.DELETE, handler, this);
    });

    _defineProperty(this, "CONNECT", (route, handler) => {
      this.App.mount(route, _Router.default.METHOD.CONNECT, handler, this);
    });

    _defineProperty(this, "OPTIONS", (route, handler) => {
      this.App.mount(route, _Router.default.METHOD.OPTIONS, handler, this);
    });

    _defineProperty(this, "TRACE", (route, handler) => {
      this.App.mount(route, _Router.default.METHOD.TRACE, handler, this);
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