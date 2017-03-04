'use strict'

app.controller('RightSidebarController', function ($rootScope, $scope, categoriesService, townsService) {
    categoriesService.getCategories(
        function success(data) {
            $scope.categories = data;
        },
        function erroe(err) {
            notifyService.showError("Cannot load categories", err);
        }
    );

    townsService.getTowns(
        function success(data) {
            $scope.towns = data;
        },
        function erroe(err) {
            notifyService.showError("Cannot load towns", err);
        }
    );

    $scope.categoryClicked = function categoryClicked(clickedCategoryId) {
        $scope.selectedCategoryId = clickedCategoryId;
        $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
    };

    $scope.townClicked = function townClicked(clickedTownId) {
        $scope.selectedTownId = clickedTownId;
        $rootScope.$broadcast("townSelectionChanged", clickedTownId);
    };
});