'use strict';

exports.default = void 0;

var _AbstractHeader = require('../../header/AbstractHeader');

var _Cookie = require('../../cookie/Cookie');

class ResponseHeader extends _AbstractHeader.default {
    /** @param {Object} headers */
    constructor(headers) {
        super(headers);
        /** @type [Cookie] */

        this.cookies = [];

        if (!this.headers['cache-control']) {
            this.set('Cache-Control', '');
        }

        if (!this.headers['date']) {
            this.set('Date', new Date().toUTCString());
        }

        return this;
    }
    /** @param {string} value */

    setContentType(value) {
        this.headers['Content-Type'] = value;
    }
    /** @param {Cookie} value */

    setCookie(value) {
        if (!this.hasCookie(value.name)) {
            this.cookies.push(value);
        }

        return this;
    }
    /** @param {string} name */

    hasCookie(name) {
        let find = this.cookies.findIndex((item) => item.name === name);
        return find !== -1;
    }
    /** @param {string} name */

    getCookie(name) {
        let find = this.cookies.find((item) => item.name === name);
        return find ? find : null;
    }
    /** @param {string} name */

    removeCookie(name) {
        this.setCookie(new _Cookie.default(name, null, new Date(0)));
        return this;
    }
    /** @return Array<Cookie> */

    getAllCookies() {
        return this.cookies;
    }
    /** @return Array<Array<>>*/

    preparationHeaders() {
        let out = [];

        for (let key of Object.keys(this.headers)) {
            out.push([key, this.headers[key]]);
        }

        for (let cookie of this.getAllCookies()) {
            out.push(['Set-Cookie', cookie.raw()]);
        }

        return out;
    }
}

exports.default = ResponseHeader;
