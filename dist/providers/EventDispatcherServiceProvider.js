'use strict';

exports.default = void 0;

var _EventDispatcher = require('./eventServiceProvider/EventDispatcher');

var _AbstractProvider = require('../api/AbstractProvider');

class EventDispatcherServiceProvider extends _AbstractProvider.default {
    registration(App) {
        App.set('eventDispatcher', new _EventDispatcher.default());
        App.set('dispatch', App.get('eventDispatcher').dispatch);
        App.set(
            'addEventListener',
            App.get('eventDispatcher').addEventListener
        );
    }
}

exports.default = EventDispatcherServiceProvider;
