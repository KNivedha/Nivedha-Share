/**
 * @author Nivedha Kaliaperumal
 */
astfone.controllers.MoreController = Spine.Controller.sub({
	el : 'body',
	service : astfone.service.RemoteService.getInstance(),

	events : {
		'pagebeforeshow #profile_page' : 'renderProfile',
		'pageshow #rate_chk' : 'createScroller',
		//'click #submitProfile' : 'saveProfile',
		'click #profile' : 'getProfile',
		'click #rate_checker' : 'getRates',
		'click #submit_new_pwd' : 'updatePassword'
	},
	
	createScroller : function(){
		
		var rates = [{}];
		 var rateData = astfone.models.CountryRateModel.all();
		 var rateValue = [];
		 var wheeldata={};
		 astfone.models.CountryRateModel.each(function(record){
		 	var valueString = record.CountryName+' : '+record.Rate;
		 	rateValue.push(valueString);
		 	
		 });
		 for (var i=0; i < rateData.length; i++) {
		 	var value = rateValue[i].toString();
		   wheeldata[value] = '<div style="max-width:200px; float:right !important; position:absolute !important; right:2px !important;" >'+rateData[i].CountryName+' : '+rateData[i].Rate+'</div>';
		   
		 };
		 
		 rates[0]['Country Rates'] = wheeldata;
		 
		$('#country_chk').scroller({

			theme : 'ios',
			display : 'modal',
			mode : 'scroller',
			wheels : rates,
			height : 40,
			width : 200
		});
	},
	
	updatePassword : function(){
		var profileData = astfone.models.ProfileModel.first();
		if((($('#old_pwd').val()==profileData.Passwd)&&($('#new_pwd').val()==$('#cfm_pwd').val()))){
			//alert('right entry');
			var url = astfone.config.url.changePwdUrl+'&username='+astfone.config.credentials.userid+'&passwd='+astfone.config.credentials.password+'&newpasswd='+$('#new_pwd').val();
			astfone.util.showMask();
			this.service.postRequest(url, function(){
				astfone.util.hideMask();
				//alert('pwd suc');
				$.mobile.changePage('../../more/view/more.html');
			}, function(){
				astfone.util.hideMask();
				alert('pwd fail');
			});
			
		}else{
			//alert('wrong entry');
		}
		
		
	},
	
	renderProfile:function(){
		var profileData = astfone.models.ProfileModel.first();
		$('#profile_content').html(_.template($('#profile_script').html(), {
			profileData : profileData
		}));
		

		$('#profile_content').trigger('create');
	},
	
	getProfile : function(){
		//alert('getProfile');
		astfone.util.showMask();
		var url = astfone.config.url.profileUrl+'&username='+astfone.config.credentials.userid+'&passwd='+astfone.config.credentials.password;
		/* not working *///var url = "http://65.182.185.219/mobile-api/profile.php?key=F54A289S0I4H21U4L3O&username=demoagent&passwd=111111";
		/* not working *///var url = "http://72.22.77.62/mobile-api/profile.php?key=K3L29H0R1CS7W9KG6B2NP90&username=demoagent&passwd=111111";
		/* not working *///var url = "http://72.22.77.62/profile.php?key=K3L29H0R1CS7W9KG6B2NP90&username=demoagent&passwd=111111";
		/* not working *///var url = "http://72.22.77.62/conf/myadmin/profile.php?key=K3L29H0R1CS7W9KG6B2NP90&username=demoagent&passwd=111111";
		this.service.getResponse(url, this.proxy(this.profileSuccess), this.proxy(this.profileFailure));
		//alert('getProfile');
	},
	
	profileSuccess : function(output){
		astfone.util.hideMask();
		
		alert('success');
		var response = output.responseText;
		//alert('response '+ response);
		response = response.slice(0, -2);
		response = response.trim();
		response = response.split('@@');
		//response = response.toString();
		//alert(response);
		var profileData = astfone.models.ProfileModel.first();
		profileData.updateAttributes({
			UserName:response[0].trim(),
			Email:response[1].trim(),
			Phone:response[2].trim(),
			Country:response[3].trim(),
			Balance:response[4].trim(),
			JoinDate:response[5].trim()
		});
		
		$.mobile.changePage('../../more/view/profile.html');
		
		//alert('all '+astfone.models.ProfileModel.all());
		//var formattedResponse = astfone.util.responseFormatter(response);
		//alert('format ' + formattedResponse);
	},
	
	profileFailure : function(jqXHR, textStatus, errorThrown){
		
		alert('failure');
		astfone.util.hideMask();
	},

	saveProfile : function() {
		
		var profileData = astfone.models.ProfileModel.first();
		profileData.fromForm('#profile_form').save();
		//alert(astfone.models.ProfileModel.all());
		//alert(profileData.UserName);
		var url = astfone.config.url.profileUrl+'&username='+astfone.config.credentials.userid+'&passwd='+astfone.config.credentials.password;
		var body = profileData.UserName+' @@ '+profileData.Email+' @@ '+profileData.Phone+' @@ '+profileData.Country+' @@ '+profileData.Country+' @@ '+profileData.Balance+' # ';
		this.service.postRequest(url, body, function(){
			//alert('suc');
		}, function(){
			alert('fail');
		});
		//var body = profileData.UserName
		// var profileData = astfone.models.ProfileModel.first();
		// profileData.fromForm('#profile_form');
		// alert(astfone.models.ProfileModel.all());

		//alert('saveProfile');

	},

	getRates : function() {

		//alert('getRates');
		astfone.util.showMask();
		/* not working *///var url = "http://72.22.77.62/country-list.php?key=K3L29H0R1CS7W9KG6B2NP90&username=demoagent&passwd=111111";
		/* not working *///var url = "http://72.22.77.62/conf/myadmin/country-list.php?key=K3L29H0R1CS7W9KG6B2NP90&username=demoagent&passwd=111111";
		/* working */var url = "http://65.182.185.219/mobile-api/country-list.php?key=F54A289S0I4H21U4L3O&username=demoagent&passwd=111111";
		
		this.service.getResponse(url, this.proxy(this.rateSuccess), this.proxy(this.rateFailure));

	},

	rateSuccess : function(output) {
		astfone.util.hideMask();
		//alert('success');
		var response = output.responseText;
		//alert('response '+response);
		response= response.slice(0, -2);
		//alert('response slice '+ response);
		response = response.trim();
		response = response.split('#');
		//alert(response.toString());
		var items = response.length;
		//alert(response.length);
		 for (var i=0; i < items; i++) {
		   response[i] = response[i].trim();
		   response[i] = response[i].split('@');
		  // alert(response[i][0].trim());
		   astfone.models.CountryRateModel.customFromJSON({'CountryName':response[i][0].trim(), 'Rate':response[i][1].trim()});
		 };
		 //alert(astfone.models.CountryRateModel.count());
		 
		 
		 
		
		
		$.mobile.changePage('../../more/view/ratechecker.html');
	},

	rateFailure : function(jqXHR, textStatus, errorThrown) {
		astfone.util.hideMask();
		alert('failure');
	}
}); 