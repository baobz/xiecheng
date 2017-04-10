app.controller('xqCtrl', ['$scope','$rootScope','xqDataFactory',function($scope,$rootScope,xqDataFactory) {
	$rootScope.headTitle = $rootScope.title = "产品详情";
	
//	$scope.showBol = true;
	
//	$scope.showModel = function() {
//		$scope.showBol = !$scope.showBol;
//	}
	
	xqDataFactory.getData()
	.then(function(data) {
		$scope.imgs = data.imgs;
		$scope.data = data;
		$scope.rooms = data.rooms;
	})
	
}])
