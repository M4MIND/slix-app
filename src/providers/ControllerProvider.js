import AbstractProvider from '../api/AbstractProvider';
import Route from './routerProvider/Route';
import Request from '../core/request/SlixRequest';

import config from './controllerProvider/config';

let pathLib = require('path');
let fsLib = require('fs');

export default class ControllerProvider extends AbstractProvider {
  async registration(App) {
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

    App.controllerRegistration = (controller) => {
      controller = new controller(App);
      controller.mount();
    };
  }

  async boot(App) {
    this.config = {...config, ...App.getParam(this.getName())};

    if (this.config.path !== false) {
      this.config.path = pathLib.join(App.get('ROOT_DIR'), this.config.path);
      readDir(this.config.path, App);
    }
  }
}

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
          App.controllerRegistration(controller);
        } else {
          readDir(file, App);
        }
      });
    }
  });
}
