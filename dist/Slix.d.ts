// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface Slix {
		
	/**
	 * 
	 * @param __dir 
	 */
	new (__dir : string);
		
	/**
	 * 
	 */
	run(): void;
		
	/**
	 * 
	 */
	boot : boolean;
}
