'use strict';

exports.default = void 0;

var _ResponseHeader = require('./header/ResponseHeader');

class Response {
    /**
     * @param {string} content
     * @param {number} statusCode
     * @param {Object} headers
     * */
    constructor(content = '', statusCode = Response.HTTP_OK, headers = {}) {
        this.headers = new _ResponseHeader.default(headers);
        this.content = content;
        this.statusCode = statusCode;
        this.encoding = 'UTF-8';
        this.setContentType(Response.ContentType.html);
        return this;
    }
    /** @return {string} */

    get content() {
        return this._content;
    }
    /** @param {string} value */

    set content(value) {
        this._content = value;
        return this;
    }
    /** @return {number} */

    get statusCode() {
        return this._statusCode;
    }
    /** @param {number} value */

    set statusCode(value) {
        this._statusCode = value;
        return this;
    }
    /** @return {ResponseHeader} */

    get headers() {
        return this._headers;
    }
    /** @param {ResponseHeader} value */

    set headers(value) {
        this._headers = value;
        return this;
    }
    /** @param {string} value */

    setContentType(value) {
        this.headers.set('Content-Type', value + '; charset=' + this.encoding);
        return this;
    }

    get encoding() {
        return this._encoding;
    }

    set encoding(value) {
        this._encoding = value;
    }
}

exports.default = Response;
Response.HTTP_CONTINUE = 100;
Response.HTTP_SWITCHING_PROTOCOLS = 101;
Response.HTTP_PROCESSING = 102;
Response.HTTP_EARLY_HINTS = 103;
Response.HTTP_OK = 200;
Response.HTTP_CREATED = 201;
Response.HTTP_ACCEPTED = 202;
Response.HTTP_NON_AUTHORITATIVE_INFORMATION = 203;
Response.HTTP_NO_CONTENT = 204;
Response.HTTP_RESET_CONTENT = 205;
Response.HTTP_PARTIAL_CONTENT = 206;
Response.HTTP_MULTI_STATUS = 207;
Response.HTTP_ALREADY_REPORTED = 208;
Response.HTTP_IM_USED = 226;
Response.HTTP_MULTIPLE_CHOICES = 300;
Response.HTTP_MOVED_PERMANENTLY = 301;
Response.HTTP_FOUND = 302;
Response.HTTP_SEE_OTHER = 303;
Response.HTTP_NOT_MODIFIED = 304;
Response.HTTP_USE_PROXY = 305;
Response.HTTP_RESERVED = 306;
Response.HTTP_TEMPORARY_REDIRECT = 307;
Response.HTTP_PERMANENTLY_REDIRECT = 308;
Response.HTTP_BAD_REQUEST = 400;
Response.HTTP_UNAUTHORIZED = 401;
Response.HTTP_PAYMENT_REQUIRED = 402;
Response.HTTP_FORBIDDEN = 403;
Response.HTTP_NOT_FOUND = 404;
Response.HTTP_METHOD_NOT_ALLOWED = 405;
Response.HTTP_NOT_ACCEPTABLE = 406;
Response.HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
Response.HTTP_REQUEST_TIMEOUT = 408;
Response.HTTP_CONFLICT = 409;
Response.HTTP_GONE = 410;
Response.HTTP_LENGTH_REQUIRED = 411;
Response.HTTP_PRECONDITION_FAILED = 412;
Response.HTTP_REQUEST_ENTITY_TOO_LARGE = 413;
Response.HTTP_REQUEST_URI_TOO_LONG = 414;
Response.HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
Response.HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
Response.HTTP_EXPECTATION_FAILED = 417;
Response.HTTP_I_AM_A_TEAPOT = 418;
Response.HTTP_MISDIRECTED_REQUEST = 421;
Response.HTTP_UNPROCESSABLE_ENTITY = 422;
Response.HTTP_LOCKED = 423;
Response.HTTP_FAILED_DEPENDENCY = 424;
Response.HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL = 425;
Response.HTTP_TOO_EARLY = 425;
Response.HTTP_UPGRADE_REQUIRED = 426;
Response.HTTP_PRECONDITION_REQUIRED = 428;
Response.HTTP_TOO_MANY_REQUESTS = 429;
Response.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
Response.HTTP_UNAVAILABLE_FOR_LEGAL_REASONS = 451;
Response.HTTP_INTERNAL_SERVER_ERROR = 500;
Response.HTTP_NOT_IMPLEMENTED = 501;
Response.HTTP_BAD_GATEWAY = 502;
Response.HTTP_SERVICE_UNAVAILABLE = 503;
Response.HTTP_GATEWAY_TIMEOUT = 504;
Response.HTTP_VERSION_NOT_SUPPORTED = 505;
Response.HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506;
Response.HTTP_INSUFFICIENT_STORAGE = 507;
Response.HTTP_LOOP_DETECTED = 508;
Response.HTTP_NOT_EXTENDED = 510;
Response.HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511;
Response.ContentType = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    json: 'application/json',
    png: 'image/png',
    jpg: 'image/jpg',
};
