(function () {
    'use strict';

    angular
        .module('qianApp',["jqwidgets"])
        .controller('currencyDashController', currencyDashController);

    currencyDashController.$inject = ['$http', '$scope'];


    function currencyDashController($http, $scope) {
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

            var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

                    return '<span style="margin: 10px; float: ' + columnproperties.cellsalign + '; font-size: 28px;">' + value.toLocaleString() + '</span>';

            }

            var headerrenderer = function  (value) {
                return '<div style="margin: 10px; font-size: 30px;"><b>' + value + '</b></div>';
            }

            $scope.gridSettings =
            {
                width: "100%",
                rowsheight: 55,
                height: "400px",
                columnsheight: 55,
                source: dataAdapter,
                columnsresize: true,
                columns: [
                    { text: 'Mata Uang', datafield: 'curname', cellsalign: 'left',width: '40%', cellsrenderer: cellsrenderer, renderer: headerrenderer},
                    { text: 'Beli', datafield: 'price_buy', cellsalign: 'right', width: '30%', cellsrenderer: cellsrenderer, renderer: headerrenderer},
                    { text: 'Jual', datafield: 'price_sell', cellsalign: 'right', width: '30%', cellsrenderer: cellsrenderer , renderer: headerrenderer}
                ]
            };
            // now create the widget.
            $scope.createWidget = true;
        }).error(function (data, status) {
            // Some error occurred
        });
    }



})();
