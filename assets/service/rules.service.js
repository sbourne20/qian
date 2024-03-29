(function () {
    'use strict';

    angular
        .module('qianApp')
        .factory('rulesService', rulesService);

    rulesService.$inject = ['$http','DREAM_FACTORY_URL'];
    function rulesService($http, DREAM_FACTORY_URL) {
        var service = {};
        //$http.defaults.headers.common['X-DreamFactory-Application-Name'] = 'qianApp'; //default header for X-DreamFactory-Application-Name

        service.GetTable = GetTable;
        return service;

        function GetTable() {


            return  $http({
                method: 'Get',
                url: DREAM_FACTORY_URL + '/_table/rules?order=tanggal',
                headers: {
                    'X-DreamFactory-API-Key':'92e51faaafbce0ef3ec0db3b29a93af5ec7a6df262dbaab524b950b702bec615'
                },
                data: {
                    "params": [
                        {
                            "name": "stats",
                            "param_type": "IN",
                            "value": "'ACTIVE'"
                        }
                    ],
                    "schema": {
                        "STATUS": "varchar",
                        "ERROR_CODE": "varchar",
                        "MESSAGE": "varchar"
                    },
                    "wrapper": "resource"
                }


            }).then(handleSuccess, handleError('Error getting rules'));


        }

        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }


    }

})();
