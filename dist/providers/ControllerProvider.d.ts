// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace ControllerProvider.prototype{
	// ControllerProvider.prototype.registration.!0
	
	/**
	 * 
	 */
	interface Registration0 {
				
		/**
		 * @param {Route} route
		 * @param {Request} request
		 * @param route 
		 * @param request 
		 */
		_runControllers(route : any, request : any): void;
	}
}

/**
 * 
 */
export declare var config : /*no type*/{};

/**
 * 
 */
declare interface ControllerProvider {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * 
	 * @param App 
	 */
	registration(App : ControllerProvider.prototype.Registration0): void;
		
	/**
	 * 
	 * @param App 
	 */
	boot(App : any): void;
}

/**
 * 
 * @param path 
 * @param App 
 */
declare function readDir(path : any, App : any): void;
