/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	var myApp = angular.module('myApp', []);
	
	myApp.factory('messages', function(){
		var messages = {};
		
		messages.list = [];
		
		messages.add = function(msg){
			messages.list.push({ id: messages.list.length, text: msg });
		};
		
		return messages;
	});
	
	myApp.controller('ListCtrl', ['messages', function(messages){
		var self = this;
		
		self.messages = messages.list;
	}]);
	
	myApp.controller('PostCtrl', ['messages', function(messages){
		var self = this;
		
		self.newMessage = 'Ciao World!';
		
		self.addMessage = function(msg){
			messages.add(msg);
			self.newMessage = '';
		};
	}]);
	
})();