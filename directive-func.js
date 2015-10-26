/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	angular.module('funcs', [])
	.directive('entering', function(){
		return function(scope, element){
			element.bind("mouseenter", function(){
				console.log("Mouse has entered the div");
			});
		};
	})
	.directive('leaving', function(){
		return function(scope, element){
			element.bind("mouseleave", function(){
				console.log("Mouse has left the div");
			});
		};
	});
	
})();