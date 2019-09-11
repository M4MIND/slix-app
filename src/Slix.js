import Container from './container/Container';
import LoggerProvider from './providers/LoggerProvider';
import ProtocolProvider from './providers/ProtocolProvider';
import EventDispatcherProvider from './providers/EventDispatcherProvider';
import FileTransferProvider from './providers/FileTransferProvider';
import ExceptionProvider from './providers/ExceptionProvider';
import RouterProvider from './providers/RouterProvider';

let pathLib = require('path');

export default class Slix extends Container {
  static this;
  static boot;

  /**
   * @param {string} __dir
   * */
  constructor(__dir = pathLib.dirname(require.main.filename)) {
    super();
    if (!this.constructor.boot) {
      this.constructor.this = this;

      this.set('ROOT_DIR', __dir);
      this.registrationProvider(EventDispatcherProvider);
      this.registrationProvider(ExceptionProvider);
      this.registrationProvider(LoggerProvider);
      this.registrationProvider(ProtocolProvider);
      this.registrationProvider(FileTransferProvider);
      this.registrationProvider(RouterProvider);
    }
  }

  async run(success) {
    if (!this.constructor.boot) {
      this.constructor.boot = true;

      await Promise.all(this.getAllProviders().map((item) => item.registration(this)));
      await Promise.all(this.getAllProviders().map((item) => item.boot(this)));
      await Promise.all(this.getAllProviders().map((item) => item.subscribe(this, this.eventDispatcher)));

      if (success) {
        success(this);
      }
    }
  }

  /** @param {Array<Array>} value*/
  addProviders(value = []) {
    for (let provider of value) {
      this.registrationProvider(provider[0]);

      if (provider[1]) {
        this.setParam(provider[0], provider[1]);
      }
    }
  }
}
