var showMap = true, showgeoJSON = false;

function createMap() {

  var colorList;

  var mapLayer = {
    type: "tile",
    urlTemplate: "http://tile2.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png"
  };

  var geoJSONLayer = {
    type: "shape",
    dataSource: {
      type: "geojson",
      transport: {
        read: "/maps/countries-users.geojson"
      }
    },
    style: {
      fill: {
        color: "#3d3",
        opacity: 0.5
      },
      stroke: {
        color: "#050",
        opacity: 0.5,
        width: 1
      }
    }
  };

  var layers = [];
  if (showMap){
    layers.push(mapLayer);
  }

  if (showgeoJSON){
    layers.push(geoJSONLayer);
  }

  var map = $("#map-list").val();
  $("#map").kendoMap({
    controls: {
      navigator: true,
      zoom: true
    },
    zoom: 2,
    center: [51, 0],
    layers: layers,
    shapeCreated: onShapeCreated
  });
}

function createSelect(){
  colorList = $("#map-list").kendoDropDownList({
    dataSource: [
      {name: "rainbow", value: 0},
      {name: "black and white", value: 1},
      {name: "purple, red, orange", value: 2},
      {name: "green, blue, yellow", value: 3}
    ],

    dataTextField: "name",
    dataValueField: "value"
  }).data("kendoDropDownList");

  colorList.bind("change", function(){
    createMap();
  });
}

var rainbow = chroma.scale(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]).domain([1, 1000]);
var blackwhite = chroma.scale(["black", "white"]).domain([1, 1000]);
var purpleorange = chroma.scale(["purple", "red", "orange"]).domain([1, 1000]);
var gby = chroma.scale(["green", "blue", "yellow"]).domain([1, 1000]);

var scales = [rainbow, blackwhite, purpleorange, gby];

function onShapeCreated(e) {
  var shape = e.shape;
  var users = shape.dataItem.properties.users;
  var scale = scales[colorList.value()];
  if (users) {
    var color = scale(users).hex();
    shape.fill(color);
  }
}

function addShowHandlers(){
  $("#showMap").change(function(e){
    var checked = !!($(e.currentTarget).prop("checked"));
    showMap = checked;
    createMap();
  });

  $("#showGEO").change(function(e){
    var checked = !!($(e.currentTarget).prop("checked"));
    showgeoJSON = checked;
    createMap();
  });
}


$(document).ready(function(){
  addShowHandlers();
  createSelect();
  createMap();
});
