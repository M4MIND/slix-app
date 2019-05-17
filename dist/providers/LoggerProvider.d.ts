// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface LoggerProvider {
		
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
	 * @param App 
	 * @param EventDispatcher 
	 */
	subscribe(App : any, EventDispatcher : any): void;
}
