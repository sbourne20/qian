(function () {
    'use strict';

    angular
        .module('qianApp')
        .controller('newsController', newsController);

    var vm = this;


    newsController.$inject = ['$rootScope','$scope','$modal','$filter'];
    function newsController($rootScope,$scope,$modal,$filter) {


        $scope.obj = {};//declare a property
        initController();

        function initController() {

        }





    }

})();





