(function () {
    'use strict';

    angular
        .module('qianApp', ['ngRoute', 'ngCookies','ui.router','ui.bootstrap','oc.lazyLoad'])
        .config (config)
        .constant('DREAM_FACTORY_URL', 'https://sgproject001.bit-clicks.com:443')
        .run(run)
        .controller('mainController', mainController);



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
    }
})();