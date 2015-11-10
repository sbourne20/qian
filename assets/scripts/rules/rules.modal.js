angular.module('qianApp',[]).controller('rulesModal',['$scope','$log','$rootScope','$modalInstance',
    function ($scope,$log,$rootScope, $modalInstance) {

        $scope.newContact = {};
        $scope.selectedContact = {};
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