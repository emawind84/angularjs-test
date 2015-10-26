/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	var myApp = angular.module('myApp', []);
	myApp.filter('reverse', function () {
		return function (input, uppercase) {
			input = input || '';
			var out = '';
			for (var i = 0; i < input.length; i++) {
				out = input.charAt(i) + out;
			}
			// conditional based on optional argument
			if (uppercase) {
				out = out.toUpperCase();
			}
			return out;
		};
	});
	
	myApp.controller('TestController', ['$scope', function($scope){
		$scope.greeting = 'hello';
	}]);
})();