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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nwindow.MovingObject = MovingObject;\nconsole.log(\"Webpack is working!\")\n\ndocument.addEventListener(\"DOMContentLoaded\",() => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n\n    const ctx=canvasEl.getContext(\"2d\");\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        rad: 5,\n        color: \"#00FF36\"\n      });\n    \n    mo.draw(ctx);\n    ;}\n    );\n\n\nArray.prototype.quickSort = function(callback) {\n    if (this.length < 2) {\n        return this\n    }\n\n    callback ||= function (a,b) {\n        if (a > b) {\n            return 1\n        } else {\n            return -1\n        }\n    }\n\n    let pivot = this[0]\n    let left = []\n    let right = []\n\n    this.slice(1).forEach(function(ele) {\n        if (callback(pivot,ele) === 1) {\n            left.push(ele)\n        } else {\n            right.push(ele)\n        }\n    })\n\n    let sorted_left = left.quickSort(callback)\n    let sorted_right = right.quickSort(callback)\n    return sorted_left.concat([pivot].concat(sorted_right))\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\n    \n    this.pos = options['pos'];\n    this.vel = options['vel'];\n    this.rad = options['rad'];\n    this.color = options['color'];\n\n}\nmodule.exports = MovingObject;\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(\n                this.pos[0],\n                this.pos[1],\n                this.rad,\n                0,\n                2 * Math.PI,\n                false\n                );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n\n\n}\n\n\n\nMovingObject.prototype.isCollideWith = function(otherMovingObject) {\n\n}\n\n\n\n\n\n\n\n\n// const Circle =  function (centerX, centerY, radius, color) {\n//     this.centerX = centerX;\n//     this.centerY = centerY;\n//     this.radius = radius;\n//     this.color = color;\n//   };\n\n\n// Circle.radius = function (maxX, maxY, numCircles) {\n//     let targetCircleArea = (maxX * maxY) / numCircles;\n//     let targetRadius = Math.sqrt(targetCircleArea / Math.PI);\n//     return 2 * targetRadius;\n//   };\n\n// Circle.prototype.render = function (ctx) {\n//     ctx.beginPath();\n    \n//     ctx.arc(\n//         this.centerX,\n//         this.centerY,\n//         this.rad,\n//         0,\n//         2 * Math.PI,\n//         false\n//         );\n        \n//         ctx.fill();\n//     };\n    \n    // ctx.fillStyle = this.color;\n\n// module.exports = Circle;\n\n// document.addEventListener(\"DOMContentLoaded\",function(){const canvasEl=document.getElementById(\"myCanvas\");canvasEl.width=500;canvasEl.height=500;const ctx=canvasEl.getContext(\"2d\");ctx.fillStyle=\"purple\";ctx.fillRect(0,0,500,500);ctx.beginPath();ctx.arc(100,100,20,0,2*Math.PI,true);ctx.strokeStyle=\"green\";ctx.lineWidth=5;ctx.stroke();ctx.fillStyle=\"blue\";ctx.fill();});\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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