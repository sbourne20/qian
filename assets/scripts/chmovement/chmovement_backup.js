var chmovementWindow = function() {

    var init_fetchdata = function(){
        var url = "https://sgproject001.bit-clicks.com/rest/qian/currency";
        var source =
        {
            datatype: "tab",
            datafields: [
                { name: 'Date' },
                { name: 'Referral' },
                { name: 'SearchPaid' },
                { name: 'SearchNonPaid' }
            ],
            url: './assets/scripts/chmovement/website_analytics.txt'
        };

        var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
        // prepare jqxChart settings
        var settings = {
            title: "Website traffic analysis",
            description: "Unique daily visitors (stacked)",
            enableAnimations: true,
            showLegend: true,
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
            source: dataAdapter,
            xAxis:
            {
                dataField: 'Date',
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
                maxValue: 4500,
                title: {text: 'Daily visitors by source<br>'}
            },
            colorScheme: 'scheme03',
            seriesGroups:
                [
                    {
                        type: 'stackedarea',
                        series: [
                            { dataField: 'SearchNonPaid', displayText: 'Desktop Search' },
                            { dataField: 'SearchPaid', displayText: 'Mobile Search' },
                            { dataField: 'Referral', displayText: 'Social media' }
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
