/// <reference path="typings/angularjs/angular.d.ts" />

var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', function($scope){
	$scope.greeting = 'Ciao!';
}]);

myApp.controller('DoubleController', ['$scope', function($scope){
	$scope.double = function(value){ return value * 2; }
}]);