"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _AbstractController = require("../api/AbstractController");

var _Request = require("../core/request/Request");

class RouterServiceProvider extends _AbstractProvider.default {
  constructor() {
    super();
    /** @type {Map<string, Map<string, Array<function>>>} */

    this.collection = new Map();
  }

  registration(App) {
    /**
     * @callback
     * @param {string} route
     * @param {string} method
     * @param {function} handler
     * @param {AbstractController} controller
     * */
    App._mount = (route, method, handler, controller = null) => {
      if (!this.collection.has(route)) {
        this.collection.set(route, new Map());
      }

      if (!this.collection.get(route).has(method)) {
        this.collection.get(route).set(method, []);
      } else {
        this.collection.get(route).set(method, []);
      }

      if (controller) {
        this.collection.get(route).get(method).push(controller.before, handler, controller.after);
      } else {
        this.collection.get(route).get(method).push(handler);
      }

      this.collection = new Map([...this.collection.entries()].sort((a, b) => {
        a = a[0] === '*' ? 0 : a[0].length;
        b = b[0] === '*' ? 0 : b[0].length;
        return b - a;
      }));
    };
    /**
     * @callback
     * @param {Request} request
     * */


    App._getController = request => {
      if (this.collection.has(request.url)) {
        if (this.collection.get(request.url).has(request.method)) {
          return this.collection.get(request.url).get(request.method);
        }
      }

      if (this.collection.has('*')) {
        if (this.collection.get('*').has('*')) {
          return this.collection.get('*').get('*');
        }
      }

      throw new Error('Not mounted controller serving 404 pages');
    };
  }

}

exports.default = RouterServiceProvider;