// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function() {
	mapboxgl.accessToken = 'pk.eyJ1Ijoia2l2b2hpbiIsImEiOiJjaW83YW5vdTYwMDc5dW1rbjFtYzhqNTlvIn0.2fhQAfE3PKSQowqYxRJOTw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v9',
    center: [6.0044086, 51.8710129], // [lng, lat]
    zoom: 5,
    hash: false
  })

  map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}));
  map.addControl(new mapboxgl.Geolocate({position: 'bottom-right'}));
  map.scrollZoom.disable();
});
