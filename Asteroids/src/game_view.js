const Game = require("./game");


function GameView(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx)

}

GameView.prototype.start = function() {
    
    setInterval(this.animate.bind(this),20);
    // setInterval(,20);
}

GameView.prototype.animate = function() {

    this.game.draw(this.ctx)
    this.game.moveObjects()
    setInterval(this.animate.bind(this),20);
}

module.exports = GameView;