// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface Validator {
		
	/**
	 * 
	 * @return  
	 */
	new (): Validator;
}


/**
 * 
 */
declare namespace Validator{
		
	/**
	 * 
	 * @param path 
	 * @return  
	 */
	function validatePath(path : any): boolean;
}
