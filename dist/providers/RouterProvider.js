"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _AbstractController = require("../api/AbstractController");

var _SlixRequest = require("../core/request/SlixRequest");

var _Router = require("./routerProvider/Router");

class RouterProvider extends _AbstractProvider.default {
  constructor() {
    super();
    this.router = new _Router.default();
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
      this.router.mount(route, method, handler, controller);
    };
    /**
     * @callback
     * @param {Request} request
     * */


    App._getController = request => {
      return this.router.findRoute(request);
    };
  }

}

exports.default = RouterProvider;