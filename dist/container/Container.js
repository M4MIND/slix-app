"use strict";

exports.default = void 0;

var _AbstractProvider = require("../api/AbstractProvider");

class Container {
  constructor() {
    this.providers = new Map();
    this.params = new Map();
  }
  /**
   * @param {AbstractProvider} provider
   * @param {Object|?} value
   * */


  registrationProvider(provider, value = {}) {
    value.__provider = provider.getName();

    if (!this.providers.has(provider.getName())) {
      this.providers.set(provider.getName(), provider);
    }

    if (value) {
      this.setParam(provider.getName(), value);
    }

    provider.registration(this);
  }
  /** @return [AbstractProvider]*/


  getAllProviders() {
    return [...this.providers.values()];
  }

  getAllParams() {
    return [...this.params.values()];
  }
  /**
   * @param {string} key
   * @param {?Object} value
   * */


  setParam(key, value) {
    if (!this.params.has(key)) {
      this.params.set(key, value);
    } else {
      if (typeof this.params.get(key) === "object") {
        for (let property of Object.keys(value)) {
          this.params.get(key)[property] = value[property];
        }
      }
    }
  }
  /** @param {string} key*/


  getParam(key) {
    if (this.params.has(key)) {
      return this.params.get(key);
    }

    return null;
  }
  /**
   * @param {string} key
   * @param {*} value
   * */


  set(key, value) {
    if (!this.hasOwnProperty(key)) {
      this[key] = value;
    }
  }
  /** @param {string} key */


  get(key) {
    if (this.hasOwnProperty(key)) {
      return this[key];
    }

    return null;
  }

}

exports.default = Container;