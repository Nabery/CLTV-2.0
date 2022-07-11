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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createJson)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nfunction createJson(req, res) {\n    let data = req.body;\n    const config = {\n        method: \"post\",\n        url: \"https://getpantry.cloud/apiv1/pantry/0e12a1da-6eeb-4bd9-985c-28217a25f86c/basket/finaldatajson\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        data: {\n            data\n        }\n    };\n    axios(config).then(function(response) {\n        console.log(JSON.stringify(response.data));\n    }).catch(function(error) {\n        console.log(error);\n    });\n    res.send({\n        data\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUVmLFNBQVNDLFVBQVUsQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDeEMsSUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDdEIsTUFBTUMsTUFBTSxHQUFHO1FBQ2RDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLEdBQUcsRUFBRSxnR0FBZ0c7UUFDckdDLE9BQU8sRUFBRTtZQUNWLGNBQWMsRUFBRSxrQkFBa0I7U0FDaEM7UUFDREwsSUFBSSxFQUFHO1lBQUNBLElBQUk7U0FBQztLQUNiO0lBRURMLEtBQUssQ0FBQ08sTUFBTSxDQUFDLENBQ1pJLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7UUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osUUFBUSxDQUFDUCxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzNDLENBQUMsQ0FDRFksS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtRQUN2QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLEtBQUssQ0FBQyxDQUFDO0tBQ25CLENBQUMsQ0FBQztJQUNIZCxHQUFHLENBQUNlLElBQUksQ0FBQztRQUFDZCxJQUFJO0tBQUMsQ0FBQztDQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91cGRhdGUuanM/MTQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVKc29uIChyZXEsIHJlcyl7XHJcbiAgICAgbGV0IGRhdGEgPSByZXEuYm9keVxyXG5cdCBjb25zdCBjb25maWcgPSB7XHJcblx0ICBtZXRob2Q6ICdwb3N0JyxcclxuXHQgIHVybDogJ2h0dHBzOi8vZ2V0cGFudHJ5LmNsb3VkL2FwaXYxL3BhbnRyeS8wZTEyYTFkYS02ZWViLTRiZDktOTg1Yy0yODIxN2EyNWY4NmMvYmFza2V0L2ZpbmFsZGF0YWpzb24nLFxyXG5cdCAgaGVhZGVyczogeyBcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHQgIH0sXHJcblx0ICBkYXRhIDoge2RhdGF9XHJcblx0IH07XHJcblx0XHJcblx0IGF4aW9zKGNvbmZpZylcclxuXHQgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0ICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcblx0IH0pXHJcblx0IC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHQgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHQgfSk7XHJcblx0IHJlcy5zZW5kKHtkYXRhfSlcclxuXHR9Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImNyZWF0ZUpzb24iLCJyZXEiLCJyZXMiLCJkYXRhIiwiYm9keSIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyb3IiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

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