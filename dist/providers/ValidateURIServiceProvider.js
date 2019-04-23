"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

var _KernelEvents = require("./event/KernelEvents");

var _Validator = require("./validator/Validator");

var _Response = require("../core/response/Response");

class ValidateURIServiceProvider extends _AbstractProvider.default {
  registration(App) {}

  subscribe(App, EventDispatcher) {
    EventDispatcher.addEventListener(_KernelEvents.default.REQUEST, event => {
      if (!_Validator.default.validatePath(event.request.url)) {
        event.response = new _Response.default('Url validator');
      }
    }, -999, this);
  }

}

exports.default = ValidateURIServiceProvider;