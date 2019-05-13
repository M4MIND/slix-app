import AbstractHeader from '../../header/AbstractHeader';
import Request from '../Request';

export default class RequestHeader extends AbstractHeader {
    /** @param {Request} request */
    constructor(request) {
        super(request.req.headers);
    }
}
