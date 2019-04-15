import AbstractProvider from "../api/AbstractProvider"
import AbstractController from "../api/AbstractController"

let pathLib = require('path');
let fsLib = require('fs');

export default class ControllerServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			path: pathLib.join(App.get('ROOT_DIR'), '/controllers/')
		});

		App._runControllers = async (handlers, request) => {
			let controllerResponse = await (async () => {
				let response;
				for (let controller of handlers) {
					/** @type {AbstractEvent}*/
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

			throw new Error('The controller did not return an answer.');
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
				}
				else {
					readDir(file, App)
				}
			})
		}
	})
}