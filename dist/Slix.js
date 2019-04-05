"use strict";

exports.default = void 0;

var _Container = require("./container/Container");

class Slix extends _Container.default {
  constructor() {
    super();
  }

  boot() {
    console.dir("Boot server");
  }

  run() {
    console.dir("Run server");
  }

}

exports.default = Slix;