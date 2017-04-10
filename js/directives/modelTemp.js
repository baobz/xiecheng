app.directive('modelDirective', function() {
	return {
		restrict: 'AE',
		replace: false,
//		scope: {
//			showBol: '@',
//			showModel: '&'
//		},
		templateUrl: 'js/views/xq/modelTemp.html',
		controller: function($scope) {
			$scope.showBol = true;
			$scope.showModel = function() {
				$scope.showBol = !$scope.showBol;
			}
		}
	}
})
