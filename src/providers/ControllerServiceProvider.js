import AbstractProvider from "../api/AbstractProvider"
import AbstractController from "../api/AbstractController"
import Route from "./routerServiceProvider/Route";
import Request from "../core/request/Request";

import config from "controllerServiceProvider/config.json";

let pathLib = require('path');
let fsLib = require('fs');

export default class ControllerServiceProvider extends AbstractProvider {
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