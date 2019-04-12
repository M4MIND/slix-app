import Request from "../../core/request/Request"
import PreparationResponse from "../../core/response/PreparationResponse"
import AbstractEvent from "../../api/AbstractEvent"

export default class EventRequest extends AbstractEvent {
	/**
	 * @param {Request} request
	 * @param {PreparationResponse} response
	 * */
	constructor(request, response) {
		super()
		this._request = request
		this._response = response
	}

	/** @return {Request} */
	get request() {
		return this._request
	}

	/** @param {Request} value */
	set request(value) {
		if (this._request) return;
		this._request = value
	}

	/** @return {PreparationResponse} */
	get response() {
		return this._response
	}

	/** @param {PreparationResponse} value */
	set response(value) {
		if (this._response) return;
		this._response = value
	}

	setResponse(response) {
		this.response.setResponse(response);
	}
}