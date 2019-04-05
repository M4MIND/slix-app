import Container from "./container/Container"

export default class Slix extends Container {
	constructor() {
		super()
	}

	boot() {
		console.dir("Boot server")
	}

	run() {
		console.dir("Run server")
	}
}