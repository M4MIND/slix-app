'use strict';

exports.default = void 0;

class RequestPostData {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }
}

exports.default = RequestPostData;
