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
	      "coordinates": [6.0044086, 51.8710129] // [lng, lat]
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
	      "coordinates": [-122.413682,37.775408]
	    },
	    "properties": {
	    	"title": "Sweet Pitcher Plant",
      	"description": "Croatan National Forest, North Carolina (USA)",
	      "marker-color": "#63b6e5",
	      "marker-size": "large",
	      "marker-symbol": "garden"
	    }
	  }
	];

	var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);

	myLayer.on('click', function(e) {
  	map.panTo(e.layer.getLatLng());
  });
});
