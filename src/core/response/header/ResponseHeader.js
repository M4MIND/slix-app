import AbstractHeader from "../../header/AbstractHeader"
import Cookie from "../../cookie/Cookie"

export default class ResponseHeader extends AbstractHeader {

    /** @param {Object} headers */
    constructor(headers) {
        super(headers);

        /** @type [Cookie] */
        this.cookies = [];

        if (!this.headers['cache-control']) {
            this.set('Cache-Control', '');
        }

        if (!this.headers['date']) {
            this.set('Date', (new Date()).toUTCString());
        }
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
        let find = this.cookies.findIndex(item => item.name === name);

        return find !== -1;
    }

    /** @param {string} name */
    getCookie(name) {
        let find = this.cookies.find(item => item.name === name);

        return find ? find : null;
    }

    removeCookie(name) {
        this.setCookie(new Cookie(name, null, new Date(0)));

        return this;
    }

    getAllCookies() {
        return this.cookies;
    }

    preparationHeaders() {
        let out = [];
        let headers = this.getAll();
        for (let key of Object.keys(headers)) {
            out.push([key, headers[key]])
        }

        for (let cookie of this.getAllCookies()) {
            out.push(['Set-Cookie', cookie.raw()]);
        }

        return out;
    }
}