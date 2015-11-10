angular.module('qianApp',[]).controller('contactModal',['$scope','$log','$rootScope','$modalInstance',
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