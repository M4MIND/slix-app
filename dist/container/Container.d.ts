// Type definitions for slix
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace Container.prototype{
	// Container.prototype.registrationProvider.!1
	
	/**
	 * 
	 */
	interface RegistrationProvider1 {
	}
}
declare namespace Container.prototype{
	// Container.prototype.getAllProviders.!ret
	type GetAllProvidersRet = Array<any>;
}
declare namespace Container.prototype{
	// Container.prototype.getAllParams.!ret
	type GetAllParamsRet = Array<any>;
}

/**
 * 
 */
declare interface Container {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @param {AbstractProvider} provider
	 * @param {Object|?} value
	 * @param provider 
	 * @param value 
	 */
	registrationProvider(provider : any, value : Container.prototype.RegistrationProvider1): void;
		
	/**
	 * @param {AbstractProvider} provider
	 * @param provider 
	 */
	removeProvider(provider : any): void;
		
	/**
	 * @return [AbstractProvider]
	 * @return  
	 */
	getAllProviders(): Container.prototype.GetAllProvidersRet;
		
	/**
	 * @return [Object]
	 * @return  
	 */
	getAllParams(): Container.prototype.GetAllParamsRet;
		
	/**
	 * @param {string} key
	 * @param {?Object} value
	 * @param key 
	 * @param value 
	 */
	setParam(key : string, value : any): void;
		
	/**
	 * @param {AbstractProvider} provider
	 * @param {object} value
	 * @param provider 
	 * @param value 
	 */
	replaceParamProvider(provider : any, value : any): void;
		
	/**
	 * @param {string} key
	 * @param key 
	 */
	getParam(key : string): void;
		
	/**
	 * @param {string} key
	 * @param {*} value
	 * @param key 
	 * @param value 
	 */
	set(key : string, value : any): void;
		
	/**
	 * @param {string} key
	 * @param key 
	 * @return  
	 */
	get(key : string): /* !this.<i> */ any;
}
