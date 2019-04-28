import AbstractController from "../../src/api/AbstractController"
import Response from "../../src/core/response/Response"

export default class DynamicPathController extends AbstractController {
    mount() {
        this.GET('/dynamic/', this.index);
        this.GET('/dynamic/:category:', this.category);
        this.GET('/dynamic/:category:/:post:', this.post);
    }

    index = async (request) => {
        return new Response('Dynamic root');
    };

    category = async (request) => {
        return new Response('Dynamic category: ' + request.query.get('category'))
    };

    post = async (request) => {
        return new Response('Category: ' + request.query.get('category') + " Post: " + request.query.get('post'));
    };
}