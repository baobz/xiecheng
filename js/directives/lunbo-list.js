app.directive('lunboList', function() {
	return {
		restrict: "AE",
		replace: true,
		scope: {
			
		},
		templateUrl: 'js/views/list/lunbo-list.html',
		link: function(scope,elem,attr) {
			var swiper2 = new Swiper('.swiper-container-2', {
				pagination: '.swiper-pagination-2',
				slidesPerView: 2,
				paginationClickable: true,
				spaceBetween: 10,
				freeMode: true
			});
		}
	}
})
