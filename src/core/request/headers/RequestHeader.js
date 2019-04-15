export default class RequestHeader {
	/** @param {IncomingMessage} request */
	constructor(request) {
		this.collection = new Map();

		for (let key of Object.keys(request.headers)) {
			this.collection.set(key, request.headers[key]);
		}
	}

	/** @param {string} name */
	get(name) {
		return this.collection.get(name);
	}

	/** @param {string} name */
	has(name) {
		return this.collection.has(name);
	}
}