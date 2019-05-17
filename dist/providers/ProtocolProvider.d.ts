// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface ProtocolProvider {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * 
	 * @param App 
	 */
	registration(App : any): void;
		
	/**
	 * 
	 * @param App 
	 */
	boot(App : any): void;
		
	/**
	 * 
	 * @param _ 
	 */
	processingRequest(_ : any): void;
}

/**
 * @callback
 * @param {Request} request
 * @param request 
 */
declare function handleRaw(request : any): void;

/**
 * 
 * @param request 
 * @param response 
 */
declare function filterResponse(request : any, response : any): void;

/**
 * 
 * @param request 
 */
declare function finishRequest(request : any): void;
