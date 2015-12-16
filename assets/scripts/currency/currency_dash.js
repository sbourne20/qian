(function () {
    'use strict';

    angular
        .module('qianApp',["jqwidgets"])
        .controller('currencyDashController', currencyDashController);

    currencyDashController.$inject = ['$http', '$scope', '$interval'];


    function currencyDashController($http, $scope, $interval) {
        var vm = this;
        $scope.createWidget = false;


        var url = 'https://sgproject001.bit-clicks.com:443/rest/qian/_proc/fetchRates';
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


        }).success(function(data, stats){
            // prepare the data
            var source =
            {
                datatype: "jsonp",
                datafields: [
                    { name: 'curname', type: 'string' },
                    { name: 'stamp_dt', type: 'string' },
                    { name: 'price_buy' },
                    { name: 'price_sell'},
                ],
                id: 'id',
                localdata: data
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            Number.prototype.toCurrencyString=function(){
                return this.toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g,'$1 ');
            }

            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                if (columnfield=='Mata Uang') {
                    return '<span style="margin: 10px; float: ' + columnproperties.cellsalign + '; font-size: 28px;">' + value + '</span>';
                } else {
                    return '<span style="margin: 10px; float: ' + columnproperties.cellsalign + '; font-size: 28px;">' + numberWithCommas(value) + '</span>';
                }

            }

            var headerrenderer = function  (value) {
                return '<div style="margin: 10px; font-size: 30px;"><b>' + value + '</b></div>';
            }

            $scope.gridSettings =
            {
                width: "100%",
                rowsheight: 55,
                height: "480px",
                columnsheight: 55,
                source: dataAdapter,
                columnsresize: true,
                columns: [
                    { text: 'Mata Uang', datafield: 'curname', cellsalign: 'left',width: '40%', cellsrenderer: cellsrenderer, renderer: headerrenderer},
                    { text: 'Jual', datafield: 'price_sell', cellsalign: 'right', width: '30%',  cellsrenderer: cellsrenderer,  renderer: headerrenderer},
                    { text: 'Beli', datafield: 'price_buy', cellsalign: 'right', width: '30%',  cellsrenderer: cellsrenderer, renderer: headerrenderer}

                ]
            };
            // now create the widget.
            $scope.createWidget = true;
        });



    }



})();
