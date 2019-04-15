"use strict";

exports.default = void 0;

var _AbstractEvent = require("../../api/AbstractEvent");

class EventCallController extends _AbstractEvent.default {
  constructor(request, response, controller) {
    super(request, response);
    this._controller = controller.controller ? controller.controller : null;
    this._handlers = controller._handlers;
  }

  get controller() {
    return this._controller;
  }

  set controller(value) {
    this._controller = value;
  }

  get handlers() {
    return this._handlers;
  }

  set handlers(value) {
    this._handlers = value;
  }

}

exports.default = EventCallController;