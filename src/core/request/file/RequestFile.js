import RequestFileData from "./RequestFileData"

export default class RequestFile {
    constructor() {
        /** @param {Map<string, RequestFile>} */
        this.collection = new Map();
    }

    /** @param {RequestFileData} value */
    add(value) {
        this.collection.set(value.name, value);
    }

    /** @return {RequestFile} */
    get(name) {
        return this.collection.get(name);
    }

    /** @return {boolean} */
    has(name) {
        return this.collection.has(name);
    }

    /** @return {Promise} */
    save(key, path, filename) {
        if (this.has(key)) {
            return this.get(key).save(path, filename);
        }
    }
}
