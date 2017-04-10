angular.module('shipApp.service', [])
.factory('getDataService', ['$http', function($http) {
	var getData = function() {
		return $http({
			method:'GET',
			url: 'json/youlun_list.json'
		})
	}
	
	return {
		getData: getData
	}
}])