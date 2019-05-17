// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface Response {
		
	/**
	 * 
	 * @param content 
	 * @param statusCode 
	 * @param headers 
	 * @return  
	 */
	new (content : string, statusCode : number, headers : any): /* !this */ any;
		
	/**
	 * @param {string} value
	 * @param value 
	 * @return  
	 */
	setContentType(value : string): /* !this */ any;
		
	/**
	 * 
	 */
	HTTP_CONTINUE : number;
		
	/**
	 * 
	 */
	HTTP_SWITCHING_PROTOCOLS : number;
		
	/**
	 * 
	 */
	HTTP_PROCESSING : number;
		
	/**
	 * 
	 */
	HTTP_EARLY_HINTS : number;
		
	/**
	 * 
	 */
	HTTP_OK : number;
		
	/**
	 * 
	 */
	HTTP_CREATED : number;
		
	/**
	 * 
	 */
	HTTP_ACCEPTED : number;
		
	/**
	 * 
	 */
	HTTP_NON_AUTHORITATIVE_INFORMATION : number;
		
	/**
	 * 
	 */
	HTTP_NO_CONTENT : number;
		
	/**
	 * 
	 */
	HTTP_RESET_CONTENT : number;
		
	/**
	 * 
	 */
	HTTP_PARTIAL_CONTENT : number;
		
	/**
	 * 
	 */
	HTTP_MULTI_STATUS : number;
		
	/**
	 * 
	 */
	HTTP_ALREADY_REPORTED : number;
		
	/**
	 * 
	 */
	HTTP_IM_USED : number;
		
	/**
	 * 
	 */
	HTTP_MULTIPLE_CHOICES : number;
		
	/**
	 * 
	 */
	HTTP_MOVED_PERMANENTLY : number;
		
	/**
	 * 
	 */
	HTTP_FOUND : number;
		
	/**
	 * 
	 */
	HTTP_SEE_OTHER : number;
		
	/**
	 * 
	 */
	HTTP_NOT_MODIFIED : number;
		
	/**
	 * 
	 */
	HTTP_USE_PROXY : number;
		
	/**
	 * 
	 */
	HTTP_RESERVED : number;
		
	/**
	 * 
	 */
	HTTP_TEMPORARY_REDIRECT : number;
		
	/**
	 * 
	 */
	HTTP_PERMANENTLY_REDIRECT : number;
		
	/**
	 * 
	 */
	HTTP_BAD_REQUEST : number;
		
	/**
	 * 
	 */
	HTTP_UNAUTHORIZED : number;
		
	/**
	 * 
	 */
	HTTP_PAYMENT_REQUIRED : number;
		
	/**
	 * 
	 */
	HTTP_FORBIDDEN : number;
		
	/**
	 * 
	 */
	HTTP_NOT_FOUND : number;
		
	/**
	 * 
	 */
	HTTP_METHOD_NOT_ALLOWED : number;
		
	/**
	 * 
	 */
	HTTP_NOT_ACCEPTABLE : number;
		
	/**
	 * 
	 */
	HTTP_PROXY_AUTHENTICATION_REQUIRED : number;
		
	/**
	 * 
	 */
	HTTP_REQUEST_TIMEOUT : number;
		
	/**
	 * 
	 */
	HTTP_CONFLICT : number;
		
	/**
	 * 
	 */
	HTTP_GONE : number;
		
	/**
	 * 
	 */
	HTTP_LENGTH_REQUIRED : number;
		
	/**
	 * 
	 */
	HTTP_PRECONDITION_FAILED : number;
		
	/**
	 * 
	 */
	HTTP_REQUEST_ENTITY_TOO_LARGE : number;
		
	/**
	 * 
	 */
	HTTP_REQUEST_URI_TOO_LONG : number;
		
	/**
	 * 
	 */
	HTTP_UNSUPPORTED_MEDIA_TYPE : number;
		
	/**
	 * 
	 */
	HTTP_REQUESTED_RANGE_NOT_SATISFIABLE : number;
		
	/**
	 * 
	 */
	HTTP_EXPECTATION_FAILED : number;
		
	/**
	 * 
	 */
	HTTP_I_AM_A_TEAPOT : number;
		
	/**
	 * 
	 */
	HTTP_MISDIRECTED_REQUEST : number;
		
	/**
	 * 
	 */
	HTTP_UNPROCESSABLE_ENTITY : number;
		
	/**
	 * 
	 */
	HTTP_LOCKED : number;
		
	/**
	 * 
	 */
	HTTP_FAILED_DEPENDENCY : number;
		
	/**
	 * 
	 */
	HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL : number;
		
	/**
	 * 
	 */
	HTTP_TOO_EARLY : number;
		
	/**
	 * 
	 */
	HTTP_UPGRADE_REQUIRED : number;
		
	/**
	 * 
	 */
	HTTP_PRECONDITION_REQUIRED : number;
		
	/**
	 * 
	 */
	HTTP_TOO_MANY_REQUESTS : number;
		
	/**
	 * 
	 */
	HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE : number;
		
	/**
	 * 
	 */
	HTTP_UNAVAILABLE_FOR_LEGAL_REASONS : number;
		
	/**
	 * 
	 */
	HTTP_INTERNAL_SERVER_ERROR : number;
		
	/**
	 * 
	 */
	HTTP_NOT_IMPLEMENTED : number;
		
	/**
	 * 
	 */
	HTTP_BAD_GATEWAY : number;
		
	/**
	 * 
	 */
	HTTP_SERVICE_UNAVAILABLE : number;
		
	/**
	 * 
	 */
	HTTP_GATEWAY_TIMEOUT : number;
		
	/**
	 * 
	 */
	HTTP_VERSION_NOT_SUPPORTED : number;
		
	/**
	 * 
	 */
	HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL : number;
		
	/**
	 * 
	 */
	HTTP_INSUFFICIENT_STORAGE : number;
		
	/**
	 * 
	 */
	HTTP_LOOP_DETECTED : number;
		
	/**
	 * 
	 */
	HTTP_NOT_EXTENDED : number;
		
	/**
	 * 
	 */
	HTTP_NETWORK_AUTHENTICATION_REQUIRED : number;
	
	/**
	 * 
	 */
	ContentType : {
				
		/**
		 * 
		 */
		html : string;
				
		/**
		 * 
		 */
		css : string;
				
		/**
		 * 
		 */
		js : string;
				
		/**
		 * 
		 */
		json : string;
				
		/**
		 * 
		 */
		png : string;
				
		/**
		 * 
		 */
		jpg : string;
	}
		
	/**
	 * 
	 */
	content : string;
		
	/**
	 * 
	 */
	statusCode : number;
		
	/**
	 * 
	 */
	encoding : string;
}
