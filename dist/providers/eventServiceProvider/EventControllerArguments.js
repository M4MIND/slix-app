'use strict';

exports.default = void 0;

var _AbstractEvent = require('../../api/AbstractEvent');

class EventControllerArguments extends _AbstractEvent.default {
    constructor(request, controller) {
        super(request);
        this.controller = controller;
    }

    get controller() {
        return this._controller;
    }

    set controller(value) {
        this._controller = value;
    }
}

exports.default = EventControllerArguments;
