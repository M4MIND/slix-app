// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface Cookie {
		
	/**
	 * 
	 * @param name 
	 * @param value 
	 * @param expires 
	 * @param path 
	 * @param domain 
	 * @param secure 
	 * @param httpOnly 
	 */
	new (name : string, value : any, expires : any, path : string, domain : any, secure : boolean, httpOnly : boolean);
		
	/**
	 * @return {string}
	 * @return  
	 */
	raw(): string;
}
