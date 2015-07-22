define([
  'text!views/results/results.html'
], function (template) {
    
    var model = kendo.observable({
      results: new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "http://worldcup.sfg.io/teams/results",
                        dataType: "json"
                    }
                },
                sort: {
                    field: "fifa_code",
                    dir: "asc"
                },
                
            })
            /*resultsCharts: new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "http://worldcup.sfg.io/teams/results",
                        dataType: "json"
                    }
                },
                filter: {
                    field: "wins",
                    operator: "gt",
                    value: 2
                }
            }) */   
    });

  var view = new kendo.View(template, { model: model });

  return view;

});