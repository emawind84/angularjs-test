/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	angular.module('funcs', [])
	.directive('entering', function(){
		return function(scope, element, attrs){
			element.bind("mouseenter", function(){
				console.log("Mouse has entered the div");
				element.addClass(attrs.entering);
				//scope.fun.start();
				//scope.$apply("fun.start()");
				scope.$apply(attrs.onenter);
			});
		};
	})
	.directive('leaving', function(){
		return function(scope, element, attrs){
			element.bind("mouseleave", function(){
				console.log("Mouse has left the div");
				element.removeClass(attrs.entering);
				scope.$apply(attrs.onleave);
			});
		};
	})
	.controller('FunCtrl', function(){
		var self = this;
		self.start = function(){
			console.log("Fun times...");
		};
		self.end = function(){
			console.log("Fun times is over.");
		};
	});
	
})();