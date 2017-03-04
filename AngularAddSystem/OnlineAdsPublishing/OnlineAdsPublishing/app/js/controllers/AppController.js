'use strict'

app.controller('AppController', function ($scope, $location, notifyService, authService) {
    $scope.authService = authService;

    $scope.logout = function logout() {
        authService.logout();
        notifyService.showInfo("Logout successful");
        $location.path("/");
    };
});