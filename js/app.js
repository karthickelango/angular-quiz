var myApp = angular.module("myApp", ["ngRoute", "chart.js"]);

myApp.config(["$routeProvider", function ($routeProvider) {
	$routeProvider.
	when("/login", {
		templateUrl: "./../templates/username.html",
		controller: "appCtrl"
	}).

	when("/quiz/1", {
		templateUrl: "./../templates/quiz1.html",
		controller: "quizCtrl"
	}).

	when("/quiz/2", {
		templateUrl: "./../templates/quiz2.html",
		controller: "quizCtrl"
	}).

	when("/quiz/3", {
		templateUrl: "./../templates/quiz3.html",
		controller: "quizCtrl"
	}).

	when("/quiz/4", {
		templateUrl: "./../templates/quiz4.html",
		controller: "quizCtrl"
	}).

	when("/quiz/5", {
		templateUrl: "./../templates/quiz5.html",
		controller: "quizCtrl"
	}).

	when("/result", {
		templateUrl: "./../templates/result.html",
		controller: "resultCtrl"
	}).

	otherwise({ redirectTo: "/login" });
}]);
