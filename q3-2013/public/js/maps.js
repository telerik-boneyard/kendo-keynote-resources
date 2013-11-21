var markers = [
  {
    location: [51.5, -0.09],
    tooltip: {
      template: "London, England (#= location.toString() #)"
    }
  },
  {
    location: [42.7, 23.3333],
    tooltip: {
      template: "Sofia, Bulgaria (#= location.toString() #)"
    }
  },
  {
    location: [48.1333, 11.5667],
    tooltip: {
      template: "Munich, Germany (#= location.toString() #)"
    }
  },
  {
    location: [55.6761, 12.5683],
    tooltip: {
      template: "Copenhagen, Denmark (#= location.toString() #)"
    }
  },
  {
    location: [-33.8600, 151.2111],
    tooltip: {
      template: "Sydney, Australia (#= location.toString() #)"
    }
  },
  {
    location: [28.4700, 77.0300],
    tooltip: {
      template: "Gurgaon, India (#= location.toString() #)"
    }
  },
  {
    location: [35.1107, -106.6100],
    tooltip: {
      template: "Albuquerque, NM (#= location.toString() #)"
    }
  },
  {
    location: [35.6672, -105.9644],
    tooltip: {
      template: "Santa Fe, NM (#= location.toString() #)"
    }
  },
  {
    location: [33.3872, -104.5281],
    tooltip: {
      template: "Roswell, NM (#= location.toString() #)"
    }
  },
  {
    location: [31.7394, -106.4869],
    tooltip: {
      template: "Ciudad Juarez, MX (#= location.toString() #)"
    }
  }
];

var mapModel = kendo.observable({
  showMarkers: false,

  createMap: function(){
    var showMarkers = !!mapModel.get("showMarkers");
    var mapMarkers;
    if (showMarkers){ 
      mapMarkers = markers; 
    }

    $("#map").kendoMap({
      center: [35.1107,-106.6100],
      zoom: 4,
      layers: [{
        type: "tile",
        urlTemplate: "http://tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
      }],
      markers: mapMarkers
    });
  }
});

$(document).ready(function(){
  kendo.bind(".map-example", mapModel);
  mapModel.createMap();
});
