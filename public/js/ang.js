
var app = angular.module('econ', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'home'
    })
    .when('/topics/:topicTitle', {
        templateUrl: 'components/topics/topics.html',//how do we make it point to the different views for each topic?
        controller : "topics"
    })
    .otherwise("/");
});