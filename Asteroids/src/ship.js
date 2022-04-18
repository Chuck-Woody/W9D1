function Ship() {

}

function Surrogate() {}
Surrogate.prototype = MovingObject.prototype
Ship.prototype = new Surrogate()
Ship.prototype.constructor = Ship

