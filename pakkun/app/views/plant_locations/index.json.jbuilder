json.plant_locations @plant_locations do |plant_location|
  json.longitude plant_location.longitude
  json.latitude plant_location.latitude
  json.title plant_location.title
  json.description plant_location.description
end