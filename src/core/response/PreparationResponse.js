import {ServerResponse} from 'http';

export default class PreparationResponse {
	/** @param {ServerResponse} res */
	constructor(res) {
		this._res = res
	}

	/** @return {ServerResponse} */
	get res() {
		return this._res
	}

	/** @param {ServerResponse} value */
	set res(value) {
		this._res = value
	}
}