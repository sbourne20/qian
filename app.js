(function () {
    'use strict';

    angular
        .module('qianApp', ['ngRoute', 'ngCookies','ui.router','ui.bootstrap','oc.lazyLoad'])
        .config (config)
        //.constant('DREAM_FACTORY_URL', 'https://sgproject001.bit-clicks.com:443')
        //.constant('DREAM_FACTORY_URL', 'http://192.168.8.48/api/v2/qiandb')
        .constant('DREAM_FACTORY_URL', 'https://arjuna.homeeahvalas.co.id/api/v2/qiandb')
        .run(run)
        .controller('mainController', mainController);


        //MetronicApp.constant('DREAM_FACTORY_URL', 'https://arjuna.bit-clicks.com/api/v2/qiandb');
    config.$inject = ['$routeProvider' ];
    function config($routeProvider) {

        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : './assets/scripts/currency/currency.html',
                controller  : 'currencyController'
            })
            .when('/rules', {
                templateUrl : './assets/scripts/rules/rules.html',
                controller  : 'rulesController'
            })
            .when('/undercons', {
                templateUrl : './assets/scripts/undercons/undercons.html'
            })
            .when('/news', {
                templateUrl : './assets/scripts/news/news.html',
                controller  : 'newsController'
            })
            .when('/contact', {
                templateUrl : './assets/scripts/contact/contact.html',
                controller  : 'contactController'
            });

    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http','$state', '$stateParams'];
    function run($rootScope, $location, $cookieStore, $http, $state, $stateParams) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;




    }

    function mainController($scope){
        $scope.message = 'this is MAIN !';

        $scope.$on('$viewContentLoaded', function() {
            Metronic.initComponents(); // init core components
            //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
        });
    }
})();