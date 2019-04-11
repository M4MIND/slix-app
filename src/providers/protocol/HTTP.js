import {createServer} from 'http';
import Request from "../../core/request/Request"
import PreparationResponse from "../../core/response/PreparationResponse"

export default class HTTP {
	/**
	 * @param {{
	 *     host:string
	 *     port:number
	 *     callback: function
	 * }} config
	 * */
	constructor(config) {
		console.dir(config);

		this.http = createServer((req, res) => {
			let body = [];
			req.on('err', err => {
				console.dir(err);
			}).on('data', data => {
				body.push(data);
			}).on('end', () => {
				req.body = body;
				config.callback(new Request(req), new PreparationResponse(res));
			})
		})

		this.http.listen({
			port: config.port,
			host: config.host
		})
	}
}