'use strict';
// Enemies our player must avoid
class Enemy {
    constructor(row) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.row = row;
        this.x = -101;
        this.y = row * 83 - 20;
        this.v = Math.ceil(Math.random()*3)*100; 
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        if(this.x < 5*101) {
            this.x = this.x + Math.round(this.v * dt);
        } else if (this.x >= 5*101) {
            this.v = Math.ceil(Math.random()*3)*100;
            this.x = -101 + Math.round(this.v * dt);
        }
        // for check
        // console.log(this.x);
        // console.log(this.y);
        
        // Handles collision with the Player
        if((this.x + 101 > player.x + 40) && (this.x + 40 <= player.x + 101) 
        && (this.row === player.row)) {
            player.reset();
        }
    }
    
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.col = Math.round(Math.random()*4);
        this.row = Math.floor(Math.random()*2)+4;
        this.x = this.col * 101;
        this.y = this.row * 83 - 40;
    }

    update() {
        this.x = this.col * 101;
        this.y = this.row * 83 - 40;
        
        // The Player wins when arrives the water
        if (this.y <= -40){
            alert('Congrats! You WON!! press OK if you want to paly again!');
            this.reset();
        }
    }

    reset() {
        this.col = Math.round(Math.random()*4);
        this.row = Math.floor(Math.random()*2)+4;
        this.x = this.col * 101; 
        this.y = this.row * 83 - 40;
    }

    handleInput(keyValue) {
        switch (keyValue) {
            case 'left': 
                if (this.col > 0 && this.col <= 4) {
                    this.col = this.col - 1;
                    break;
                } else if (this.x <= 0) {
                    this.col = 0;
                    break;
                }
            case 'up':
                if (this.row > 0 ) {
                    this.row = this.row - 1;
                    break;
                } else if (this.row <= 0){
                    this.row = 0;
                    break;
                }
            case 'right':
                if (this.col >= 0 && this.col < 4) {
                    this.col = this.col + 1;
                    break;
                } else if (this.x >= 4) {
                    this.col = 4;
                    break;            
                }
            case 'down': 
                if (this.row < 5) { 
                    this.row = this.row + 1;
                    break;
                } else if (this.row >= 5){
                    this.row = 5;
                    break;
                }
        }    
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [new Enemy(1), new Enemy(2), new Enemy(3), new Enemy(1), new Enemy(2), new Enemy(3)],
    player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
