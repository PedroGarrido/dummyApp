'use strict';

/**
 * @ngdoc overview
 * @name dummyApp
 * @description
 * # Dummy App
 *
 * Main module of the application.
 */
angular
  .module('dummyApp', [
    'ngRoute',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/home/template.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
