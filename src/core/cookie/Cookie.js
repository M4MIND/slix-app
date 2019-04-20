export default class Cookie {

	/**
	 * @param {string} name
	 * @param {string|?} value
	 * @param {Date|?} expires
	 * @param {string} path
	 * @param {string|?} domain
	 * @param {boolean} secure
	 * @param {boolean} httpOnly
	 * */
	constructor(name, value = null, expires = 0, path = '/', domain = null, secure = true, httpOnly = true) {
		this.name = name
		this.value = value
		this.expires = expires
		this.path = path
		this.domain = domain
		this.httpOnly = httpOnly
		this.secure = secure

		this.raw();

	}

	get name() {
		return this._name
	}

	set name(value) {
		if (!value) {
			throw new Error("The cookie name cannot be empty.");
		}

		if (value.match(new RegExp('[=,; \\t\\r\\n\f]', 'g'))) {
			throw new Error(`The cookie name ${value} contains invalid characters.`)
		}

		this._name = value
	}

	get value() {
		return this._value
	}

	set value(value) {
		this._value = value ? value : 'deleted';
	}

	get expires() {
		return this._expires
	}

	set expires(value) {
		this._expires = value
	}

	get path() {
		return this._path
	}

	set path(value) {
		this._path = value ? value : '/'
	}

	get domain() {
		return this._domain
	}

	set domain(value) {
		this._domain = value
	}

	get secure() {
		return this._secure
	}

	set secure(value) {
		this._secure = value
	}

	get httpOnly() {
		return this._httpOnly
	}

	set httpOnly(value) {
		this._httpOnly = value
	}

	raw() {
		let str = `${this.name}=${this.value}`;

		if (this.expires) {
			str += '; expires=' + this.expires.toUTCString();
		}

		if (this.path) {
			str += '; path=' + this.path;
		}

		if (this.domain) {
			str += '; domain=' + this.domain
		}

		if (this.secure) {
			str += '; secure';
		}

		if (this.httpOnly) {
			str += '; httponly';
		}

		return str;
	}
}