myApp.controller('quizCtrl', function ($scope, userService, ansService, $location){
	$scope.username = userService.getUsername();
	$scope.answer = [ 
                          {name: 'Both <head> and <body> section' }, 
                          {name: 'The <head> section'},
                          {name: 'The <body> section'}
                          ];
  $scope.answer2 = [ 
                          {name: '<script>' }, 
                          {name: '<javascript>'},
                          {name: '<js>'}
                          ];
  $scope.answer3 = [ 
                          {name: 'myFunction()'}, 
                          {name: 'call function myFunction()'},
                          {name: 'call myFunction()'}
                          ];  
  $scope.answer4 = [ 
                          {name: 'function:myFunction()' }, 
                          {name: 'function = myFunction()'},
                          {name: 'function myFunction()'}
                          ]; 
  $scope.answer5 = [ 
                          {name: 'client.navName' }, 
                          {name: 'browser.name'},
                          {name: 'navigator.appName'}
                          ]; 
                                         

	$scope.saveAns = function() {
		ansService.saveAnswer($scope.answer.name);
		$location.path("/quiz/2");
	}
	$scope.saveAns2 = function() {
		ansService.saveAnswer2($scope.answer2.name);
		$location.path("/quiz/3");
	}
	$scope.saveAns3 = function() {
		ansService.saveAnswer3($scope.answer3.name);
		$location.path("/quiz/4");
	}
	$scope.saveAns4 = function() {
		ansService.saveAnswer4($scope.answer4.name);
		$location.path("/quiz/5");
	}
	$scope.saveAns5 = function() {
		ansService.saveAnswer5($scope.answer5.name);
		$location.path("/result");
	}
	// $scope.saveAns = function() {
	// 	if($("value").val() == undefined ){
	// 		alert("name required")
	// 	} else {
	// 	ansService.saveAnswer($scope.answer.name);
	// 	$location.path("/result");
	// 	}
	// }
});