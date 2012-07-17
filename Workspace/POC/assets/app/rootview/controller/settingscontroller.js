/**
 * @author Nivedha
 */

assignment.controllers.SettingsController = Spine.Controller.sub({

	el : 'body',

	events : {
		'click .logoutBtn' : 'doLogout',
		'click #loginBtn' : 'doLogin',
		'pageshow #login_page' : 'setModel'

	},

	doLogin : function() {
		//alert('dologin');
		var count = 0;

		var username = $('#username').val();
		var password = $('#pwd').val();

		if((username != '') && (password != '')) {
			var roleType = $('select#role_type option:selected').val();
			if(roleType == 'Admin') {

				if((username == 'TestAdmin') && (password == 'TestAdmin')) {

					$.mobile.changePage('../../admin/view/manageemployee.html');

				} else {
					count++;
					if(count == 3) {
						$('#loginContent').addClass('ui-disabled');

					}
					//('please enter valid admin credentials');
				}

			} else if(roleType == 'User') {
				var isValidUser = assignment.models.EmployeeModel.findByAttribute("Username", username);
		 if(isValidUser != undefined && isValidUser != null) {
		 	if((username==isValidUser.Username)&&(password==isValidUser.Passwd)){
		 		$.mobile.changePage('../../user/view/userview.html', {
			data : {
				username : username
			}
		});
		 		
		 	}else{
		 		//('please enter valid credentials');
		 		count++;
					if(count == 3) {
						$('#loginContent').addClass('ui-disabled');

					}
		 	}
		 	//alert('a valid user '+isValidUser.Passwd);
		 }else{
		 	count++;
					if(count == 3) {
						$('#loginContent').addClass('ui-disabled');

					}
		 	//alert('please enter a valid user name');
		 }
				
				

			} else {
				count++;
					if(count == 3) {
						$('#loginContent').addClass('ui-disabled');

					}
				//alert('please select role type');
			}

			//if(){}

		} else {
			count++;
			if(count == 3) {
				$('#loginContent').addClass('ui-disabled');

			}
		}
	},
	setModel : function() {
		assignment.models.EmployeeModel.customFromJSON([{
			Username : '6009008',
			Passwd : 'TestUser1',
			FirstName : 'Nivedha',
			LastName : 'Kaliaperumal',
			DateOfBirth : '19/02/1988',
			Email : 'axo_nive@yahoo.com',
			Gender : 'Female',
			Address : 'Annanagar West',
			ZipCode : '600040',
			MobileNo : '9545554255',
			Photo : '',
			AdditionalInfo : '',
			EmployeeID : '6009008',
			DateOfJoining : '15/10/2010',
			Designation : 'Associate Engineer',
			DepartmentName : 'Delivery',
			DepartmentID : 'DEL'
		}, {
			Username : '6009007',
			Passwd : 'TestUser2',
			FirstName : 'Punidha',
			LastName : 'Jawas',
			DateOfBirth : '22/02/1980',
			Email : 'punidha@yahoo.com',
			Gender : 'Female',
			Address : 'Mylapore',
			ZipCode : '600030',
			MobileNo : '9545654255',
			Photo : '',
			AdditionalInfo : '',
			EmployeeID : '6009007',
			DateOfJoining : '13/10/2010',
			Designation : 'Associate Engineer',
			DepartmentName : 'Delivery',
			DepartmentID : 'DEL'

		}, {
			Username : '6009006',
			Passwd : 'TestUser3',
			FirstName : 'Ameya',
			LastName : 'Thakur',
			DateOfBirth : '22/02/1980',
			Email : 'ameya@yahoo.com',
			Gender : 'Male',
			Address : 'Mylapore',
			ZipCode : '600030',
			MobileNo : '9545654255',
			Photo : '',
			AdditionalInfo : '',
			EmployeeID : '6009006',
			DateOfJoining : '16/10/2010',
			Designation : 'Associate Engineer',
			DepartmentName : 'Delivery',
			DepartmentID : 'DEL'

		}, {
			Username : '6009005',
			Passwd : 'TestUser4',
			FirstName : 'Arjun',
			LastName : 'Vel',
			DateOfBirth : '22/02/1980',
			Email : 'arjun@yahoo.com',
			Gender : 'Male',
			Address : 'Mylapore',
			ZipCode : '600030',
			MobileNo : '9545654255',
			Photo : '',
			AdditionalInfo : '',
			EmployeeID : '6009005',
			DateOfJoining : '16/10/2010',
			Designation : 'Associate Engineer',
			DepartmentName : 'Delivery',
			DepartmentID : 'DEL'

		}, {
			Username : '6009004',
			Passwd : 'TestUser5',
			FirstName : 'Balaji',
			LastName : 'Govindan',
			DateOfBirth : '22/02/1980',
			Email : 'arjun@yahoo.com',
			Gender : 'Male',
			Address : 'Mylapore',
			ZipCode : '600030',
			MobileNo : '9545654255',
			Photo : '',
			AdditionalInfo : '',
			EmployeeID : '6009004',
			DateOfJoining : '16/10/2010',
			Designation : 'Associate Engineer',
			DepartmentName : 'Delivery',
			DepartmentID : 'DEL'

		}]);
		//alert('hi');
	},
	doLogout : function() {

		var userDecision = confirm('Do you want to logout ?');

		if(userDecision) {
			assignment.models.EmployeeModel.destroyAll();

			//assignment.userControllerObject.destroy();
			//assignment.userControllerObject=null;
			$('#login_page').detach();

			$.mobile.changePage('../../rootview/view/login.html');

		}
	}
});
