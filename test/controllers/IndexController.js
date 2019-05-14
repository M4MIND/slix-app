import {AbstractController, Slix, RedirectResponse} from "../../index"

export default class IndexController extends AbstractController {
    mount() {
        this.GET('/', this.index);
        this.POST('/', this.post);
    }

    index = async (request) => {
        return await this.App.render('index', {
            title: 'Index page'
        });
    };

    post = async (request) => {
        return new RedirectResponse('/');
    };
}