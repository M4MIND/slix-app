"use strict";

exports.default = void 0;

var _SlixRequest = require("../SlixRequest");

var _RequestPostData = require("./RequestPostData");

var _RequestFile = require("../file/RequestFile");

var _RequestFileData = require("../file/RequestFileData");

class RequestPost {
  /** @param {Request} request */
  constructor(request) {
    this.collection = new Map();

    if (request.contentType) {
      if (request.contentType.match(new RegExp('multipart', 'g'))) {
        this.constructor.multipart(request, this);
      }

      if (request.contentType.match(new RegExp('application', 'g'))) {
        console.dir('application/x-www-form-urlencoded');
      }
    }
  }

  get collection() {
    return this._data;
  }

  set collection(value) {
    this._data = value;
  }

  get(name) {
    return this.collection.get(name);
  }

  has(name) {
    return this.collection.has(name);
  }

}
/**
 * @param {Request} request
 * @param {RequestPost} requestPost
 * */


exports.default = RequestPost;

RequestPost.multipart = (request, requestPost) => {
  let boundary = "--" + request.contentType.match(new RegExp('(?<=boundary=).+', 'g'))[0];
  let chunks = request.req.body.toString('utf8').split(new RegExp(boundary, 'g'));

  for (let chunk of chunks) {
    if (chunk.match(new RegExp('filename', 'g'))) {
      if (!request.file) {
        request.file = new _RequestFile.default();
      }

      let name = chunk.match(new RegExp('((?<=name=")(.*)(?=";))', 'g'))[0];
      let filename = chunk.match(new RegExp('((?<=filename=")(.*)(?="))', 'g'))[0];
      let contentType = chunk.match(new RegExp('(?<=Content-Type: )(.*)(?=\\r\\n\\r\\n)', 'gm'))[0];

      if (name && filename && contentType) {
        let fileStartIndex = chunk.indexOf(contentType) + contentType.length + "\r\n\r\n".length;
        let bufferFile = chunk.substr(fileStartIndex, chunk.length - fileStartIndex - "\r\n".length);
        request.file.add(new _RequestFileData.default(name, filename, contentType, bufferFile));
      }
    } else {
      let name = chunk.match(new RegExp('(?<=name=")(.*)(?=")', 'g'));
      let data = chunk.match(new RegExp('(?<=name=".+"\\r\\n\\r\\n)(.+)(?=\\r\\n)', 'g'));

      if (data && name) {
        let postData = new _RequestPostData.default(String(name), String(data));
        requestPost.collection.set(postData.name, postData);
      }
    }
  }
};