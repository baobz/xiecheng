app.directive('search', function() {
	return {
		restrict: 'AE',
		replace: true,
		template: '<div class="search"> \
						<div class="search-bar"> \
							<label>上海</label> \
							<input class="search-text" type="text" placeholder="目的地/游轮关键字" /> \
						</div> \
					</div>'
	}
})