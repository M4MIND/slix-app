import {ServerResponse} from 'http';
import FileResponse from "./FileResponse"
import RedirectResponse from "./RedirectResponse"
import Response from "./Response"
import JsonResponse from "./JsonResponse"
import Request from "../request/Request";

export default class PreparationResponse {
	/**
	 * @param {ServerResponse} response
	 * @param {Request} request
	 * */
	constructor(response, request) {
		this.res = response;
        this.request = request;
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


    get request() {
        return this._request;
    }

    set request(value) {
        this._request = value;
    }

    /** @param {Response|RedirectResponse|JsonResponse|FileResponse} response */
	setResponse(response) {
		this.res.writeHead(response.statusCode, response.headers.preparationHeaders());
		this.write(response.content);
	}

	/** @param {string} value */
	write(value) {
		this.res.end(value);
	}
}