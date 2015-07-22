define([
  'text!views/matches/matches.html'
], function (template) {
    
    var model = kendo.observable({
         teams: new kendo.data.DataSource({

         	transport: {
                read: {
                    url: "http://worldcup.sfg.io/teams/results",
                    dataType: "jsonp"
                }
            },
            pageSize:10            
        })
    });

  var view = new kendo.View(template, { model: model });

  return view;

});