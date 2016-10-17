myApp.controller('appCtrl', function ($scope, userService, $location){
	$scope.user = {
		name: ""
	};

	console.log("login CTRL")

	$scope.save = function() {
		userService.saveUsername($scope.user.name);
		$location.path("/quiz/1");
	}
});