import Response from './Response';

export default class JsonResponse extends Response {
  /** @param {Object|string} content*/
  constructor(content) {
    super(typeof content === 'object' ? JSON.stringify(content) : content);
    this.setContentType(Response.ContentType.json);

    return this;
  }
}
