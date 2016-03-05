
var app = angular.module('econ', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'home'
    })
    .when('/topics/:topicTitle', {
        templateUrl: 'components/topics/topics.html',
        controller : "topics"
    })
    .otherwise("/");
});