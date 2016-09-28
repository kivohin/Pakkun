class PlantLocationsController < ApplicationController
  before_action :require_user, except: [:index]

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
    @plant_location = PlantLocation.new
  end

  # def create
  #   plant_location = PlantLocation.create(
  #     :longitude => params[:plant_location][:longitude],
  #     :latitude => params[:plant_location][:latitude],
  #     :title => params[:plant_location][:title],
  #     :description => params[:plant_location][:description])

  #   redirect_to("/plant_locations")
  # end

  def create
    @plant_location = PlantLocation.new(plant_location_params)

    if @plant_location.save
      redirect_to '/'
    else
      render 'new'
    end
  end

  private

  def plant_location_params
    params.require(:plant_location).permit(:longitude, :latitude, :title, :description, :username)
  end
end
