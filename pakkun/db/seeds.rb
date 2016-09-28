# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create username: 'Boomy', email: 'boomy@doggy.com', password_digest: BCrypt::Password.create("boomy")
User.create username: 'Goku', email: 'goku@saiyan.com', password_digest: BCrypt::Password.create("goku")

PlantLocation.create longitude: '6.0044086', latitude: '51.8710129', title: 'Venus Flytrap', description: 'Millingerwaard, Millingen a/d Rijn (The Netherlands) <a href="https://en.wikipedia.org/wiki/Venus_flytrap">Details</a>', username: 'Boomy'
PlantLocation.create longitude: '-77.1022438', latitude: '34.8940746', title: 'Sweet Pitcher Plant', description: 'Croatan National Forest, North Carolina (USA) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>', username: 'Boomy'
PlantLocation.create longitude: '29.5706576', latitude: '-25.3078344', title: 'Sarracenia Purpurea', description: 'Kruger National Park, Phalaborwa (South Africa) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>', username: 'Boomy'
PlantLocation.create longitude: '122.8500766', latitude: '-22.43495', title: 'Drosera Capensis', description: 'Karlamilyi National Park, Telfer (Australia) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>', username: 'Goku'
PlantLocation.create longitude: '-1.372190', latitude: '40.368031', title: 'Drosera Rotundifolia', description: 'Pinares de Rodeno, Teruel (Spain) <a href="https://en.wikipedia.org/wiki/sarracenia_rubra">Details</a>', username: 'Goku'
