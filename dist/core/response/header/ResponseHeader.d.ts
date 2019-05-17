// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace ResponseHeader.prototype{
	// ResponseHeader.prototype.preparationHeaders.!ret
	type PreparationHeadersRet = Array<ResponseHeader.prototype.preparationHeaders.PreparationHeadersRetI>;
}
declare namespace ResponseHeader.prototype.preparationHeaders{
	// ResponseHeader.prototype.preparationHeaders.!ret.<i>
	type PreparationHeadersRetI = Array</* string,? */ any>;
}
declare namespace ResponseHeader.prototype{
	// ResponseHeader.prototype.getAllCookies.!ret
	
	/**
	 * 
	 */
	interface GetAllCookiesRet {
	}
}

/**
 * 
 */
declare interface ResponseHeader {
		
	/**
	 * 
	 * @param headers 
	 * @return  
	 */
	new (headers : any): /* !this */ any;
		
	/**
	 * @param {string} value
	 * @param value 
	 */
	setContentType(value : string): void;
		
	/**
	 * @param {Cookie} value
	 * @param value 
	 * @return  
	 */
	setCookie(value : any): /* !this */ any;
		
	/**
	 * @param {string} name
	 * @param name 
	 * @return  
	 */
	hasCookie(name : string): boolean;
		
	/**
	 * @param {string} name
	 * @param name 
	 * @return  
	 */
	getCookie(name : string): any;
		
	/**
	 * @param {string} name
	 * @param name 
	 * @return  
	 */
	removeCookie(name : string): /* !this */ any;
		
	/**
	 * @return Array<Cookie>
	 * @return  
	 */
	getAllCookies(): ResponseHeader.prototype.GetAllCookiesRet;
		
	/**
	 * @return Array<Array<>>
	 * @return  
	 */
	preparationHeaders(): ResponseHeader.prototype.PreparationHeadersRet;
		
	/**
	 * @type [Cookie]
	 */
	cookies : Array<any>;
}
