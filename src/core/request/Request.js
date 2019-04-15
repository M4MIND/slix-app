import {IncomingMessage} from 'http';
import RequestCookie from "./cookie/RequestCookie"
import RequestHeader from "./headers/RequestHeader"
import RequestQuery from "./query/RequestQuery"

export default class Request {
	/** @param {IncomingMessage} req */
	constructor(req) {
		this._req = req;
		this._url = req.url;
		this._method = req.method.toUpperCase();
		this._cookie = new RequestCookie(this.req);
		this._header = new RequestHeader(this.req);
		this._query = new RequestQuery(this.req);
	}

	/** @return {IncomingMessage} */
	get req() {
		return this._req;
	}

	/** @param {IncomingMessage} value */
	set req(value) {
		this._req = value;
	}

	/** @return {RequestCookie} */
	get cookie() {
		return this._cookie
	}

	/** @param {RequestCookie} value */
	set cookie(value) {
		this._cookie = value
	}

	/** @return {RequestHeader} */
	get header() {
		return this._header
	}

	/** @param {RequestHeader} value */
	set header(value) {
		this._header = value
	}

	/** @return {string} */
	get url() {
		return this._url
	}

	/** @param {string} value */
	set url(value) {
		this._url = value
	}

	/** @return {string} */
	get method() {
		return this._method
	}

	/** @param {string} value */
	set method(value) {
		this._method = value
	}

	get query() {
		return this._query
	}

	set query(value) {
		this._query = value
	}
}