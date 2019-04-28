import AbstractController from "../../api/AbstractController";

export default class Route {
    /**
     * @param {string} pattern - RegExp pattern
     * @param {string} route - Original path
     * @param {function} handler - Request handler
     * @param {AbstractController} controller - Controller
     * @param {boolean} dynamic - Dynamic route
     * */
    constructor(pattern, route, handler, controller = null, dynamic) {
        this.pattern = pattern;
        this.route = route;
        this.handler = handler;
        this.dynamic = dynamic;
        this.controller = controller;
    }

    get pattern() {
        return this._pattern;
    }

    set pattern(value) {
        this._pattern = value;
    }

    get route() {
        return this._route;
    }

    set route(value) {
        this._route = value;
    }

    get handler() {
        return this._handler;
    }

    set handler(value) {
        this._handler = value;
    }

    get dynamic() {
        return this._dynamic;
    }

    set dynamic(value) {
        this._dynamic = value;
    }

    get controller() {
        return this._controller;
    }

    set controller(value) {
        this._controller = value;
    }
}