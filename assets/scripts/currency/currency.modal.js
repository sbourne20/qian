angular.module('qianApp',[]).controller('CurrencyModal',['CurrencyService','$scope','$log','$rootScope','$modalInstance',
    function (CurrencyService,$scope,$log,$rootScope, $modalInstance) {

        $scope.newCurrency = {};
        $scope.selectedCurrency = {};
        initController();
        function initController() {


        }


        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };



        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);