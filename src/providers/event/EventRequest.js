import Request from "../../core/request/Request"
import PreparationResponse from "../../core/response/PreparationResponse"
import AbstractEvent from "../../api/AbstractEvent"

export default class EventRequest extends AbstractEvent {
	/**
	 * @param {Request} request
	 * @param {PreparationResponse} response
	 * */
	constructor(request, response) {
		super(request, response)
	}
}