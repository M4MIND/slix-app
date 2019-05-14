"use strict";

exports.default = void 0;

var _RequestFileData = require("./RequestFileData");

class RequestFile {
  constructor() {
    this.collection = new Map();
  }
  /** @param {RequestFileData} value */


  add(value) {
    this.collection.set(value.name, value);
  }

  get(name) {
    return this.collection.get(name);
  }

  has(name) {
    return this.collection.has(name);
  }

}

exports.default = RequestFile;