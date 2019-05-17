// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface Router {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @param {string} route
	 * @param {string} method
	 * @param {function} handler
	 * @param {AbstractController} controller
	 * @param route 
	 * @param method 
	 * @param handler 
	 * @param controller 
	 */
	mount(route : string, method : string, handler : any, controller : any): void;
		
	/**
	 * 
	 */
	sorted(): void;
		
	/**
	 * @param {Request} request
	 * @return Route
	 * @param request 
	 * @return  
	 */
	findRoute(request : any): Map;
	
	/**
	 * @type {Object}
	 */
	METHOD : {
				
		/**
		 * 
		 */
		GET : string;
				
		/**
		 * 
		 */
		POST : string;
				
		/**
		 * 
		 */
		PUT : string;
				
		/**
		 * 
		 */
		DELETE : string;
				
		/**
		 * 
		 */
		HEAD : string;
				
		/**
		 * 
		 */
		CONNECT : string;
				
		/**
		 * 
		 */
		OPTIONS : string;
				
		/**
		 * 
		 */
		TRACE : string;
				
		/**
		 * 
		 */
		ALL : string;
	}
	
	/**
	 * @type {Object}
	 */
	pattern : {
				
		/**
		 * 
		 */
		full : string;
	}
}
