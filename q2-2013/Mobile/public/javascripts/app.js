(function($, kendo, moment) {
  var runsDataSource, shoesDataSource;

  runsDataSource = new kendo.data.DataSource({
    type: 'everlive',
    transport: {
      typeName: 'Run'
    },
    schema: {
      model: { id: Everlive.idField }
    },
    serverPaging: true,
    pageSize: 20,
    serverSorting: true,
    sort: { field: 'Date', dir: 'desc' }
  });

  shoesDataSource = new kendo.data.DataSource({
    type: 'everlive',
    transport: {
      typeName: 'Shoe'
    },
    schema: {
      model: { id: Everlive.idField }
    },
    serverSorting: true,
    sort: { field: 'Name', dir: 'asc' }
  });

  var applicationSettings = {
      emptyGuid: '00000000-0000-0000-0000-000000000000',
      apiKey: '9O9pJYS1ampTPiH9'
  };

  var el = new Everlive(applicationSettings);
  el.Users.login('bsatrom', 'kendo123!')
    .then(function () {
      
      runsDataSource.fetch(function() {
        $("#runsList").kendoMobileListView({
          dataSource: runsDataSource,
          template: $("#runs-template").text(),
          endlessScroll: true,
          scrollTreshold: 30
        });
      });

      shoesDataSource.fetch(function() {
        $("#shoesList").kendoMobileListView({
          dataSource: shoesDataSource,
          template: $("#shoes-template").text()
        });
      });
      
    });

    window.initForm = function(e) {
      var slider = $("#maxmileage"),
        name = $("#shoeName"),
        brand = $("#shoeBrand"),
        asin = $("#shoeAsin"),
        img = $('#shoeImg'),
        sliderVal = $('#sliderVal');

      var shoeID = e.view.params.id;
      var shoe = shoesDataSource.get(shoeID);

      if (shoe) {
        brand.val(shoe.Brand);
        name.val(shoe.Name);
        asin.val(shoe.ASIN);
        img.attr('src', 'https://api.everlive.com/v1/9O9pJYS1ampTPiH9/Files/' + shoe.Photo + '/Download');
      }

      sliderVal.text(shoe.MaxMileage);
      slider.kendoSlider(
        {
          value: shoe.MaxMileage,
          tooltip: { enabled: false },
          change: function(e) {
            sliderVal.text(e.value);
          }
        });
    };

  var app = new kendo.mobile.Application(document.body, { skin: "flat" });
}(jQuery, kendo, moment));