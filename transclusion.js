/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	"use strict";
	
	angular.module("myapp", [])
	.directive('welcome', function(){
		return {
			restrict: 'E',
			scope: {},
			transclude: true,
			template: "<div>This is the welcome message</div><ng-transclude></ng-transclude>"
		};
	})
	.directive('welcome2', function(){
		return {
			restrict: 'E',
			scope: {},
			transclude: true,
			template: "<div>This is another welcome message</div><btn></btn>",
			link: function(scope, element, attrs, ctrl, transclude){
				element.find('btn').append(transclude());
			}
		};
	});
	
})();