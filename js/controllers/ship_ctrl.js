app.controller('shipCtrl', ['$scope','$rootScope','$http','$window','getDataService', function($scope,$rootScope,$http,$window,getDataService) {
	$rootScope.headTitle = "游轮路线图";
	$rootScope.title = "游轮";
	
	var vm = $scope.vm = {};
	vm.page = {
		//页面index
		index : 1,
		size : 4
	}
	
	getDataService.getData()
	.success(function(data) {
		$scope.ships = data.ships;
		$scope.countries = data.countries;
	})

	vm.tabs = {
		btns: [
			{label: '超值推荐'},
			{label: '携程专线'},
			{label: '海外套餐'},
			{label: '特惠船票'}
		],
		index: 0
	}

//	$scope.getMore = function() {
//		vm.page.index ++ ;
//		if(vm.page.index > Math.ceil($scope.ships.length/vm.page.size)) {
//			alert('没有更多!');
//		}
//	}
	
	//点击的时候将index直接赋值为$index这样不管怎么改变都为true;
	$scope.tabChange = function(index) {
		vm.tabs.index = index;
	}
	/*
		ship_type: "0"--->超值推荐
		ship_type: "1"--->携程专线
		ship_type: "2"--->海外套餐
		ship_type: "3"--->特惠船票
	*/
	
}])