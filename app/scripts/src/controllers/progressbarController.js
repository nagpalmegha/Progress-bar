angular.module('progressbar').controller('progressbarController',[
	'$scope',
	function($scope){
		
		$scope.max=100;
		$scope.initialVal=0;
		$scope.selectedprogressbar=0;
		$scope.progressbarStates=[		{max:$scope.max,currentVal:$scope.initialVal,bartype:""},
										{max:$scope.max,currentVal:$scope.initialVal,bartype:""},
										{max:$scope.max,currentVal:$scope.initialVal,bartype:""}
									];

		$scope.increment=function(barIdentifier,byAmount){
			var selectedbar=$scope.progressbarStates[barIdentifier];
			selectedbar.currentVal+=byAmount;
			if(selectedbar.currentVal<=0){
				selectedbar.currentVal=0;
			}
			selectedbar.bartype=$scope.getbarType(selectedbar.currentVal);
		};

		$scope.getbarType= function(val){
			if (val>100){
				return "warning";
			}
			else{
				return "success";
			}
		};
}]);