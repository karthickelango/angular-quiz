myApp.service('userService', function () {
  this.saveUsername = function(name) {
  	localStorage.setItem("username", name);
  }
  this.getUsername = function() {
  	return localStorage.getItem("username");
  }
});