// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function() {
	function getLocation() {
	  console.log('Getting location...');
	  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
	}

	var options = {
	  enableHighAccuracy: true
	};

	if ("geolocation" in navigator) {
	  getLocation();
	} else {
	  alert("Geolocation is not available!");
	}

	function onLocation(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
	  console.log('Your latitude is ' + lat);
	  console.log('Your longitude is ' + lon);
	  // document.getElementById('location').innerHTML = 'Lat: ' + position.coords.latitude + ', lon: ' + position.coords.longitude;
	  return lat;
	}

	debugger

	function onError(error) {
	  console.log("Getting location failed: " + error);
	}

	mapboxgl.accessToken = 'pk.eyJ1Ijoia2l2b2hpbiIsImEiOiJjaW83YW5vdTYwMDc5dW1rbjFtYzhqNTlvIn0.2fhQAfE3PKSQowqYxRJOTw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v9',
    center: [lat, lon],
    zoom: 13,
    hash: true
  })

  map.addControl(new mapboxgl.Navigation);
  map.addControl(new mapboxgl.Geolocate({position: 'top-left'}));
});
