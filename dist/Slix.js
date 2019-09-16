'use strict';

exports.default = void 0;

var _Container = require('./container/Container');

var _providers = require('./config/providers');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}

let pathLib = require('path');

class Slix extends _Container.default {
  /**
   * @param {string} __dir
   * */
  constructor(__dir = pathLib.dirname(require.main.filename)) {
    super();

    if (!this.constructor.boot) {
      this.constructor.this = this;
      this.set('ROOT_DIR', __dir);
      this.addProviders(_providers.default);
    }
  }
  /**
   * @param {function?} registration
   * @param {function?} boot
   * @param {function?} subscribe
   * @param {function?} success
   * */

  run(registration = () => {}, boot = () => {}, subscribe = () => {}, success = () => {}) {
    (async () => {
      if (!this.constructor.boot) {
        this.constructor.boot = true;
        await Promise.all(this.getAllProviders().map((item) => !item.registration || item.registration(this))).then(
          () => !registration || registration(this)
        );
        await Promise.all(this.getAllProviders().map((item) => !item.boot || item.boot(this))).then(
          () => !boot || boot(this)
        );
        await Promise.all(
          this.getAllProviders().map((item) => !item.subscribe || item.subscribe(this, this.eventDispatcher))
        ).then(() => !subscribe || subscribe(this));
        await Promise.all(this.getAllProviders().map((item) => !item.success || item.success(this))).then(
          () => !success || success(this)
        );
      }
    })();
  }

  addProviders(value) {
    for (let item of value) {
      this.registrationProvider(item.provider);

      if (item.params) {
        this.setParam(item.provider, item.params);
      }
    }
  }
}

exports.default = Slix;

_defineProperty(Slix, 'this', void 0);

_defineProperty(Slix, 'boot', void 0);
