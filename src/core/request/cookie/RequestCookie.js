import {IncomingMessage} from 'http';

export default class RequestCookie {
	/** @param {IncomingMessage} request */
	constructor (request) {
		this.collection = new Map();
		for (let value of request.headers.cookie.split(';')) {
			value = value.trim().split('=');
			this.collection.set(value[0], value[1]);
		}
		delete request.headers.cookie;
	}

	/** @param {string} name */
	get (name) {
		return this.collection.get(name);
	}

	/** @param {string} name */
	has(name) {
		return this.collection.has(name);
	}
}