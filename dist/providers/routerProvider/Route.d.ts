// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface Route {
		
	/**
	 * 
	 * @param pattern 
	 * @param route 
	 * @param handler 
	 * @param controller 
	 * @param dynamic 
	 */
	new (pattern : string, route : string, handler : any, controller : any, dynamic : boolean);
}
