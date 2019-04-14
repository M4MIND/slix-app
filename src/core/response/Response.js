export default class Response {
	/**
	 * @param {string} content
	 * @param {number} statusCode
	 * @param {Object} headers
	 * */
	constructor(content = '', statusCode = 200, headers = {}) {
		this._content = content;
		this._statusCode = statusCode;
	}

	get content() {
		return this._content
	}

	set content(value) {
		this._content = value
	}

	get statusCode() {
		return this._statusCode
	}

	set statusCode(value) {
		this._statusCode = value
	}
}