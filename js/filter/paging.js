app.filter('paging', function() {
	return function(ships, index, pageSize) {
		//这里的pageSize是页面中一页显示的条数,
		//此项目中的需求点击一次加载固定的条数,可以设置为固定值
		if(!ships) return[];
		
		var offset = (index-1) * pageSize;
		//offset的设置让页面从哪开始到哪结束
		return ships.slice(0, offset + pageSize);
	}
})
