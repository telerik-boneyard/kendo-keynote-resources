var mapModel = kendo.observable({
  lat: 35.1107,
  lng: -106.6100,
  zoom: 3,

  init: function(){
    mapModel.createMap();
  },

  createMap: function() {
    var z = mapModel.get("zoom");
    var center = [mapModel.get("lat"), mapModel.get("lng")];

    mapModel.map = $("#map").kendoMap({
      center: center,
      zoom: z,

      layers: [{
        type: "tile",
        urlTemplate: "http://tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
      }],

      panEnd: function(e){
        var center = e.center;
        mapModel.setCenter(center.lat, center.lng);
      }
    }).data("kendoMap");
  },

  mapReset: function(){
    mapModel.map.reset();
  },

  longSliderChanged: function(e){
    mapModel.setCenter(mapModel.get("lat"), e.value);
    mapModel.createMap();
  },

  latSliderChanged: function(e){
    mapModel.setCenter(e.value, mapModel.get("lng"));
    mapModel.createMap();
  },

  zoomOutClicked: function(e){
    e.preventDefault();
    mapModel.zoomMap(-1);
  },

  zoomInClicked: function(e){
    e.preventDefault();
    mapModel.zoomMap(1);
  },

  setCenter: function(lt,lng){
    mapModel.set("lat", lt);
    mapModel.set("lng", lng);
  },

  zoomMap: function(distance){
    var z = mapModel.get("zoom");
    z += distance;

    if (z > 19) {
      z = 19;
    }

    if (z < 1) {
      z = 1;
    }

    mapModel.set("zoom", z);
    mapModel.createMap();
  }
});

$(document).ready(function(){
  kendo.bind("#map-and-controls", mapModel);
  mapModel.init();
});
