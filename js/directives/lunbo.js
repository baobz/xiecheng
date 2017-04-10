app.directive('lunBo', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			countries: "="
		},
		templateUrl: 'js/views/list/lunbo.html',
		link: function(scope, elem, attr) {
			var swiper1 = new Swiper('.swiper-container-1', {
				pagination: '.swiper-pagination-1',
				paginationClickable: true
			});
		}
		
	}
})
