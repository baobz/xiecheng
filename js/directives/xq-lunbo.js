app.directive('xqLunbo', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			imgs: '='
		},
		templateUrl: 'js/views/xq/xq-lunbo.html',
		link: function(scope,elem,attr) {
			var swiper3 = new Swiper('.swiper-container-3', {
				pagination: '.swiper-pagination-3',
				paginationClickable: true,
				//这两行代码解决了ng-repeat图片不能轮播的问题
				observer:true,
				observerParents:true
			});
		}
	}
})
