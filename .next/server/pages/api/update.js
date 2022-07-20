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

/***/ "(api)/./pages/api/update.js":
/*!*****************************!*\
  !*** ./pages/api/update.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createJson)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nfunction createJson(req, res) {\n    let data = req.body;\n    const config = {\n        method: \"post\",\n        mode: \"cors\",\n        url: \"https://getpantry.cloud/apiv1/pantry/0e12a1da-6eeb-4bd9-985c-28217a25f86c/basket/finaldatajson\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        data: {\n            data\n        }\n    };\n    axios(config).then(function(response) {\n        console.log(JSON.stringify(response.data));\n        res.send(response.data);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUVmLFNBQVNDLFVBQVUsQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDeEMsSUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDdEIsTUFBTUMsTUFBTSxHQUFHO1FBQ2RDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLElBQUksRUFBRSxNQUFNO1FBQ1pDLEdBQUcsRUFBRSxnR0FBZ0c7UUFDckdDLE9BQU8sRUFBRTtZQUNWLGNBQWMsRUFBRSxrQkFBa0I7U0FDaEM7UUFDRE4sSUFBSSxFQUFHO1lBQUNBLElBQUk7U0FBQztLQUNiO0lBRURMLEtBQUssQ0FBQ08sTUFBTSxDQUFDLENBQ1pLLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7UUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osUUFBUSxDQUFDUixJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNDRCxHQUFHLENBQUNjLElBQUksQ0FBQ0wsUUFBUSxDQUFDUixJQUFJLENBQUM7S0FDdkIsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VwZGF0ZS5qcz8xNDRiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUpzb24gKHJlcSwgcmVzKXtcclxuICAgICBsZXQgZGF0YSA9IHJlcS5ib2R5XHJcblx0IGNvbnN0IGNvbmZpZyA9IHtcclxuXHQgIG1ldGhvZDogJ3Bvc3QnLFxyXG5cdCAgbW9kZTogJ2NvcnMnLFxyXG5cdCAgdXJsOiAnaHR0cHM6Ly9nZXRwYW50cnkuY2xvdWQvYXBpdjEvcGFudHJ5LzBlMTJhMWRhLTZlZWItNGJkOS05ODVjLTI4MjE3YTI1Zjg2Yy9iYXNrZXQvZmluYWxkYXRhanNvbicsXHJcblx0ICBoZWFkZXJzOiB7IFxyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdCAgfSxcclxuXHQgIGRhdGEgOiB7ZGF0YX1cclxuXHQgfTtcclxuXHRcclxuXHQgYXhpb3MoY29uZmlnKVxyXG5cdCAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHQgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuXHQgIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpXHJcblx0IH0pXHJcblx0fSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJjcmVhdGVKc29uIiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJjb25maWciLCJtZXRob2QiLCJtb2RlIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

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