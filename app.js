(function () {
    'use strict';

    angular
        .module('qianApp', ['ngRoute', 'ngCookies','ui.router','ui.bootstrap','oc.lazyLoad'])
        .config (config)
        .constant('DREAM_FACTORY_URL', 'https://sgproject001.bit-clicks.com:443')
        .run(run);



    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider,$urlRouterProvider) {



    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http','$state', '$stateParams'];
    function run($rootScope, $location, $cookieStore, $http, $state, $stateParams) {





    }
})();