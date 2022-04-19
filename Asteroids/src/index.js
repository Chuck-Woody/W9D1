const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");
const MovingObject = require("./moving_object.js")

window.Asteroid = Asteroid; 

window.MovingObject = MovingObject;
console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded",() => {
    const canvasEl = document.getElementById("game-canvas")

    const ctx=canvasEl.getContext("2d");
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF36"
    //   });
    
    
    // mo.move();
    // mo.draw(ctx);
    let game1 = new GameView(ctx);
    game1.start();
    ;}
    );

