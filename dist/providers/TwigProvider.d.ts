// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace TwigProvider.prototype{
	// TwigProvider.prototype.boot.!0
	
	/**
	 * 
	 */
	interface Boot0 {
				
		/**
		 * 
		 * @param path 
		 * @param values 
		 */
		render(path : any, values : any): void;
	}
}

/**
 * 
 */
export declare var config : /*no type*/{};

/**
 * 
 */
declare interface TwigProvider {
		
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
	boot(App : TwigProvider.prototype.Boot0): void;
}
