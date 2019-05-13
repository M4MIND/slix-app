import AbstractProvider from '../api/AbstractProvider';
import KernelEvents from './eventProvider/KernelEvents';
import Validator from './validatorProvider/Validator';
import Response from '../core/response/Response';

export default class ValidateURIProvider extends AbstractProvider {
    registration(App) {}

    subscribe(App, EventDispatcher) {
        EventDispatcher.addEventListener(
            KernelEvents.REQUEST,
            (event) => {
                if (!Validator.validatePath(event.request.url)) {
                    event.response = new Response('Url validator');
                }
            },
            -999,
            this
        );
    }
}
