// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface EventDispatcher {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @param {string} typeEvent
	 * @param {AbstractEvent} event
	 * @param _ 
	 */
	dispatch(_ : any): void;
}

/**
 * @param {string} typeEvent
 * @param {function} callback
 * @param {number} priority
 * @param {AbstractProvider} provider
 * @param typeEvent 
 * @param callback 
 * @param priority 
 * @param provider 
 */
declare function addEventListener(typeEvent : string, callback : any, priority : number, provider : any): void;
