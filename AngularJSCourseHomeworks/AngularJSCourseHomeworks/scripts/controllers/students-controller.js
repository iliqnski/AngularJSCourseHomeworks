(function () {
    'use strict'

    var studentsController = function studentsController($scope) {
        var vm = $scope;

        vm.StudentsPageTitle = "Students information";
        vm.StudentName = "Pesho";
        vm.url = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHoTGroXPWhmI_JpOhICp32LynmIS4smqAPVDZF0yMjDOiAv-r";
        vm.Grade = "7";
        vm.School = "High School of Mathematics";
        vm.Teacher = "Gichka Pesheva";
    };

    app.controller('StudentsController', ['$scope', studentsController])
}())