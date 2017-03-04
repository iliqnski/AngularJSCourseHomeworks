'use strict'

app.factory('adsService', function ($resource, baseServiceUrl) {
    var adsResource = $resource(
        baseServiceUrl + "/api/ads",
        null,
        {
            "getAll": {method: "GET"}
        }
    );

    return {
        getAds: function getAdds(params, success, error) {
            return adsResource.getAll(params, success, error);
        }
    };
});

app.factory('townsService', function ($resource, baseServiceUrl) {
    var townsResource = $resource(
        baseServiceUrl + "/api/towns"
    );

    return {
        getTowns: function getTowns(success, error) {
            return townsResource.query(success, error);
        }
    };
});

app.factory('categoriesService', function ($resource, baseServiceUrl) {
    var categoriesResource = $resource(
        baseServiceUrl + "/api/categories"
    );

    return {
        getCategories: function getCategories(success, error) {
            return categoriesResource.query(success, error);
        }
    };
});