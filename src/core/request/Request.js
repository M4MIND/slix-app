import {IncomingMessage} from 'http';
import RequestCookie from "./cookie/RequestCookie"
import RequestHeader from "./headers/RequestHeader"
import RequestQuery from "./query/RequestQuery"
import RequestPath from "./path/RequestPath";
import RequestFile from "./file/RequestFile";
import RequestPost from "./post/RequestPost";

export default class Request {
    /** @param {IncomingMessage} req */
    constructor(req) {
        this.req = req;
        this.url = req.url;
        this.method = req.method.toUpperCase();
        this.path = new RequestPath(this);
        this.header = new RequestHeader(this);
        this.cookie = new RequestCookie(this);
        this.query = new RequestQuery(this);
        this.post = new RequestPost(this);
        this.file = new RequestFile(this);
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

    /** @return {RequestPost} */
    get post() {
        return this._post;
    }

    /** @param {RequestPost} value */
    set post(value) {
        this._post = value;
    }

    /** @return {RequestFile} */
    get file() {
        return this._file;
    }

    /** @param {RequestFile} value */
    set file(value) {
        this._file = value;
    }
}