(function () {
    'use strict'

    var homeController = function homeController($scope) {
        $scope.HomePageTitle = "Home Page"
    };

    app.controller('HomeController', ['$scope', homeController]);
}())