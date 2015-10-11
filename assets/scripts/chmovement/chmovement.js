var chmovementWindow = function() {

    var init_fetchdata = function(){

        $.ajax({
            type: 'POST',
            url: 'https://sgproject001.bit-clicks.com:443/rest/qian/_proc/fetchRates',
            beforeSend: function (xhr){
               xhr.setRequestHeader ('X-DreamFactory-Application-Name', 'myapp');
            },
            data: {
                "params":
                    {
                        "name": "forprice",
                        "param_type": "IN",
                        "value": "price_buy"
                    }

            }
        }).success(function (data, status) {
            // prepare the data
            var source =
            {
                datatype: "jsonp",
                datafields: [
                    {name: 'stamp_dt', type: 'date'},

                    {name: 'USD', type: 'int'},
                    {name: 'CNY', type: 'int'},
                    {name: 'SGD', type: 'int'},
                    {name: 'EUR', type: 'int'},
                    {name: 'AUD', type: 'int'},
                    {name: 'JPY', type: 'int'}


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



        // prepare jqxChart settings
         var settings = {
             title: "Pergerakan Mata Uang",
             description: "Berdasarkan kurs jual beli Homeeah Valas",
             enableAnimations: true,
             showLegend: true,
             padding: {left: 10, top: 5, right: 10, bottom: 5},
             titlePadding: {left: 10, top: 0, right: 0, bottom: 10},
             source: dataAdapter,
             xAxis: {
                 dataField: 'stamp_dt',
                 type: 'date',
                 baseUnit: 'day',
                 valuesOnTicks: true,
                 labels: {
                     formatFunction: function (value) {
                         return value.getDate();
                     }
                 },
                 toolTipFormatFunction: function (value) {
                     var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                     return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                 },
             },
             valueAxis: {
                 unitInterval: 5000,
                 minValue: 100,
                 maxValue: 20000,
                 title: {text: 'Rupiah'}
             },
             colorScheme: 'scheme03',
             seriesGroups: [
                 {
                     type: 'line',
                     series: [
                         {dataField: 'USD', displayText: 'USD'},
                         {dataField: 'AUD', displayText: 'AUD'},
                         {dataField: 'CNY', displayText: 'CNY'},
                         {dataField: 'EUR', displayText: 'EUR'},
                         {dataField: 'SGD', displayText: 'SGD'},
                         {dataField: 'JPY', displayText: 'JPY'},



                     ]
                 }
             ]
         };
          //setup the chart
         $('#chartContainer').jqxChart(settings);


        });




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
