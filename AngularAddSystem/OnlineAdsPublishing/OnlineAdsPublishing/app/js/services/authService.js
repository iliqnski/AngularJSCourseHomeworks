'use strict'

app.factory('authService', function ($http, baseServiceUrl) {
    return {
        login: function login(userData, success, error) {
            var request = {
                method: "POST",
                url: baseServiceUrl + "/api/user/login",
                data: userData
            };

            $http(request).success(function (data) {
                sessionStorage["currentUser"] = JSON.stringify(data);
                success(data);
            }).error(function (err) {
                error(err);
            });
        },

        register: function register(userData, success, error) {
            var request = {
                method: "POST",
                url: baseServiceUrl + "/api/user/register",
                data: userData
            };

            $http(request).success(function (data) {
                sessionStorage["currentUser"] = JSON.stringify(data);
                success(data);
            }).error(error);
        },

        logout: function logout() {
            delete sessionStorage["currentUser"];
        },

        getCurrentUser: function getCurrentUser() {
            var userObject = sessionStorage["currentUser"];
            if (userObject) {
                return JSON.parse(userObject);
            }
        },

        isAnonymous: function isAnonymous() {
            return sessionStorage["currentUser"] === undefined;
        },

        isLoggedIn: function isLoggedIn() {
            return sessionStorage["currentUser"] !== undefined;
        },

        isNormalUser: function isNormalUser() {
            var currentUser = this.getCurrentUser();

            return (currentUser !== undefined) && (!currentUser.isAdmin);
        },

        isAdmin: function isAdmin() {
            var currentUser = this.getCurrentUser();

            return (currentUser !== undefined) && (!currentUser.isNormalUser);
        },

        getAuthHeaders: function getAuthHeaders() {
            var headers = {};
            var currentUser = this.getCurrentUser();
            if (currentUser) {
                headers["Authorization"] = "Bearer " + currentUser.access_token;
            }

            return headers;
        }
    };
});