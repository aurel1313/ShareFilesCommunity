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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/ThemeProvider/ThemeProvider.tsx":
/*!*********************************************!*\
  !*** ./app/ThemeProvider/ThemeProvider.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react?afcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__]);\n_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst { nextui } = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react?3542\");\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst lightTheme = {\n    type: \"light\",\n    theme: {\n        colors: {\n            primary: \"#0070f3\"\n        }\n    }\n};\nconst darkTheme = {\n    type: \"dark\",\n    theme: {\n        colors: {\n            primary: \"#1E2A3A\",\n            text: \"#ffffff\"\n        }\n    }\n};\nconst ThemeProvider = ({ children })=>{\n    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        if (false) {}\n        return false;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Enregistrer la valeur du thème dans le localStorage\n        localStorage.setItem(\"isDark\", JSON.stringify(isDark));\n    }, [\n        isDark\n    ]);\n    const toggleDarkMode = ()=>{\n        setIsDark((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            isDark,\n            toggleDarkMode,\n            darkTheme,\n            lightTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {\n            theme: isDark ? darkTheme : lightTheme,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Aurelien\\\\Desktop\\\\projetPerso\\\\NextJs\\\\NextJs\\\\NextJs\\\\app\\\\ThemeProvider\\\\ThemeProvider.tsx\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Aurelien\\\\Desktop\\\\projetPerso\\\\NextJs\\\\NextJs\\\\NextJs\\\\app\\\\ThemeProvider\\\\ThemeProvider.tsx\",\n        lineNumber: 51,\n        columnNumber: 7\n    }, undefined);\n};\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ThemeContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvVGhlbWVQcm92aWRlci9UaGVtZVByb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNuRCxNQUFNLEVBQUNDLE1BQU0sRUFBQyxHQUFHQyxtQkFBT0EsQ0FBQyxpREFBbUI7QUFFMkI7QUFHdkUsTUFBTUssNkJBQWVKLG9EQUFhQTtBQUVsQyxNQUFNSyxhQUFhO0lBQ2ZDLE1BQU07SUFDTkMsT0FBTztRQUNIQyxRQUFRO1lBQ1JDLFNBQVM7UUFDVDtJQUNKO0FBQ0E7QUFFQSxNQUFNQyxZQUFZO0lBQ2xCSixNQUFNO0lBQ05DLE9BQU87UUFDSEMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RFLE1BQU07UUFDTjtJQUNKO0FBQ0E7QUFFRyxNQUFNQyxnQkFBZ0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO1FBQ2pDLElBQUksS0FBa0IsRUFBYSxFQUdsQztRQUNELE9BQU87SUFDVDtJQUVBRCxnREFBU0EsQ0FBQztRQUNSLHNEQUFzRDtRQUN0RGUsYUFBYUksT0FBTyxDQUFDLFVBQVVGLEtBQUtHLFNBQVMsQ0FBQ1I7SUFDaEQsR0FBRztRQUFDQTtLQUFPO0lBRVgsTUFBTVMsaUJBQWlCO1FBRXJCUixVQUFVLENBQUNTLE9BQVMsQ0FBQ0E7SUFJdkI7SUFFRixxQkFDRSw4REFBQ3BCLGFBQWFxQixRQUFRO1FBQUNDLE9BQU87WUFBRVo7WUFBUVM7WUFBZWI7WUFBVUw7UUFBVztrQkFDMUUsNEVBQUNSLDZEQUFjQTtZQUFDVSxPQUFPTyxTQUFTSixZQUFZTDtzQkFDekNROzs7Ozs7Ozs7OztBQUlULEVBQUU7QUFDRyxNQUFNYyxXQUFXLElBQU0xQixpREFBVUEsQ0FBQ0csY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9UaGVtZVByb3ZpZGVyL1RoZW1lUHJvdmlkZXIudHN4PzkwZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFVJUHJvdmlkZXIgfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCc7XHJcbmNvbnN0IHtuZXh0dWl9ID0gcmVxdWlyZShcIkBuZXh0dWktb3JnL3JlYWN0XCIpO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdGV4dCB9IGZyb20gJ3N0cmVhbS9jb25zdW1lcnMnO1xyXG5cclxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgbGlnaHRUaGVtZSA9IHtcclxuICAgIHR5cGU6ICdsaWdodCcsXHJcbiAgICB0aGVtZToge1xyXG4gICAgICAgIGNvbG9yczoge1xyXG4gICAgICAgIHByaW1hcnk6ICcjMDA3MGYzJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGFya1RoZW1lID0ge1xyXG4gICAgdHlwZTogJ2RhcmsnLFxyXG4gICAgdGhlbWU6IHtcclxuICAgICAgICBjb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiAnIzFFMkEzQScsXHJcbiAgICAgICAgdGV4dDogJyNmZmZmZmYnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzRGFyaywgc2V0SXNEYXJrXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGNvbnN0IHN0b3JlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzRGFyaycpO1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JlZFRoZW1lID8gSlNPTi5wYXJzZShzdG9yZWRUaGVtZSkgOiBmYWxzZTsgLy8gJ2ZhbHNlJyBwYXIgZOlmYXV0IHBvdXIgbGUgbW9kZSBjbGFpclxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRW5yZWdpc3RyZXIgbGEgdmFsZXVyIGR1IHRo6G1lIGRhbnMgbGUgbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzRGFyaycsIEpTT04uc3RyaW5naWZ5KGlzRGFyaykpO1xyXG4gICAgICB9LCBbaXNEYXJrXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBzZXRJc0RhcmsoKHByZXYpID0+ICFwcmV2KTtcclxuXHJcblxyXG5cclxuICAgICAgfTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNEYXJrLCB0b2dnbGVEYXJrTW9kZSxkYXJrVGhlbWUsbGlnaHRUaGVtZSB9fT5cclxuICAgICAgICA8TmV4dFVJUHJvdmlkZXIgdGhlbWU9e2lzRGFyayA/IGRhcmtUaGVtZSA6IGxpZ2h0VGhlbWV9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvTmV4dFVJUHJvdmlkZXI+XHJcbiAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0VUlQcm92aWRlciIsIm5leHR1aSIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVDb250ZXh0IiwibGlnaHRUaGVtZSIsInR5cGUiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJkYXJrVGhlbWUiLCJ0ZXh0IiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiaXNEYXJrIiwic2V0SXNEYXJrIiwic3RvcmVkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRvZ2dsZURhcmtNb2RlIiwicHJldiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/ThemeProvider/ThemeProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/ThemeProvider/ThemeProvider */ \"./app/ThemeProvider/ThemeProvider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__]);\n_app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n // Replace 'your-session-provider-module' with the actual module name\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aurelien\\\\Desktop\\\\projetPerso\\\\NextJs\\\\NextJs\\\\NextJs\\\\pages\\\\_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Aurelien\\\\Desktop\\\\projetPerso\\\\NextJs\\\\NextJs\\\\NextJs\\\\pages\\\\_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Aurelien\\\\Desktop\\\\projetPerso\\\\NextJs\\\\NextJs\\\\NextJs\\\\pages\\\\_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 4\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUd3QztBQUVVLENBQUMscUVBQXFFO0FBQ3pGO0FBQ29DO0FBQ3BELFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFJQyxXQUFXLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxXQUFXLEVBQWE7SUFDMUYsTUFBTUUsU0FBU1Asc0RBQVNBO0lBRXhCLHFCQUNDLDhEQUFDRSwyRUFBYUE7a0JBQ1YsNEVBQUNELDREQUFlQTtZQUFDSyxTQUFTQTtzQkFDekIsNEVBQUNGO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vYXBwL2xheW91dFwiO1xyXG5pbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7IC8vIFJlcGxhY2UgJ3lvdXItc2Vzc2lvbi1wcm92aWRlci1tb2R1bGUnIHdpdGggdGhlIGFjdHVhbCBtb2R1bGUgbmFtZVxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIuLi9hcHAvVGhlbWVQcm92aWRlci9UaGVtZVByb3ZpZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsInJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@nextui-org/react?3542":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@nextui-org/react?afcd":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@nextui-org/react");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();