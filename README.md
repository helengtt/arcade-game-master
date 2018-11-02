# Object Oriented Arcade Game
## Game Introduction
In this game you have a Player and Enemies (bugs). The goal of the player is to reach the water, without colliding into any one of the enemies.

## How to Run the game
The link of the game is https://portfolio-site-90676.firebaseapp.com/arcade-game-master/index.html

You can play the game only across modern desktop browsers.

## How to play
- The player can move left, right, up and down
- The enemies move at varying speeds on the paved block portion of the game board
- Once a the player collides with an enemy, the game is reset and the player moves back to the starting square
- Once the player reaches the water (i.e., the top of the game board), the game is won

## Project Introduction
The project uses Object-Oriented Javascript. It's a Udacity project for practice.

### The Starter Code
The art assets and game engine is already provided.

The repository contains css, images, and js folders, as well as an index.html and a README.md file.

- The css folder contains a style.css file which does not need to be edited;
- The images folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.
- The js folder also contains the app engine needed to run the game and a resources.js file. They do not need to be edited.
- Opening index.html should load the game.

### Development Strategy
Inside the app.js file, the Player and the Enemy classes need to be implemented, using Object-Oriented JavaScript.

- The Enemy function, which initiates the Enemy by:
  - Loading the image by setting this.sprite to the appropriate image in the image folder
  - Setting the Enemy initial location
  - Setting the Enemy speed

- The update method for the Enemy:
  - Updates the Enemy location
  - Handles collision with the Player
- The render method for the Enemy;

- The Player function, which initiates the Player by:
  - Loading the image by setting this.sprite to the appropriate image in the image folder
  - Setting the Player initial location

- The update method for the Player
- The reset method for the Player:
  - If the player reaches the water the game is reset by moving the player back to the initial location
- The render method for the Player
- The handleInput method, which receives user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
  - Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down
  - The player cannot move off screen

- Creating a new Player object
- Creating several new Enemies objects and placing them in an array called allEnemies

### TODOs: Additional Functionality
- Player selection: allow the user to select the image for the player character before starting the game. Different character images is provided in the images folder
- Score: a score for the game. For example, the score can increase each time the player reaches the water, and it can be reset to 0 when collision occurs (or it can be reduced)
- Collectibles: add gems to the game, allowing the player to collect them to make the game more interesting