import AbstractEvent from "../../api/AbstractEvent";

export default class EventResponse extends AbstractEvent {
    constructor(Request, Response) {
        super(Request, Response);
    }
}