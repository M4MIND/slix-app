// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface PreparationResponse {
		
	/**
	 * 
	 * @param res 
	 */
	new (res : any);
		
	/**
	 * @param {Response|RedirectResponse|JsonResponse|FileResponse} response
	 * @param response 
	 */
	setResponse(response : any): void;
		
	/**
	 * @param {string} value
	 * @param value 
	 */
	write(value : string): void;
}
