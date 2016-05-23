'use strict';

angular.module('awebclient', ['ui.bootstrap','ngResource','ui.router'])



.constant('CONFIG', {
 URL_API: "http://198.199.70.14/api-alegra-web-client/public"
})



.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/layouts/layoutapp.html',
    controller: 'LayoutAppCtrl'
  })


  .state('app.invoices', {
    url: '/invoices',
    views: {
      'content': {
        templateUrl: 'templates/partials/invoices.html',
        controller: 'InvoiceCtrl'
      }
    }
  })


  $urlRouterProvider.otherwise('/app/invoices');
});


