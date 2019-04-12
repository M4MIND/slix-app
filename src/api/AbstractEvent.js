import Request from "../core/request/Request"

export default class AbstractEvent {
	/**
	 * @param {Request} request
	 * @param {PreparationResponse} response
	 * */

	constructor(request, response) {
		this._break = false;
		this._request = request
		this._response = response
	}

	get break() {
		return this._break
	}

	set break(value) {
		this._break = value
	}

	breakEvent() {
		this._break = true;
	}

	get request() {
		return this._request
	}

	set request(value) {
		this._request = value
	}

	get response() {
		return this._response
	}

	set response(value) {
		this._response = value
	}
	
	setResponse(response) {
		this.breakEvent();
		this.response.setResponse(response);
	}
}