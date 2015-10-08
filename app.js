(function () {
    'use strict';

    angular
        .module('qianApp',[])
        .constant('DREAM_FACTORY_URL', 'https://sgproject001.bit-clicks.com:443')
        .run(run);



    run.$inject = ['$http'];

    function run($http) {

    }

})();