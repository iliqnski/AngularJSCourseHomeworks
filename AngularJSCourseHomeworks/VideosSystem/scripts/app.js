var app = angular.module('videosSystem', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/views/home.html",
            controller: "HomeController",
        })
        .when('/add', {
            templateUrl: "/views/add.html",
            controller: "AddVideoController",
        })
        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

app.factory('VideosService', function () {
    'use strict'

    var videos =
    [{
        title: 'Course introduction',
        pictureUrl: 'https://s-media-cache-ak0.pinimg.com/originals/6c/74/91/6c7491dd6bcc13567847154cae6cfc5b.jpg',
        length: '3:32',
        category: 'IT',
        subscribers: 1,
        date: new Date(2014, 12, 15),
        haveSubtitles: false,
        comments:
        [{
            username: 'Pesho Peshev',
            content: 'Congratulations Nakov',
            date: new Date(2014, 12, 15, 12, 30, 0),
            likes: 3,
            websiteUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2x0qgrmmKI9uH7E7DswOSn8r3FLq5MGU8abxApHXD4aHEovxs'
        }]
    },
    {
        title: 'Alians',
        pictureUrl: 'https://s-media-cache-ak0.pinimg.com/originals/6c/74/91/6c7491dd6bcc13567847154cae6cfc5b.jpg',
        length: '3:32',
        category: 'IT',
        subscribers: 3,
        date: new Date(2014, 12, 15),
        haveSubtitles: false,
        comments:
        [{
            username: 'Pesho Peshev',
            content: 'Congratulations Nakov',
            date: new Date(2014, 12, 15, 12, 30, 0),
            likes: 3,
            websiteUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2x0qgrmmKI9uH7E7DswOSn8r3FLq5MGU8abxApHXD4aHEovxs'
        }]
    }];

    return {
        getVideos: function getVideos() {
            return videos;
        },

        addVideo: function addVideo(video) {
            videos.push(video);
        }
    }
});