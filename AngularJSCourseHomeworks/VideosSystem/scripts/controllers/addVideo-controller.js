(function () {
    'use strict'

    var addVideoController = function addVideoController($scope, VideosService) {
        var vm = this;

        vm.Title = "Add Video Page";

        vm.addVideo = function addVideo(video) {
            VideosService.addVideo(video);

            $scope.video = null;
        };
    };

    app.controller('AddVideoController', ['$scope', 'VideosService', addVideoController]);
}())