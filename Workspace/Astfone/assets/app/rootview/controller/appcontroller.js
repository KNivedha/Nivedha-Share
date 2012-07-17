/**
 * @author Nivedha Kaliaperumal
 */

astfone.controllers.AppController = Spine.Controller.sub({
	el : 'body',
	service : astfone.service.RemoteService.getInstance(),

	events : {

		'pageshow div[data-role="page"]' : 'applyCommons',
		'pagebeforeshow #splash2' : 'getUserCredentials',
		'click #dialer_tab' : 'highlightDialerTab',
		'click #recents_tab' : 'highlightRecentsTab',
		'click #contacts_tab' : 'highlightContactsTab',
		'click #chats_tab' : 'highlightChatsTab',
		'click #more_tab' : 'highlightMoreTab'

	},
	
	getUserCredentials : function() {
		
		//var url = astfone.config.url.loginUrl;
		this.service.getResponse(astfone.config.url.loginUrl, this.proxy(this.userSuccess), this.proxy(this.userFailure));
		
	},
	
	userSuccess : function(output) {
		//alert('userSuccess');
		var response = output.responseText;
		//alert('response '+ response);
		var formattedResponse = response.split('@');
		astfone.config.credentials.userid = formattedResponse[0].trim();
		astfone.config.credentials.password = formattedResponse[1].trim();
		//alert(formattedResponse[0]);
		//alert(formattedResponse[1]);
		//var formattedResponse = astfone.util.responseFormatter(response);
		//alert('format ' + formattedResponse);
		astfone.models.ProfileModel.customFromJSON({'UserID':formattedResponse[0],'Passwd':formattedResponse[1]});
		//alert('all '+astfone.models.ProfileModel.all());
		
	},
	
	userFailure : function(jqXHR, textStatus, errorThrown){
		alert('userFailure');
		
	},

	highlightDialerTab : function() {

		$(".dialer_img").attr("src", "../../../assets/images/dialer.png");
		$(".recents_img").attr("src", "../../../assets/images/recents-1.png");
		$(".contacts_img").attr("src", "../../../assets/images/contacts-1.png");
		$(".chats_img").attr("src", "../../../assets/images/chats-1.png");
		$(".more_img").attr("src", "../../../assets/images/more-1.png");
	},

	highlightRecentsTab : function() {

		$(".dialer_img").attr("src", "../../../assets/images/dialet-1.png");
		$(".recents_img").attr("src", "../../../assets/images/recents.png");
		$(".contacts_img").attr("src", "../../../assets/images/contacts-1.png");
		$(".chats_img").attr("src", "../../../assets/images/chats-1.png");
		$(".more_img").attr("src", "../../../assets/images/more-1.png");
	},

	highlightContactsTab : function() {

		$(".dialer_img").attr("src", "../../../assets/images/dialet-1.png");
		$(".recents_img").attr("src", "../../../assets/images/recents-1.png");
		$(".contacts_img").attr("src", "../../../assets/images/contacts.png");
		$(".chats_img").attr("src", "../../../assets/images/chats-1.png");
		$(".more_img").attr("src", "../../../assets/images/more-1.png");
	},

	highlightChatsTab : function() {

		$(".dialer_img").attr("src", "../../../assets/images/dialet-1.png");
		$(".recents_img").attr("src", "../../../assets/images/recents-1.png");
		$(".contacts_img").attr("src", "../../../assets/images/contacts-1.png");
		$(".chats_img").attr("src", "../../../assets/images/chats.png");
		$(".more_img").attr("src", "../../../assets/images/more-1.png");
	},

	highlightMoreTab : function() {

		$(".dialer_img").attr("src", "../../../assets/images/dialet-1.png");
		$(".recents_img").attr("src", "../../../assets/images/recents-1.png");
		$(".contacts_img").attr("src", "../../../assets/images/contacts-1.png");
		$(".chats_img").attr("src", "../../../assets/images/chats-1.png");
		$(".more_img").attr("src", "../../../assets/images/more.png");
	},

	applyCommons : function() {

		//alert('applyCommons');
		$('.ui-content').removeClass('ui-body-c');
	}
}); 