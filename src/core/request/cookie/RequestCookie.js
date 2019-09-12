import Cookie from '../../cookie/Cookie';
import Request from '../SlixRequest';

export default class RequestCookie {
  /** @param {Request} request */
  constructor(request) {
    /** @type {Map<string, Cookie>} */
    this.collection = new Map();

    if (request.header.all().cookie) {
      for (let value of request.header.all().cookie.split(';')) {
        value = value.trim().split('=');
        this.collection.set(value[0], new Cookie(value[0], value[1]));
      }
    }
  }

  /** @param {Cookie} name */
  get(name) {
    return this.collection.get(name) || null;
  }

  /** @param {string} name */
  has(name) {
    return this.collection.has(name);
  }

  /** @return {Array<Cookie>}*/
  all() {
    return [...this.collection.values()];
  }
}
