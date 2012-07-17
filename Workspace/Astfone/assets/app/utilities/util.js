/**
 * @author Nivedha Kaliaperumal
 */

astfone.util.responseFormatter = function(response) {

	var rawResponse = '[{" ' + response.slice(0, -2) + '"}]';
	var re = new RegExp("#", "g");
	rawResponse = rawResponse.replace(re, '"},{"');
	re = new RegExp("@", "g");
	rawResponse = rawResponse.replace(re, '":"');
	//alert('response ' + rawResponse);
	return rawResponse;

};
/**
 * Name    : getParameterByName
 * Purpose : Method to get the query parameter values from the url
 * Params  : name - Name of the query parameter
 url - URL that contains the query parameters
 * Returns : paramValue
 **/
astfone.util.getParameterByName = function(name, url) {

	var match, paramValue;
	match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
	paramValue = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	return paramValue;

};
/**
 * Name    : showMask
 * Purpose : Method to show the masking layer.
 * Params  : --
 * Returns : --
 **/
astfone.util.showMask = function() {
	var requested_page = $('.ui-page-active').attr('id');

	var content = $('div[id=' + requested_page + ']');

	$('<div>', {
		'class' : 'ui-actionsheet-wallpaper'
	}).appendTo(content).show();

	$.mobile.showPageLoadingMsg();

	//mHealth.util.addMask();

};
/**
 * Name    : hideMask
 * Purpose : Method to hide the masking layer,
 * Params  : --
 * Returns : --
 **/
astfone.util.hideMask = function() {

	$(':jqmData(role="page")').children('div').removeClass('ui-actionsheet-wallpaper');
	$.mobile.hidePageLoadingMsg();
	//mHealth.util.removeMask();

};

// astfone.util.callTimeFormatter = function(callTime) {
// 	
	// var timer = callTime.split
	// //mHealth.util.removeMask();
// 
// };
