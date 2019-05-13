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
    }
}
