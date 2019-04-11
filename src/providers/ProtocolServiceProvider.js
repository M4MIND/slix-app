import AbstractProvider from "../api/AbstractProvider"
import HTTP from "./protocol/HTTP";
import Request from "../core/request/Request"
import PreparationResponse from "../core/response/PreparationResponse"

/**
 * @export
 * @class ProtocolServiceProvider
 * */
export default class ProtocolServiceProvider extends AbstractProvider {
	registration(App) {
		App.setParam(this.getName(), {
			protocol: HTTP,
			host: 'localhost',
			port: 3000
		})
	}

	boot(App) {
		this.config = App.getParam(this.getName());
		/**
		 * @callback
		 * @param {Request} request
		 * @param {PreparationResponse} response
		 * */
		this.config.callback = async (request, response) => {
			console.dir(response.res.end(JSON.stringify({PARAMS: App.getAllParams(), SLIX: App})));
		}
		/** @type {HTTP} */
		new this.config.protocol(this.config);
	}
}