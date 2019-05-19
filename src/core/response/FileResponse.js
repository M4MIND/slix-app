import Response from './Response';

export default class FileResponse extends Response {
    /**
     * @param {string} content
     * @param {string} contentType
     * */
    constructor(content, contentType) {
        super(content);
        this.headers.setContentType(contentType);

        return this;
    }
}
