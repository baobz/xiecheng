app.directive('panel', function() {
	return {
		restrict: 'AE',
		templateUrl: 'js/views/xq/panel.html',
		controller: function($scope, $rootScope) {
			$scope.panelBol = false;
			$rootScope.book = 0;
			$scope.panelShow = function(index) {
				$scope.panelBol = !$scope.panelBol;
			}
			
			$scope.book = 0;
			$scope.decrease = function() {
				$scope.book--;
				$rootScope.book --;
			}
			$scope.increase = function() {
				
				if($rootScope.book >= 5) {
					return;
				} else {
					$scope.book++;
					$rootScope.book ++;
				}
			}
		},
		link: function(scope, elem, attr, ctrl) {
			
		}
	}
}) 
	
