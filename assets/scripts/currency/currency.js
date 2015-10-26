(function () {
    'use strict';

    angular
        .module('qianApp',["jqwidgets"])
        .controller('currencyController', currencyController);

    currencyController.$inject = ['$http', '$scope'];


    function currencyController($http, $scope) {
        var vm = this;
        $scope.createWidget = false;
        $http({
            method: 'get',
            url: 'https://sgproject001.bit-clicks.com:443/rest/qian/_proc/retrieve_rates',
            headers: {
                'X-DreamFactory-Application-Name': "myapp"
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
                "wrapper": "record"
            }
        }).success(function (data, status) {
            // prepare the data
            var source =
            {
                datatype: "jsonp",
                datafields: [
                    { name: 'curname', type: 'string' },
                    { name: 'stamp_dt', type: 'string' },
                    { name: 'price_buy', type: 'int' },
                    { name: 'price_sell', type: 'int' },
                ],
                id: 'id',
                localdata: data
            };
            var dataAdapter = new $.jqx.dataAdapter(source);



            $scope.gridSettings =
            {
                width: "100%",
                source: dataAdapter,
                columnsresize: true,
                columns: [
                    { text: 'Mata Uang', datafield: 'curname', width: '30%' },
                    { text: 'Tanggal', datafield: 'stamp_dt', width: '30%' },
                    { text: 'Beli', datafield: 'price_buy', width: '20%', cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Jual', datafield: 'price_sell', width: '20%', cellsalign: 'right', cellsformat: 'd' }
                ]
            };
            // now create the widget.
            $scope.createWidget = true;
        }).error(function (data, status) {
            // Some error occurred
        });
    }

})();
