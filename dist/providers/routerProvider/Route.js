"use strict";

exports.default = void 0;

var _AbstractController = require("../../api/AbstractController");

class Route {
  /**
   * @param {string} pattern - RegExp pattern
   * @param {string} route - Original path
   * @param {function} handler - Request handler
   * @param {AbstractController} controller - Controller
   * @param {boolean} dynamic - Dynamic route
   * */
  constructor(pattern, route, handler, controller = null, dynamic) {
    this.pattern = pattern;
    this.route = route;
    this.handler = handler;
    this.controller = controller;
    this.dynamic = dynamic;
    this.handlerQueue = [];

    if (this.controller.before) {
      this.handlerQueue.push(this.controller.before);
    }

    if (this.handler) {
      this.handlerQueue.push(this.handler);
    }

    if (this.controller.after) {
      this.handlerQueue.push(this.controller.after);
    }
  }
  /** @return {string} */


  get pattern() {
    return this._pattern;
  }
  /** @param {string} value */


  set pattern(value) {
    this._pattern = value;
  }
  /** @return {string} */


  get route() {
    return this._route;
  }
  /** @param {string} value */


  set route(value) {
    this._route = value;
  }
  /** @return {function} */


  get handler() {
    return this._handler;
  }
  /** @param {function} value */


  set handler(value) {
    this._handler = value;
  }
  /** @return {boolean} */


  get dynamic() {
    return this._dynamic;
  }
  /** @param {boolean} value */


  set dynamic(value) {
    this._dynamic = value;
  }
  /** @return {AbstractController} */


  get controller() {
    return this._controller;
  }
  /** @param {AbstractController} value */


  set controller(value) {
    this._controller = value;
  }

}

exports.default = Route;