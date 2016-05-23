'use strict';

var app = angular.module("awebclient");


app.factory('ModelInvoice',function($resource,CONFIG){

  return $resource(CONFIG.URL_API+"/invoices/:id",
    {
      id:"@_id"
    },
    {
      update:
      {
        method:"PUT",
        params: {id: "@id"}
      }
    });

});
