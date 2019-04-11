import {IncomingMessage} from 'http';
export default class Request {
	/** @param {IncomingMessage} req */
	constructor(req) {
		this.req = req;
	}
}