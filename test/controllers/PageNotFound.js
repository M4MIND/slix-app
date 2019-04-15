import AbstractController from "../../src/api/AbstractController"

export default class PageNotFound extends AbstractController {
    mount() {
        this.ALL('*', this.index);
    }

    index = async (request) => {
        return await this.App.render('index', {
            title: request.url
        })
    }
}