myApp.controller('quizCtrl', function ($scope, userService){
	$scope.username = userService.getUsername();
});