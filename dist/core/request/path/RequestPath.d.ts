// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace RequestPath.prototype{
	// RequestPath.prototype.all.!ret
	
	/**
	 * 
	 */
	interface AllRet {
	}
}

/**
 * 
 */
declare interface RequestPath {
		
	/**
	 * 
	 * @param request 
	 */
	new (request : any);
		
	/**
	 * @param {string} pattern
	 * @param {string} route
	 * @param {string} path
	 * @param pattern 
	 * @param route 
	 * @param path 
	 */
	parse(pattern : string, route : string, path : string): void;
		
	/**
	 * @return {string|?}
	 * @param key 
	 */
	get(key : any): void;
		
	/**
	 * @return {boolean}
	 * @param key 
	 * @return  
	 */
	has(key : any): boolean;
		
	/**
	 * @return {Object}
	 * @return  
	 */
	all(): RequestPath.prototype.AllRet;
}
