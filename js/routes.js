'use strict';

angular.module('broce')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController as MC'
      })
      .when('/parts-order', {
        templateUrl: 'views/parts-auth',
        controller: 'PartsAuth as PA'
      });
  });
