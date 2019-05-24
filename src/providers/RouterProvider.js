import AbstractProvider from '../api/AbstractProvider';
import AbstractController from '../api/AbstractController';
import Request from '../core/request/SlixRequest';
import Router from './routerProvider/Router';

export default class RouterProvider extends AbstractProvider {
  constructor() {
    super();
    this.router = new Router();
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
  }
}
