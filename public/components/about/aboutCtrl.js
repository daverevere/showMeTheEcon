app.controller('aboutCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

$scope.thanks = function() {
	    
	$timeout(function() {
		alert('Thanks for your interest in Show Me the Econ! We have received your message and look forward to getting back to you.');
    }, 2000);

};


}]);