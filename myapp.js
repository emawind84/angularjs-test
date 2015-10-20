/// <reference path="typings/angularjs/angular.d.ts" />

var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', function($scope){
	$scope.greeting = 'Ciao!';
}]);

myApp.controller('DoubleController', ['$scope', function($scope){
	$scope.double = function(value){ return value * 2; }
}]);

myApp.controller('SpicyController', ['$scope', function($scope){
	$scope.spice = 'very';
	$scope.customSpice = 'wasabi';
	
	$scope.clickme1 = function(){
		$scope.spice = 'chili';
	};
	
	$scope.clickme2 = function(){
		$scope.spice = 'so much';
	};
	
	$scope.spicy = function(spice){
		$scope.spice = spice;
	};
}]);


myApp.controller('MainController', ['$scope', function ($scope) {
	$scope.timeOfDay = 'morning';
	$scope.name = 'Nikki';
}]);
myApp.controller('ChildController', ['$scope', function ($scope) {
	$scope.name = 'Mattie';
}]);
myApp.controller('GrandChildController', ['$scope', function ($scope) {
	$scope.timeOfDay = 'evening';
	$scope.name = 'Gingerbread Baby';
}]);

myApp.controller('FormTestController', function(){
	var self = this;
	self.message = 'Ciao!';
	
	self.updateMessage = function(msg){
		self.message = msg;
	};
});