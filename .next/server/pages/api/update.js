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

/***/ "(api)/./pages/api/update.js":
/*!*****************************!*\
  !*** ./pages/api/update.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createJson)\n/* harmony export */ });\nfunction createJson(req, res) {\n    let data = req.body.map((board)=>board.items.map((item)=>({\n                name: item.title,\n                value: item.feedback\n            })));\n    fetch(\"https://discord.com/api/webhooks/1000757256075354182/1z8UUMZLYSzSslDGdKBrsIh2jE9Ra0JL7l3ZawRgSuKplxGjE9O5jownq1R03GoNZ_ap\", {\n        method: \"post\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            // the username to be displayed\n            username: \"An\\xfancios\",\n            embeds: [\n                {\n                    \"description\": Date(),\n                    \"title\": \"BDC\",\n                    fields: data.flat()\n                }\n            ]\n        })\n    }).then((res)=>console.log(res.status));\n    res.send(\"OK\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxTQUFTQSxVQUFVLENBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBRTNDLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxDQUFBQSxJQUFJLEdBQUcsQ0FBQztnQkFBQ0MsSUFBSSxFQUFFRCxJQUFJLENBQUNFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRUgsSUFBSSxDQUFDSSxRQUFRO2FBQUMsQ0FBQyxDQUFDLENBQUM7SUFHbkdDLEtBQUssQ0FDTCwySEFBMkgsRUFDM0g7UUFDRUMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ1YsY0FBYyxFQUFFLGtCQUFrQjtTQUNoQztRQUNEWCxJQUFJLEVBQUVZLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RCLCtCQUErQjtZQUMvQkMsUUFBUSxFQUFFLGFBQVU7WUFFcEJDLE1BQU0sRUFBRTtnQkFBQztvQkFFUixhQUFhLEVBQUVDLElBQUksRUFBRTtvQkFDckIsT0FBTyxFQUFFLEtBQUs7b0JBRWRDLE1BQU0sRUFBR2xCLElBQUksQ0FBQ21CLElBQUksRUFBRTtpQkFDcEI7YUFFRztTQUNILENBQUM7S0FDQyxDQUNGLENBQUNDLElBQUksQ0FBQ3JCLENBQUFBLEdBQUcsR0FBSXNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdkIsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2Q3hCLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQyxJQUFJLENBQUM7Q0FDZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91cGRhdGUuanM/MTQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUpzb24gKHJlcSwgcmVzKXtcclxuXHQgXHJcblx0IGxldCBkYXRhID0gcmVxLmJvZHkubWFwKGJvYXJkPT4gYm9hcmQuaXRlbXMubWFwKGl0ZW09PiAoe25hbWU6IGl0ZW0udGl0bGUsIHZhbHVlOiBpdGVtLmZlZWRiYWNrfSkpKVxyXG5cclxuXHJcblx0IGZldGNoKFxyXG5cdFx0J2h0dHBzOi8vZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLzEwMDA3NTcyNTYwNzUzNTQxODIvMXo4VVVNWkxZU3pTc2xER2RLQnJzSWgyakU5UmEwSkw3bDNaYXdSZ1N1S3BseEdqRTlPNWpvd25xMVIwM0dvTlpfYXAnLFxyXG5cdFx0e1xyXG5cdFx0ICBtZXRob2Q6ICdwb3N0JyxcclxuXHRcdCAgaGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0ICB9LFxyXG5cdFx0ICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdC8vIHRoZSB1c2VybmFtZSB0byBiZSBkaXNwbGF5ZWRcclxuXHRcdFx0dXNlcm5hbWU6ICdBbsO6bmNpb3MnLFxyXG5cclxuXHRcdFx0ZW1iZWRzOiBbe1xyXG5cclxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IERhdGUoKSxcclxuXHRcdFx0XHRcInRpdGxlXCI6IFwiQkRDXCIsXHJcblxyXG5cdFx0XHQgZmllbGRzIDogZGF0YS5mbGF0KClcclxuXHRcdFx0fVxyXG5cclxuXHRcdCAgICBdXHJcblx0XHQgfSlcclxuXHQgICAgfVxyXG5cdCAgKS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKSk7XHJcblx0ICByZXMuc2VuZChcIk9LXCIpXHJcblx0fSJdLCJuYW1lcyI6WyJjcmVhdGVKc29uIiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJtYXAiLCJib2FyZCIsIml0ZW1zIiwiaXRlbSIsIm5hbWUiLCJ0aXRsZSIsInZhbHVlIiwiZmVlZGJhY2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJlbWJlZHMiLCJEYXRlIiwiZmllbGRzIiwiZmxhdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/update.js\n");

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