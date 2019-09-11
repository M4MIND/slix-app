import Request from '../SlixRequest';
import RequestPostData from './RequestPostData';
import RequestFile from '../file/RequestFile';
import RequestFileData from '../file/RequestFileData';

export default class RequestPost {
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
RequestPost.multipart = (request, requestPost) => {
  let boundary = '--' + request.contentType.match(new RegExp('(?<=boundary=).+', 'g'))[0];

  let chunks = request.req.body.toString('binary').split(new RegExp(boundary, 'g'));

  for (let chunk of chunks) {
    if (chunk.match(new RegExp('filename', 'g'))) {
      if (!request.file) {
        request.file = new RequestFile();
      }

      let name = chunk.match(new RegExp('((?<=name=")(.*)(?=";))', 'g'))[0];
      let filename = chunk.match(new RegExp('((?<=filename=")(.*)(?="))', 'g'))[0];
      let contentType = chunk.match(new RegExp('(?<=Content-Type: )(.*)(?=\\r\\n\\r\\n)', 'gm'))[0];

      if (name && filename && contentType) {
        let fileStartIndex = chunk.indexOf(contentType) + contentType.length + '\r\n\r\n'.length;
        let bufferFile = chunk.substr(fileStartIndex, chunk.length - fileStartIndex - '\r\n'.length);
        request.file.add(new RequestFileData(name, filename, contentType, bufferFile));
      }
    } else {
      let name = chunk.match(new RegExp('(?<=name=")(.*)(?=")', 'g'));
      let data = chunk.match(new RegExp('(?<=name=".+"\\r\\n\\r\\n)(.+)(?=\\r\\n)', 'g'));

      if (data && name) {
        let postData = new RequestPostData(String(name), String(data));

        requestPost.collection.set(postData.name, postData);
      }
    }
  }
};
