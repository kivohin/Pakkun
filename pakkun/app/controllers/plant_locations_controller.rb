class PlantLocationsController < ApplicationController
  def index
  	@plant_locations = PlantLocation.all
  	@geojson = Array.new

  	@plant_locations.each do |plant_location|
  		@geojson << {
  			type: 'Feature',
  			geometry: {
  				type: 'Point',
  				coordinates: [plant_location.longitude, plant_location.latitude]
  			},
  			properties: {
  				title: plant_location.title,
  				description: plant_location.description,
  				:'marker-color' => '#DB3742',
  				:'marker-size' => 'large',
  				:'marker-symbol' => 'garden'
  			}
  		}
  	end

  	respond_to do |format|
  		format.html
  		format.json {
  			render json: @geojson
  		}
  	end
  end

  def new

  end

  def create
    render(:text => 'This route is plant_location#create.')
  end
end
