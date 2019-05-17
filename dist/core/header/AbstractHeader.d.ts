// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface AbstractHeader {
		
	/**
	 * 
	 * @param headers 
	 */
	new (headers : any);
		
	/**
	 * @param {string} key
	 * @param {string} value
	 * @param key 
	 * @param value 
	 */
	set(key : string, value : string): void;
		
	/**
	 * @param {string} name
	 * @param name 
	 * @return  
	 */
	get(name : string): /* !this.headers.<i> */ any;
		
	/**
	 * @return {boolean}
	 * @param name 
	 * @return  
	 */
	has(name : any): boolean;
		
	/**
	 * @return {Object}
	 * @return  
	 */
	all(): /* !this.headers */ any;
}
