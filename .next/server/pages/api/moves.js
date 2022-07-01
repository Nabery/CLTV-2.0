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
exports.id = "pages/api/moves";
exports.ids = ["pages/api/moves"];
exports.modules = {

/***/ "(api)/./pages/api/moves.js":
/*!****************************!*\
  !*** ./pages/api/moves.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_board_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../data/board-data.json */ \"(api)/./data/board-data.json\");\n\nasync function handler(req, res) {\n    const { destination , from , index , fromindex , items , id  } = req.body;\n    console.log({\n        \"Destination\": destination,\n        \"Came from\": from,\n        \"To index\": index,\n        \"From index\": fromindex\n    });\n    _data_board_data_json__WEBPACK_IMPORTED_MODULE_0__[from].items.splice(fromindex, 1);\n    _data_board_data_json__WEBPACK_IMPORTED_MODULE_0__[destination].items.splice(index, 0, items);\n    return res.status(201).send(_data_board_data_json__WEBPACK_IMPORTED_MODULE_0__);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFL0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUNDLFdBQVcsR0FBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLFNBQVMsR0FBRUMsS0FBSyxHQUFFQyxFQUFFLEdBQUMsR0FBRVAsR0FBRyxDQUFDUSxJQUFJO0lBQ2hFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUFDLGFBQWEsRUFBRVIsV0FBVztRQUFDLFdBQVcsRUFBRUMsSUFBSTtRQUFFLFVBQVUsRUFBRUMsS0FBSztRQUFFLFlBQVksRUFBRUMsU0FBUztLQUFDLENBQUM7SUFDdkdQLGtEQUFTLENBQUNLLElBQUksQ0FBQyxDQUFDRyxLQUFLLENBQUNLLE1BQU0sQ0FBQ04sU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMxQ1Asa0RBQVMsQ0FBQ0ksV0FBVyxDQUFDLENBQUNJLEtBQUssQ0FBQ0ssTUFBTSxDQUFDUCxLQUFLLEVBQUUsQ0FBQyxFQUFFRSxLQUFLLENBQUM7SUFDcEQsT0FBT0wsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ2Ysa0RBQVMsQ0FBQyxDQUFDO0NBQ3hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21vdmVzLmpzP2VkYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkRGF0YSBmcm9tIFwiL2RhdGEvYm9hcmQtZGF0YS5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7ZGVzdGluYXRpb24sIGZyb20sIGluZGV4LCBmcm9taW5kZXgsIGl0ZW1zLCBpZH09IHJlcS5ib2R5XHJcbiAgICBjb25zb2xlLmxvZyh7XCJEZXN0aW5hdGlvblwiOiBkZXN0aW5hdGlvbixcIkNhbWUgZnJvbVwiOiBmcm9tLCBcIlRvIGluZGV4XCI6IGluZGV4LCBcIkZyb20gaW5kZXhcIjogZnJvbWluZGV4fSlcclxuICAgIEJvYXJkRGF0YVtmcm9tXS5pdGVtcy5zcGxpY2UoZnJvbWluZGV4LCAxKVxyXG4gICAgQm9hcmREYXRhW2Rlc3RpbmF0aW9uXS5pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW1zKVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKEJvYXJkRGF0YSk7XHJcbiAgfSJdLCJuYW1lcyI6WyJCb2FyZERhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGVzdGluYXRpb24iLCJmcm9tIiwiaW5kZXgiLCJmcm9taW5kZXgiLCJpdGVtcyIsImlkIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/moves.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/moves.js"));
module.exports = __webpack_exports__;

})();