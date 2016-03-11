describe('Progressbar controller tests',function(){
	beforeEach(module('progressbar'));
	var $scope,mockController;

	beforeEach(inject(function($controller,$rootScope){
		$scope=$rootScope.$new();
		mockController= $controller('progressbarController',{
			$scope:$scope
		});
		
	}));

	describe('On call to Increment with byAmount',function(){
		beforeEach(function(){
			$scope.progressbarStates=[		{max:100,currentVal:0,bartype:""},
										{max:100,currentVal:0,bartype:""},
										{max:100,currentVal:0,bartype:""}
									];
		});
		it('will increse amount ',function(){
			$scope.increment(0,10);
			expect($scope.progressbarStates[0].currentVal).toEqual(10);
		});
	}); 

	describe('On call to getbarType ',function(){
		
		it('will return success if amount is less than 100 ',function(){
			expect($scope.getbarType(99)).toEqual("success");
		});
		it('will return warning if amount is more than 100 ',function(){
			expect($scope.getbarType(101)).toEqual("warning");
		});
	});
});
