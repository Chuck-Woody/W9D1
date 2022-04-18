const MovingObject = require("./moving_object.js")

window.MovingObject = MovingObject;
console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded",() => {
    const canvasEl = document.getElementById("game-canvas")

    const ctx=canvasEl.getContext("2d");
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        rad: 5,
        color: "#00FF36"
      });
    
    mo.draw(ctx);
    ;}
    );


Array.prototype.quickSort = function(callback) {
    if (this.length < 2) {
        return this
    }

    callback ||= function (a,b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    }

    let pivot = this[0]
    let left = []
    let right = []

    this.slice(1).forEach(function(ele) {
        if (callback(pivot,ele) === 1) {
            left.push(ele)
        } else {
            right.push(ele)
        }
    })

    let sorted_left = left.quickSort(callback)
    let sorted_right = right.quickSort(callback)
    return sorted_left.concat([pivot].concat(sorted_right))
}