(function () {
    'use strict';

    angular
        .module('qianApp')
        .controller('currencyController', currencyController);

    currencyController.$inject = ['CurrencyService','$rootScope','$scope','$modal','$filter'];
    function currencyController(CurrencyService,$rootScope,$scope,$modal,$filter) {


        $scope.obj = {};//declare a property
        initController();

        function initController() {
            loadCurrency();
        }

        function loadCurrency() {

            CurrencyService.GetListCurrency()
                .then(function (currencies) {
                    $scope.obj.currencies = currencies;
                    $scope.obj.currenciesdate = currencies.data[0].stamp_dt;



                });


        }




    }

})();





