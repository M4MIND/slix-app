// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface AbstractController {
		
	/**
	 * 
	 * @param App 
	 */
	new (App : any);
		
	/**
	 * @param {Request} request
	 * @param _ 
	 * @return  
	 */
	before(_ : any): /* !this._App */ any;
}

/**
 * @param {Request} request
 * @param request 
 */
declare function after(request : any): void;

/**
 * @param {string} route
 * @param {function} handler
 */
declare interface ALL {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): ALL;
}


/**
 * @param {string} route
 * @param {function} handler
 */
declare interface GET {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): GET;
}


/**
 * @param {string} route
 * @param {function} handler
 */
declare interface POST {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): POST;
}


/**
 * @param {string} route
 * @param {function} handler
 */
declare interface HEAD {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): HEAD;
}


/**
 * @param {string} route
 * @param {function} handler
 */
declare interface DELETE {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): DELETE;
}


/**
 * @param {string} route
 * @param {function} handler
 */
declare interface CONNECT {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): CONNECT;
}


/**
 * @param {string} route
 * @param {function} handler
 */
declare interface OPTIONS {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): OPTIONS;
}


/**
 * @param {string} route
 * @param {function} handler
 */
declare interface TRACE {
		
	/**
	 * 
	 * @param route 
	 * @param handler 
	 * @return  
	 */
	new (route : string, handler : any): TRACE;
}

