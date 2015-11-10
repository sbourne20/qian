(function () {
    'use strict';

    angular
        .module('qianApp')
        .controller('contactController', contactController);

    var vm = this;


    contactController.$inject = ['$rootScope','$scope','$modal','$filter'];
    function contactController($rootScope,$scope,$modal,$filter) {


        $scope.obj = {};//declare a property
        initController();

        function initController() {

        }





    }

})();





