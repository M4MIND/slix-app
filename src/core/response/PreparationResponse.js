import {ServerResponse} from 'http';
import FileResponse from "./FileResponse"
import RedirectResponse from "./RedirectResponse"
import Response from "./Response"
import JsonResponse from "./JsonResponse"

export default class PreparationResponse {
	/** @param {ServerResponse} res */
	constructor(res) {
		this._res = res
	}

	/** @return {ServerResponse} */
	get res() {
		return this._res
	}

	/** @param {ServerResponse} value */
	set res(value) {
		if (this._res) {
			return;
		}
		this._res = value
	}

	/** @param {Response|RedirectResponse|JsonResponse|FileResponse} response */
	setResponse(response) {
		this.res.writeHead(response.statusCode, response.headers.preparationHeaders());
		this.res
		this.write(response.content);
	}

	/** @param {string} value */
	write(value) {
		this.res.end(value);
	}
}