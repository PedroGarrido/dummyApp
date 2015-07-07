'use strict';

angular.module('dummyApp')
    .service('citiesApi', function($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var exports = {};
        var endPoint = 'http://localhost:9000/api/cities/';

        /**
         *  Request to server list of all cities
        **/
       exports.getAllCities = function() {
            return $http({
                method: 'GET',
                url: endPoint
            });
        };


        exports.getAllYears = function(idCity) {
            return $http({
                method: 'GET',
                url: endPoint + idCity
            });
        };


        /*exports.getPopulation = function(search) {
            return $http({
                method: 'GET',
                url: endPoint + 'search',
                params: {
                   city: search.city,
                   year: search.year,
                   gender: search.gender
                }
            });
        };*/

        exports.getPopulation = function(search) {
            return $http({
                method: 'GET',
                url: endPoint + search.city + '/' + search.year + '/' + search.gender
            });
        };

        exports.getAllDB = function() {
            return $http({
                method: 'GET',
                url: endPoint + 'all'
            });
        };
        return exports;
    });
