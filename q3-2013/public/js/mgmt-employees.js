(function() {


  var mgmt = window.app.mgmt;
  mgmt.employees = {};
  
  mgmt.init = function() {
  
    // get the full list of locations and then...
    mgmt.data.getLocations().then(function(locations) {
      
      // initialize a new grid
      $("#employees").kendoGrid({
        dataSource: mgmt.data.employeesDataSource,
        columns: [
          { command: [ "edit" ] },
          { title: "First Name", field: "FirstName" },
          { title: "Last Name", field: "LastName" },
          { title: "Pay Rate", field: "Rate", width: "125px", format: "{0:c}" },
          { title: "Location", field: "LocationId", 
            values: locations,
            width: "100px"
          },
          { title: "Start Date", field: "StartDate", format: "{0: MM/dd/yyyy}",
            width: "150px" },
          { command: [ "destroy" ]}  
        ],
        editable: kendo.support.mobileOS ? "popup" : "inline",
        toolbar: [ "create" ],
        mobile: true,
        height: 400,
        pageable: true,
        sortable: true,
        filterable: true,
        groupable: true
      });
    
    });
  
  };

}())