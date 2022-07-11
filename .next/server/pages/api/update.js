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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createJson)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nfunction createJson(req, res) {\n    let data = req.body;\n    const config = {\n        method: \"POST\",\n        url: \"https://getpantry.cloud/apiv1/pantry/0e12a1da-6eeb-4bd9-985c-28217a25f86c/basket/testjson\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        data: {\n            data\n        }\n    };\n    axios(config).then(function(response) {\n        console.log(JSON.stringify(response.data));\n    }).catch(function(error) {\n        console.log(error);\n    });\n    res.send({\n        \"Sucess:\": {\n            data\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSSxDQUFDO0FBQ3hCLE1BQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRWYsU0FBU0UsVUFBVSxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUN6QyxJQUFJQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUV0QixNQUFNQyxNQUFNLEdBQUk7UUFDZEMsTUFBTSxFQUFFLE1BQU07UUFDZEMsR0FBRyxFQUFFLDJGQUEyRjtRQUNoR0MsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNETCxJQUFJLEVBQUc7WUFBQ0EsSUFBSTtTQUFDO0tBQ0g7SUFDWkosS0FBSyxDQUFDTSxNQUFNLENBQUMsQ0FDVkksSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixRQUFRLENBQUNQLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDekMsQ0FBQyxDQUNEWSxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3pCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7S0FDakIsQ0FBQyxDQUFDO0lBQ0xkLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDO1FBQUMsU0FBUyxFQUFHO1lBQUNkLElBQUk7U0FBQztLQUFDLENBQUM7Q0FDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBkYXRlLmpzPzE0NGIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUpzb24gKHJlcSwgcmVzKXtcclxuICAgIGxldCBkYXRhID0gcmVxLmJvZHlcclxuXHJcblx0Y29uc3QgY29uZmlnICA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdHVybDogJ2h0dHBzOi8vZ2V0cGFudHJ5LmNsb3VkL2FwaXYxL3BhbnRyeS8wZTEyYTFkYS02ZWViLTRiZDktOTg1Yy0yODIxN2EyNWY4NmMvYmFza2V0L3Rlc3Rqc29uJyxcclxuXHRcdFx0aGVhZGVyczogeyBcclxuXHRcdFx0ICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGEgOiB7ZGF0YX1cclxuXHRcdCAgICAgICAgICB9O1xyXG5cdGF4aW9zKGNvbmZpZylcclxuXHQgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG5cdCAgfSlcclxuXHQgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHQgIH0pOyBcclxuXHRyZXMuc2VuZCh7XCJTdWNlc3M6XCIgOiB7ZGF0YX19KVxyXG59Il0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsImF4aW9zIiwiY3JlYXRlSnNvbiIsInJlcSIsInJlcyIsImRhdGEiLCJib2R5IiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY2F0Y2giLCJlcnJvciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

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