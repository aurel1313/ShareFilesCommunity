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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react?afcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__]);\n_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ ThemeProvider,useTheme auto */ \n\nconst { nextui } = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react?3542\");\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst lightTheme = {\n    type: \"light\",\n    theme: {\n        colors: {\n            primary: \"#0070f3\"\n        }\n    }\n};\nconst darkTheme = {\n    type: \"dark\",\n    theme: {\n        colors: {\n            primary: \"#1E2A3A\",\n            text: \"#ffffff\"\n        }\n    }\n};\nconst ThemeProvider = ({ children })=>{\n    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        if (false) {}\n        return false;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Enregistrer la valeur du thème dans le localStorage\n        localStorage.setItem(\"isDark\", JSON.stringify(isDark));\n    }, [\n        isDark\n    ]);\n    const toggleDarkMode = ()=>{\n        setIsDark((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            isDark,\n            toggleDarkMode,\n            darkTheme,\n            lightTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {\n            theme: isDark ? darkTheme : lightTheme,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\perso\\\\ShareFilesCommunity\\\\app\\\\ThemeProvider\\\\ThemeProvider.tsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\perso\\\\ShareFilesCommunity\\\\app\\\\ThemeProvider\\\\ThemeProvider.tsx\",\n        lineNumber: 52,\n        columnNumber: 7\n    }, undefined);\n};\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ThemeContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvVGhlbWVQcm92aWRlci9UaGVtZVByb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNuRCxNQUFNLEVBQUNDLE1BQU0sRUFBQyxHQUFHQyxtQkFBT0EsQ0FBQyxpREFBbUI7QUFFMkI7QUFHdkUsTUFBTUssNkJBQWVKLG9EQUFhQTtBQUVsQyxNQUFNSyxhQUFhO0lBQ2ZDLE1BQU07SUFDTkMsT0FBTztRQUNIQyxRQUFRO1lBQ1JDLFNBQVM7UUFDVDtJQUNKO0FBQ0E7QUFFQSxNQUFNQyxZQUFZO0lBQ2xCSixNQUFNO0lBQ05DLE9BQU87UUFDSEMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RFLE1BQU07UUFDTjtJQUNKO0FBQ0E7QUFFRyxNQUFNQyxnQkFBZ0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO1FBQ2pDLElBQUksS0FBa0IsRUFBYSxFQUdsQztRQUNELE9BQU87SUFDVDtJQUVBRCxnREFBU0EsQ0FBQztRQUNSLHNEQUFzRDtRQUN0RGUsYUFBYUksT0FBTyxDQUFDLFVBQVVGLEtBQUtHLFNBQVMsQ0FBQ1I7SUFDaEQsR0FBRztRQUFDQTtLQUFPO0lBRVgsTUFBTVMsaUJBQWlCO1FBRXJCUixVQUFVLENBQUNTLE9BQVMsQ0FBQ0E7SUFJdkI7SUFFRixxQkFDRSw4REFBQ3BCLGFBQWFxQixRQUFRO1FBQUNDLE9BQU87WUFBRVo7WUFBUVM7WUFBZWI7WUFBVUw7UUFBVztrQkFDMUUsNEVBQUNSLDZEQUFjQTtZQUFDVSxPQUFPTyxTQUFTSixZQUFZTDtzQkFDekNROzs7Ozs7Ozs7OztBQUlULEVBQUU7QUFDRyxNQUFNYyxXQUFXLElBQU0xQixpREFBVUEsQ0FBQ0csY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9UaGVtZVByb3ZpZGVyL1RoZW1lUHJvdmlkZXIudHN4PzkwZTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcclxuY29uc3Qge25leHR1aX0gPSByZXF1aXJlKFwiQG5leHR1aS1vcmcvcmVhY3RcIik7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnc3RyZWFtL2NvbnN1bWVycyc7XHJcblxyXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBsaWdodFRoZW1lID0ge1xyXG4gICAgdHlwZTogJ2xpZ2h0JyxcclxuICAgIHRoZW1lOiB7XHJcbiAgICAgICAgY29sb3JzOiB7XHJcbiAgICAgICAgcHJpbWFyeTogJyMwMDcwZjMnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkYXJrVGhlbWUgPSB7XHJcbiAgICB0eXBlOiAnZGFyaycsXHJcbiAgICB0aGVtZToge1xyXG4gICAgICAgIGNvbG9yczoge1xyXG4gICAgICAgIHByaW1hcnk6ICcjMUUyQTNBJyxcclxuICAgICAgICB0ZXh0OiAnI2ZmZmZmZicsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbaXNEYXJrLCBzZXRJc0RhcmtdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgY29uc3Qgc3RvcmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNEYXJrJyk7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmVkVGhlbWUgPyBKU09OLnBhcnNlKHN0b3JlZFRoZW1lKSA6IGZhbHNlOyAvLyAnZmFsc2UnIHBhciBkw6lmYXV0IHBvdXIgbGUgbW9kZSBjbGFpclxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRW5yZWdpc3RyZXIgbGEgdmFsZXVyIGR1IHRow6htZSBkYW5zIGxlIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0RhcmsnLCBKU09OLnN0cmluZ2lmeShpc0RhcmspKTtcclxuICAgICAgfSwgW2lzRGFya10pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgc2V0SXNEYXJrKChwcmV2KSA9PiAhcHJldik7XHJcblxyXG5cclxuXHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzRGFyaywgdG9nZ2xlRGFya01vZGUsZGFya1RoZW1lLGxpZ2h0VGhlbWUgfX0+XHJcbiAgICAgICAgPE5leHRVSVByb3ZpZGVyIHRoZW1lPXtpc0RhcmsgPyBkYXJrVGhlbWUgOiBsaWdodFRoZW1lfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L05leHRVSVByb3ZpZGVyPlxyXG4gICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfTtcclxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTmV4dFVJUHJvdmlkZXIiLCJuZXh0dWkiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lQ29udGV4dCIsImxpZ2h0VGhlbWUiLCJ0eXBlIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiZGFya1RoZW1lIiwidGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzRGFyayIsInNldElzRGFyayIsInN0b3JlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2dnbGVEYXJrTW9kZSIsInByZXYiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/ThemeProvider/ThemeProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/ThemeProvider/ThemeProvider */ \"./app/ThemeProvider/ThemeProvider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__]);\n_app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n // Replace 'your-session-provider-module' with the actual module name\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\perso\\\\ShareFilesCommunity\\\\pages\\\\_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\perso\\\\ShareFilesCommunity\\\\pages\\\\_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\perso\\\\ShareFilesCommunity\\\\pages\\\\_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 4\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUd3QztBQUVVLENBQUMscUVBQXFFO0FBQ3pGO0FBQ29DO0FBQ3BELFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFJQyxXQUFXLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxXQUFXLEVBQWE7SUFDMUYsTUFBTUUsU0FBU1Asc0RBQVNBO0lBRXhCLHFCQUNDLDhEQUFDRSwyRUFBYUE7a0JBQ1YsNEVBQUNELDREQUFlQTtZQUFDSyxTQUFTQTtzQkFDekIsNEVBQUNGO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vYXBwL2xheW91dFwiO1xyXG5pbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7IC8vIFJlcGxhY2UgJ3lvdXItc2Vzc2lvbi1wcm92aWRlci1tb2R1bGUnIHdpdGggdGhlIGFjdHVhbCBtb2R1bGUgbmFtZVxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIuLi9hcHAvVGhlbWVQcm92aWRlci9UaGVtZVByb3ZpZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsInJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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