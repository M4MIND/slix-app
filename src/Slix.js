import Container from "./container/Container"
import LoggerServiceProvider from "./providers/LoggerServiceProvider";

export default class Slix extends Container {
	constructor() {
		super();
		this.registrationProvider(new LoggerServiceProvider(), {});
	}
}