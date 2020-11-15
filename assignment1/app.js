(function() {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];

function LunchCheckController($scope,$filter) {
	$scope.dishes = "";
	$scope.msg = "";
	$scope.class = "";

	$scope.checkDishes = function () {
		var dishes = "";
		var totalDishes = 0;
		dishes = splitDishes($scope.dishes);
		totalDishes = countDishes(dishes);
		if(totalDishes > 0 && totalDishes < 4) {
			$scope.msg = "Enjoy!";
			$scope.class = "success";
		}else if(totalDishes > 3) {
			$scope.msg = "Too much!";
			$scope.class = "success";
		}else{
			$scope.msg = "Please enter data first!";
			$scope.class = "danger";
		}
	};

	function splitDishes(string) {
		return string.split(",");
	}

	function countDishes(dishes) {
		var count = 0;
		for(var i=0; i < dishes.length; i++) {
			if(!isEmpty(dishes[i])){
				count += 1;
			}
		}
		return count;
	}

	function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

}

})();