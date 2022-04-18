function Asteroid() {

}
//inherit the moving object
function Surrogate() {};
Surrogate.prototype = MovingObject.prototype;
Asteroid.prototype = new Surrogate();
Asteroid.prototype.constructor = Asteroid;
//write our functions or whatever for asteroid