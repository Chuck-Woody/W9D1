const Asteroid = require("./asteroid");
const Util = require("./util");

function Game(ctx)  {
    this.ctx = ctx;
    this.asteroids = [];  
    this.addAsteroids();
}
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function() {
    for (let i=0; i < Game.NUM_ASTEROIDS; i++) {
        console.log(this)
        let asteroid = new Asteroid(this.randomPosition()) 
        this.asteroids.push(asteroid)
    }
}

Game.prototype.randomPosition = function() {
    let x = Math.floor(Math.random() * Game.DIM_X)
    let y = Math.floor(Math.random() * Game.DIM_Y)
    console.log(x,y)
    
    return [x,y]
}

Game.prototype.step = function() {

}

Game.prototype.draw = function(ctx) {

    // console.log(ctx);
    // console.log(this);
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
    this.asteroids.forEach(asteroid => {
        // console.log(asteroid)
        asteroid.draw(ctx);
    });

}

Game.prototype.moveObjects = function() {
    // console.log(this)
    this.asteroids.forEach(asteroid => {
        asteroid.move();
    });

}

module.exports = Game;
