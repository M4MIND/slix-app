// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface RequestFileData {
		
	/**
	 * 
	 * @param name 
	 * @param filename 
	 * @param typeContent 
	 * @param buffer 
	 */
	new (name : any, filename : any, typeContent : any, buffer : any);
		
	/**
	 * 
	 * @param path 
	 * @param name 
	 * @return  
	 */
	save(path : any, name : any): /* RequestFileData.prototype.+Promise */ any;
}

/**
 * 
 */
declare namespace slix{
	
	/**
	 * 
	 */
	interface Promise {
				
		/**
		 * 
		 */
		:t : boolean;
	}
}
