"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Container = _interopRequireDefault(require("./container/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Slix extends _Container.default {
  constructor() {
    super();
  }

  boot() {}

  run() {}

}

exports.default = Slix;