/**
 * @author Nivedha Kaliaperumal
 */
astfone.controllers.RecentsController = Spine.Controller.sub({
	el : 'body',
	service : astfone.service.RemoteService.getInstance(),

	events : {
		
		'click #verify_btn' : 'getCallHistory'
		
		
	},
	
	getCallHistory : function(){
		
		astfone.util.showMask();
		var url = astfone.config.url.callHistoryUrl+'&username='+astfone.config.credentials.userid+'&passwd='+astfone.config.credentials.password;
		this.service.getResponse(url, this.proxy(this.callHistorySuccess), this.proxy(this.callHistoryFailure));
		
	},
	
	callHistorySuccess : function(output){
		astfone.util.hideMask();
		
		alert('success');
		var response = output.responseText;
		alert(response);
		$.mobile.changePage('../../recents/view/recents.html');
		
	},
	
	callHistoryFailure : function(jqXHR, textStatus, errorThrown){
		
		alert('errorThrown ' +errorThrown);
		astfone.util.hideMask();
		
	}
	
});
	