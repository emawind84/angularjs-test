/// <reference path="typings/angularjs/angular.d.ts" />

(function(){
	
	var myApp = angular.module('myApp', []);
	 
	 myApp.controller('ExampleController', function(){
		 var self = this;
		 
		 self.master = {};
		 
		 self.update = function(user){
			 self.master = angular.copy(user);
		 };
		 
		 self.reset = function(form){
			 if (form) {
				 form.$setPristine();
				 form.$setUntouched();
			 }
			 self.user = angular.copy(self.master); 
		 };
		 
		 self.reset();
	 });
})();