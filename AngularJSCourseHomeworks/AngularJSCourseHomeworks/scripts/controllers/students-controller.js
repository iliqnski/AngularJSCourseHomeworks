(function () {
    'use strict'

    var studentsController = function studentsController($scope) {
        $scope.StudentsPageTitle = "Students information";
    };

    app.controller('StudentsController', ['$scope', studentsController])
}())