var myApp = angular.module("myApp", ["ngRoute", "chart.js"]);

myApp.config(["$routeProvider, $locationProvider", function ($routeProvider, $locationProvider) {
  var site_prefix = '/firefly';
	$routeProvider.
	when(site_prefix + "/login", {
		templateUrl: "./../templates/username.html",
		controller: "appCtrl"
	}).

	when(site_prefix + "/quiz/1", {
		templateUrl: "./../templates/quiz1.html",
		controller: "quizCtrl"
	}).

	when(site_prefix + "/quiz/2", {
		templateUrl: "./../templates/quiz2.html",
		controller: "quizCtrl"
	}).

	when(site_prefix + "/quiz/3", {
		templateUrl: "././../templates/quiz3.html",
		controller: "quizCtrl"
	}).

	when(site_prefix + "/quiz/4", {
		templateUrl: "./../templates/quiz4.html",
		controller: "quizCtrl"
	}).

	when(site_prefix + "/quiz/5", {
		templateUrl: "./../templates/quiz5.html",
		controller: "quizCtrl"
	}).

	when(site_prefix + "/result", {
		templateUrl: "./../templates/result.html",
		controller: "resultCtrl"
	}).

	otherwise({ redirectTo: "/login" });

  	$locationProvider.html5Mode(true);

}]);
