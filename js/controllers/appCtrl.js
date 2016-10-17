myApp.controller('appCtrl', function ($scope, userService, $location){
	$scope.user = {
		name: ""
	};

	$scope.save = function() {
		userService.saveUsername($scope.user.name);
		$location.path("/quiz/1");
	}
});