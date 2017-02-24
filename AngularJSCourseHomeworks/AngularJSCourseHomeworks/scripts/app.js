var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })
        .when("/students", {
            templateUrl: "/views/students.html",
            controller: "StudentsController"
        })
        .when("/bindimage", {
            templateUrl: "/views/bindimage.html",
            controller: "BindImageController"
        })
        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});