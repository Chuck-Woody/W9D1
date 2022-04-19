const MovingObject = require("./moving_object.js");
const Util = require("./util.js");




function Asteroid(pos,radius = 10, color="#964B00"){
    
    this.color = color;
    this.radius = radius;
    //our object has is not interpretting our data correctly for the create of asteroids
    let object = { pos: pos,vel: Util.randomVec(),radius: radius,color: color}
    console.log(object)
    MovingObject.call(this,object)
    
}
//inherit the moving object

Util.inherits(Asteroid,MovingObject);
//write our functions or whatever for asteroid

module.exports = Asteroid;