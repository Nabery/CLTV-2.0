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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createJson)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nfunction createJson(req, res) {\n    let data = req.body;\n    const config = {\n        method: \"POST\",\n        url: \"https://getpantry.cloud/apiv1/pantry/0e12a1da-6eeb-4bd9-985c-28217a25f86c/basket/testjson\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        data: {\n            data\n        }\n    };\n    axios(config).then(function(response) {\n        console.log(JSON.stringify(response.data));\n    }).catch(function(error) {\n        console.log(error);\n    });\n    res.send({\n        \"Sucess:\": data\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSSxDQUFDO0FBQ3hCLE1BQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRWYsU0FBU0UsVUFBVSxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUN6QyxJQUFJQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUN0QixNQUFNQyxNQUFNLEdBQUk7UUFDZEMsTUFBTSxFQUFFLE1BQU07UUFDZEMsR0FBRyxFQUFFLDJGQUEyRjtRQUNoR0MsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNETCxJQUFJLEVBQUc7WUFBQ0EsSUFBSTtTQUFDO0tBQ0g7SUFDWkosS0FBSyxDQUFDTSxNQUFNLENBQUMsQ0FDVkksSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixRQUFRLENBQUNQLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDekMsQ0FBQyxDQUNEWSxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3pCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7S0FDakIsQ0FBQyxDQUFDO0lBQ0xkLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDO1FBQUMsU0FBUyxFQUFHZCxJQUFJO0tBQUMsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91cGRhdGUuanM/MTQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSnNvbiAocmVxLCByZXMpe1xyXG4gICAgbGV0IGRhdGEgPSByZXEuYm9keVxyXG5cdGNvbnN0IGNvbmZpZyAgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHR1cmw6ICdodHRwczovL2dldHBhbnRyeS5jbG91ZC9hcGl2MS9wYW50cnkvMGUxMmExZGEtNmVlYi00YmQ5LTk4NWMtMjgyMTdhMjVmODZjL2Jhc2tldC90ZXN0anNvbicsXHJcblx0XHRcdGhlYWRlcnM6IHsgXHJcblx0XHRcdCAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkYXRhIDoge2RhdGF9XHJcblx0XHQgICAgICAgICAgfTtcclxuXHRheGlvcyhjb25maWcpXHJcblx0ICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuXHQgIH0pXHJcblx0ICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0ICB9KTsgXHJcblx0cmVzLnNlbmQoe1wiU3VjZXNzOlwiIDogZGF0YX0pXHJcbn0iXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiYXhpb3MiLCJjcmVhdGVKc29uIiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVycm9yIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

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