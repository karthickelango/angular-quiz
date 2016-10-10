myApp.service('userService', function () {
  this.saveUsername = function(name) {
  	localStorage.setItem("username", name);
  }
  this.getUsername = function() {
  	return localStorage.getItem("username");
  }
});
myApp.service('ansService', function () {
  this.saveAnswer = function(name) {
  	localStorage.setItem("answer", name);
  }
  this.getAnswer = function() {
  	return localStorage.getItem("answer");
  }
  this.saveAnswer2 = function(name) {
  	localStorage.setItem("answer2", name);
  }
  this.getAnswer2 = function() {
  	return localStorage.getItem("answer2");
  }
  this.saveAnswer3 = function(name) {
  	localStorage.setItem("answer3", name);
  }
  this.getAnswer3 = function() {
  	return localStorage.getItem("answer3");
  }
  this.saveAnswer4 = function(name) {
  	localStorage.setItem("answer4", name);
  }
  this.getAnswer4 = function() {
  	return localStorage.getItem("answer4");
  }
  this.saveAnswer5 = function(name) {
  	localStorage.setItem("answer5", name);
  }
  this.getAnswer5 = function() {
  	return localStorage.getItem("answer5");
  }
});
