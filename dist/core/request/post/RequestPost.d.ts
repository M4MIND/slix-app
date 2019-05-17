// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// RequestPost.!0

/**
 * 
 */
declare interface 0 {
}

/**
 * 
 */
declare interface RequestPost {
		
	/**
	 * 
	 * @param request 
	 */
	new (request : /* RequestPost.!0 */ any);
		
	/**
	 * 
	 * @param name 
	 */
	get(name : any): void;
		
	/**
	 * 
	 * @param name 
	 * @return  
	 */
	has(name : any): boolean;
		
	/**
	 * @param {Request} request
	 * @param {RequestPost} requestPost
	 * @param request 
	 * @param requestPost 
	 */
	multipart(request : any, requestPost : /* RequestPost.+RequestPost */ any): void;
		
	/**
	 * 
	 */
	collection : Map;
}
