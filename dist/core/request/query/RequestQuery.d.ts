// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace RequestQuery.prototype{
	// RequestQuery.prototype.all.!ret
	
	/**
	 * 
	 */
	interface AllRet {
	}
}

/**
 * 
 */
declare interface RequestQuery {
		
	/**
	 * 
	 * @param request 
	 */
	new (request : any);
		
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
	all(): RequestQuery.prototype.AllRet;
}
