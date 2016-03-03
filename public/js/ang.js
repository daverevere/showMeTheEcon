
var app = angular.module('econ', ['ngRoute']);

app.config(function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'components/home/home.html'
    })
    .when('/topics', {
        templateUrl: 'components/topics/topics.html',
        controller : "topics"
    })
})