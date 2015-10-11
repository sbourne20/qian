var chmovementWindow = function() {

    var init_fetchdata = function(){

        $http({
            method: 'get',
            url: 'https://sgproject001.bit-clicks.com:443/rest/qian/_proc/fetchRates',
            headers: {
                'X-DreamFactory-Application-Name': "myapp"
            },
            data: {
                "params": [
                    {
                        "name": "forprice",
                        "param_type": "IN",
                        "value": "price_sell"
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
                    {name: 'stamp_dt', type: 'date'},
                    {name: 'aud', type: 'int'},
                    {name: 'cny', type: 'int'},
                    {name: 'eur', type: 'int'},
                    {name: 'sgd', type: 'int'},
                    {name: 'usd', type: 'int'},
                    {name: 'jpy', type: 'int'}

                ],
                id: 'id',
                localdata: data
            };

            var dataAdapter = new $.jqx.dataAdapter(source, {
                async: false,
                autoBind: true,
                loadError: function (xhr, status, error) {
                    alert('Error loading "' + source.url + '" : ' + error);
                }
            });
        });

        // prepare jqxChart settings
        var settings = {
            title: "Pergerakan Mata Uang",
            description: "Berdasarkan kurs jual beli Homeeah Valas",
            enableAnimations: true,
            showLegend: true,
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
            source: dataAdapter,
            xAxis:
            {
                dataField: 'stamp_dt',
                type: 'date',
                baseUnit: 'day',
                valuesOnTicks: true,
                labels:
                {
                    formatFunction: function (value) {
                        return value.getDate();
                    }
                },
                toolTipFormatFunction: function (value) {
                    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                },
            },
            valueAxis:
            {
                unitInterval: 500,
                minValue: 0,
                maxValue: 20000,
                title: {text: 'Daily visitors by source<br>'}
            },
            colorScheme: 'scheme03',
            seriesGroups:
                [
                    {
                        type: 'stackedarea',
                        series: [
                            { dataField: 'usd', displayText: 'USD' },

                        ]
                    }
                ]
        };
        // setup the chart
        $('#chartContainer').jqxChart(settings);

        console.log ('here');





    }

    return {
        init : function(){
            init_fetchdata();

        }
    }
}();
/**
 * Created by iwanbudihalim on 10/12/15.
 */
