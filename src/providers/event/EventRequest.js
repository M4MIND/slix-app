import Request from "../../core/request/Request"
import PreparationResponse from "../../core/response/PreparationResponse"

export default class EventRequest {
	/**
	 * @param {Request} request
	 * @param {PreparationResponse} response
	 * */
	constructor(request, response) {
		this._request = request
		this._response = response
	}

	/** @return {Request} */
	get request() {
		return this._request
	}

	/** @param {Request} value */
	set request(value) {
		this._request = value
	}

	/** @return {PreparationResponse} */
	get response() {
		return this._response
	}

	/** @param {PreparationResponse} value */
	set response(value) {
		this._response = value
	}
}