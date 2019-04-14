import Response from "./Response"

export default class FileResponse extends Response {
    constructor(content, contentType) {
        super(content, 200, {'Content-Type': contentType});
    }
}