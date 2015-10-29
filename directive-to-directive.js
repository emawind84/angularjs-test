(function() {
	"use strict";
	
	var app = angular.module("myapp", []);
	app.directive('welcome', function(){
		return {
			restrict: 'E',
			scope: {}, // This way, the scope for each directive is local only to that directive instance.
			controller: function($scope){
				$scope.words = [];
				
				this.sayHello = function(){
					$scope.words.push('hello');
				};
				
				this.sayHi = function(){
					$scope.words.push('hi');
				};
			},
			link: function(scope, element, attrs){
				element.bind('mouseenter', function(){
					console.log(scope.words);
				});
			}
		};
	});
	
	app.directive('hi', function(){
		return {
			require: 'welcome',
			link: function(scope, element, attrs, welcomeCtrl){
				welcomeCtrl.sayHi();
			}
		};
	});
	
	app.directive('hello', function(){
		return {
			require: 'welcome',
			link: function(scope, element, attrs, welcomeCtrl){
				welcomeCtrl.sayHello();
			}
		};
	});
	
})();