import {IncomingMessage} from 'http';
import RequestCookie from "./cookie/RequestCookie"
import RequestHeader from "./headers/RequestHeader"
import RequestQuery from "./query/RequestQuery"
import RequestPath from "./path/RequestPath";

export default class Request {
	/** @param {IncomingMessage} req */
	constructor(req) {
		this.req = req;
		this.url = req.url;
		this.method = req.method.toUpperCase();
		this.path = new RequestPath(this.url.match(new RegExp('([^?#]*)|$', 'g'))[0]);
		this.query = new RequestQuery(this.url.match(new RegExp('(?<=\\?)([^#]*)|$', 'g'))[0]);
		this.cookie = new RequestCookie(this.req);
		this.header = new RequestHeader(this.req);
		this.hash = this.url.match(new RegExp('((?<=#)(.*))|$', 'g'))[0];
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

	/** @return {RequestQuery} */
	get query() {
		return this._query
	}

	/** @param {RequestQuery} value */
	set query(value) {
		this._query = value
	}

	/** @return {RequestPath} */
	get path() {
		return this._path;
	}

	/** @param {RequestPath} value */
	set path(value) {
		this._path = value;
	}
}