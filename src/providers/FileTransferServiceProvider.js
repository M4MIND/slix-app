import AbstractProvider from "../api/AbstractProvider"
import KernelEvents from "./event/KernelEvents"
import FileResponse from "../core/response/FileResponse";

let fsLib = require('fs');
let pathLib = require('path');

export default class FileTransferServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			path: pathLib.join(App.get('ROOT_DIR'), '/static/'),
			filesWithoutAccess: [],
			defaultContentType: {
				'.css': 'text/css',
				'.js': 'text/javascript',
				'.json': 'application/json',
				'.png': 'image/png',
				'.jpg': 'image/jpg',
				'.ico': 'image/x-icon'
			},
			customContentType: {},
		})
	}

	subscribe(App, EventDispatcher) {
		this.config = App.getParam(this.getName());

		EventDispatcher.addEventListener(KernelEvents.REQUEST, (event) => {
			if (event.response) return;
			return new Promise((resolve, reject) => {
				let path = pathLib.join(this.config.path, event.request.url);
				let typeFile = pathLib.extname(path);

				fsLib.lstat(path, (err, stat) => {
					if (err) {
						resolve(false);
					}

					if (stat !== undefined) {
						if (stat.isFile()) {
							let contentType = 'text/html';

							if (this.config.defaultContentType.hasOwnProperty(typeFile)) {
								contentType = this.config.defaultContentType[typeFile];
							} else if (this.config.customContentType.hasOwnProperty(typeFile)) {
								contentType = this.config.customContentType[typeFile];
							}

							fsLib.readFile(path, (err, content) => {
								if (err) {
									reject(err);
								}
								event.response = new FileResponse(content, contentType);
								resolve(true)
							})
						}
						else {
							resolve(false);
						}
					}
					else {
						resolve(false);
					}
				})
			});
		}, -20, this);
	}
}