// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface KernelEvents {
		
	/**
	 * 
	 * @return  
	 */
	new (): KernelEvents;
}


/**
 * 
 */
declare namespace KernelEvents{
		
	/**
	 * 
	 */
	export var REQUEST : string;
		
	/**
	 * 
	 */
	export var ROUTE : string;
		
	/**
	 * 
	 */
	export var CALL_CONTROLLER : string;
		
	/**
	 * 
	 */
	export var CONTROLLER_ARGUMENTS : string;
		
	/**
	 * 
	 */
	export var RESPONSE : string;
		
	/**
	 * 
	 */
	export var TERMINATE : string;
		
	/**
	 * 
	 */
	export var EXCEPTION : string;
}
