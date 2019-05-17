// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace RouterProvider.prototype{
	// RouterProvider.prototype.registration.!0
	
	/**
	 * 
	 */
	interface Registration0 {
				
		/**
		 * @callback
		 * @param {string} route
		 * @param {string} method
		 * @param {function} handler
		 * @param {AbstractController} controller
		 * @param route 
		 * @param method 
		 * @param handler 
		 * @param controller 
		 */
		_mount(route : string, method : string, handler : any, controller : any): void;
				
		/**
		 * @callback
		 * @param {Request} request
		 * @param request 
		 */
		_getController(request : any): void;
	}
}

/**
 * 
 */
declare interface RouterProvider {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * 
	 * @param App 
	 */
	registration(App : RouterProvider.prototype.Registration0): void;
}
