class CreatePlantLocations < ActiveRecord::Migration
  def change
    create_table :plant_locations do |t|
      t.decimal :longitude
      t.decimal :latitude
      t.string :title
      t.text :description

      t.timestamps null: false
    end
  end
end
