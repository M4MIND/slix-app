import Request from '../SlixRequest';

export default class RequestPath {
  /** @param {Request} request */
  constructor(request) {
    this.full = request.url.match(new RegExp('([^?#]*)|$', 'g'))[0];
    this.collection = new Map();
  }

  /** @return {string} */
  get full() {
    return this._full;
  }

  /** @param {string} value */
  set full(value) {
    this._full = value;
  }

  /** @return {Map<string, string>} */
  get collection() {
    return this._collection;
  }

  /** @param {Map<string, string>} value */
  set collection(value) {
    this._collection = value;
  }

  /**
   * @param {string} pattern
   * @param {string} route
   * @param {string} path
   * */
  parse(pattern, route, path) {
    let data = path.split(new RegExp(pattern, 'g'));
    let keys = route.split(new RegExp(pattern, 'g'));

    for (let key in keys) {
      if (keys[key]) {
        this._collection.set(keys[key].replace(new RegExp(':', 'g'), ''), data[key]);
      }
    }
  }

  /** @return {string|?} */
  get(key) {
    return this._collection.get(key);
  }

  /** @return {boolean} */
  has(key) {
    return this._collection.has(key);
  }

  /** @return {Object} */
  all() {
    let out = {};

    this._collection.forEach((value, key) => {
      out[key] = value;
    });

    return out;
  }
}
