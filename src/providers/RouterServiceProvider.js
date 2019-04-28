import AbstractProvider from "../api/AbstractProvider"
import AbstractController from "../api/AbstractController"
import Request from "../core/request/Request"
import Router from "./router/Router";

export default class RouterServiceProvider extends AbstractProvider {
    constructor() {
        super();
        /** @type {Map<string, Map<string, Array<function>>>} */
        this.collection = new Map();
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
        }
    }
}