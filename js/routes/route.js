app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'js/views/list/yl_list.html',
		controller: 'shipCtrl'
	})
	.when('/xq', {
		templateUrl: 'js/views/xq/xq.html',
		controller: 'xqCtrl'
	})
	.otherwise({redirectTo: '/'})
}])