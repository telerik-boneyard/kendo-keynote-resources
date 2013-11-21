(function() {

  window.app = window.app || {};
  var mgmt = window.app.mgmt = window.app.mgmt || {};
  mgmt.data = {};
  var defaultManager = {},
      defaultLocation = 0;
  
  mgmt.data.currentLocation = 100;

  var relatedEmployee = {
    "employee": {
      "queryType": "get",
      "contentType": "Employees",
      "filter": {
        "Id": "${Employee}"
      }
    }
  };

  mgmt.data.getDefaultManager = function() {
    var dfrd = $.Deferred();

    var data = Everlive.$.data('Managers');
    var query = new Everlive.Query();
    query.take(1);
    
    data.get(query).then(function(data) {
      defaultManager = data.result[0];
      dfrd.resolve();
    });

    return dfrd;
  };

  mgmt.data.getSchedule = function(location) {

    // get the default schedule

    return new kendo.data.SchedulerDataSource({
        type: "everlive",

        transport: {
          typeName: "Schedule",
          read: {
            beforeSend: function (xhr) {
              xhr.setRequestHeader("X-Everlive-Power-Fields", JSON.stringify(relatedEmployee));
            }
          },
          parameterMap: function(options, operation) {
            if (operation !== "read") {
              var params = {
                Id: options.Id,
                StartTime: options.StartTime,
                EndTime: options.EndTime,
                LocationId: mgmt.data.currentLocation,
                Employee: options.Employee,
                SectionId: options.SectionId,
                Title: options.Title
              };

              return kendo.stringify(params);
            }
            else {
              return kendo.stringify(options);
            }
          }
        },
        schema: {
          model:{
            id: "Id",
            fields: {
              start: { type: "date", from: "StartTime" },
              end: { type: "date", from: "EndTime" },
              title: { from: "Title" }
            }  
          }
        },
        filter: { field: "Location", operator: "eq", value: location },
        serverFiltering: true
      });

  };

}());