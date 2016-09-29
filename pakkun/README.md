# Pakkun

This is my final project of the Ironhack Bootcamp called Pakkun, a web application where users can learn more about carnivorous plants and find them locally using geo-location.

## Requirements

- Rails 4.2.6+

## Technologies

- Rails (Model-View-Controller framework)
- Mapbox.js API (Map)
- Ruby (Back-end)
- Javascript, HTML, CSS, Sass, Ruby, Bootstrap (Front-end)
- GeoJSON
- AJAX
- bcrypt (Password hashing algorithm, stores a secure hash of users' passwords)

## Known Issues

Currently when navigating away from the home page and then going back via the navbar link won't load the map. Just reload the page and the map will show again. This will be fixed soon, I'm trying to find out what's happening.

## Usage

I published the assignment on Heroku, after 30 minutes of no traffic it will go in sleep mode, it will become active again after making a request, but expect a initial short delay, you can find it here:

www.pakkun.io

However if you want to run locally you must have the following installed:
- Rails 4.2.6+
- Ruby 2.3.0+

By default Mac OS X already comes with Ruby pre-installed, however for Rails follow these instructions:

https://gorails.com/setup

Once installed go into app folder and run:
```bash
bundle install
rails server
```

Now in your web browser go to localhost:3000 and you will see the app running.
If the database appears to be empty, stop the server and run:
```bash
rake db:reset
```
Now start the server again.

There are a few users already available:
- Username: 'Boomy', email: 'boomy@doggy.com', password: boomy
- Username: 'Goku', email: 'goku@saiyan.com', password: goku

If any problem should arise please contact me!
