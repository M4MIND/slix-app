export default class

KernelEvents {
	static REQUEST() {
		return "KernelEvents::REQUEST";
	}

	static ROUTE() {
		return "KernelEvents::ROUTE"
	}

	static CALL_CONTROLLER() {
		return "KernelEvents::CONTROLLER"
	}

	static RESPONSE() {
		return "KernelEvents::RESPONSE"
	}

	static EXCEPTION() {
		return "KernelEvents::EXCEPTION"
	}
}