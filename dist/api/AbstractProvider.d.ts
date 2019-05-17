// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface AbstractProvider {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @param {Slix} App
	 * @param App 
	 */
	registration(App : any): void;
		
	/**
	 * @param {Slix} App
	 * @param App 
	 */
	boot(App : any): void;
		
	/**
	 * @param {Slix} App
	 * @param {EventDispatcher} EventDispatcher
	 * @param App 
	 * @param EventDispatcher 
	 */
	subscribe(App : any, EventDispatcher : any): void;
		
	/**
	 * @param {Slix} App
	 * @param App 
	 */
	remove(App : any): void;
		
	/**
	 * 
	 * @return  
	 */
	getName(): /* !this.name */ any;
}
