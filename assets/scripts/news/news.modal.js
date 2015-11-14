angular.module('qianApp',[]).controller('newsModal',['$scope','$log','$rootScope','$modalInstance',
    function ($scope,$log,$rootScope, $modalInstance) {


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