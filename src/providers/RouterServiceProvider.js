import AbstractProvider from "../api/AbstractProvider"
import AbstractController from "../api/AbstractController"
import Request from "../core/request/Request"

export default class RouterServiceProvider extends AbstractProvider {
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
            route = route.replace(new RegExp(':(\\w+):', 'g'), '');

            if (!this.collection.has(route)) {
                this.collection.set(route, new Map());
            }

            if (!this.collection.get(route).has(method)) {
                this.collection.get(route).set(method, null)
            }
            else {
                this.collection.get(route).set(method, null);
            }
            let callChain = {};

            if (controller) {
                callChain.handlers = [controller.before, handler, controller.after];
                callChain.controller = controller;

                this.collection.get(route).set(method, callChain);
            }
            else {
                callChain.handlers = [handler];
                this.collection.get(route).set(method, callChain);
            }

            this.collection = new Map([...this.collection.entries()].sort((a, b) => {
                a = a[0] === '*' ? 0 : a[0].length;
                b = b[0] === '*' ? 0 : b[0].length;

                return b - a;
            }));

            console.dir(this.collection);
        };

        /**
         * @callback
         * @param {Request} request
         * */
        App._getController = (request) => {
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
        }
    }
}