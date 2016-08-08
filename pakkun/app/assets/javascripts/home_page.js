// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.
// // You can use CoffeeScript in this file: http://coffeescript.org/

// $(function() {
// 	// Provide your access token
// 	L.mapbox.accessToken = 'pk.eyJ1Ijoia2l2b2hpbiIsImEiOiJjaW83YW5vdTYwMDc5dW1rbjFtYzhqNTlvIn0.2fhQAfE3PKSQowqYxRJOTw';
	
// 	// Create a map in the div #map
// 	var map = L.mapbox.map('map', 'mapbox.outdoors', {
// 		center: [51.8710129, 6.0044086], // [lat, lng]
// 		zoom: 3,
// 		zoomControl: false,
// 		minZoom: 2,
// 		maxBounds: ([
// 			[-84.67351256610522, -189.84375],
// 			[84.40594104126978, 185.625]
// 		])
// 	});

// 	L.control.zoom({
// 		position: 'bottomright'
// 	}).addTo(map);
		
// 	map.addControl(L.mapbox.geocoderControl('mapbox.places', {
//     autocomplete: true,
//     position : 'topleft',
//     // keepOpen: true
//   }));

//   map.scrollWheelZoom.disable();

//   L.control.locate({
//   	position : 'bottomright'
//   }).addTo(map);

//  //  var geojson = [
// 	//   {
// 	//     "type": "Feature",
// 	//     "geometry": {
// 	//       "type": "Point",
// 	//       "coordinates": [-1.372190, 40.368031] // [lng, lat] - GMaps [lat, lng]
// 	//     },
// 	//     "properties": {
// 	//     	"title": "Drosera Rotundifolia",
//  //      	"description": 'Pinares de Rodeno, Teruel (Spain) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>',
// 	//       "marker-color": "#63b6e5",
// 	//       "marker-size": "large",
// 	//       "marker-symbol": "garden"
// 	//     }
// 	//   }
// 	// ];

// 	// var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);

//   $.ajax({
//   	dataType: 'text',
//   	url: 'plant_locations.json',
//   	method: 'get',
//   	success: function(data) {
//   		var geojson;
//   		geojson = $.parseJSON(data);
//   		return L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);
//   	}
//   })

//   // myLayer.on('click', function(e) {
//   // 	map.panTo(e.layer.getLatLng());
//   // });

// });
