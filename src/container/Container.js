import AbstractProvider from '../api/AbstractProvider';

export default class Container {
    constructor() {
        this.providers = new Map();
        this.params = new Map();
    }

    /** @return {Map<string, AbstractProvider>} */
    get providers() {
        return this._providers;
    }

    /** @param {Map<string, AbstractProvider>} value */
    set providers(value) {
        this._providers = this._providers ? this._providers : value;
    }

    /** @return {Map<string, Object>} */
    get params() {
        return this._params;
    }

    /** @param {Map<string, Object>} value */
    set params(value) {
        this._params = this._params ? this._params : value;
    }

    /**
     * @param {AbstractProvider} provider
     * @param {Object|?} value
     * */
    registrationProvider(provider, value = {}) {
        value.__provider = provider.getName();

        if (!this._providers.has(provider.getName())) {
            this._providers.set(provider.getName(), provider);
        }

        if (value) {
            this.setParam(provider.getName(), value);
        }

        provider.registration(this);
    }

    /** @param {AbstractProvider} provider */
    removeProvider(provider) {
        this._providers.get(provider.getName()).remove();
    }

    /** @return [AbstractProvider]*/
    getAllProviders() {
        return [...this._providers.values()];
    }

    /** @return [Object] */
    getAllParams() {
        return [...this._params.values()];
    }

    /**
     * @param {string} key
     * @param {?Object} value
     * */
    setParam(key, value) {
        if (!this._params.has(key)) {
            this._params.set(key, value);
        } else {
            if (typeof this._params.get(key) === 'object') {
                for (let property of Object.keys(value)) {
                    this._params.get(key)[property] = value[property];
                }
            }
        }
    }

    /**
     * @param {AbstractProvider} provider
     * @param {object} value
     * */
    replaceParamProvider(provider, value) {
        this.setParam(provider.getName(), value);
    }

    /** @param {string} key*/
    getParam(key) {
        if (this._params.has(key)) {
            return this._params.get(key);
        }

        return null;
    }

    /**
     * @param {string} key
     * @param {*} value
     * */
    set(key, value) {
        if (!this.hasOwnProperty(key)) {
            this[key] = value;
        }
    }

    /** @param {string} key */
    get(key) {
        if (this.hasOwnProperty(key)) {
            return this[key];
        }
        return null;
    }
}
