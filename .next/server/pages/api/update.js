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
exports.id = "pages/api/update";
exports.ids = ["pages/api/update"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/update.js":
/*!*****************************!*\
  !*** ./pages/api/update.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updates)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nfunction updates(req, res) {\n    let obj = req.body;\n    fs.writeFileSync(\"./data/board-data.json\", JSON.stringify(obj));\n    res.send(obj);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7TUFBTUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUVULFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUU7SUFDdkMsSUFBSUMsR0FBRyxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDbEJOLEVBQUUsQ0FBQ08sYUFBYSxDQUFDLHdCQUF3QixFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osR0FBRyxDQUFDLENBQUM7SUFDL0RELEdBQUcsQ0FBQ00sSUFBSSxDQUFDTCxHQUFHLENBQUM7Q0FDZCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91cGRhdGUuanM/MTQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZXMocmVxLHJlcykge1xyXG4gIGxldCBvYmogPSByZXEuYm9keVxyXG4gIGZzLndyaXRlRmlsZVN5bmMoJy4vZGF0YS9ib2FyZC1kYXRhLmpzb24nLCBKU09OLnN0cmluZ2lmeShvYmopKVxyXG4gIHJlcy5zZW5kKG9iailcclxufSJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJ1cGRhdGVzIiwicmVxIiwicmVzIiwib2JqIiwiYm9keSIsIndyaXRlRmlsZVN5bmMiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/update.js"));
module.exports = __webpack_exports__;

})();