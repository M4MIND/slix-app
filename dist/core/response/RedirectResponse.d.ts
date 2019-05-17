// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface RedirectResponse {
		
	/**
	 * 
	 * @param url 
	 * @param status 
	 * @param headers 
	 * @return  
	 */
	new (url : string, status : number, headers : any): /* !this */ any;
		
	/**
	 * 
	 */
	targetUrl : string;
}
