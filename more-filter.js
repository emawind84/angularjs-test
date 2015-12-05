(function () {
	"use strict";

	angular.module('app', [])
	.controller('PersonCtrl', function () {
		this.friends = [{
			name: 'Andrew'
		}, {
			name: 'Will'
		}, {
			name: 'Mark'
		}, {
			name: 'Alice'
		}, {
			name: 'Todd'
		}];
	})
	.filter('startsWithA', function(){
		return function(items){
			var filtered = [];
			for( var i = 0; i < items.length; i++ ){
				var item = items[i];
				if( /a/i.test(item.name.substring(0, 1) ) ){
					filtered.push(item);
				}
			}
			return filtered;
		};
	});
	
})();