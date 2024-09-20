"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scroll-into-view-if-needed";
exports.ids = ["vendor-chunks/scroll-into-view-if-needed"];
exports.modules = {

/***/ "(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs":
/*!****************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/dist/index.cjs ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var e=__webpack_require__(/*! compute-scroll-into-view */ \"(ssr)/./node_modules/compute-scroll-into-view/dist/index.cjs\");const o=e=>!1===e?{block:\"end\",inline:\"nearest\"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:\"start\",inline:\"nearest\"};module.exports=function(t,n){if(!t.isConnected||!(e=>{let o=e;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(t))return;if((e=>\"object\"==typeof e&&\"function\"==typeof e.behavior)(n))return n.behavior(e.compute(t,n));const r=\"boolean\"==typeof n||null==n?void 0:n.behavior;for(const{el:i,top:c,left:l}of e.compute(t,o(n)))i.scroll({top:c,left:l,behavior:r})};//# sourceMappingURL=index.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWEsTUFBTSxtQkFBTyxDQUFDLDhGQUEwQixFQUFFLG1CQUFtQiw2QkFBNkIscURBQXFELGdDQUFnQyw2QkFBNkIseUJBQXlCLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRSxvQ0FBb0Msb0VBQW9FLFNBQVMsWUFBWSwrRkFBK0YsdURBQXVELFVBQVUsa0JBQWtCLCtCQUErQix3QkFBd0IsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZC9kaXN0L2luZGV4LmNqcz85MDI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBlPXJlcXVpcmUoXCJjb21wdXRlLXNjcm9sbC1pbnRvLXZpZXdcIik7Y29uc3Qgbz1lPT4hMT09PWU/e2Jsb2NrOlwiZW5kXCIsaW5saW5lOlwibmVhcmVzdFwifTooZT0+ZT09PU9iamVjdChlKSYmMCE9PU9iamVjdC5rZXlzKGUpLmxlbmd0aCkoZSk/ZTp7YmxvY2s6XCJzdGFydFwiLGlubGluZTpcIm5lYXJlc3RcIn07bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtpZighdC5pc0Nvbm5lY3RlZHx8IShlPT57bGV0IG89ZTtmb3IoO28mJm8ucGFyZW50Tm9kZTspe2lmKG8ucGFyZW50Tm9kZT09PWRvY3VtZW50KXJldHVybiEwO289by5wYXJlbnROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdD9vLnBhcmVudE5vZGUuaG9zdDpvLnBhcmVudE5vZGV9cmV0dXJuITF9KSh0KSlyZXR1cm47aWYoKGU9Plwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmJlaGF2aW9yKShuKSlyZXR1cm4gbi5iZWhhdmlvcihlLmNvbXB1dGUodCxuKSk7Y29uc3Qgcj1cImJvb2xlYW5cIj09dHlwZW9mIG58fG51bGw9PW4/dm9pZCAwOm4uYmVoYXZpb3I7Zm9yKGNvbnN0e2VsOmksdG9wOmMsbGVmdDpsfW9mIGUuY29tcHV0ZSh0LG8obikpKWkuc2Nyb2xsKHt0b3A6YyxsZWZ0OmwsYmVoYXZpb3I6cn0pfTsvLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs\n");

/***/ })

};
;