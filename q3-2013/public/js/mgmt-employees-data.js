(function() {

  window.app = window.app || {};

  var defaultLocation = 0;

  var mgmt = {
    data: {}
  };

  // plain Everlive query
  mgmt.data.getLocations = function() {
    
    var dfrd = $.Deferred();

    var data = Everlive.$.data('Locations');
    var query = new Everlive.Query();
    
    data.get(query).then(function(data) {
      var results = $.map(data.result, function(item) {
        return { text: item.LocationNumber, value: item.Id };
      });
      defaultLocation = results[0].value;
      console.log(defaultLocation);
      dfrd.resolve(results);
    });

    return dfrd;

  };

  // Mind blowing Everlive Kendo UI DataSource
  mgmt.data.employeesDataSource = new kendo.data.DataSource({
    type: "everlive",
    transport: {
      typeName: "Employees"
    },
    schema: {
      model: {
        id: Everlive.idField,
        fields: {
          "FirstName": { from: "FirstName", validation:{ required: true  } },
          "LastName": { from: "LastName", validation: { required: true } },
          "Rate": { from: "Rate", type: "number", validation: {
              min: 5.15,
              max: 20,
              required: true
            } 
          },
          "StartDate": { from: "StartDate", type: "date" },
          "LocationId": { from: "LocationId", defaultValue: defaultLocation }
        }
      }
    },
    pageSize: 7,
    serverPaging: true
  });

  window.app.mgmt = mgmt;

}());

  