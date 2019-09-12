"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

class Container {
  constructor() {
    this.providers = new Map();
    this.params = new Map();
  }

  get providers() {
    return this._providers;
  }

  set providers(value) {
    this._providers = this._providers ? this._providers : value;
  }

  get params() {
    return this._params;
  }

  set params(value) {
    this._params = this._params ? this._params : value;
  }

  registrationProvider(provider, value = {}) {
    provider = new provider();
    value.__provider = provider.getName();

    if (!this._providers.has(provider.getName())) {
      this._providers.set(provider.getName(), provider);
    }

    if (value) {
      this.setParam(provider.getName(), value);
    }
  }

  removeProvider(provider) {
    this._providers.get(provider.getName()).remove();
  }

  getAllProviders() {
    return [...this._providers.values()];
  }

  getAllParams() {
    return [...this._params.values()];
  }

  setParam(key, value) {
    if (typeof key === 'function') {
      if (key.__proto__.name === 'AbstractProvider') {
        key = key.getName();
      }
    }

    if (typeof key === 'object') {
      throw new Error('Container: Wrong key parameter passed');
    }

    if (!this.params.has(key)) {
      this.params.set(key, value);
    } else {
      if (typeof this.params.get(key) === 'object') {
        for (let property of Object.keys(value)) {
          this.params.get(key)[property] = value[property];
        }
      }
    }
  }

  getParam(key) {
    if (this._params.has(key)) {
      return this._params.get(key);
    }

    return null;
  }

  set(key, value) {
    if (!this.hasOwnProperty(key)) {
      this[key] = value;
    }
  }

  get(key) {
    if (this.hasOwnProperty(key)) {
      return this[key];
    }

    return null;
  }

}

exports.default = Container;