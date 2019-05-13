'use strict';

exports.default = void 0;

var _AbstractProvider = require('../api/AbstractProvider');

var _AbstractController = require('../api/AbstractController');

var _Route = require('./routerProvider/Route');

var _SlixRequest = require('../core/request/SlixRequest');

const config = {
    path: '/controllers/',
};

let pathLib = require('path');

let fsLib = require('fs');

class ControllerProvider extends _AbstractProvider.default {
    registration(App) {
        config.path = pathLib.join(App.get('ROOT_DIR'), config.path);
        App.setParam(this.getName(), config);
        /**
         * @param {Route} route
         * @param {Request} request
         * */

        App._runControllers = async (route, request) => {
            let controllerResponse = await (async () => {
                let response;

                for (let controller of route.handlerQueue) {
                    let out = await controller(
                        request,
                        request.query,
                        request.post,
                        request.file
                    );

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

    boot(App) {
        this.config = App.getParam(this.getName());
        readDir(this.config.path, App);
    }
}

exports.default = ControllerProvider;

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
