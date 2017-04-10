app.directive('backButton',function($window) {
	return {
		restrict: 'ACE',
		replace: true,
		link: function(scope,elem,attr) {
			elem.bind('click', function() {
				$window.history.back();
			})
		}
	}
})
