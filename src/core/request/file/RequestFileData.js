import Slix from "../../../Slix"

let fs = require('fs');
let pathLib = require('path');

export default class RequestFileData {
	constructor(name, filename, typeContent, buffer) {
		this.name = name
		this.filename = filename
		this.typeContent = typeContent
		this.buffer = buffer
	}

	get name() {
		return this._name
	}

	set name(value) {
		this._name = value
	}

	get filename() {
		return this._filename
	}

	set filename(value) {
		this._filename = value
	}

	get typeContent() {
		return this._typeContent
	}

	set typeContent(value) {
		this._typeContent = value
	}

	get buffer() {
		return this._buffer
	}

	set buffer(value) {
		this._buffer = value
	}

	save(path = '/temp/', name = this.filename) {
		fs.readFile('C:\\Users\\user\\Downloads\\ico-payment.png', (err, data) => {
			fs.writeFile('C:\\projects\\Slix\\test\\temp\\img.png', data.toString('binary'), "binary", err1 => {

			})
			console.dir(this.buffer.length);
		})

		path = pathLib.join(Slix.this.get("ROOT_DIR"), path, name);

		return new Promise((resolve, reject) => {
			fs.writeFile(path, this.buffer.toString('binary'), "binary", err => {
				if (err) {
					reject(err);
				}

				resolve(true)
			})
		})

	}
}