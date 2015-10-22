/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	var myApp = angular.module("myApp", []);
	var INTEGER_REGEXP = /^\-?\d+$/;
	myApp.directive("integer", function(){
		return {
			require: "ngModel",
			link: function(scope, elem, attrs, ctrl){
				ctrl.$validators.integer = function(modelValue, viewValue){
					if(ctrl.$isEmpty(modelValue)){
						return true;
					}
					
					if(INTEGER_REGEXP.test(viewValue)){
						return true;
					}
					
					return false;
				};
			}
		};
	});
	
	myApp.directive("username", ['$q', '$timeout', function($q, $timeout){
		return {
			require: "ngModel",
			link: function(scope, elem, attrs, ctrl){
				var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
				
				ctrl.$asyncValidators.username = function(modelValue, viewValue){
					if(ctrl.$isEmpty(modelValue)){
						return $q.when();
					}
					
					var def = $q.defer();
					$timeout(function(){
						if(usernames.indexOf(modelValue) === -1){
							def.resolve();
						} else {
							def.reject();
						}
						
					}, 2000);
					
					return def.promise;
				};
			}
		}
	}]);
	
})();