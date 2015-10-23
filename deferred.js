/// <reference path="typings/angularjs/angular.d.ts" />
(function(){
	
	/*
	function getData($timeout, $q){
		return function(){
			var defer = $q.defer();
			
			$timeout(function(){
				defer.resolve('process done.');
			}, 2000);
			
			return defer.promise;
		};
	}
	*/
	
	/* Using the $q constructor */
	function getData($timeout, $q){
		return function(){
			return $q(function(resolve, reject){
				$timeout(function(){
					resolve('process done.');
				}, 2000);
			});
		
		};
	}
	
	angular.module('app', [])
	.factory('getData', getData)
	.run(function(getData){
		var promise = getData();
		promise.then(function(data){
			console.log(data);
		});
		
	});
	
})();