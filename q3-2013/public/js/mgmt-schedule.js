(function() {

  var mgmt = window.app.mgmt;

  $("#toggle").toggleClass("hidden");

  mgmt.init = function() {    

    var scheduler = {};

    var initScheduler = function(defaultLocation) {
      scheduler = $("#schedule").kendoScheduler({
        date: new Date("2013/11/20"),
        dataSource: mgmt.data.getSchedule(defaultLocation),
        height: 600,
        views: [
          "day",
          "week",
          "month"
        ],
        allDaySlot: false,
        editor: {
          allDay: false
        },
        resources: [
          {
            field: "SectionId",
            name: "Section",
            dataTextField: "Description",
            dataValueField: "Id",
            dataColorField: "Color",
            title: "Section",
            dataSource: {
              type: "everlive",
              transport: {
                typeName: "Sections"
              }
            }
          },
          {
            field: "Employee",
            name: "Employee",
            dataTextField: "Name",
            dataValueField: "Id",
            title: "Employee",
            dataSource: {
              type: "everlive",
              transport: {
                typeName: "Employees"
              },
              filter: { field: "LocationId", operator: "eq", value: defaultLocation },
              serverFiltering: true
            }
          }
        ],
        mobile: true,
        group: {
          resources: [ "Section" ]
        },
      }).data("kendoScheduler");
    };

   
    $("#locations").kendoDropDownList({
      dataSource: {
        type: "everlive",
        transport: {
          typeName: "Locations"
        },
        serverSorting: true,
        sort: { field: "LocationNumber", dir: "asc" }
      },
      dataTextField: "LocationNumber",
      dataValueField: "Id",
      template: $("#locationsTemplate").html(),
      dataBound: function(e) {
        mgmt.data.currentLocation = e.sender.value();
        initScheduler(mgmt.data.currentLocation);
      },
      change: function(e) {

        mgmt.data.currentLocation = e.sender.value();

        var schedulerDS = scheduler.dataSource;
        var employeesDS = scheduler.resources[1].dataSource;

        filterByLocation(schedulerDS, mgmt.data.currentLocation);
        filterByLocation(employeesDS, mgmt.data.currentLocation);
      }
    }).getKendoDropDownList();
  };

  var filterByLocation = function(dataSource, value) {

        // filter the schedule by location
    dataSource.filter({ field: "LocationId", 
                operator: "eq", 
                value: value });

  };

}());