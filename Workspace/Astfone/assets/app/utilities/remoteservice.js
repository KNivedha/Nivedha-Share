/**
 * @author Nivedha Kaliaperumal
 */
astfone.service.RemoteService = Spine.Class.sub({
	
	/**
	 * Name    : init
	 * Purpose : Initialize the oontroller.
	 * Params  : --
	 * Returns : --
	 **/
	init : function() {
	},
	
	/**
	 * Name    : getResponse
	 * Purpose : Method for making the GET request service call.
	 * Params  : url - The service url to call,
	 successCallback  - On Success, the control will be given back to the function
	 errorCallback - On Error, the control will be given back to the function
	 * Returns : --
	 **/
	getResponse : function(url, getSuccessCallback, getErrorCallback) {

		$.ajax({
			url : url,
			async : true,
			type : 'GET',
			//timeout : mHealth.service_timeout,
			success : function(output, textStatus, jqXHR) {
				getSuccessCallback(jqXHR);
			},
			complete : function(output) {

			},
			error : function(jqXHR, textStatus, errorThrown) {
				// if(errorCallback!=null){
				// if(errorThrown == mHealth.SettingsController.timeOut && indicatorFlag === true) {
					// mHealth.util.hideMask();
					// mHealth.util.customAlert(mHealth.SettingsController.errTimeout, '');
				// } else {
					 getErrorCallback(errorThrown);
				// }
				// }
			},
			beforeSend : function(xhr) {
				//xhr.setRequestHeader('ALSECTOKEN', mHealth.util.RemoteServiceProxy.alSecToken);
			}
		});
	},
	
	/**
	 * Name    : authenticateUser
	 * Purpose : Method for making the POST request service call
	 * Params  : url - The service url to call,
	 body - Request body to be sent to the server
	 successCallback  - On Success, the control will be given back to the function
	 errorCallback - On Error, the control will be given back to the function
	 * Returns : --
	 **/
	postRequest : function(url, postSuccessCallback, postErrorCallback) {

		
		$.ajax({
			url : url,
			async : true,
			type : 'POST',
			success : function(output, textStatus, jqXHR) {
				  postSuccessCallback(jqXHR);
			},
			complete : function(output) {

			},
			error : function(jqXHR, textStatus, errorThrown) {
					postErrorCallback(errorThrown);
			},
			beforeSend : function(xhr) {
			}
		});
	},

});


astfone.service.RemoteService.extend({

	//alSecToken : null,

	/**
	 * Name    : getInstance
	 * Purpose : Method to create Singleton object for RemoteServiceProxy class
	 * Params  : --
	 * Returns : --
	 **/
	getInstance : function() {

		if(astfone.service.RemoteService.instance == null) {

			astfone.service.RemoteService.instance = new astfone.service.RemoteService();
		}
		return astfone.service.RemoteService.instance;
	}
});