// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function() {
	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1Ijoia2l2b2hpbiIsImEiOiJjaW83YW5vdTYwMDc5dW1rbjFtYzhqNTlvIn0.2fhQAfE3PKSQowqYxRJOTw';
	
	// Create a map in the div #map
	var map = L.mapbox.map('map', 'mapbox.outdoors', {
		center: [51.8710129, 6.0044086], // [lat, lng]
		zoom: 3,
		zoomControl: false,
		minZoom: 2
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

 //  var geojson = [
	//   {
	//     "type": "Feature",
	//     "geometry": {
	//       "type": "Point",
	//       "coordinates": [6.0044086, 51.8710129] // [lng, lat] - GMaps [lat, lng]
	//     },
	//     "properties": {
	//     	"title": "Venus Flytrap",
 //      	"description": 'Millingerwaard, The Netherlands <a href="https://en.wikipedia.org/wiki/Venus_flytrap">Details</a>',
	//       "marker-color": "#DB3742",
	//       "marker-size": "large",
	//       "marker-symbol": "garden"
	//     }
	//   },
	//   {
	//     "type": "Feature",
	//     "geometry": {
	//       "type": "Point",
	//       "coordinates": [-77.1022438, 34.8940746] // [lng, lat] - GMaps [lat, lng]
	//     },
	//     "properties": {
	//     	"title": "Sweet Pitcher Plant",
 //      	"description": 'Croatan National Forest, North Carolina (USA) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>',
	//       "marker-color": "#63b6e5",
	//       "marker-size": "large",
	//       "marker-symbol": "garden"
	//     }
	//   },
	//   {
	//     "type": "Feature",
	//     "geometry": {
	//       "type": "Point",
	//       "coordinates": [29.5706576, -25.3078344] // [lng, lat] - GMaps [lat, lng]
	//     },
	//     "properties": {
	//     	"title": "Sarracenia Purpurea",
 //      	"description": 'Kruger National Park, South Africa <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>',
	//       "marker-color": "#63b6e5",
	//       "marker-size": "large",
	//       "marker-symbol": "garden"
	//     }
	//   },
	//   {
	//     "type": "Feature",
	//     "geometry": {
	//       "type": "Point",
	//       "coordinates": [122.8500766, -22.43495] // [lng, lat] - GMaps [lat, lng]
	//     },
	//     "properties": {
	//     	"title": "Drosera Capensis",
 //      	"description": 'Karlamilyi National Park, Australia <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>',
	//       "marker-color": "#63b6e5",
	//       "marker-size": "large",
	//       "marker-symbol": "garden"
	//     }
	//   },
	//   {
	//     "type": "Feature",
	//     "geometry": {
	//       "type": "Point",
	//       "coordinates": [-1.372190, 40.368031] // [lng, lat] - GMaps [lat, lng]
	//     },
	//     "properties": {
	//     	"title": "Drosera Rotundifolia",
 //      	"description": 'Pinares de Rodeno, Teruel (Spain) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>',
	//       "marker-color": "#63b6e5",
	//       "marker-size": "large",
	//       "marker-symbol": "garden"
	//     }
	//   }
	// ];

	// var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);

	// ajax({
	// 	url: '/plant-locations',
	// 	success: function (response) {
	// 		// 1. response should be an array of locations
	// 		// 2. build a geoObject from locations array
	// 		// 3. var myLayer = L.mapbox.featureLayer().setGeoJSON(geoObjects).addTo(map);
	// 	}
	// })

	// get JSON object
	// on success, parse it and
	// hand it over to MapBox for mapping

  $.ajax({
  	dataType: 'text',
  	url: 'plant_locations.json',
  	method: 'get',
  	success: function(data) {
  		var geojson;
  		geojson = $.parseJSON(data);
  		return L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);
  	}
  })

  // myLayer.on('click', function(e) {
  // 	map.panTo(e.layer.getLatLng());
  // });

});
