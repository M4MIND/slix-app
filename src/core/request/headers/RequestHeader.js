import AbstractHeader from '../../header/AbstractHeader';
import Request from '../SlixRequest';

export default class RequestHeader extends AbstractHeader {
    /** @param {Request} request */
    constructor(request) {
        super(request.req.headers);
    }
}
