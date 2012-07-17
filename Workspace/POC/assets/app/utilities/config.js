/**
 * @author Nivedha Kaliaperumal
 */

assignment = {};
assignment.models = {};
assignment.controllers = {};
assignment.util = {
	
	/**
	 * Name    : getParameterByName
	 * Purpose : Method to get the query parameter values from the url
	 * Params  : name - Name of the query parameter
	 url - URL that contains the query parameters
	 * Returns : paramValue
	 **/
	getParameterByName : function(name, url) {

		var match, paramValue;
		match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
		paramValue = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		return paramValue;

	}
};
