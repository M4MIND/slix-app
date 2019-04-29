export default class RequestPath {
    /** @param {string} path - URL Path */
    constructor(path) {
        this.full = path;
        /** @type {Map<string, string>} */
        this.collection = new Map();
    }

    /**
     * @param {string} pattern
     * @param {string} route
     * @param {string} path
     * */
    parse(pattern, route, path) {
        let data = path.split(new RegExp(pattern, 'g'));
        let keys = route.split(new RegExp(pattern, 'g'));

        for (let key in keys) {
            if (keys[key]) {
                this.collection.set(keys[key].replace(new RegExp(':', 'g'), ""), data[key]);
            }
        }
    }

    get(key) {
        return this.collection.get(key);
    }

    has(key) {
        return this.collection.has(key);
    }

    all() {
        let out = {};

        this.collection.forEach((value, key) => {
            out[key] = value;
        });

        return out;
    }
}