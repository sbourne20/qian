(function () {
    'use strict';

    angular
        .module('qianApp')
        .factory('CurrencyService', CurrencyService);

    CurrencyService.$inject = ['$http','DREAM_FACTORY_URL'];

    function CurrencyService($http, DREAM_FACTORY_URL) {
        var service = {};
        $http.defaults.headers.common['X-DreamFactory-Application-Name'] = 'qianApp'; //default header for X-DreamFactory-Application-Name

        service.GetListCurrency = GetListCurrency;
        return service;

        function GetListCurrency() {

            var url = DREAM_FACTORY_URL + "/rest/qian/_proc/fetchRates";
            var data = {
                "params": [
                    {
                        "name": "nid",
                        "param_type": "IN",
                        "value": "db"
                    },
                    {
                        "name": "curid",
                        "param_type": "IN",
                        "value": 0
                    }
                ],
                "schema": {
                    "STATUS": "varchar",
                    "ERROR_CODE": "varchar",
                    "MESSAGE": "varchar"
                },
                "wrapper": "record"
            };




            return $http({
                method: "POST",
                url: url,
                headers: {
                    'X-DreamFactory-Application-Name': "myapp"
                },
                data: data


            }).then(handleSuccess, handleError('Error updating data'));



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
