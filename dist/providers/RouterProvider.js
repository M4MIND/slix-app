'use strict';

exports.default = void 0;

var _AbstractProvider = require('../api/AbstractProvider');

var _AbstractController = require('../api/AbstractController');

var _SlixRequest = require('../core/request/SlixRequest');

var _Router = require('./routerProvider/Router');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}

let pathLib = require('path');

class RouterProvider extends _AbstractProvider.default {
  constructor() {
    super();

    _defineProperty(this, 'registration', async (App) => {
      App.mount = this.router.mount;
      /**
       * @callback
       * @param {Request} request
       * */

      App._getController = (request) => {
        return this.router.findRoute(request);
      };
      /**
       * @param {Route} route
       * @param {Request} request
       * */

      App._runControllers = async (route, request) => {
        let controllerResponse = await (async () => {
          let response;

          for (let controller of route.handlerQueue) {
            let out = await controller(request, request.query, request.post, request.file);

            if (out && !response) {
              response = out;
              break;
            }
          }

          return response;
        })();

        if (controllerResponse) {
          return controllerResponse;
        }
      };
    });

    this.router = new _Router.default();
  }
}

exports.default = RouterProvider;
