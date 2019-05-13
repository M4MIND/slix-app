'use strict';

exports.default = void 0;

var _Request = require('../core/request/Request');

class AbstractEvent {
    /**
     * @param {Request} request
     * */
    constructor(request) {
        this.break = false;
        this.request = request;
    }

    get break() {
        return this._break;
    }

    set break(value) {
        this._break = value;
    }

    get request() {
        return this._request;
    }

    set request(value) {
        this._request = value;
    }
}

exports.default = AbstractEvent;
