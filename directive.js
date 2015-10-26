/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	angular.module('greetings', [])
	.directive('welcome', function(){
		return {
			restrict: 'E',
			template: "<div>Ciao</div>"
		};
	})
	.directive('welcome2', function(){
		return {
			restrict: 'A',
			link: function(){
				alert('This is an attribute directive!');
			}
		};
	})
	.directive('welcome3', function(){
		return {
			restrict: 'M',
			link: function(){
				alert('This is a comment directive!');
			}
		};
	});
	
})();