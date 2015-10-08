var currencyWindow = function() {

    var init_fetchdata = function(){
        var url = "https://sgproject001.bit-clicks.com/rest/qian/currency";

        var source =
        {
            datatype: "jsonp",

            datafields: [
                { name: 'currency', type: 'string' },
                { name: 'price_buy', type: 'int' },
                { name: 'price_sell', type: 'int' }
            ],
            id: 'id',
            url: url
        };
        /*var dataAdapter = new $.jqx.dataAdapter(source,
         {
         beforeSend: function (xhr) {
         xhr.setRequestHeader("X-DreamFactory-Application-Name", "qian");
         }
         }
         );*/

        var dataAdapter = new $.jqx.dataAdapter(source,
            {
                loadServerData: function (serverdata, source) {
                    $.ajax({
                        dataType: "jsonp",

                        method: "GET",
                        url: url,
                        data: serverdata,
                        headers: {
                            'X-DreamFactory-Application-Name': "myapp"
                        },
                        success: function (data, status, xhr) {
                            //console.log (data);
                        }
                    });
                }
            }
        );

        $("#currWindow").jqxGrid(
            {
                width: "100%",
                source: dataAdapter,
                columnsresize: true,
                columns: [
                    { text: 'Mata Uang', dataField: 'currency', width: 100 },
                    { text: 'Beli', dataField: 'price_buy', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Jual', dataField: 'price_sell', width: 90, cellsalign: 'right', cellsformat: 'c2' }
                ]
            });

    }


    return {
        init : function(){
            init_fetchdata();

        }
    }
}();
