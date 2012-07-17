/**
 * @author Nivedha Kaliaperumal
 */
assignment.controllers.AdminController = Spine.Controller.sub({
	
	el : 'body',
	
	events : {
		'click #adminDeleteBtn' : 'showDeleteOption',
		'click #adminCancelDeleteBtn' : 'showEmployees',
		'click #deleteBtn' : 'confirmDelete',
		'click #searchBtn' : 'searchEmployees',
		'click #adminSearchBackBtn' : 'hideSearchEmployees',
		'click .empDet' : 'viewEmployeeDetails',
		'click #adminEditBtn' : 'editSelectedEmployee',
		'click #adminCancelBtn' : 'viewEmployee'		
		
	},
	
	viewEmployee : function(){
		$('#adminEditBtn').show();
		$('#backBtn').show();
		$('#adminViewDetails').show();
		$('#adminSaveBtn').hide();
		$('#adminCancelBtn').hide();
		$('#adminEditDetails').hide();
	},
	
	editSelectedEmployee  : function(){
		$('#adminEditBtn').hide();
		$('#backBtn').hide();
		$('#adminViewDetails').hide();
		$('#adminSaveBtn').show();
		$('#adminCancelBtn').show();
		$('#adminEditDetails').show();
	},
	
	viewEmployeeDetails : function(event){
		var eventTarget = event.target;
		var empId;
		//alert($(eventTarget).html());
		//alert($('#adminCancelDeleteBtn').css('display'));
		if($('#adminCancelDeleteBtn').css('display')=='none'){
			empId = $(eventTarget).parent().siblings('.ui-block-a').children('.idDiv').text().trim();
			$.mobile.changePage('../../admin/view/viewemployee.html', {
			data : {
				empId : empId
			}
		});
		}
		
	},
	
	hideSearchEmployees : function(){
		$('#employeeList').show();
		$('#searchEmployee').hide();
		$('#adminLogoutBtn').show();
		$('#adminSearchBackBtn').hide();
	},
	
	
	searchEmployees : function(){
		$('#employeeList').hide();
		$('#searchEmployee').show();
		$('#adminLogoutBtn').hide();
		$('#adminSearchBackBtn').show();
	},
	
	confirmDelete : function(){
		
		var userDecision = confirm('Do you want to delete this employee ?');
		
		if(userDecision){
			
			//assignment.userControllerObject.destroy();
			//assignment.userControllerObject=null;
			
			//('employee deleted');
			
		}
	},
	
	showEmployees : function(){
		$('#adminDeleteBtn').show();
		$('#adminCancelDeleteBtn').hide();
		$('.deleteDiv').hide();
		$('.dojDiv').show();
	},
	
	showDeleteOption : function(){
		$('#adminDeleteBtn').hide();
		$('#adminCancelDeleteBtn').show();
		$('.deleteDiv').show();
		$('.dojDiv').hide();
	},
	 
	init : function(){
		//alert('hi');
	}
});