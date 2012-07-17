/**
 * @author Nivedha
 */

assignment.controllers.UserController = Spine.Controller.sub({

	el : 'body',

	events : {
		'click #editBtn' : 'editDetails',
		'click #cancelBtn' : 'viewDetails',
		'pageshow #userViewPage' : 'showUserDetails'

	},

	showUserDetails : function() {
		var activePage;
		activePage = $('.ui-page-active').attr('data-url');
		var username = assignment.util.getParameterByName('username', activePage);
		//alert(username);
		var currentUser = assignment.models.EmployeeModel.findByAttribute("Username", username);
		$('#welcomeName').html(_.template($('#welcomeNameScript').html(), {
			currentUser : currentUser
		}));
		$('#welcomeName').trigger('create');
		
		$('#viewDetails').html(_.template($('#viewDetailsScript').html(), {
			currentUser : currentUser
		}));
		$('#viewDetails').trigger('create');
		
		$('#editDetails').html(_.template($('#editDetailsScript').html(), {
			currentUser : currentUser
		}));
		$('#editDetails').trigger('create');
		
	},
	init : function() {
		//alert('hi');
	},
	viewDetails : function() {
		$('#logoutBtn').show();
		$('#editBtn').show();
		$('#saveBtn').hide();
		$('#cancelBtn').hide();
		$('#viewDetails').show();
		$('#editDetails').hide();
		$('#welcomeMsg').show();

	},
	editDetails : function() {
		$('#logoutBtn').hide();
		$('#editBtn').hide();
		$('#saveBtn').show();
		$('#cancelBtn').show();
		$('#viewDetails').hide();
		$('#editDetails').show();
		$('#welcomeMsg').hide();
	}
});
