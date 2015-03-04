(function () {   'use strict';  angular.module('prisma', ['ngRoute','prisma.controllers']); function config ($locationProvider, $routeProvider) {   $locationProvider.html5Mode(true);   $routeProvider     .when('/', {       templateUrl: 'views/twitter.tpl.html',       controller: 'TopTwitterCtrl',       controllerAs: 'topTwitter'     })     .when('/facebook', {       templateUrl: 'views/facebook.tpl.html',       controller: 'TopFacebookCtrl',       controllerAs: 'topFacebook'     })     .when('/trend', {       templateUrl: 'views/trend.tpl.html',       controller: 'TopTrendCtrl',       controllerAs: 'topTrend'     });  }  angular.module('prisma').config(config); })();