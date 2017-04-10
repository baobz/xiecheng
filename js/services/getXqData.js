angular.module('shipApp.service')
.factory('xqDataFactory', ['$http','$q', function($http,$q) {
	var getData = function() {
		var d = $q.defer();
		$http({
			method: 'GET',
			url: 'json/youlun_xq.json'
		}).success(function(data) {
			d.resolve(data);
		}).error(function(reason) {
			d.reject(reason);
		})
		
		return d.promise;
	}
	
	return {
		getData: getData
	}
	
}])
