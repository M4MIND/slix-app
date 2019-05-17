// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface RequestFile {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @param {RequestFileData} value
	 * @param value 
	 */
	add(value : any): void;
		
	/**
	 * @return {RequestFile}
	 * @param name 
	 * @return  
	 */
	get(name : any): /* RequestFile.prototype.+RequestFile */ any;
		
	/**
	 * @return {boolean}
	 * @param name 
	 * @return  
	 */
	has(name : any): boolean;
		
	/**
	 * @return {Promise}
	 * @param key 
	 * @param path 
	 * @param filename 
	 * @return  
	 */
	save(key : any, path : any, filename : any): Promise;
		
	/**
	 * @param {Map<string, RequestFile>}
	 */
	collection : Map;
}
