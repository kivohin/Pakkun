// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function() {
	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1Ijoia2l2b2hpbiIsImEiOiJjaW83YW5vdTYwMDc5dW1rbjFtYzhqNTlvIn0.2fhQAfE3PKSQowqYxRJOTw';
	
	// Create a map in the div #map
	var map = L.mapbox.map('map', 'mapbox.outdoors', {
		center: [51.8710129, 6.0044086], // [lat, lng]
		zoom: 6,
		zoomControl: false
	});

	L.control.zoom({
		position: 'bottomright'
	}).addTo(map);
		
	map.addControl(L.mapbox.geocoderControl('mapbox.places', {
    autocomplete: true,
    position : 'topleft',
    // keepOpen: true
  }));

  map.scrollWheelZoom.disable();

  L.control.locate({
  	position : 'bottomright'
  }).addTo(map);

  var geojson = [
	  {
	    "type": "Feature",
	    "geometry": {
	      "type": "Point",
	      "coordinates": [6.0044086, 51.8710129] // [lng, lat] - GMaps [lat, lng]
	    },
	    "properties": {
	    	"title": "Venus Flytrap",
      	"description": 'Croatan National Forest, North Carolina (USA) <a href="https://en.wikipedia.org/wiki/Venus_flytrap">Details</a>',
	      "marker-color": "#DB3742",
	      "marker-size": "large",
	      "marker-symbol": "garden"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-77.1022438, 34.8940746] // [lng, lat] - GMaps [lat, lng]
	    },
	    "properties": {
	    	"title": "Sweet Pitcher Plant",
      	"description": 'Croatan National Forest, North Carolina (USA) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>',
	      "marker-color": "#63b6e5",
	      "marker-size": "large",
	      "marker-symbol": "garden"
	    }
	  }
	];

	var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);

	// ajax({
	// 	url: '/plant-locations',
	// 	success: function (response) {
	// 		// 1. response should be an array of locations
	// 		// 2. build a geoObject from locations array
	// 		// 3. var myLayer = L.mapbox.featureLayer().setGeoJSON(geoObjects).addTo(map);
	// 	}
	// })

	myLayer.on('click', function(e) {
  	map.panTo(e.layer.getLatLng());
  });
});
