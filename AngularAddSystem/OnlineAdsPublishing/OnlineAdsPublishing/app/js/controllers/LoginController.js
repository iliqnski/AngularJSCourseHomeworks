﻿'use strict'

app.controller('LoginController', function ($scope, $location, authService, notifyService) {
    $scope.login = function login(userData) {
        authService.login(userData,
            function success() {
                notifyService.showInfo("Login successful");
                $location.path("/");
            },
            function error(err) {
                notifyService.showError("Error during login ", err);
            }
        );
    };
});