(function () {
    'use strict'

    var homeController = function homeController(VideosService) {
        var vm = this;

        vm.Title = "Welcome to Videos System!"

        //videos data
        var videos = VideosService.getVideos();
        vm.videos = videos;
    };

    app.controller('HomeController', ['VideosService', homeController]);
}())