function MovingObject(options) {
    
    this.pos = options['pos'];
    this.vel = options['vel'];
    this.radius = options['radius'];
    this.color = options['color'];

}
module.exports = MovingObject;

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(
                this.pos[0],
                this.pos[1],
                this.radius,
                0,
                2 * Math.PI,
                false
                );
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function() {

    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}



MovingObject.prototype.isCollideWith = function(otherMovingObject) {

}

module.exports = MovingObject;








// const Circle =  function (centerX, centerY, radius, color) {
//     this.centerX = centerX;
//     this.centerY = centerY;
//     this.radius = radius;
//     this.color = color;
//   };


// Circle.radius = function (maxX, maxY, numCircles) {
//     let targetCircleArea = (maxX * maxY) / numCircles;
//     let targetRadius = Math.sqrt(targetCircleArea / Math.PI);
//     return 2 * targetRadius;
//   };

// Circle.prototype.render = function (ctx) {
//     ctx.beginPath();
    
//     ctx.arc(
//         this.centerX,
//         this.centerY,
//         this.rad,
//         0,
//         2 * Math.PI,
//         false
//         );
        
//         ctx.fill();
//     };
    
    // ctx.fillStyle = this.color;

// module.exports = Circle;

// document.addEventListener("DOMContentLoaded",function(){const canvasEl=document.getElementById("myCanvas");canvasEl.width=500;canvasEl.height=500;const ctx=canvasEl.getContext("2d");ctx.fillStyle="purple";ctx.fillRect(0,0,500,500);ctx.beginPath();ctx.arc(100,100,20,0,2*Math.PI,true);ctx.strokeStyle="green";ctx.lineWidth=5;ctx.stroke();ctx.fillStyle="blue";ctx.fill();});