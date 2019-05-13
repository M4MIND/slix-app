import AbstractController from "../../../src/api/AbstractController";
import Response from "../../../src/core/response/Response";
export default class AdminController extends AbstractController {
    before = async (request) => {
        if (!request.query.has('auth')) {
            return new Response('Admin break request');
        }
    }
}