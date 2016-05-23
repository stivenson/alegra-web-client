'use strict';

angular.module('awebclient')


.controller('InvoiceCtrl', function($scope,ModelInvoice) {

  $scope.varcontrols = {
    getting: false,
    errorzoho: false,
    btn100000text: 'Ver > $100.000 COP',
    btm100000color: 'info'
  };

  function getInvoices(){
    $scope.list = new Array();
    $scope.varcontrols.errorzoho = false;
    $scope.varcontrols.getting = true;
    ModelInvoice.get(function (data)
    {
      $scope.list = data.list.invoices;
      $scope.varcontrols.getting = false;
    },function(error){
      console.log('Error');
      $scope.varcontrols.getting = false;
      $scope.varcontrols.errorzoho = true;
    });
  };


  function filter(){
    $scope.list.forEach( function(element, index) {
      if(element.total > 100000)
        listFilter.push(element);
    });
    $scope.list = listFilter;
  }


  function getGreater100000(){
    var listFilter = new Array();

    if($scope.varcontrols.btn100000text == 'Ver todo'){
      $scope.varcontrols.btn100000text = 'Ver > $100.000 COP';
      $scope.varcontrols.btm100000color = 'info';
    }else{
      $scope.varcontrols.btn100000text = 'Ver Todo';
      $scope.varcontrols.btm100000color = 'warning';
      filter();
    }

  };


  getInvoices();

  $scope.refresh = function (){
    getInvoices();
  };

  $scope.greater100000 = function (){
    getGreater100000();
  };

  $scope.changeView = function(){

  };




});
