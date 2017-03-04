﻿'use strict'

app.controller('HomeController', function ($scope, $rootScope, adsService, notifyService, pageSize) {
    $scope.adsParams = {
        "startPage": 1,
        "pageSize": pageSize
    };

    $scope.reloadAds = function reloadAds() {
        adsService.getAds(
            $scope.adsParams,
            function success(data) {
                $scope.ads = data;
            },
            function erroe(err) {
                notifyService.showError("Cannot load ads", err);
            }
        );
    };

    $scope.reloadAds();

    $scope.$on("categorySelectionChanged", function (event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

    $scope.$on("townSelectionChanged", function (event, selectedTownId) {
        $scope.adsParams.townId = selectedTownId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });
});