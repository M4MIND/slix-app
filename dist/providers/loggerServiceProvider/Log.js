'use strict';

exports.default = void 0;

class Log {
    /**
     * @param {string} message
     * @param {number} level
     * */
    static console(message, level = this.constructor.DEFAULT()) {
        console.log(this.getColor(level) + message);
    }
    /** @return {number} */

    static DEFAULT() {
        return 100;
    }
    /** @return {number} */

    static INFO() {
        return 200;
    }
    /** @return {number} */

    static WARNING() {
        return 300;
    }
    /** @return {number} */

    static ERROR() {
        return 500;
    }
    /** @return {string} */

    static getColor(level = this.constructor.DEFAULT()) {
        if (level === this.DEFAULT()) {
            return '\x1b[37m';
        }

        if (level === this.INFO()) {
            return '\x1b[34m';
        }

        if (level === this.WARNING()) {
            return '\x1b[33m';
        }

        if (level === this.ERROR()) {
            return '\x1b[31m';
        }
    }
}

exports.default = Log;
