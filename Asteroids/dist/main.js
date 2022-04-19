/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\n\n\nfunction Asteroid(pos,radius = 10, color=\"#964B00\"){\n    \n    this.color = color;\n    this.radius = radius;\n    //our object has is not interpretting our data correctly for the create of asteroids\n    let object = { pos: pos,vel: Util.randomVec(),radius: radius,color: color}\n    console.log(object)\n    MovingObject.call(this,object)\n    \n}\n//inherit the moving object\n\nUtil.inherits(Asteroid,MovingObject);\n//write our functions or whatever for asteroid\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Game(ctx)  {\n    this.ctx = ctx;\n    this.asteroids = [];  \n    this.addAsteroids();\n}\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 20;\n\nGame.prototype.addAsteroids = function() {\n    for (let i=0; i < Game.NUM_ASTEROIDS; i++) {\n        console.log(this)\n        let asteroid = new Asteroid(this.randomPosition()) \n        this.asteroids.push(asteroid)\n    }\n}\n\nGame.prototype.randomPosition = function() {\n    let x = Math.floor(Math.random() * Game.DIM_X)\n    let y = Math.floor(Math.random() * Game.DIM_Y)\n    console.log(x,y)\n    \n    return [x,y]\n}\n\nGame.prototype.step = function() {\n\n}\n\nGame.prototype.draw = function(ctx) {\n\n    // console.log(ctx);\n    // console.log(this);\n    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);\n    this.asteroids.forEach(asteroid => {\n        // console.log(asteroid)\n        asteroid.draw(ctx);\n    });\n\n}\n\nGame.prototype.moveObjects = function() {\n    // console.log(this)\n    this.asteroids.forEach(asteroid => {\n        asteroid.move();\n    });\n\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nfunction GameView(ctx) {\n    this.ctx = ctx;\n    this.game = new Game(ctx)\n\n}\n\nGameView.prototype.start = function() {\n    \n    setInterval(this.animate.bind(this),20);\n    // setInterval(,20);\n}\n\nGameView.prototype.animate = function() {\n\n    this.game.draw(this.ctx)\n    this.game.moveObjects()\n    setInterval(this.animate.bind(this),20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nwindow.Asteroid = Asteroid; \n\nwindow.MovingObject = MovingObject;\nconsole.log(\"Webpack is working!\")\n\ndocument.addEventListener(\"DOMContentLoaded\",() => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n\n    const ctx=canvasEl.getContext(\"2d\");\n    // const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF36\"\n    //   });\n    \n    \n    // mo.move();\n    // mo.draw(ctx);\n    let game1 = new GameView(ctx);\n    game1.start();\n    ;}\n    );\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\n    \n    this.pos = options['pos'];\n    this.vel = options['vel'];\n    this.radius = options['radius'];\n    this.color = options['color'];\n\n}\nmodule.exports = MovingObject;\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(\n                this.pos[0],\n                this.pos[1],\n                this.radius,\n                0,\n                2 * Math.PI,\n                false\n                );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n}\n\n\n\nMovingObject.prototype.isCollideWith = function(otherMovingObject) {\n\n}\n\nmodule.exports = MovingObject;\n\n\n\n\n\n\n\n\n// const Circle =  function (centerX, centerY, radius, color) {\n//     this.centerX = centerX;\n//     this.centerY = centerY;\n//     this.radius = radius;\n//     this.color = color;\n//   };\n\n\n// Circle.radius = function (maxX, maxY, numCircles) {\n//     let targetCircleArea = (maxX * maxY) / numCircles;\n//     let targetRadius = Math.sqrt(targetCircleArea / Math.PI);\n//     return 2 * targetRadius;\n//   };\n\n// Circle.prototype.render = function (ctx) {\n//     ctx.beginPath();\n    \n//     ctx.arc(\n//         this.centerX,\n//         this.centerY,\n//         this.rad,\n//         0,\n//         2 * Math.PI,\n//         false\n//         );\n        \n//         ctx.fill();\n//     };\n    \n    // ctx.fillStyle = this.color;\n\n// module.exports = Circle;\n\n// document.addEventListener(\"DOMContentLoaded\",function(){const canvasEl=document.getElementById(\"myCanvas\");canvasEl.width=500;canvasEl.height=500;const ctx=canvasEl.getContext(\"2d\");ctx.fillStyle=\"purple\";ctx.fillRect(0,0,500,500);ctx.beginPath();ctx.arc(100,100,20,0,2*Math.PI,true);ctx.strokeStyle=\"green\";ctx.lineWidth=5;ctx.stroke();ctx.fillStyle=\"blue\";ctx.fill();});\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("\n\n\n\n// Return a randomly oriented vector with the given length.\nconst Util = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\n\nUtil.inherits = function (childClass, parentClass) {  \n\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n}\n\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;