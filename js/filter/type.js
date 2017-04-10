app.filter('type', function() {
	
	return function(ships,type) {
		if(!ships) return[];
		
		var arr = [];
		angular.forEach(ships, function(ship,index) {
			if(ship.ship_type == type) {
				arr.push(ship);
			}
		})
		return arr;
	}
})