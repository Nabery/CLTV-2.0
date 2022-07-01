"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "(api)/./pages/api/post.js":
/*!***************************!*\
  !*** ./pages/api/post.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_board_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../data/board-data.json */ \"(api)/./data/board-data.json\");\n\nasync function handler(req, res) {\n    const { where , items  } = req.body;\n    console.log({\n        \"Board Number\": where,\n        \"items\": items\n    });\n    _data_board_data_json__WEBPACK_IMPORTED_MODULE_0__[where].items.push(items);\n    res.send(_data_board_data_json__WEBPACK_IMPORTED_MODULE_0__);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUUvQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU0sRUFBQ0MsS0FBSyxHQUFFQyxLQUFLLEdBQUMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUFDLGNBQWMsRUFBRUosS0FBSztRQUFFLE9BQU8sRUFBRUMsS0FBSztLQUFDLENBQUM7SUFDcERMLGtEQUFTLENBQUNJLEtBQUssQ0FBQyxDQUFDQyxLQUFLLENBQUNJLElBQUksQ0FBQ0osS0FBSyxDQUFDO0lBQ2xDRixHQUFHLENBQUNPLElBQUksQ0FBQ1Ysa0RBQVMsQ0FBQztDQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0LmpzP2VmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkRGF0YSBmcm9tIFwiL2RhdGEvYm9hcmQtZGF0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgIGNvbnN0IHt3aGVyZSwgaXRlbXN9ID0gcmVxLmJvZHlcclxuICAgY29uc29sZS5sb2coe1wiQm9hcmQgTnVtYmVyXCI6IHdoZXJlLCBcIml0ZW1zXCI6IGl0ZW1zfSlcclxuICAgQm9hcmREYXRhW3doZXJlXS5pdGVtcy5wdXNoKGl0ZW1zKVxyXG4gICByZXMuc2VuZChCb2FyZERhdGEpXHJcbiAgfSJdLCJuYW1lcyI6WyJCb2FyZERhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwid2hlcmUiLCJpdGVtcyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/post.js\n");

/***/ }),

/***/ "(api)/./data/board-data.json":
/*!******************************!*\
  !*** ./data/board-data.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"RG1","out":0,"stdFeedback":"DEJ 1","items":[]},{"name":"RG2","out":1,"stdFeedback":"DEJ 2","items":[]},{"name":"RG3","out":2,"stdFeedback":"DEJ 3","items":[]},{"name":"RG4","out":3,"stdFeedback":"DEJ 4","items":[]},{"name":"RG5","out":4,"stdFeedback":" ","items":[]},{"name":"RG6","out":5,"stdFeedback":" ","items":[]},{"name":"RG7","out":6,"stdFeedback":" ","items":[]},{"name":"RG8","out":7,"stdFeedback":" ","items":[]},{"name":"RD1","out":8,"stdFeedback":" ","items":[]},{"name":"RD2","out":9,"stdFeedback":" ","items":[]},{"name":"RD3","out":10,"stdFeedback":" ","items":[]},{"name":"RD4","out":11,"stdFeedback":" ","items":[]}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post.js"));
module.exports = __webpack_exports__;

})();