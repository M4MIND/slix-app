import EventDispatcher from './eventProvider/EventDispatcher';
import AbstractProvider from '../api/AbstractProvider';

export default class EventDispatcherProvider extends AbstractProvider {
    registration(App) {
        App.set('eventDispatcher', new EventDispatcher());
        App.set('dispatch', App.get('eventDispatcher').dispatch);
        App.set(
            'addEventListener',
            App.get('eventDispatcher').addEventListener
        );
    }
}
