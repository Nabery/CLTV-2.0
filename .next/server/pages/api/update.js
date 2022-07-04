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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updates)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nlet data = fs.readFileSync(\"./data/board-data.json\", {\n    flag: \"r\"\n});\nlet parsed = JSON.parse(data.toString());\nfunction updates(req, res) {\n    let obj = req.body;\n    fs.writeFileSync(\"./data/board-data.json\", JSON.stringify(obj));\n    res.send(obj);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSSxDQUFDO0FBRXhCLElBQUlDLElBQUksR0FBR0YsRUFBRSxDQUFDRyxZQUFZLENBQUMsd0JBQXdCLEVBQUU7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7Q0FBQyxDQUFFO0FBQ2pFLElBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLElBQUksQ0FBQ00sUUFBUSxFQUFFLENBQUM7QUFFekIsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBRTtJQUN2QyxJQUFJQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUNsQmIsRUFBRSxDQUFDYyxhQUFhLENBQUMsd0JBQXdCLEVBQUVSLElBQUksQ0FBQ1MsU0FBUyxDQUFDSCxHQUFHLENBQUMsQ0FBQztJQUMvREQsR0FBRyxDQUFDSyxJQUFJLENBQUNKLEdBQUcsQ0FBQztDQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VwZGF0ZS5qcz8xNDRiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxyXG5cclxubGV0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJy4vZGF0YS9ib2FyZC1kYXRhLmpzb24nLCB7ZmxhZzoncid9IClcclxubGV0IHBhcnNlZCA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlcyhyZXEscmVzKSB7XHJcbiAgbGV0IG9iaiA9IHJlcS5ib2R5XHJcbiAgZnMud3JpdGVGaWxlU3luYygnLi9kYXRhL2JvYXJkLWRhdGEuanNvbicsIEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbiAgcmVzLnNlbmQob2JqKVxyXG59Il0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJmbGFnIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwidG9TdHJpbmciLCJ1cGRhdGVzIiwicmVxIiwicmVzIiwib2JqIiwiYm9keSIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

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