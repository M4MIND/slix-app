// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface Log {
		
	/**
	 * 
	 * @return  
	 */
	new (): Log;
}


/**
 * 
 */
declare namespace Log{
		
	/**
	 * 
	 * @param message 
	 * @param level 
	 */
	function console(message : string, level : number): void;
		
	/**
	 * 
	 * @param level 
	 * @return  
	 */
	function getColor(level : any): string;
		
	/**
	 * 
	 */
	export var DEFAULT : number;
		
	/**
	 * 
	 */
	export var INFO : number;
		
	/**
	 * 
	 */
	export var WARNING : number;
		
	/**
	 * 
	 */
	export var SUCCESS : number;
		
	/**
	 * 
	 */
	export var ERROR : number;
}
