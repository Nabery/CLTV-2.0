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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/update.js":
/*!*****************************!*\
  !*** ./pages/api/update.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createJson)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nfunction createJson(req, res) {\n    const data = JSON.stringify(req.body);\n    fs.writeFile(\"./data/board-data.json\", data, (err)=>{\n        if (err) console.log(err);\n        else {\n            console.log(\"File written successfully\\n\");\n            console.log(\"The written has the following contents:\");\n            console.log(fs.readFileSync(\"./data/board-data.json\", \"utf8\"));\n        }\n    });\n    res.send(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSSxDQUFDO0FBQ3hCLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBTSxDQUFDO0FBR2IsU0FBU0UsVUFBVSxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUM1QyxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixHQUFHLENBQUNLLElBQUksQ0FBQztJQUNyQ1QsRUFBRSxDQUFDVSxTQUFTLENBQUMsd0JBQXdCLEVBQUdKLElBQUksRUFBRSxDQUFDSyxHQUFHLEdBQUs7UUFDdEQsSUFBSUEsR0FBRyxFQUNMQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7YUFDZDtZQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ3ZERCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsRUFBRSxDQUFDYyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRTtLQUNDLENBQUMsQ0FBQztJQUNMVCxHQUFHLENBQUNVLElBQUksQ0FBQ1QsSUFBSSxDQUFDO0NBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBkYXRlLmpzPzE0NGIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUpzb24gKHJlcSwgcmVzKXtcclxuXHRjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpXHJcblx0ZnMud3JpdGVGaWxlKFwiLi9kYXRhL2JvYXJkLWRhdGEuanNvblwiLCBcdGRhdGEsIChlcnIpID0+IHtcclxuXHRcdGlmIChlcnIpXHJcblx0XHQgIGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRlbHNlIHtcclxuXHRcdCAgY29uc29sZS5sb2coXCJGaWxlIHdyaXR0ZW4gc3VjY2Vzc2Z1bGx5XFxuXCIpO1xyXG5cdFx0ICBjb25zb2xlLmxvZyhcIlRoZSB3cml0dGVuIGhhcyB0aGUgZm9sbG93aW5nIGNvbnRlbnRzOlwiKTtcclxuXHRcdCAgY29uc29sZS5sb2coZnMucmVhZEZpbGVTeW5jKFwiLi9kYXRhL2JvYXJkLWRhdGEuanNvblwiLCBcInV0ZjhcIikpO1xyXG5cdFx0fVxyXG5cdCAgfSk7XHJcblx0cmVzLnNlbmQoZGF0YSlcclxufSJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJwYXRoIiwiY3JlYXRlSnNvbiIsInJlcSIsInJlcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsIndyaXRlRmlsZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZWFkRmlsZVN5bmMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

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