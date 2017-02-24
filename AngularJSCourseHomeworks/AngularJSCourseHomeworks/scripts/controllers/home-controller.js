(function () {
    'use strict'

    var homeController = function homeController($scope) {
        var vm = $scope;

        vm.HomePageTitle = "Home Page";
    };

    app.controller('HomeController', ['$scope', homeController]);
}())