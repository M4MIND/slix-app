import Response from "./Response"

export default class RedirectResponse extends Response {
	/**
	 * @param {string} url
	 * @param {number} status
	 * @param {Object} headers
	 * */
	constructor(url, status = Response.HTTP_FOUND, headers = {Location: url}) {
		super('', status, headers);
		this.targetUrl = url;

		return this;
	}

	get targetUrl() {
		return this._targetUrl
	}

	set targetUrl(value) {
		this._targetUrl = value
		this.content = `<!DOCTYPE html><html><head><meta charset="UTF-8" /><meta http-equiv="refresh" content="0;url=${this.targetUrl}" /><title>Redirecting to ${this.targetUrl}</title></head><body>Redirecting to <a href="${this.targetUrl}">${this.targetUrl}</a>.</body></html>`

		return this;
	}
}