'use strict'

app.controller('RegisterController', function ($scope, notifyService, townsService, $location, authService) {
    $scope.userData = { townId: null };

    townsService.getTowns(
        function success(data) {
            $scope.towns = data;
        },
        function error(err) {
            notifyService.showError("Cannot load towns", err);
        }
    );

    $scope.register = function register(userData) {
        authService.register(userData,
            function success() {
                notifyService.showInfo("Register successful");
                $location.path("#/login");
            },
            function error(err) {
                notifyService.showError("User registration failed", err);
            }
        );
    };
});