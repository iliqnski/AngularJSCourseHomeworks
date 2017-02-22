(function () {
    'use strict'

    var homeController = function homeController($scope) {
        $scope.HomePageTitle = "AngularJS Homeworks"
    };

    app.controller('HomeController', ['$scope', homeController]);
}());