var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function ($routeProvider) {
	$routeProvider.
	when("/", {
		templateUrl: "../templates/username.html",
		controller: "appCtrl"
	}).

	when("/quiz", {
		templateUrl: "../templates/quiz.html",
		controller: "quizCtrl"
	}).

	when("/result", {
		templateUrl: "../templates/result.html",
		controller: "resultCtrl"
	}).

	otherwise({ redirectTo: "/" });
}]);