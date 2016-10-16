myApp.controller('resultCtrl', function ($scope, userService, ansService, $location){
	$scope.username = userService.getUsername();
$scope.userAns = ansService.getAnswer();
$scope.userAns2 = ansService.getAnswer2();
$scope.userAns3 = ansService.getAnswer3();
$scope.userAns4 = ansService.getAnswer4();
$scope.userAns5 = ansService.getAnswer5();
$scope.result = 
{result1: 'Both <head> and <body> section', result2: '<script>', result3: 'myFunction()',result4: 'function myFunction()',
   result5: 'client.navName'}
   if($scope.userAns == $scope.result.result1) {
   $(".ans1").addClass("correctAns")
   } else {
   $(".ans1").addClass("wrongAns")
   $(".answer1").addClass("answercorrect")
   };
   if($scope.userAns2 == $scope.result.result2) {
   $(".ans2").addClass("correctAns")
   } else {
   $(".ans2").addClass("wrongAns")
   $(".answer2").addClass("answercorrect")
   };
   if($scope.userAns3 == $scope.result.result3) {
   $(".ans3").addClass("correctAns")
   } else {
   $(".ans3").addClass("wrongAns")
   $(".answer3").addClass("answercorrect")
   };
   if($scope.userAns4 == $scope.result.result4) {
   $(".ans4").addClass("correctAns")
   } else {
   $(".ans4").addClass("wrongAns")
   $(".answer4").addClass("answercorrect")
   };
   if($scope.userAns5 == $scope.result.result5) {
   $(".ans5").addClass("correctAns")
   } else {
   $(".ans5").addClass("wrongAns")
   $(".answer5").addClass("answercorrect")
   };
   $scope.home = function() {
   $location.path("/login");
   }

   // var ctx = document.getElementById("doughnut");
   // var myChart = new Chart(ctx, {
   //     type: 'doughnut',
   //     data: {
   //         labels: ["correctanswer", "wronganswer"],
   //         datasets: [{
   //             label: '# of Votes',
   //             data: [4, 1],
   //             backgroundColor: [
   //                 'rgba(139, 195, 74, 0.7)',
   //                 'rgba(255, 0, 0, 0.7)'
                   
   //             ],
   //             borderWidth: 1
   //         }]
   //     },
   // });   
});



