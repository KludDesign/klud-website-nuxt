// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 14,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(48.880075, 2.417566), // Les Lilas

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles:
        [
          {
              "featureType": "administrative.province",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative.locality",
              "elementType": "labels",
              "stylers": [
                  {
                      "lightness": "-8"
                  }
              ]
          },
          {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  }
              ]
          },
          {
              "featureType": "administrative.locality",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative.neighborhood",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#acacac"
                  }
              ]
          },
          {
              "featureType": "administrative.neighborhood",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#484848"
                  }
              ]
          },
          {
              "featureType": "administrative.neighborhood",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ff0000"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative.land_parcel",
              "elementType": "all",
              "stylers": [
                  {
                      "lightness": "-3"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": "72"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "labels",
              "stylers": [
                  {
                      "lightness": "23"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": "30"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "lightness": "-19"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": "2"
                  },
                  {
                      "gamma": "1.21"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "saturation": "15"
                  },
                  {
                      "hue": "#ff0000"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                  {
                      "lightness": "-43"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": "22"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "weight": "0.12"
                  },
                  {
                      "lightness": "-23"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "lightness": "71"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 30
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 40
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "saturation": "5"
                  },
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": "5"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#ffff00"
                  },
                  {
                      "lightness": "-24"
                  },
                  {
                      "saturation": -97
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "saturation": "-88"
                  },
                  {
                      "lightness": "-23"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": -25
                  },
                  {
                      "saturation": -100
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "weight": "0.01"
                  },
                  {
                      "lightness": "9"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "lightness": "-32"
                  },
                  {
                      "gamma": "2.99"
                  }
              ]
          }
      ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(48.880075, 2.417566),
        map: map,
        title: 'Klud Design'
    });
}
