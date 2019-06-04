# DinoDash

#### Created by Matthew Shin, May 2019

DinoDash is an infinitely side-scrolling video game developed in JavaScript using the Phaser framework. It utilizes a Rails backend to create users and save their final scores. The top ten scores are also displayed next to the game window.

To see the full application in action go to https://mshin1995.github.io/DinoDash/

For a blog post I wrote about this project go to https://dev.to/mshin1995/making-a-video-game-using-phaser-44m5

## Setup
For use in a local environment, must setup both the frontend and the backend. The frontend can be cloned from this repository and the backend from [here](https://github.com/mshin1995/Dino-Dash-Backend). You will need to use PostgreSQL for the database.

### Rails(Backend)
From the root directory use Bundler to install Ruby gems: 
```
bundle install
```
Create the PostgreSQL database once that is done:
```
rails db:create
rails db:migrate
```
Start the server:
```
rails s
```

### JavaScript(Frontend)
To run locally, you must first replace the URL for every fetch request to http://localhost:3000/users or whatever localhost URL + /users that the backend is running on. An easy way to do so is to command + shift + f and search for "fetch". There should be five fetch requests in total.

Then install http-server:
```
npm install http-server -g
```
Once that is done, from the root directory move into:
```
cd /Frontend
```
Start the server:
```
http-server
```

## Functionality
Users enter a name when first visiting the site, they do not need to create an account or provide a password.

The game window, as well as the high-score table, gets rendered once their name is submitted.

Click play to start the actual game. Users play as a dinosaur character with the objective of staying alive as long as possible. Avoid the bombs and collect the meat for bonus points. 

Once the game is over, clicking restart will take the game back to its title page and rerender the high-score table with the updated top ten scores.

##### Huge thank you to [Phaser](https://phaser.io/) for providing the framework to build this game.
