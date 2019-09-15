import AbstractProvider from '../api/AbstractProvider';
import AbstractController from '../api/AbstractController';
import Request from '../core/request/SlixRequest';
import Router from './routerProvider/Router';

let pathLib = require('path');

export default class RouterProvider extends AbstractProvider {
  constructor() {
    super();
    this.router = new Router();
  }

  registration = async (App) => {
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
  };
}
