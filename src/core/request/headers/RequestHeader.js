import AbstractHeader from "../../header/AbstractHeader"

export default class RequestHeader extends AbstractHeader {
	/** @param {IncomingMessage} request */
	constructor(request) {
		super(request.headers);
	}
}