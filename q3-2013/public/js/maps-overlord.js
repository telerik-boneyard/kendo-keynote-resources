function createMap() {
  // cat map
  // http://geojson.io/#id=gist:anonymous/c2ddb3af8fd968115d04&map=3/-21.29/-152.23

  var map = $("#map-list").val();
  $("#map").kendoMap({
    controls: {
      navigator: true,
      zoom: true
    },
    zoom: 1,
    center: [38, -100],
    layers: [
      {
        type: "tile",
        urlTemplate: "http://tile2.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png",
        copyright: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      },
      {
        type: "shape",
        dataSource: {
          type: "geojson",
          transport: {
            read: "/maps/overlord.geojson"
          }
        },
        style: {
          fill: {
            opacity: 0.75
          },
          stroke: {
            color: "#550",
            opacity: 0.5,
            width: 2
          }
        }
      }
    ],
    shapeCreated: onShapeCreated
  });
}

function onShapeCreated(e) {
  var shape = e.shape;
  var color = shape.dataItem.properties.color;
  if (color) {
    shape.fill(color);
  }
}

$(document).ready(createMap);
