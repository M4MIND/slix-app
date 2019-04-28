"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _AbstractController = require("../api/AbstractController");

var _Route = require("./router/Route");

var _Request = require("../core/request/Request");

let pathLib = require('path');

let fsLib = require('fs');

class ControllerServiceProvider extends _AbstractProvider.default {
  registration(App) {
    App.setParam(this.getName(), {
      path: pathLib.join(App.get('ROOT_DIR'), '/controllers/')
    });
    /**
     * @param {Route} route
     * @param {Request} request
     * */

    App._runControllers = async (route, request) => {
      let controllerResponse = await (async () => {
        let response;
        let collection = [];

        if (route.controller) {
          collection.push(route.controller.before);
          collection.push(route.handler);
          collection.push(route.controller.after);
        } else {
          collection.push(route.handler);
        }

        for (let controller of collection) {
          let out = await controller(request);

          if (out) {
            response = out;
          }
        }

        return response;
      })();

      if (controllerResponse) {
        return controllerResponse;
      }
    };
  }

  boot(App) {
    this.config = App.getParam(this.getName());
    readDir(this.config.path, App);
  }

}

exports.default = ControllerServiceProvider;

function readDir(path, App) {
  fsLib.readdir(path, (err, collection) => {
    if (err) {
      throw err;
    }

    for (let file of collection) {
      file = pathLib.join(path, file);
      fsLib.stat(file, (err, stat) => {
        if (err) {
          throw err;
        }

        if (stat.isFile()) {
          let controller = require(file).default;
          /** @type {AbstractController} */


          controller = new controller(App);
          controller.mount();
        } else {
          readDir(file, App);
        }
      });
    }
  });
}