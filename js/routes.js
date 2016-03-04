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
        controller: 'AuthorizationController as AC'
      })
      .when('/new-order', {
        templateUrl: 'views/user/newOrder.html',
        controller: 'OrderFormController as OFC'
      });
  });
