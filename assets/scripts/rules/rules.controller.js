(function () {
    'use strict';

    angular
        .module('qianApp')
        .controller('rulesController', rulesController);

    var vm = this;


    rulesController.$inject = ['rulesService','$rootScope','$scope','$modal','$filter'];
    function rulesController(rulesService,$rootScope,$scope,$modal,$filter) {


        $scope.obj = {};//declare a property
        initController();

        function initController() {
            rulesService.GetTable()
                .then(function (rules) {
                    $scope.obj.rules = rules;

                });
        }





    }

})();





