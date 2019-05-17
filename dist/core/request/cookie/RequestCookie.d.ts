// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace RequestCookie.prototype{
	// RequestCookie.prototype.all.!ret
	type AllRet = Array<any>;
}

/**
 * 
 */
declare interface RequestCookie {
		
	/**
	 * 
	 * @param request 
	 */
	new (request : any);
		
	/**
	 * @param {Cookie} name
	 * @param name 
	 */
	get(name : any): void;
		
	/**
	 * @param {string} name
	 * @param name 
	 * @return  
	 */
	has(name : string): boolean;
		
	/**
	 * @return {Array<Cookie>}
	 * @return  
	 */
	all(): RequestCookie.prototype.AllRet;
}
