'use strict'

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            createNewAd: function createNewAd(adData, success, error) {
                var request = {
                    method: "POST",
                    url: baseServiceUrl + "/api/user/ads",
                    headers: authService.getAuthHeaders(),
                    data: adData
                };

                $http(request).success(success).error(error);
            },

            getUserAds: function getUserAds(params, success, error) {
                var request = {
                    method: "GET",
                    url: baseServiceUrl + "/api/user/ads",
                    headers: authService.getAuthHeaders(),
                    params: params
                };
            },

            deactivateAd: function deactivateAd(id, success, error) {

            },

            publishAgainAd: function publishAgainAd(id, success, error) {

            }
        }
    }
);