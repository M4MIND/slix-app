import Slix from '../Slix';
import EventDispatcher from '../providers/eventProvider/EventDispatcher';

export default class AbstractProvider {
  constructor() {
    this.__nameProvider = this.getName();
  }

  /** @param {Slix} App */
  async registration(App) {}

  /** @param {Slix} App */
  async boot(App) {}

  /**
   * @param {Slix} App
   * @param {EventDispatcher} EventDispatcher
   * */
  async subscribe(App, EventDispatcher) {}

  /** @param {Slix} App */
  remove(App) {
    App.providers.delete(this.getName());
    App.params.delete(this.getName());
  }

  /** @return {string} */
  getName() {
    return this.constructor.name;
  }

  /** @return {string} */
  static getName() {
    return this.name;
  }
}
