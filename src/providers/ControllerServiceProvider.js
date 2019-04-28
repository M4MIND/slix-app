import AbstractProvider from "../api/AbstractProvider"
import AbstractController from "../api/AbstractController"
import Route from "./router/Route";
import Request from "../core/request/Request";

let pathLib = require('path');
let fsLib = require('fs');

export default class ControllerServiceProvider extends AbstractProvider {
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
        }
    }

    boot(App) {
        this.config = App.getParam(this.getName());
        readDir(this.config.path, App);
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
                    /** @type {AbstractController} */
                    controller = new controller(App);
                    controller.mount();
                } else {
                    readDir(file, App)
                }
            })
        }
    })
}