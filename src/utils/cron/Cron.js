export default class Cron {
    constructor(callback, time) {
        this.callback = callback;
        this.time = time;

        this.timer = setInterval(() => {
            this._callback()
        }, this._time);
    }

    get callback() {
        return this._callback;
    }

    set callback(value) {
        this._callback = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }

    get timer() {
        return this._timer;
    }

    set timer(value) {
        this._timer = value;
    }
}

/** @type {Map<number, function>} */
Cron.collection = new Map();