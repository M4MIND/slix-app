import AbstractProvider from "../api/AbstractProvider"
import Response from "../core/response/Response"

let twigLib = require('twig');
let pathLib = require('path');

export default class TwigServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			path: './views/',
			cache: false
		})
	}

	boot(App) {
		this.config = App.getParam(this.getName());
		twigLib.cache(this.config.cache);
		App.render = async (path, values = {}) => {
			return await new Promise((resolve, reject) => {
				path = pathLib.join(App.get('DIR'), pathLib.join(this.config.path, path)) + '.twig';
				twigLib.renderFile(path, values, (err, html) => {
					if (err) {
						reject(err);
					}
					resolve(new Response(html, 200));
				})
			})
		}
	}
}