/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	var myApp = angular.module('myApp', []);
	
	myApp.controller('PeopleController', function(){
		var self = this;
		self.people = [
			{
				name: "Eric Simons",
				born: "Chicago"
			},
			{
				name: "Albert Pai",
				born: "Taiwan"
			},
			{
				name: "Matthew Greenster",
				born: "Virginia"
			}
		];
	});
})();