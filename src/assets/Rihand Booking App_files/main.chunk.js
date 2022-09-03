(this["webpackJsonpreserv-form"] = this["webpackJsonpreserv-form"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branch.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/branches/Branch.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".show-map {\n  cursor: pointer !important;\n  background: #fbd9d3 !important;\n  color: #ce3d5f !important;\n  font-weight: normal !important;\n}\n\n.show-map:hover {\n  background: #e16a7a !important;\n  color: #fff !important;\n}\n.location-icon {\n  color: #ce3d5f;\n  font-size: 16px;\n}\n.branch-name {\n  color: #ce3d5f;\n  width: auto;\n}\n.branch-title {\n  /* background: #ce3d5f; */\n  border-radius: 5px;\n  color: #ce3d5f;\n  display: inline-block;\n  text-transform: capitalize;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.branch-error {\n}\n", "",{"version":3,"sources":["webpack://src/Components/branches/Branch.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,8BAA8B;EAC9B,yBAAyB;EACzB,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,cAAc;EACd,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,qBAAqB;EACrB,0BAA0B;EAC1B,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;AACA","sourcesContent":[".show-map {\n  cursor: pointer !important;\n  background: #fbd9d3 !important;\n  color: #ce3d5f !important;\n  font-weight: normal !important;\n}\n\n.show-map:hover {\n  background: #e16a7a !important;\n  color: #fff !important;\n}\n.location-icon {\n  color: #ce3d5f;\n  font-size: 16px;\n}\n.branch-name {\n  color: #ce3d5f;\n  width: auto;\n}\n.branch-title {\n  /* background: #ce3d5f; */\n  border-radius: 5px;\n  color: #ce3d5f;\n  display: inline-block;\n  text-transform: capitalize;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.branch-error {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branches.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/branches/Branches.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".branches {\n  padding: 80px 0 !important;\n  font-size: 16px;\n  margin: 0 !important;\n  text-align: center;\n  font-size: 18px;\n  color: #fff !important;\n  border-radius: 4px !important;\n}\n\n.data-container {\n  /* height: 350px !important; */\n  margin-left: 10px !important;\n  margin-right: 10px !important;\n}\n.selected-div {\n  margin-left: -20px;\n}\n.error-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: red;\n  font-size: 20px;\n}\n.error-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n  height: 100vh;\n}\n.error-message > * {\n  font-size: 35px;\n}\n\n.branches-wrap {\n  display: flex;\n  grid-gap: 20px;\n  gap: 20px;\n}\n.map-container {\n  margin-top: 50px;\n}\n.branches {\n  width: 35%;\n}\n\n.close-map {\n  display: none;\n}\n.branch-info {\n  flex: 1 1;\n  text-align: left;\n  margin-left: 20px;\n}\n.branch-info h1 {\n  font-size: 16 px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.branch-info p {\n  font-size: 14px;\n}\n\n.ant-card .ant-btn {\n  border: none;\n  font-family: \"Quicksand\", sans-serif;\n  font-weight: 500;\n  font-size: 15px;\n  margin: 10px 0;\n  border-radius: 5px;\n  min-height: 25px;\n  color: #fff;\n  cursor: pointer;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.3s;\n  display: block;\n  /* background: #ce3d5f !important; */\n  width: 150px !important;\n}\n.btn-groups {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n  margin: 10px 0px;\n}\n\n@media (max-width: 992px) {\n  .btn-groups {\n    flex-direction: column;\n    margin: 10px 0;\n    grid-gap: 0;\n    gap: 0;\n  }\n  .ant-card .ant-btn {\n    width: 80% !important;\n  }\n  .map-gradient {\n    background: linear-gradient(\n      180deg,\n      rgba(31, 74, 130, 0),\n      rgba(31, 74, 130, 0.5)\n    );\n    bottom: 0;\n    height: 105px;\n    left: 0;\n    position: fixed;\n    transition: all 0.4s ease;\n    width: 100%;\n    z-index: 1;\n  }\n\n  .branches {\n    width: 100%;\n  }\n  .branches-wrap {\n    flex-direction: column;\n  }\n  .map-container {\n    position: fixed;\n    top: 23px;\n    height: 100vh;\n    right: -100%;\n    width: 100%;\n    z-index: 999;\n    transition: all 0.4s;\n    background: #ccc;\n  }\n  .map-container.show {\n    right: 0;\n  }\n  .close-map {\n    border-radius: 50px;\n    bottom: 150px;\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: 120px;\n    padding: 10px 20px;\n    position: absolute;\n    z-index: 20;\n    background-color: #fff;\n    display: flex;\n    align-items: center;\n    border: none;\n    font-size: 15px;\n    font-weight: 600;\n    grid-gap: 5px;\n    gap: 5px;\n    cursor: pointer;\n    box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.4);\n  }\n}\n", "",{"version":3,"sources":["webpack://src/Components/branches/Branches.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;AACA;EACE,SAAO;EACP,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,eAAe;EACf,mCAA2B;UAA3B,2BAA2B;EAC3B,oBAAoB;EACpB,cAAc;EACd,oCAAoC;EACpC,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE;IACE,sBAAsB;IACtB,cAAc;IACd,WAAM;IAAN,MAAM;EACR;EACA;IACE,qBAAqB;EACvB;EACA;IACE;;;;KAIC;IACD,SAAS;IACT,aAAa;IACb,OAAO;IACP,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;EACA;IACE,sBAAsB;EACxB;EACA;IACE,eAAe;IACf,SAAS;IACT,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;EAClB;EACA;IACE,QAAQ;EACV;EACA;IACE,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,2BAA2B;IAC3B,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,aAAQ;IAAR,QAAQ;IACR,eAAe;IACf,0CAA0C;EAC5C;AACF","sourcesContent":[".branches {\n  padding: 80px 0 !important;\n  font-size: 16px;\n  margin: 0 !important;\n  text-align: center;\n  font-size: 18px;\n  color: #fff !important;\n  border-radius: 4px !important;\n}\n\n.data-container {\n  /* height: 350px !important; */\n  margin-left: 10px !important;\n  margin-right: 10px !important;\n}\n.selected-div {\n  margin-left: -20px;\n}\n.error-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: red;\n  font-size: 20px;\n}\n.error-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n  height: 100vh;\n}\n.error-message > * {\n  font-size: 35px;\n}\n\n.branches-wrap {\n  display: flex;\n  gap: 20px;\n}\n.map-container {\n  margin-top: 50px;\n}\n.branches {\n  width: 35%;\n}\n\n.close-map {\n  display: none;\n}\n.branch-info {\n  flex: 1;\n  text-align: left;\n  margin-left: 20px;\n}\n.branch-info h1 {\n  font-size: 16 px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.branch-info p {\n  font-size: 14px;\n}\n\n.ant-card .ant-btn {\n  border: none;\n  font-family: \"Quicksand\", sans-serif;\n  font-weight: 500;\n  font-size: 15px;\n  margin: 10px 0;\n  border-radius: 5px;\n  min-height: 25px;\n  color: #fff;\n  cursor: pointer;\n  backface-visibility: hidden;\n  transition: all 0.3s;\n  display: block;\n  /* background: #ce3d5f !important; */\n  width: 150px !important;\n}\n.btn-groups {\n  display: flex;\n  gap: 10px;\n  margin: 10px 0px;\n}\n\n@media (max-width: 992px) {\n  .btn-groups {\n    flex-direction: column;\n    margin: 10px 0;\n    gap: 0;\n  }\n  .ant-card .ant-btn {\n    width: 80% !important;\n  }\n  .map-gradient {\n    background: linear-gradient(\n      180deg,\n      rgba(31, 74, 130, 0),\n      rgba(31, 74, 130, 0.5)\n    );\n    bottom: 0;\n    height: 105px;\n    left: 0;\n    position: fixed;\n    transition: all 0.4s ease;\n    width: 100%;\n    z-index: 1;\n  }\n\n  .branches {\n    width: 100%;\n  }\n  .branches-wrap {\n    flex-direction: column;\n  }\n  .map-container {\n    position: fixed;\n    top: 23px;\n    height: 100vh;\n    right: -100%;\n    width: 100%;\n    z-index: 999;\n    transition: all 0.4s;\n    background: #ccc;\n  }\n  .map-container.show {\n    right: 0;\n  }\n  .close-map {\n    border-radius: 50px;\n    bottom: 150px;\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: 120px;\n    padding: 10px 20px;\n    position: absolute;\n    z-index: 20;\n    background-color: #fff;\n    display: flex;\n    align-items: center;\n    border: none;\n    font-size: 15px;\n    font-weight: 600;\n    gap: 5px;\n    cursor: pointer;\n    box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.4);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Categories.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/categories/Categories.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".categories {\n  padding: 15px !important;\n  cursor: pointer;\n  text-align: center;\n  font-size: 18px;\n  color: #fff !important;\n  border-radius: 4px !important;\n  margin: 10px 0;\n  padding: 10px !important;\n  margin: 5px 0;\n  font-size: 16px;\n  font-weight: 200;\n}\n.categories p {\n  border-radius: 4px !important;\n  padding: 10px;\n  background: #573b8a !important;\n  transition: all 0.3s ease;\n  opacity: 0.9;\n}\n.categories:hover p {\n  opacity: 1;\n}\n.categories-container {\n  align-items: center !important;\n  padding: 60px 0;\n}\n\n.categories-list {\n  z-index: 2;\n  width: 100%;\n}\n.categories-list li {\n  position: relative;\n}\n.categories-list li::before {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.2);\n}\n.categories-list .category-name {\n  display: block;\n  font-size: 14px;\n  text-transform: uppercase;\n  transition: all 0.5s ease;\n  padding: 18px 30px;\n  color: #fff;\n  background: #272627;\n  cursor: pointer;\n}\n\n.categories-list .category-name:hover {\n  background: #ce3d5f;\n  color: #fff;\n  padding-left: 33px;\n}\n.category-name.show {\n  background: #ce3d5f !important;\n}\n", "",{"version":3,"sources":["webpack://src/Components/categories/Categories.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,cAAc;EACd,wBAAwB;EACxB,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,WAAW;EACX,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,oCAAoC;AACtC;AACA;EACE,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,8BAA8B;AAChC","sourcesContent":[".categories {\n  padding: 15px !important;\n  cursor: pointer;\n  text-align: center;\n  font-size: 18px;\n  color: #fff !important;\n  border-radius: 4px !important;\n  margin: 10px 0;\n  padding: 10px !important;\n  margin: 5px 0;\n  font-size: 16px;\n  font-weight: 200;\n}\n.categories p {\n  border-radius: 4px !important;\n  padding: 10px;\n  background: #573b8a !important;\n  transition: all 0.3s ease;\n  opacity: 0.9;\n}\n.categories:hover p {\n  opacity: 1;\n}\n.categories-container {\n  align-items: center !important;\n  padding: 60px 0;\n}\n\n.categories-list {\n  z-index: 2;\n  width: 100%;\n}\n.categories-list li {\n  position: relative;\n}\n.categories-list li::before {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.2);\n}\n.categories-list .category-name {\n  display: block;\n  font-size: 14px;\n  text-transform: uppercase;\n  transition: all 0.5s ease;\n  padding: 18px 30px;\n  color: #fff;\n  background: #272627;\n  cursor: pointer;\n}\n\n.categories-list .category-name:hover {\n  background: #ce3d5f;\n  color: #fff;\n  padding-left: 33px;\n}\n.category-name.show {\n  background: #ce3d5f !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Category.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/categories/Category.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".category-info {\n  display: flex;\n  padding: 12px 20px;\n  justify-content: space-between;\n  /* border-bottom: 1px solid #ccc; */\n  width: 100%;\n\n  margin-bottom: 10px;\n}\n.category-name {\n  font-size: 17px;\n  line-height: 24px;\n  color: rgb(16, 25, 40);\n}\n.category-name span {\n  font-weight: normal;\n  font-size: 16px;\n  color: #ccc;\n  margin-right: 5px;\n}\n", "",{"version":3,"sources":["webpack://src/Components/categories/Category.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,mCAAmC;EACnC,WAAW;;EAEX,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,iBAAiB;AACnB","sourcesContent":[".category-info {\n  display: flex;\n  padding: 12px 20px;\n  justify-content: space-between;\n  /* border-bottom: 1px solid #ccc; */\n  width: 100%;\n\n  margin-bottom: 10px;\n}\n.category-name {\n  font-size: 17px;\n  line-height: 24px;\n  color: rgb(16, 25, 40);\n}\n.category-name span {\n  font-weight: normal;\n  font-size: 16px;\n  color: #ccc;\n  margin-right: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/client/Client.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/client/Client.css ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".inner {\n  max-width: 850px;\n  margin: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n\n  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);\n  -webkit-box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);\n}\n\n.client-form-container {\n  display: flex;\n}\n\n.image-holder {\n  width: 50%;\n  /* background: #ce3d5f; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-holder h3 {\n  color: #fff;\n}\n.ant-col {\n  margin-left: 0 !important;\n  max-width: 100% !important;\n  flex: 0 0 10%important;\n}\n.image-holder img {\n  max-width: 100%;\n}\n.client-form {\n  padding-top: 70px !important;\n  padding-right: 50px !important;\n  padding-left: 30px !important;\n  width: 50%;\n  margin: 0 10px !important;\n}\n.ant-input {\n  width: 100% !important;\n}\n.form-submit {\n  background: #ce3d5f !important;\n  border: none !important;\n}\n@media screen and (min-widht: 768px) {\n  .client-form div {\n    margin: 0 auto !important;\n  }\n}\n@media (max-width: 776px) {\n  .image-holder {\n    display: none;\n    width: 100%;\n    background: red !important;\n  }\n  .client-form {\n    width: 100%;\n  }\n\n  .inner {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/Components/client/Client.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;;EAEnB,6CAA6C;EAC7C,qDAAqD;AACvD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;AACA;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,6BAA6B;EAC7B,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;AACA;EACE;IACE,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,aAAa;IACb,WAAW;IACX,0BAA0B;EAC5B;EACA;IACE,WAAW;EACb;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;AACF","sourcesContent":[".inner {\n  max-width: 850px;\n  margin: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n\n  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);\n  -webkit-box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);\n}\n\n.client-form-container {\n  display: flex;\n}\n\n.image-holder {\n  width: 50%;\n  /* background: #ce3d5f; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-holder h3 {\n  color: #fff;\n}\n.ant-col {\n  margin-left: 0 !important;\n  max-width: 100% !important;\n  flex: 0 0 10%important;\n}\n.image-holder img {\n  max-width: 100%;\n}\n.client-form {\n  padding-top: 70px !important;\n  padding-right: 50px !important;\n  padding-left: 30px !important;\n  width: 50%;\n  margin: 0 10px !important;\n}\n.ant-input {\n  width: 100% !important;\n}\n.form-submit {\n  background: #ce3d5f !important;\n  border: none !important;\n}\n@media screen and (min-widht: 768px) {\n  .client-form div {\n    margin: 0 auto !important;\n  }\n}\n@media (max-width: 776px) {\n  .image-holder {\n    display: none;\n    width: 100%;\n    background: red !important;\n  }\n  .client-form {\n    width: 100%;\n  }\n\n  .inner {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/common/PageHeader.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/common/PageHeader.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header {\n  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);\n  background-image: url(\"https://i.pinimg.com/originals/6d/c4/45/6dc445611ce8ee9a529a1b2c42107a98.jpg\");\n  height: 500px;\n  background-size: cover;\n\n  width: 100%;\n  position: relative;\n  padding: 0 30px;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 35px;\n  /* margin-top: 70px; */\n\n  /* position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999; */\n}\n@media (max-width: 768px) {\n  .header {\n    height: 300px;\n  }\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n.header h1 {\n  font-size: 40px;\n  font-weight: bold;\n  font-style: normal;\n  color: #fff;\n  z-index: 3;\n  text-align: center;\n  letter-spacing: 5px;\n}\n", "",{"version":3,"sources":["webpack://src/Components/common/PageHeader.css"],"names":[],"mappings":"AAAA;EACE,kEAAkE;EAClE,qGAAqG;EACrG,aAAa;EACb,sBAAsB;;EAEtB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;;EAEtB;;;mBAGiB;AACnB;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":[".header {\n  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);\n  background-image: url(\"https://i.pinimg.com/originals/6d/c4/45/6dc445611ce8ee9a529a1b2c42107a98.jpg\");\n  height: 500px;\n  background-size: cover;\n\n  width: 100%;\n  position: relative;\n  padding: 0 30px;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 35px;\n  /* margin-top: 70px; */\n\n  /* position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999; */\n}\n@media (max-width: 768px) {\n  .header {\n    height: 300px;\n  }\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n.header h1 {\n  font-size: 40px;\n  font-weight: bold;\n  font-style: normal;\n  color: #fff;\n  z-index: 3;\n  text-align: center;\n  letter-spacing: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/employees/Employee.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/employees/Employee.css ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".employees-wrap {\n  padding: 40px 0px;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  color: #ce3d5f !important;\n}\nheader {\n  background-repeat: no-repeat;\n  height: 100px;\n  background-size: contain;\n  text-align: center;\n\n  position: relative;\n}\n\n.employee-details {\n  margin: 50px 0;\n  height: 120px;\n}\n\n.employee-name {\n  font-weight: bold;\n  font-size: 1.1rem;\n  text-align: center;\n  padding: 10px 20px 0px 20px;\n  text-transform: capitalize;\n}\n.employee-price {\n  display: flex;\n  flex-direction: column;\n  font-weight: normal;\n  font-size: 0.95rem;\n  color: hsl(0, 0%, 50%);\n  text-align: center;\n}\n.btn-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n}\n\n.img-box {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 100%;\n  margin: 20px auto 20px;\n\n  transition: 0.5s;\n  /* position: absolute;\n  left: 50%;\n  top: 70%;\n  transform: translate(-50%, -50%);\n\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n  border-top: 3px solid #ce3d5f;\n  border-bottom: 3px solid #ce3d5f; */\n  /* transform: rotate(-30deg); */\n}\n.card-body:hover .img-box {\n  transform: rotate(0deg);\n  transform: scale(1.1);\n}\n.img-box img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n.choose-btn {\n  cursor: pointer;\n  background: #ce3d5f !important;\n  border: none;\n  padding: 6px 60px;\n  color: #fff;\n\n  border-radius: 50px;\n  font-size: 16px;\n  margin: 20px 0;\n  transition: all 0.3s;\n}\n.choose-btn:hover {\n  background: #9f65cd;\n}\n\n/* CSS */\n.choose-btn {\n  background-color: #7338ac;\n  border: 0;\n  border-radius: 56px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: nor;\n  outline: 0;\n  padding: 6px 61px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.choose-btn:before {\n  background-color: initial;\n  background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);\n  border-radius: 125px;\n  content: \"\";\n  height: 50%;\n  left: 4%;\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  transition: all 0.3s;\n  width: 92%;\n}\n\n.choose-btn:hover {\n  box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,\n    rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;\n  transform: scale(1.05);\n}\n.card-body {\n  padding: 15px;\n  background-color: #fdfdfd;\n  margin: 20px 0px;\n  border-radius: 10px;\n  border: 2px solid #eee;\n  box-shadow: 0px 0px 8px 0px #d4d4d4;\n  transition: 0.5s;\n\n  /* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); */\n}\n.card-body:hover {\n  /* border: 2px solid #ce3d5f; */\n}\n@media (max-width: 576px) {\n  .card-body {\n    width: 350px;\n    margin: 20px auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .button-71 {\n    padding: 16px 48px;\n  }\n}\n.employee-price {\n  display: flex !important;\n}\n.read-more-btn {\n  position: absolute;\n  right: 15px;\n  font-weight: bold !important;\n  bottom: 10px;\n  background: rgb(248, 248, 248);\n  padding: 0.5rem 1rem;\n  font-weight: 500;\n  border: none;\n  font-size: 14px;\n  line-height: 140%;\n  text-align: center;\n  color: rgb(141, 141, 141);\n  cursor: pointer;\n}\n\n.employee {\n  border: 1px solid #eee !important;\n}\n.selected-treatment {\n  width: auto;\n  display: inline-block;\n  background: #ce3d5f;\n  color: #fff;\n  margin: 20px 10px 0 0px;\n  padding: 5px;\n  border-radius: 5px;\n  background: #ce3d5f;\n}\n.selected-treatment p {\n  font-size: 16px;\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .selected-treatment p {\n    font-size: 10px;\n    color: #fff;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/Components/employees/Employee.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;AACA;;EAEE,yBAAyB;AAC3B;AACA;EACE,4BAA4B;EAC5B,aAAa;EACb,wBAAwB;EACxB,kBAAkB;;EAElB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,2BAA2B;EAC3B,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;;EAEtB,gBAAgB;EAChB;;;;;;;;;;;qCAWmC;EACnC,+BAA+B;AACjC;AACA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,8BAA8B;EAC9B,YAAY;EACZ,iBAAiB;EACjB,WAAW;;EAEX,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;;AAEA,QAAQ;AACR;EACE,yBAAyB;EACzB,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,sEAAsE;EACtE,oBAAoB;EACpB,WAAW;EACX,WAAW;EACX,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE;gEAC8D;EAC9D,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,mCAAmC;EACnC,gBAAgB;;EAEhB,kDAAkD;AACpD;AACA;EACE,+BAA+B;AACjC;AACA;EACE;IACE,YAAY;IACZ,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,YAAY;EACZ,8BAA8B;EAC9B,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE;IACE,eAAe;IACf,WAAW;EACb;AACF","sourcesContent":[".employees-wrap {\n  padding: 40px 0px;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  color: #ce3d5f !important;\n}\nheader {\n  background-repeat: no-repeat;\n  height: 100px;\n  background-size: contain;\n  text-align: center;\n\n  position: relative;\n}\n\n.employee-details {\n  margin: 50px 0;\n  height: 120px;\n}\n\n.employee-name {\n  font-weight: bold;\n  font-size: 1.1rem;\n  text-align: center;\n  padding: 10px 20px 0px 20px;\n  text-transform: capitalize;\n}\n.employee-price {\n  display: flex;\n  flex-direction: column;\n  font-weight: normal;\n  font-size: 0.95rem;\n  color: hsl(0, 0%, 50%);\n  text-align: center;\n}\n.btn-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n}\n\n.img-box {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 100%;\n  margin: 20px auto 20px;\n\n  transition: 0.5s;\n  /* position: absolute;\n  left: 50%;\n  top: 70%;\n  transform: translate(-50%, -50%);\n\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n  border-top: 3px solid #ce3d5f;\n  border-bottom: 3px solid #ce3d5f; */\n  /* transform: rotate(-30deg); */\n}\n.card-body:hover .img-box {\n  transform: rotate(0deg);\n  transform: scale(1.1);\n}\n.img-box img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n.choose-btn {\n  cursor: pointer;\n  background: #ce3d5f !important;\n  border: none;\n  padding: 6px 60px;\n  color: #fff;\n\n  border-radius: 50px;\n  font-size: 16px;\n  margin: 20px 0;\n  transition: all 0.3s;\n}\n.choose-btn:hover {\n  background: #9f65cd;\n}\n\n/* CSS */\n.choose-btn {\n  background-color: #7338ac;\n  border: 0;\n  border-radius: 56px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: nor;\n  outline: 0;\n  padding: 6px 61px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.choose-btn:before {\n  background-color: initial;\n  background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);\n  border-radius: 125px;\n  content: \"\";\n  height: 50%;\n  left: 4%;\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  transition: all 0.3s;\n  width: 92%;\n}\n\n.choose-btn:hover {\n  box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,\n    rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;\n  transform: scale(1.05);\n}\n.card-body {\n  padding: 15px;\n  background-color: #fdfdfd;\n  margin: 20px 0px;\n  border-radius: 10px;\n  border: 2px solid #eee;\n  box-shadow: 0px 0px 8px 0px #d4d4d4;\n  transition: 0.5s;\n\n  /* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); */\n}\n.card-body:hover {\n  /* border: 2px solid #ce3d5f; */\n}\n@media (max-width: 576px) {\n  .card-body {\n    width: 350px;\n    margin: 20px auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .button-71 {\n    padding: 16px 48px;\n  }\n}\n.employee-price {\n  display: flex !important;\n}\n.read-more-btn {\n  position: absolute;\n  right: 15px;\n  font-weight: bold !important;\n  bottom: 10px;\n  background: rgb(248, 248, 248);\n  padding: 0.5rem 1rem;\n  font-weight: 500;\n  border: none;\n  font-size: 14px;\n  line-height: 140%;\n  text-align: center;\n  color: rgb(141, 141, 141);\n  cursor: pointer;\n}\n\n.employee {\n  border: 1px solid #eee !important;\n}\n.selected-treatment {\n  width: auto;\n  display: inline-block;\n  background: #ce3d5f;\n  color: #fff;\n  margin: 20px 10px 0 0px;\n  padding: 5px;\n  border-radius: 5px;\n  background: #ce3d5f;\n}\n.selected-treatment p {\n  font-size: 16px;\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .selected-treatment p {\n    font-size: 10px;\n    color: #fff;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/footer/Footer.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/layout/footer/Footer.css ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "footer {\n  background-color: #333;\n  color: #c1c1c1;\n  font-size: 16px;\n  text-align: center;\n  background: #272627;\n  position: relative;\n  width: 100%;\n  position: absoloute;\n  bottom: 0;\n}\nfooter::before {\n  content: \"\";\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-repeat: repeat !important;\n  background-image: url(\"http://velikorodnov.com/html/spa-construction/spa/multi-page/images/pattern.png\");\n  opacity: 0.1;\n}\n.footer-container {\n  z-index: 99;\n  position: relative;\n}\n\n.footer-container,\n.footer-left-side,\n.footer-container .social-links {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.footer-container {\n  width: 85%;\n  margin: 0 auto;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.footer-container .footer-head-text {\n  margin-bottom: 0 !important;\n  font-size: 36px;\n  color: #fff;\n}\n.copyright-text:hover {\n  color: #ce3d5f;\n}\n\n.footer-container .divider {\n  width: 2px;\n  height: 100px;\n  background-color: #333;\n  margin: 0 15px;\n}\n\n.footer-container .social-links {\n  justify-content: center;\n}\n\n.footer-container .footer-right-side .social-links li {\n  margin: 0 9px !important;\n}\n.footer-container .social-links a {\n  color: #fff;\n  cursor: pointer;\n}\n.footer-container .social-links .icon {\n  font-size: 18px;\n}\n.footer-container .social-links a .icon:hover {\n  color: #ce3d5f !important;\n}\n\n@media screen and (max-width: 600px) {\n  .footer-container,\n  .footer-left-side {\n    display: block !important;\n  }\n\n  .footer-container .footer-left-side .copyright-text {\n    margin-top: 10px;\n  }\n\n  .footer-container .footer-right-side {\n    margin-top: 10px;\n  }\n  .divider {\n    width: 100% !important;\n    height: 2px !important;\n    margin: 5px 0 !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .footer-container {\n    width: 95% !important;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/Components/layout/footer/Footer.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;EACX,OAAO;EACP,MAAM;EACN,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,wGAAwG;EACxG,YAAY;AACd;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,WAAW;AACb;AACA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE;;IAEE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;EACA;IACE,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF","sourcesContent":["footer {\n  background-color: #333;\n  color: #c1c1c1;\n  font-size: 16px;\n  text-align: center;\n  background: #272627;\n  position: relative;\n  width: 100%;\n  position: absoloute;\n  bottom: 0;\n}\nfooter::before {\n  content: \"\";\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-repeat: repeat !important;\n  background-image: url(\"http://velikorodnov.com/html/spa-construction/spa/multi-page/images/pattern.png\");\n  opacity: 0.1;\n}\n.footer-container {\n  z-index: 99;\n  position: relative;\n}\n\n.footer-container,\n.footer-left-side,\n.footer-container .social-links {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.footer-container {\n  width: 85%;\n  margin: 0 auto;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.footer-container .footer-head-text {\n  margin-bottom: 0 !important;\n  font-size: 36px;\n  color: #fff;\n}\n.copyright-text:hover {\n  color: #ce3d5f;\n}\n\n.footer-container .divider {\n  width: 2px;\n  height: 100px;\n  background-color: #333;\n  margin: 0 15px;\n}\n\n.footer-container .social-links {\n  justify-content: center;\n}\n\n.footer-container .footer-right-side .social-links li {\n  margin: 0 9px !important;\n}\n.footer-container .social-links a {\n  color: #fff;\n  cursor: pointer;\n}\n.footer-container .social-links .icon {\n  font-size: 18px;\n}\n.footer-container .social-links a .icon:hover {\n  color: #ce3d5f !important;\n}\n\n@media screen and (max-width: 600px) {\n  .footer-container,\n  .footer-left-side {\n    display: block !important;\n  }\n\n  .footer-container .footer-left-side .copyright-text {\n    margin-top: 10px;\n  }\n\n  .footer-container .footer-right-side {\n    margin-top: 10px;\n  }\n  .divider {\n    width: 100% !important;\n    height: 2px !important;\n    margin: 5px 0 !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .footer-container {\n    width: 95% !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/navbar/Navbar.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/layout/navbar/Navbar.css ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navbar {\n  padding: 10px 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n}\n.sticky-nav {\n  background: #fff !important;\n  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);\n}\n.navbar-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.logo-container {\n  cursor: pointer;\n}\n.basket-btn {\n  width: 100px;\n  height: 35px;\n  z-index: 999;\n  position: absolute;\n  top: 200px;\n  right: 10px;\n  text-align: center;\n  font-size: 16px;\n  background: #ce3d5f;\n  border: 1px solid #ce3d5f;\n  border-radius: 0 5px 5px 0;\n  color: #fff;\n}\n.basket-btn span {\n  position: absolute;\n  top: -10px;\n  border-radius: 50%;\n  width: 25px;\n  line-height: 25px;\n\n  height: 25px;\n  background: #333;\n  color: #fff;\n}\n.sidebar {\n  background-color: rgb(255, 255, 255);\n  width: 350px;\n  max-width: calc(100% - 30px);\n  height: 100vh;\n  position: fixed;\n  right: -400px;\n  top: 0px;\n  z-index: 10000000;\n  transition: all 0.4s ease 0s;\n  box-shadow: rgb(0 0 0 / 18%) 0px 3px 6px 0px;\n  padding: 30px 0;\n  overflow-y: auto;\n}\n.sidebar h2 {\n  text-align: center;\n  border-bottom: 1px dashed #ccc;\n  padding: 7px 0;\n  font-size: 16px;\n}\n.sidebar.show {\n  right: 0;\n}\n.close-btn {\n  position: absolute;\n  right: 1rem;\n  top: 0;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  background: transparent;\n}\n.checkout-box {\n  border-bottom: 1px solid #ccc;\n  padding: 8px;\n  position: relative;\n  margin-top: 10px;\n}\n.checkout-details {\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n}\n.checkout-details p {\n  font-size: 14px;\n  color: #000;\n}\n.checkout-details span {\n  margin-left: 10px;\n  color: #333;\n  font-size: 13px;\n}\n.delete-btn {\n  position: absolute;\n  right: 1rem;\n  top: -5px;\n  background: transparent;\n  border: none;\n  color: #d90429;\n  font-size: 20px;\n  cursor: pointer;\n}\n.img-container {\n  width: 60px;\n  height: 60px;\n}\n.img-container img {\n  border: 1px solid #ccc;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.row {\n  display: flex;\n}\n.checkout-container {\n  height: 400px;\n  overflow: hidden;\n  overflow-y: scroll;\n  background: rgb(255, 255, 255);\n  padding: 30px 0;\n  border-radius: 8px 8px 0px 0px;\n  border-bottom: 1px solid rgb(231, 232, 233);\n  box-shadow: rgb(16 25 40 / 8%) 0px 8px 16px 0px;\n  position: relative;\n}\n.checkout-container::after {\n  background-image: radial-gradient(\n    circle at 10px 17px,\n    rgba(255, 255, 255, 0) 13px,\n    rgb(255, 255, 255) 14px\n  );\n}\n.checkout-details {\n  margin-bottom: 5px;\n}\n.checkout-details h1 {\n  text-align: center;\n  font-size: 20px;\n  padding-bottom: 15px;\n  font-weight: bold;\n  border-bottom: 1px dashed #ccc;\n}\n.show-treatment-btn {\n  background: #f27a1a;\n  color: #fff;\n  padding: 4px 10px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  margin: 10px 4px;\n}\n.show-treatment-btn:disabled {\n  background: red;\n}\n", "",{"version":3,"sources":["webpack://src/Components/layout/navbar/Navbar.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,WAAW;AACb;AACA;EACE,2BAA2B;EAC3B,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,0BAA0B;EAC1B,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,iBAAiB;;EAEjB,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,YAAY;EACZ,4BAA4B;EAC5B,aAAa;EACb,eAAe;EACf,aAAa;EACb,QAAQ;EACR,iBAAiB;EACjB,4BAA4B;EAC5B,4CAA4C;EAC5C,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,cAAc;EACd,eAAe;AACjB;AACA;EACE,QAAQ;AACV;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;EAC9B,2CAA2C;EAC3C,+CAA+C;EAC/C,kBAAkB;AACpB;AACA;EACE;;;;GAIC;AACH;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;EACjB,8BAA8B;AAChC;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB","sourcesContent":[".navbar {\n  padding: 10px 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n}\n.sticky-nav {\n  background: #fff !important;\n  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);\n}\n.navbar-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.logo-container {\n  cursor: pointer;\n}\n.basket-btn {\n  width: 100px;\n  height: 35px;\n  z-index: 999;\n  position: absolute;\n  top: 200px;\n  right: 10px;\n  text-align: center;\n  font-size: 16px;\n  background: #ce3d5f;\n  border: 1px solid #ce3d5f;\n  border-radius: 0 5px 5px 0;\n  color: #fff;\n}\n.basket-btn span {\n  position: absolute;\n  top: -10px;\n  border-radius: 50%;\n  width: 25px;\n  line-height: 25px;\n\n  height: 25px;\n  background: #333;\n  color: #fff;\n}\n.sidebar {\n  background-color: rgb(255, 255, 255);\n  width: 350px;\n  max-width: calc(100% - 30px);\n  height: 100vh;\n  position: fixed;\n  right: -400px;\n  top: 0px;\n  z-index: 10000000;\n  transition: all 0.4s ease 0s;\n  box-shadow: rgb(0 0 0 / 18%) 0px 3px 6px 0px;\n  padding: 30px 0;\n  overflow-y: auto;\n}\n.sidebar h2 {\n  text-align: center;\n  border-bottom: 1px dashed #ccc;\n  padding: 7px 0;\n  font-size: 16px;\n}\n.sidebar.show {\n  right: 0;\n}\n.close-btn {\n  position: absolute;\n  right: 1rem;\n  top: 0;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  background: transparent;\n}\n.checkout-box {\n  border-bottom: 1px solid #ccc;\n  padding: 8px;\n  position: relative;\n  margin-top: 10px;\n}\n.checkout-details {\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n}\n.checkout-details p {\n  font-size: 14px;\n  color: #000;\n}\n.checkout-details span {\n  margin-left: 10px;\n  color: #333;\n  font-size: 13px;\n}\n.delete-btn {\n  position: absolute;\n  right: 1rem;\n  top: -5px;\n  background: transparent;\n  border: none;\n  color: #d90429;\n  font-size: 20px;\n  cursor: pointer;\n}\n.img-container {\n  width: 60px;\n  height: 60px;\n}\n.img-container img {\n  border: 1px solid #ccc;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.row {\n  display: flex;\n}\n.checkout-container {\n  height: 400px;\n  overflow: hidden;\n  overflow-y: scroll;\n  background: rgb(255, 255, 255);\n  padding: 30px 0;\n  border-radius: 8px 8px 0px 0px;\n  border-bottom: 1px solid rgb(231, 232, 233);\n  box-shadow: rgb(16 25 40 / 8%) 0px 8px 16px 0px;\n  position: relative;\n}\n.checkout-container::after {\n  background-image: radial-gradient(\n    circle at 10px 17px,\n    rgba(255, 255, 255, 0) 13px,\n    rgb(255, 255, 255) 14px\n  );\n}\n.checkout-details {\n  margin-bottom: 5px;\n}\n.checkout-details h1 {\n  text-align: center;\n  font-size: 20px;\n  padding-bottom: 15px;\n  font-weight: bold;\n  border-bottom: 1px dashed #ccc;\n}\n.show-treatment-btn {\n  background: #f27a1a;\n  color: #fff;\n  padding: 4px 10px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  margin: 10px 4px;\n}\n.show-treatment-btn:disabled {\n  background: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/Organization/Organization.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/organizations/Organization/Organization.css ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".organization-title {\n  font-size: 24px;\n  margin-top: 16px;\n  color: #5b47f8;\n}\n.card {\n  max-width: 400px;\n  min-height: 500px;\n  border-radius: 12px;\n  border: 1px solid #333;\n  overflow: hidden;\n  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);\n}\n\n.card:hover {\n  cursor: pointer;\n}\n\n.card div {\n  width: 100%;\n  height: 300px;\n}\n\n.card div img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px 8px 0 0;\n}\n\n.card .description {\n  color: #000;\n  padding: 0 10px 10px;\n}\n", "",{"version":3,"sources":["webpack://src/Components/organizations/Organization/Organization.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,oDAAoD;AACtD;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB","sourcesContent":[".organization-title {\n  font-size: 24px;\n  margin-top: 16px;\n  color: #5b47f8;\n}\n.card {\n  max-width: 400px;\n  min-height: 500px;\n  border-radius: 12px;\n  border: 1px solid #333;\n  overflow: hidden;\n  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);\n}\n\n.card:hover {\n  cursor: pointer;\n}\n\n.card div {\n  width: 100%;\n  height: 300px;\n}\n\n.card div img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px 8px 0 0;\n}\n\n.card .description {\n  color: #000;\n  padding: 0 10px 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/OrganizationList/OrganizationList.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/organizations/OrganizationList/OrganizationList.css ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagination {\n  margin: 30px auto !important;\n}\n\n.pagination *.ant-pagination-item-active a {\n  color: #5b47f8 !important;\n}\n\n.pagination *:not(.ant-pagination-disabled button):hover {\n  border-color: #5b47f8 !important;\n  color: #5b47f8 !important;\n}\n\n.pagination *.ant-pagination-item-active {\n  border-color: #5b47f8 !important;\n}\n", "",{"version":3,"sources":["webpack://src/Components/organizations/OrganizationList/OrganizationList.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":[".pagination {\n  margin: 30px auto !important;\n}\n\n.pagination *.ant-pagination-item-active a {\n  color: #5b47f8 !important;\n}\n\n.pagination *:not(.ant-pagination-disabled button):hover {\n  border-color: #5b47f8 !important;\n  color: #5b47f8 !important;\n}\n\n.pagination *.ant-pagination-item-active {\n  border-color: #5b47f8 !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/DeleteModal.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/summary/DeleteModal.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.modal-content {\n  background: #fff;\n  padding: 20px 20px 5px 20px;\n  width: auto;\n  margin: 0 auto;\n  border-radius: 5px;\n  position: relative;\n  animation: popup 0.5s;\n}\n@keyframes popup {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.close-modal {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 25px;\n  color: gray;\n}\n.modal-content h3 {\n  font-size: 18px;\n  margin: 20px 0;\n}\n.btn-groups {\n  display: flex;\n  justify-content: space-between;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.btn-groups button {\n  cursor: pointer;\n  border-radius: 5px;\n\n  border: none;\n  /* font-weight: bold; */\n  padding: 5px 10px;\n  min-width: 100px;\n  transition: all 0.3s;\n}\n.cancel-btn {\n  background: #f0f0f0;\n  font-weight: bold;\n}\n.cancel-btn:hover {\n  background: #ccc;\n}\n.delete-button {\n  background: #ce3d5f;\n  color: #fff;\n}\n.delete-button:hover {\n  opacity: 0.9;\n}\n", "",{"version":3,"sources":["webpack://src/Components/summary/DeleteModal.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,2BAA2B;EAC3B,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE;IACE,mBAAmB;IACnB,UAAU;EACZ;EACA;IACE,mBAAmB;IACnB,UAAU;EACZ;AACF;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,WAAW;AACb;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAS;EAAT,SAAS;AACX;AACA;EACE,eAAe;EACf,kBAAkB;;EAElB,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,YAAY;AACd","sourcesContent":[".modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.modal-content {\n  background: #fff;\n  padding: 20px 20px 5px 20px;\n  width: auto;\n  margin: 0 auto;\n  border-radius: 5px;\n  position: relative;\n  animation: popup 0.5s;\n}\n@keyframes popup {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.close-modal {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 25px;\n  color: gray;\n}\n.modal-content h3 {\n  font-size: 18px;\n  margin: 20px 0;\n}\n.btn-groups {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n.btn-groups button {\n  cursor: pointer;\n  border-radius: 5px;\n\n  border: none;\n  /* font-weight: bold; */\n  padding: 5px 10px;\n  min-width: 100px;\n  transition: all 0.3s;\n}\n.cancel-btn {\n  background: #f0f0f0;\n  font-weight: bold;\n}\n.cancel-btn:hover {\n  background: #ccc;\n}\n.delete-button {\n  background: #ce3d5f;\n  color: #fff;\n}\n.delete-button:hover {\n  opacity: 0.9;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/Summary.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/summary/Summary.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table-wrap {\n  overflow: scroll;\n  position: relative;\n  height: 60vh;\n}\n.table-wrap::-webkit-scrollbar {\n  width: 8px;\n}\n.table-wrap table {\n  margin-bottom: 1rem;\n  color: #212529;\n  min-width: 1000px !important;\n  width: 100%;\n  box-shadow: 0px 5px 12px -12px rgb(0 0 0 / 29%);\n}\n.table-wrap table tr {\n  background: #fff;\n  border-bottom: 4px solid #eceffa;\n}\n.table-wrap .table thead th {\n  border: none;\n  padding: 30px;\n  font-size: 13px;\n  font-weight: 500;\n  color: gray;\n  vertical-align: bottom;\n  text-align: left;\n}\n.table-wrap .table tbody tr {\n  margin-bottom: 10px;\n  /* background: red !important; */\n  border-bottom: 4px solid #f8f9fd;\n}\n.table-wrap .table tbody tr:hover {\n  background: #FAB7B3;\n}\n\n.table-wrap .table tbody th,\n.table-wrap .table tbody td {\n  border: none;\n  padding: 30px;\n  font-size: 14px;\n  /* background: #fff; */\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n\n.remove-btn::before {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  border-radius: 50%;\n  transform: scale(0);\n  pointer-events: none;\n  background: #ce3d5f;\n}\n.remove-btn:hover::before {\n  transform: scale(1.5);\n  opacity: 0;\n  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s,\n    visibility 0s ease 0.5s;\n}\n.remove-btn {\n  background: transparent;\n  border: none;\n  outline: none;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  position: relative;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.summary-page {\n  margin-top: 100px;\n}\n\n.table-wrap {\n  overflow: scroll;\n}\n.summary-page h1 {\n  text-align: center;\n  font-size: 29px;\n  font-weight: bold;\n  margin: 10px 0;\n  color: #ce3d5f;\n}\n.summary-tab {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n\n.summary {\n  margin-top: 5px;\n  margin-right: 20px;\n  padding: 10px 0;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 18px;\n  font-weight: bold;\n}\n.summary span {\n  margin-left: 10px;\n}\n\n.submit-btn {\n  border: 1px solid #008f9f;\n  background: #008f9f;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.submit-btn:not(:disabled):hover {\n  opacity: 0.8;\n}\n\n.submit-btn.disabled {\n  cursor: not-allowed;\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n.summary-buttons {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 18px;\n}\n.add-treatment {\n  cursor: pointer;\n  padding: 5px 10px;\n  background: #44b21c;\n  color: #fff;\n  border: none;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n\n.add-treatment:hover {\n  opacity: 0.8;\n}\n.table-wrap thead {\n  position: sticky;\n  top: 0;\n}\n@media (max-width: 576px) {\n  .summary-buttons {\n    flex-direction: column;\n    grid-gap: 10px;\n    gap: 10px;\n\n    align-items: flex-end;\n    margin-right: 20px;\n  }\n  .add-treatment {\n    margin-right: 0;\n    width: 60%;\n  }\n  .submit-btn {\n    width: 60%;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/Components/summary/Summary.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,cAAc;EACd,4BAA4B;EAC5B,WAAW;EAGX,+CAA+C;AACjD;AACA;EACE,gBAAgB;EAChB,gCAAgC;AAClC;AACA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,gCAAgC;AAClC;AACA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,UAAU;EACV;2BACyB;AAC3B;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,MAAM;AACR;AACA;EACE;IACE,sBAAsB;IACtB,cAAS;IAAT,SAAS;;IAET,qBAAqB;IACrB,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[".table-wrap {\n  overflow: scroll;\n  position: relative;\n  height: 60vh;\n}\n.table-wrap::-webkit-scrollbar {\n  width: 8px;\n}\n.table-wrap table {\n  margin-bottom: 1rem;\n  color: #212529;\n  min-width: 1000px !important;\n  width: 100%;\n  -webkit-box-shadow: 0px 5px 12px -12px rgb(0 0 0 / 29%);\n  -moz-box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29);\n  box-shadow: 0px 5px 12px -12px rgb(0 0 0 / 29%);\n}\n.table-wrap table tr {\n  background: #fff;\n  border-bottom: 4px solid #eceffa;\n}\n.table-wrap .table thead th {\n  border: none;\n  padding: 30px;\n  font-size: 13px;\n  font-weight: 500;\n  color: gray;\n  vertical-align: bottom;\n  text-align: left;\n}\n.table-wrap .table tbody tr {\n  margin-bottom: 10px;\n  /* background: red !important; */\n  border-bottom: 4px solid #f8f9fd;\n}\n.table-wrap .table tbody tr:hover {\n  background: #FAB7B3;\n}\n\n.table-wrap .table tbody th,\n.table-wrap .table tbody td {\n  border: none;\n  padding: 30px;\n  font-size: 14px;\n  /* background: #fff; */\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n\n.remove-btn::before {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  border-radius: 50%;\n  transform: scale(0);\n  pointer-events: none;\n  background: #ce3d5f;\n}\n.remove-btn:hover::before {\n  transform: scale(1.5);\n  opacity: 0;\n  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s,\n    visibility 0s ease 0.5s;\n}\n.remove-btn {\n  background: transparent;\n  border: none;\n  outline: none;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  position: relative;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.summary-page {\n  margin-top: 100px;\n}\n\n.table-wrap {\n  overflow: scroll;\n}\n.summary-page h1 {\n  text-align: center;\n  font-size: 29px;\n  font-weight: bold;\n  margin: 10px 0;\n  color: #ce3d5f;\n}\n.summary-tab {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n\n.summary {\n  margin-top: 5px;\n  margin-right: 20px;\n  padding: 10px 0;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 18px;\n  font-weight: bold;\n}\n.summary span {\n  margin-left: 10px;\n}\n\n.submit-btn {\n  border: 1px solid #008f9f;\n  background: #008f9f;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.submit-btn:not(:disabled):hover {\n  opacity: 0.8;\n}\n\n.submit-btn.disabled {\n  cursor: not-allowed;\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n.summary-buttons {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 18px;\n}\n.add-treatment {\n  cursor: pointer;\n  padding: 5px 10px;\n  background: #44b21c;\n  color: #fff;\n  border: none;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n\n.add-treatment:hover {\n  opacity: 0.8;\n}\n.table-wrap thead {\n  position: sticky;\n  top: 0;\n}\n@media (max-width: 576px) {\n  .summary-buttons {\n    flex-direction: column;\n    gap: 10px;\n\n    align-items: flex-end;\n    margin-right: 20px;\n  }\n  .add-treatment {\n    margin-right: 0;\n    width: 60%;\n  }\n  .submit-btn {\n    width: 60%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/time/timepicker.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/time/timepicker.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".time-layout {\n  height: 100vh;\n  background-color: transparent !important;\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  padding: 25px 0;\n  margin: 0 auto;\n}\n.layout-content {\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  flex: none;\n}\n\n.time-back-button {\n  padding: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n}\n.time-back-button span {\n  margin-right: 5px;\n}\n\n/* .time-back-button:hover {\n  color: #5b47f8 !important;\n  border: 1px solid #5b47f8 !important;\n} */\n.datePicker:hover {\n  border: 1px solid #5b47f8 !important;\n}\n\n.hours {\n  display: flex;\n  padding-bottom: 10px;\n  padding-top: 5px;\n  overflow-x: scroll;\n  width: 400px;\n}\nlabel {\n  display: inline-block;\n  margin: 10px 0 !important;\n}\n.hours button {\n  margin-right: 5px;\n  color: #000;\n  background-color: white;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  /* padding-left: 4px; */\n  text-align: center;\n  cursor: pointer;\n}\n\n.full-time {\n  height: 200px;\n  margin: -5px 0 10px 0;\n  border-top: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, calc((400px / 3) - 7.5px));\n  grid-gap: 10px;\n}\n\n.full-time button {\n  color: #000;\n  background-color: white;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.hours button:hover,\n.full-time button:hover {\n  background: #eee;\n  outline: 0;\n  color: #333;\n}\n\n.hours button.active,\n.full-time button.active {\n  background: #eee !important;\n  color: #000 !important;\n  pointer-events: none;\n}\n\n.full-time button.disable,\n.hours button.disable {\n  cursor: not-allowed;\n  background: #dddddd;\n  border: 0;\n}\n\n.hours button.hide,\n.full-time button.hide {\n  display: none;\n}\n\n.add-button {\n  background: #5b47f8 !important;\n  color: #fff !important;\n  border: 0 !important;\n}\n@media (max-width: 576px) {\n  .timepicker,\n  .datePicker,\n  .hours {\n    width: 250px !important;\n  }\n  .full-time {\n    width: 250px;\n    grid-template-columns: repeat(auto-fill, calc((250px / 3) + 36px));\n    margin-top: -10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/Components/time/timepicker.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,wCAAwC;EACxC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,YAAY;AACd;AACA;EACE,iBAAiB;AACnB;;AAEA;;;GAGG;AACH;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,aAAa;EACb,aAAa;EACb,mEAAmE;EACnE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;EAChB,UAAU;EACV,WAAW;AACb;;AAEA;;EAEE,2BAA2B;EAC3B,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;EAEE,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE;;;IAGE,uBAAuB;EACzB;EACA;IACE,YAAY;IACZ,kEAAkE;IAClE,iBAAiB;EACnB;AACF","sourcesContent":[".time-layout {\n  height: 100vh;\n  background-color: transparent !important;\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  padding: 25px 0;\n  margin: 0 auto;\n}\n.layout-content {\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  flex: none;\n}\n\n.time-back-button {\n  padding: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n}\n.time-back-button span {\n  margin-right: 5px;\n}\n\n/* .time-back-button:hover {\n  color: #5b47f8 !important;\n  border: 1px solid #5b47f8 !important;\n} */\n.datePicker:hover {\n  border: 1px solid #5b47f8 !important;\n}\n\n.hours {\n  display: flex;\n  padding-bottom: 10px;\n  padding-top: 5px;\n  overflow-x: scroll;\n  width: 400px;\n}\nlabel {\n  display: inline-block;\n  margin: 10px 0 !important;\n}\n.hours button {\n  margin-right: 5px;\n  color: #000;\n  background-color: white;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  /* padding-left: 4px; */\n  text-align: center;\n  cursor: pointer;\n}\n\n.full-time {\n  height: 200px;\n  margin: -5px 0 10px 0;\n  border-top: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, calc((400px / 3) - 7.5px));\n  grid-gap: 10px;\n}\n\n.full-time button {\n  color: #000;\n  background-color: white;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.hours button:hover,\n.full-time button:hover {\n  background: #eee;\n  outline: 0;\n  color: #333;\n}\n\n.hours button.active,\n.full-time button.active {\n  background: #eee !important;\n  color: #000 !important;\n  pointer-events: none;\n}\n\n.full-time button.disable,\n.hours button.disable {\n  cursor: not-allowed;\n  background: #dddddd;\n  border: 0;\n}\n\n.hours button.hide,\n.full-time button.hide {\n  display: none;\n}\n\n.add-button {\n  background: #5b47f8 !important;\n  color: #fff !important;\n  border: 0 !important;\n}\n@media (max-width: 576px) {\n  .timepicker,\n  .datePicker,\n  .hours {\n    width: 250px !important;\n  }\n  .full-time {\n    width: 250px;\n    grid-template-columns: repeat(auto-fill, calc((250px / 3) + 36px));\n    margin-top: -10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/treatments/Treatments.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/treatments/Treatments.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".treatments-wrap {\n  padding: 60px 0;\n}\n.ant-collapse-header {\n  background-color: #fff;\n  border: 1px solid #eeeeee;\n  padding-right: 20px;\n  font-weight: 500;\n  font-size: 16px;\n  transition: all 0.5s ease;\n  color: #272627;\n}\n.ant-collapse-header:hover {\n  background: #ce3d5f !important;\n  color: #fff !important;\n}\n.ant-collapse > .ant-collapse-item {\n  border-bottom: none !important;\n}\n.ant-collapse-header.show {\n  background: #7338ac;\n  color: #fff !important;\n}\n.treatment-card {\n  transition: all 0.3s;\n  background: #fff;\n  font-size: 14px !important;\n  padding: 15px !important;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: 24px;\n  color: #818190;\n  border: 1px solid #d9d9d9;\n  transition: all 0.3s;\n}\n.treatment-card:hover {\n  border: 1px solid #ce3d5f;\n  color: #ce3d5f;\n}\n.treatment-card p {\n  transition: all 0.3s;\n}\n.treatment-card:hover p {\n  padding-left: 5px;\n}\n.empty-branch-text {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 200px 0;\n}\n", "",{"version":3,"sources":["webpack://src/Components/treatments/Treatments.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,0BAA0B;EAC1B,wBAAwB;EACxB,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,oBAAoB;AACtB;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB","sourcesContent":[".treatments-wrap {\n  padding: 60px 0;\n}\n.ant-collapse-header {\n  background-color: #fff;\n  border: 1px solid #eeeeee;\n  padding-right: 20px;\n  font-weight: 500;\n  font-size: 16px;\n  transition: all 0.5s ease;\n  color: #272627;\n}\n.ant-collapse-header:hover {\n  background: #ce3d5f !important;\n  color: #fff !important;\n}\n.ant-collapse > .ant-collapse-item {\n  border-bottom: none !important;\n}\n.ant-collapse-header.show {\n  background: #7338ac;\n  color: #fff !important;\n}\n.treatment-card {\n  transition: all 0.3s;\n  background: #fff;\n  font-size: 14px !important;\n  padding: 15px !important;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: 24px;\n  color: #818190;\n  border: 1px solid #d9d9d9;\n  transition: all 0.3s;\n}\n.treatment-card:hover {\n  border: 1px solid #ce3d5f;\n  color: #ce3d5f;\n}\n.treatment-card p {\n  transition: all 0.3s;\n}\n.treatment-card:hover p {\n  padding-left: 5px;\n}\n.empty-branch-text {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 200px 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/font.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/style/font.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_Questrial_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../font/Questrial-Regular.ttf */ "./src/font/Questrial-Regular.ttf");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Questrial_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n\tfont-family: 'Questrial';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n\tfont-style: normal;\n}\n", "",{"version":3,"sources":["webpack://src/style/font.css"],"names":[],"mappings":"AAAA;CACC,wBAAwB;CACxB,+DAA4D;CAC5D,kBAAkB;AACnB","sourcesContent":["@font-face {\n\tfont-family: 'Questrial';\n\tsrc: url('../font/Questrial-Regular.ttf') format(\"truetype\");\n\tfont-style: normal;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/reset.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/style/reset.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n\tbox-sizing: border-box;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\np{\n\tmargin-bottom: 0 !important;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\na {\n\ttext-decoration: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://src/style/reset.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;AACvB;AACA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA;CACC,2BAA2B;AAC5B;AACA;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["* {\n\tbox-sizing: border-box;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\np{\n\tmargin-bottom: 0 !important;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\na {\n\ttext-decoration: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/style.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/style/style.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./font.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/font.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_font_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Questrial\" !important;\n  box-sizing: border-box !important;\n}\nul {\n  margin: 0 !important;\n  padding: 0;\n}\nbody,\nhtml {\n  height: 100%;\n  /* background: #f0f0f0 !important; */\n}\n.content {\n  position: relative;\n}\n\n.title {\n  font-family: \"Questrial\" !important;\n  font-size: 32px;\n  margin-bottom: 70px;\n  color: #7337ac;\n  font-weight: 600;\n  letter-spacing: 1.2px;\n}\n\n.ant-card-body,\n.categories .ant-card-body {\n  padding: 14px;\n}\n\n.treatment-panel {\n  margin: 10px 0;\n}\n\n.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {\n  color: #4028f7 !important;\n}\n\n.ant-tabs-tab:hover {\n  color: #4028f7 !important;\n}\n.ant-tabs-ink-bar {\n  background: #4028f7 !important;\n}\n\n.back-to-home-page {\n  margin-right: 12px;\n  background: #52c41a !important;\n  color: #fff !important;\n  border: 0 !important;\n  border-radius: 30px !important;\n}\n.back-to-home-page:hover {\n  opacity: 0.8;\n}\n.ant-result-icon span {\n  font-size: 90px !important;\n}\n.ant-result-title {\n  font-size: 28px !important;\n}\n.ant-result-subtitle {\n  font-size: 18px !important;\n}\n.treatment-card p {\n  margin: 0;\n}\n\n.address-title {\n  font-size: 24px;\n  text-transform: capitalize;\n}\n\n.additional {\n  flex: 2 1;\n  background: #d49830;\n}\n\n.client-form {\n  text-align: left;\n}\n\n.register-form {\n  margin: auto !important;\n  max-width: 800px;\n  text-align: left;\n}\n\n.login-form {\n  max-width: 800px;\n  text-align: left;\n  margin: 200px auto !important;\n}\n\n.login-form-forgot {\n  float: right;\n}\n.ant-col-rtl .login-form-forgot {\n  float: left;\n}\n.login-form-button {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n@media (max-width: 1024px) {\n  .card {\n    width: 360px;\n  }\n}\n\n@media (max-width: 768px) {\n  .card {\n    max-width: 270px;\n  }\n\n  .register-form {\n    max-width: 500px;\n  }\n}\n\n@media (max-width: 576px) {\n  header {\n    grid-template-columns: 1fr 1fr;\n    padding: 10px 15px;\n    text-align: left;\n  }\n  header h1 {\n    font-size: 18px;\n  }\n\n  .summary div span:first-child {\n    font-size: 14px;\n  }\n  .summary div span:nth-child(2) {\n    font-size: 12px;\n  }\n}\n\n.ant-card {\n  background-color: #fff !important;\n  height: auto;\n  border-radius: 10px !important;\n  position: relative !important;\n  z-index: 2 !important;\n  border: 1px solid #ccc !important;\n  transition: all 0.6s ease !important;\n  padding: 10px !important;\n}\n\n.ant-card:hover {\n  border: 1px solid #ce3d5f !important;\n}\n.ant-card-hoverable:hover {\n  box-shadow: none !important;\n}\n\n.ant-card-body {\n  padding: 0 5px !important;\n  text-align: center;\n}\n\n.ant-card .card-btn {\n  background: #ce3d5f !important;\n  color: #fff !important;\n}\n\n.container {\n  max-width: 1200px !important;\n  margin: 0 auto !important;\n}\n.ant-card-cover {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  /* overflow: hidden; */\n  position: relative;\n  border: 2px solid #ce3d5f;\n  z-index: 4;\n}\n.ant-card-cover img {\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: 0;\n  display: block !important;\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover !important;\n  border-radius: 50% !important;\n}\n\nh3 {\n  display: block;\n  font-size: 24px;\n  font-weight: 600;\n  height: 29px;\n  line-height: 1.15;\n  margin-bottom: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/* .swiper-slide {\n  width: 350px !important;\n} */\n\n.description p {\n  font-size: 15px;\n  line-height: 1.4;\n}\n\n.card-btn:hover {\n  background: #b12c58 !important;\n}\n\n.branch-box {\n  margin: 1px !important;\n}\n\n.back-button {\n  padding: 4px 25px;\n  font-size: 14px;\n  position: absolute;\n  top: 520px;\n  right: 6%;\n  cursor: pointer;\n  border: none;\n  background: #ce3d5f;\n  color: #fff;\n  border-radius: 4px;\n}\n\n.back-button span {\n  margin-right: 5px;\n}\n@media (max-width: 768px) {\n  .back-button {\n    top: 321px;\n    font-size: 13px;\n  }\n}\n\n.nav-btn {\n  padding: 6px 15px;\n  font-size: 15px;\n  cursor: pointer;\n  text-transform: capitalize;\n  border-radius: 5px;\n}\n@media (max-width: 776px) {\n  .nav-btn {\n    padding: 3px 7px !important;\n    font-size: 12px !important;\n  }\n  .basket-btn {\n    padding: 2px 6px !important;\n    margin-right: 15px !important;\n  }\n  .basket-btn span {\n    width: 20px !important;\n    height: 20px !important;\n    line-height: 20px !important;\n  }\n}\n\nhtml::-webkit-scrollbar,\n.table-wrap::-webkit-scrollbar,\n.checkout-container::-webkit-scrollbar {\n  width: 8px;\n}\n\nhtml::-webkit-scrollbar-thumb,\n.checkout-container::-webkit-scrollbar-thumb,\n.table-wrap::-webkit-scrollbar-thumb {\n  background: #d6d1ce;\n  border-radius: 25px;\n}\nhtml::-moz-scrollbar,\n.checkout-container::-moz-scrollbar,\n.table-wrap::-webkit-scrollbar {\n  width: 13px;\n}\n\nhtml::-moz-scrollbar-thumb,\n.checkout-container::-moz-scrollbar-thumb,\n.table-wrap::-moz-scrollbar-thumb {\n  background: #d6d1ce;\n  border-radius: 25px;\n}\n.map-container {\n  width: 100%;\n}\n\n@media (max-width: 1200px) {\n  .container {\n    padding: 0 10px;\n  }\n}\n\n.logo {\n  @media (max-width: 776px) {\n    width: 25px !important;\n    height: 25px !important;\n  }\n}\n.card-body {\n  background: ;\n}\n\n.grecaptcha-badge {\n  visibility: hidden;\n  opacity: 0;\n}\n.Toastify {\n  position: absolute;\n  z-index: 999999;\n}\n.error-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n  height: 100vh;\n}\n.error-message > * {\n  font-size: 35px;\n}\n.error-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: red;\n  font-size: 20px;\n}\n", "",{"version":3,"sources":["webpack://src/style/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;EACnC,iCAAiC;AACnC;AACA;EACE,oBAAoB;EACpB,UAAU;AACZ;AACA;;EAEE,YAAY;EACZ,oCAAoC;AACtC;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,sBAAsB;EACtB,oBAAoB;EACpB,8BAA8B;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,SAAS;AACX;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,SAAO;EACP,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,8BAA8B;EAC9B,6BAA6B;EAC7B,qBAAqB;EACrB,iCAAiC;EACjC,oCAAoC;EACpC,wBAAwB;AAC1B;;AAEA;EACE,oCAAoC;AACtC;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;AACZ;AACA;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,yBAAyB;EACzB,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;GAEG;;AAEH;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE;IACE,UAAU;IACV,eAAe;EACjB;AACF;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;EACE;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,2BAA2B;IAC3B,6BAA6B;EAC/B;EACA;IACE,sBAAsB;IACtB,uBAAuB;IACvB,4BAA4B;EAC9B;AACF;;AAEA;;;EAGE,UAAU;AACZ;;AAEA;;;EAGE,mBAAmB;EACnB,mBAAmB;AACrB;AACA;;;EAGE,WAAW;AACb;;AAEA;;;EAGE,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,uBAAuB;EACzB;AACF;AACA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,eAAe;AACjB","sourcesContent":["@import url(\"../style/font.css\");\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Questrial\" !important;\n  box-sizing: border-box !important;\n}\nul {\n  margin: 0 !important;\n  padding: 0;\n}\nbody,\nhtml {\n  height: 100%;\n  /* background: #f0f0f0 !important; */\n}\n.content {\n  position: relative;\n}\n\n.title {\n  font-family: \"Questrial\" !important;\n  font-size: 32px;\n  margin-bottom: 70px;\n  color: #7337ac;\n  font-weight: 600;\n  letter-spacing: 1.2px;\n}\n\n.ant-card-body,\n.categories .ant-card-body {\n  padding: 14px;\n}\n\n.treatment-panel {\n  margin: 10px 0;\n}\n\n.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {\n  color: #4028f7 !important;\n}\n\n.ant-tabs-tab:hover {\n  color: #4028f7 !important;\n}\n.ant-tabs-ink-bar {\n  background: #4028f7 !important;\n}\n\n.back-to-home-page {\n  margin-right: 12px;\n  background: #52c41a !important;\n  color: #fff !important;\n  border: 0 !important;\n  border-radius: 30px !important;\n}\n.back-to-home-page:hover {\n  opacity: 0.8;\n}\n.ant-result-icon span {\n  font-size: 90px !important;\n}\n.ant-result-title {\n  font-size: 28px !important;\n}\n.ant-result-subtitle {\n  font-size: 18px !important;\n}\n.treatment-card p {\n  margin: 0;\n}\n\n.address-title {\n  font-size: 24px;\n  text-transform: capitalize;\n}\n\n.additional {\n  flex: 2;\n  background: #d49830;\n}\n\n.client-form {\n  text-align: left;\n}\n\n.register-form {\n  margin: auto !important;\n  max-width: 800px;\n  text-align: left;\n}\n\n.login-form {\n  max-width: 800px;\n  text-align: left;\n  margin: 200px auto !important;\n}\n\n.login-form-forgot {\n  float: right;\n}\n.ant-col-rtl .login-form-forgot {\n  float: left;\n}\n.login-form-button {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n@media (max-width: 1024px) {\n  .card {\n    width: 360px;\n  }\n}\n\n@media (max-width: 768px) {\n  .card {\n    max-width: 270px;\n  }\n\n  .register-form {\n    max-width: 500px;\n  }\n}\n\n@media (max-width: 576px) {\n  header {\n    grid-template-columns: 1fr 1fr;\n    padding: 10px 15px;\n    text-align: left;\n  }\n  header h1 {\n    font-size: 18px;\n  }\n\n  .summary div span:first-child {\n    font-size: 14px;\n  }\n  .summary div span:nth-child(2) {\n    font-size: 12px;\n  }\n}\n\n.ant-card {\n  background-color: #fff !important;\n  height: auto;\n  border-radius: 10px !important;\n  position: relative !important;\n  z-index: 2 !important;\n  border: 1px solid #ccc !important;\n  transition: all 0.6s ease !important;\n  padding: 10px !important;\n}\n\n.ant-card:hover {\n  border: 1px solid #ce3d5f !important;\n}\n.ant-card-hoverable:hover {\n  box-shadow: none !important;\n}\n\n.ant-card-body {\n  padding: 0 5px !important;\n  text-align: center;\n}\n\n.ant-card .card-btn {\n  background: #ce3d5f !important;\n  color: #fff !important;\n}\n\n.container {\n  max-width: 1200px !important;\n  margin: 0 auto !important;\n}\n.ant-card-cover {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  /* overflow: hidden; */\n  position: relative;\n  border: 2px solid #ce3d5f;\n  z-index: 4;\n}\n.ant-card-cover img {\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: 0;\n  display: block !important;\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover !important;\n  border-radius: 50% !important;\n}\n\nh3 {\n  display: block;\n  font-size: 24px;\n  font-weight: 600;\n  height: 29px;\n  line-height: 1.15;\n  margin-bottom: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/* .swiper-slide {\n  width: 350px !important;\n} */\n\n.description p {\n  font-size: 15px;\n  line-height: 1.4;\n}\n\n.card-btn:hover {\n  background: #b12c58 !important;\n}\n\n.branch-box {\n  margin: 1px !important;\n}\n\n.back-button {\n  padding: 4px 25px;\n  font-size: 14px;\n  position: absolute;\n  top: 520px;\n  right: 6%;\n  cursor: pointer;\n  border: none;\n  background: #ce3d5f;\n  color: #fff;\n  border-radius: 4px;\n}\n\n.back-button span {\n  margin-right: 5px;\n}\n@media (max-width: 768px) {\n  .back-button {\n    top: 321px;\n    font-size: 13px;\n  }\n}\n\n.nav-btn {\n  padding: 6px 15px;\n  font-size: 15px;\n  cursor: pointer;\n  text-transform: capitalize;\n  border-radius: 5px;\n}\n@media (max-width: 776px) {\n  .nav-btn {\n    padding: 3px 7px !important;\n    font-size: 12px !important;\n  }\n  .basket-btn {\n    padding: 2px 6px !important;\n    margin-right: 15px !important;\n  }\n  .basket-btn span {\n    width: 20px !important;\n    height: 20px !important;\n    line-height: 20px !important;\n  }\n}\n\nhtml::-webkit-scrollbar,\n.table-wrap::-webkit-scrollbar,\n.checkout-container::-webkit-scrollbar {\n  width: 8px;\n}\n\nhtml::-webkit-scrollbar-thumb,\n.checkout-container::-webkit-scrollbar-thumb,\n.table-wrap::-webkit-scrollbar-thumb {\n  background: #d6d1ce;\n  border-radius: 25px;\n}\nhtml::-moz-scrollbar,\n.checkout-container::-moz-scrollbar,\n.table-wrap::-webkit-scrollbar {\n  width: 13px;\n}\n\nhtml::-moz-scrollbar-thumb,\n.checkout-container::-moz-scrollbar-thumb,\n.table-wrap::-moz-scrollbar-thumb {\n  background: #d6d1ce;\n  border-radius: 25px;\n}\n.map-container {\n  width: 100%;\n}\n\n@media (max-width: 1200px) {\n  .container {\n    padding: 0 10px;\n  }\n}\n\n.logo {\n  @media (max-width: 776px) {\n    width: 25px !important;\n    height: 25px !important;\n  }\n}\n.card-body {\n  background: ;\n}\n\n.grecaptcha-badge {\n  visibility: hidden;\n  opacity: 0;\n}\n.Toastify {\n  position: absolute;\n  z-index: 999999;\n}\n.error-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n  height: 100vh;\n}\n.error-message > * {\n  font-size: 35px;\n}\n.error-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: red;\n  font-size: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Components_reservform_ReservForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/reservform/ReservForm */ "./src/Components/reservform/ReservForm.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _Components_layout_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/layout/navbar/Navbar */ "./src/Components/layout/navbar/Navbar.js");
/* harmony import */ var _Components_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/layout/footer/Footer */ "./src/Components/layout/footer/Footer.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _Components_organizations_OrganizationList_OrganizationList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/organizations/OrganizationList/OrganizationList */ "./src/Components/organizations/OrganizationList/OrganizationList.js");
/* harmony import */ var _Components_auth_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/auth/Login */ "./src/Components/auth/Login.js");
/* harmony import */ var _Components_auth_Registration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/auth/Registration */ "./src/Components/auth/Registration.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();












react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].initialize("G-TVCELYQ9NR");

function App() {
  _s();

  const [organizationInfo, setOrganizationInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedTime, setSelectedTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [employeeInfo, setEmployeeInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [eventTreatments, setEventTreatments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedDate, setSelectedDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedDay, setSelectedDay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [isShow, setIsShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let title = (organizationInfo === null || organizationInfo === void 0 ? void 0 : organizationInfo.name) ? organizationInfo === null || organizationInfo === void 0 ? void 0 : organizationInfo.name : "Rihand";

  if (employeeInfo) {
    title = `${employeeInfo.name} ${employeeInfo.surname}`;
  }

  const [treatmentName, setTreatmentName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  let location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const [reserveTime, setReserveTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    className: "app",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
      autoClose: 3000
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        minHeight: "70vh"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
            from: "/",
            to: "/login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 22
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/organization-list",
          exact: true,
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Components_organizations_OrganizationList_OrganizationList__WEBPACK_IMPORTED_MODULE_7__["default"], {
            setStep: setStep,
            organizationInfo: organizationInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: ":slug",
          exact: true,
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Components_reservform_ReservForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
            selectedTime: selectedTime,
            setSelectedTime: setSelectedTime,
            isShow: isShow,
            setIsShow: setIsShow,
            step: step,
            setStep: setStep,
            eventTreatments: eventTreatments,
            setEventTreatments: setEventTreatments,
            selectedDate: selectedDate,
            setSelectedDate: setSelectedDate,
            setSelectedDay: setSelectedDay,
            selectedDay: selectedDay,
            reserveTime: reserveTime,
            setReserveTime: setReserveTime,
            treatmentName: treatmentName,
            setTreatmentName: setTreatmentName,
            organizationInfo: organizationInfo,
            setOrganizationInfo: setOrganizationInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: ":slug/:empSlug",
          exact: true,
          name: "employeePath",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Components_reservform_ReservForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
            setEmployeeInfo: setEmployeeInfo,
            selectedTime: selectedTime,
            setSelectedTime: setSelectedTime,
            isShow: isShow,
            setIsShow: setIsShow,
            step: step,
            setStep: setStep,
            eventTreatments: eventTreatments,
            setEventTreatments: setEventTreatments,
            selectedDate: selectedDate,
            setSelectedDate: setSelectedDate,
            setSelectedDay: setSelectedDay,
            selectedDay: selectedDay,
            reserveTime: reserveTime,
            setReserveTime: setReserveTime,
            treatmentName: treatmentName,
            setTreatmentName: setTreatmentName,
            organizationInfo: organizationInfo,
            setOrganizationInfo: setOrganizationInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/login",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Components_auth_Login__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          exact: true,
          path: "/register",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Components_auth_Registration__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Components_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(App, "bu6NrBKL+x4DZGAaNqIzhbn3Cpw=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/PhoneNumberInput.js":
/*!********************************************!*\
  !*** ./src/Components/PhoneNumberInput.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mask_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mask-input */ "./node_modules/antd-mask-input/build/module/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/PhoneNumberInput.js",
    _s = __webpack_require__.$Refresh$.signature();





const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_2__["Select"];

const prefixSelector = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  name: "prefix",
  noStyle: true,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    style: {
      width: 85
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Option, {
      value: "+994",
      children: "+994"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

function PhoneNumberInput(props) {
  _s();

  const [numberMask, setNumberMask] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChange = e => {
    setNumberMask(e.target.value);
  };

  const regex = /^(5[015]|7[07]|99|60)([2-9][0-9]{2})([0-9]{2})([0-9]{2}){1}$/;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "phoneNumber",
    label: "N\xF6mr\u0259",
    rules: [{
      validator(_, value) {
        regex.test(value === null || value === void 0 ? void 0 : value.replace(/[^+\d]/g, ''));

        if (regex.test(value === null || value === void 0 ? void 0 : value.replace(/[^+\d]/g, ''))) {
          return Promise.resolve();
        } else {
          return Promise.reject('Nömrəni düzgün daxil edin!');
        }
      }

    }, {
      required: true,
      message: ''
    }],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd_mask_input__WEBPACK_IMPORTED_MODULE_1__["MaskedInput"], {
      addonBefore: prefixSelector,
      style: {
        width: '100%'
      },
      value: numberMask,
      mask: "(11) 111 11 11",
      name: "phoneNumber",
      placeholder: "(XX) XXX XX XX",
      size: "20",
      ...props,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(PhoneNumberInput, "9ixBGkIo7XFenhyMfIWiJgWoDhA=");

_c = PhoneNumberInput;
;
/* harmony default export */ __webpack_exports__["default"] = (PhoneNumberInput);

var _c;

__webpack_require__.$Refresh$.register(_c, "PhoneNumberInput");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/Components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _constants_config_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/config.constant */ "./src/constants/config.constant.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PhoneNumberInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PhoneNumberInput */ "./src/Components/PhoneNumberInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/auth/Login.js",
    _s = __webpack_require__.$Refresh$.signature();










function Login() {
  _s();

  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useNavigate"])();

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  const login = values => {
    let phoneNumber = values.prefix + values.phoneNumber.replace(/[^+\d]/g, "");
    delete values.prefix;
    let data = { ...values,
      phoneNumber
    };
    axios__WEBPACK_IMPORTED_MODULE_5___default()({
      method: "POST",
      url: _constants_config_constant__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/api/auth/login",
      data
    }).then(async response => {
      var data = response.data;
      localStorage.setItem("ACCESS_TOKEN", data === null || data === void 0 ? void 0 : data.accessToken);
      localStorage.setItem("userNotificationTokens", `${JSON.stringify(data === null || data === void 0 ? void 0 : data.userNotificationTokens)}`);
      localStorage.setItem("clientName", data.name);
      localStorage.setItem("clientSurname", data.surname); // localStorage.setItem(
      //   USER_NOTIFICATION_TOKENS,
      //   `${JSON.stringify(user?.userNotificationTokens)}`,
      // );

      navigate("/organization-list");
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "normal_login",
    className: "login-form",
    initialValues: {
      remember: true
    },
    onFinish: login,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "phoneNumber",
      rules: [{
        required: true,
        message: "Please input your Username!"
      }],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_PhoneNumberInput__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "password",
      rules: [{
        required: true,
        message: "Please input your Password!"
      }],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
          className: "site-form-item-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 19
        }, this),
        type: "password",
        placeholder: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        children: "Log in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), "Or ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/register",
        children: "register now!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_s(Login, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useNavigate"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/auth/Registration.js":
/*!*********************************************!*\
  !*** ./src/Components/auth/Registration.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/PageHeader */ "./src/Components/common/PageHeader.js");
/* harmony import */ var _PhoneNumberInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PhoneNumberInput */ "./src/Components/PhoneNumberInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_config_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/config.constant */ "./src/constants/config.constant.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/auth/Registration.js",
    _s = __webpack_require__.$Refresh$.signature();














const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },

  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

};
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

function Registration() {
  _s();

  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  const [success, setSuccess] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useLocation"])();
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useNavigate"])();

  const register = values => {
    let phoneNumber = values.prefix + values.phoneNumber.replace(/[^+\d]/g, "");
    delete values.prefix;
    delete values.confirm;

    if (values.email === undefined) {
      delete values.email;
    }

    let data = { ...values,
      deleted: false,
      phoneNumber,
      birthday: values.birthday.format('YYYY-MM-DD')
    };
    axios__WEBPACK_IMPORTED_MODULE_6___default()({
      method: "POST",
      url: _constants_config_constant__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + "/api/auth/register",
      data
    }).then(() => {
      setSuccess(true);
      axios__WEBPACK_IMPORTED_MODULE_6___default()({
        method: "POST",
        url: _constants_config_constant__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + "/api/auth/login",
        data
      }).then(async response => {
        var data = response.data;
        localStorage.setItem("ACCESS_TOKEN", data === null || data === void 0 ? void 0 : data.accessToken);
        localStorage.setItem("userNotificationTokens", `${JSON.stringify(data === null || data === void 0 ? void 0 : data.userNotificationTokens)}`);
        localStorage.setItem("clientName", data.name);
        localStorage.setItem("clientSurname", data.surname);
        navigate("/organization-list");
      });
    }).catch(err => {
      var _err$response, _err$response2;

      ((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data.message) && react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error((_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data.message);
    }).finally(() => {
      console.log("finally");
    });
  };

  const config = {
    rules: [{
      type: 'object',
      message: 'Please select time!'
    }]
  };

  const normFile = e => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      layout: "vertical",
      form: form,
      name: "register",
      onFinish: register,
      initialValues: {
        prefix: "+994"
      },
      scrollToFirstError: true,
      className: "register-form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "name",
        label: "Ad",
        rules: [{
          required: true,
          message: "Adınızı daxil edin!"
        }],
        hasFeedback: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "surname",
        label: "Soyad",
        rules: [{
          required: true,
          message: "Adınızı daxil edin!"
        }],
        hasFeedback: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "email",
        label: "Email",
        rules: [{
          type: "email"
        }],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "password",
        label: "\u015Eifr\u0259nizi daxil edin",
        rules: [{
          required: true,
          message: "Please input your password!"
        }],
        hasFeedback: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "confirm",
        label: "\u015Eifr\u0259ni t\u0259sdiql\u0259",
        dependencies: ["password"],
        hasFeedback: true,
        rules: [{
          required: true,
          message: "Please confirm your password!"
        }, ({
          getFieldValue
        }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }

            return Promise.reject(new Error("The two passwords that you entered do not match!"));
          }

        })],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
          placeholder: "\u015Eifr\u0259ni t\u0259sdiql\u0259"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PhoneNumberInput__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "gender",
        label: "Cins",
        rules: [{
          required: true,
          message: "Please select gender!"
        }],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
          placeholder: "select your gender",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Option, {
            value: "MALE",
            children: "Male"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Option, {
            value: "FEMALE",
            children: "Female"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Option, {
            value: "UNI",
            children: "Other"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "birthday",
        label: "Birthday",
        ...config,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "upload",
        label: "Upload photo",
        valuePropName: "fileList",
        getValueFromEvent: normFile,
        extra: "Upload a photo for your profile (optional)",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
          name: "logo",
          action: "/upload.do",
          listType: "picture",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UploadOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 25
            }, this),
            children: "Click to upload"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Registration, "MYncFXTC2q+H7rmAGWshfXFIrRI=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm, react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useLocation"], react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useNavigate"]];
});

_c = Registration;
/* harmony default export */ __webpack_exports__["default"] = (Registration);

var _c;

__webpack_require__.$Refresh$.register(_c, "Registration");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/branches/Branch.css":
/*!********************************************!*\
  !*** ./src/Components/branches/Branch.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Branch.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branch.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Branch.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branch.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Branch.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branch.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/branches/Branch.js":
/*!*******************************************!*\
  !*** ./src/Components/branches/Branch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/avatar.jpg */ "./src/images/avatar.jpg");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var _Branch_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Branch.css */ "./src/Components/branches/Branch.css");
/* harmony import */ var _Branch_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Branch_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/branches/Branch.js";









const Branch = ({
  branch,
  onSelect,
  selectedBranch,
  step,
  handleShowMap
}) => {
  // const showBranch = step === 1 ? branch : selectedBranch;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      hoverable: true,
      style: {
        marginBottom: "10px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          display: "flex",
          alignItems: "flex-start"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: {
            width: "40px",
            height: "40px",
            border: "1px solid #ce3d5f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            textAlign: "center"
          },
          className: "icon-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_im__WEBPACK_IMPORTED_MODULE_4__["ImLocation"], {
            className: "location-icon",
            style: {
              marginRight: "3px",
              fontSize: "18px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "branch-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
            className: "branch-name",
            children: [branch === null || branch === void 0 ? void 0 : branch.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["BranchesOutlined"], {
              style: {
                marginLeft: "5px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: branch === null || branch === void 0 ? void 0 : branch.address
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "btn-groups",
            children: step === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                onClick: () => onSelect(branch, "branch"),
                className: "card-btn",
                children: "Filial\u0131 se\xE7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                onClick: () => {
                  handleShowMap(branch);
                  onSelect(branch, "map");
                },
                className: "show-map",
                children: "X\u0259rit\u0259d\u0259 g\xF6st\u0259r"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, undefined)]
            }, void 0, true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_c = Branch;
/* harmony default export */ __webpack_exports__["default"] = (Branch);

var _c;

__webpack_require__.$Refresh$.register(_c, "Branch");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/branches/Branches.css":
/*!**********************************************!*\
  !*** ./src/Components/branches/Branches.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Branches.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branches.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Branches.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branches.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Branches.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/branches/Branches.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/branches/Branches.js":
/*!*********************************************!*\
  !*** ./src/Components/branches/Branches.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/PageHeader */ "./src/Components/common/PageHeader.js");
/* harmony import */ var _Branches_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Branches.css */ "./src/Components/branches/Branches.css");
/* harmony import */ var _Branches_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Branches_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Branch */ "./src/Components/branches/Branch.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var _constants_config_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/config.constant */ "./src/constants/config.constant.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _common_ErrorMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/ErrorMessage */ "./src/Components/common/ErrorMessage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _services_branches__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/branches */ "./src/services/branches.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/branches/Branches.js",
    _s = __webpack_require__.$Refresh$.signature();


















function Branches({
  branches,
  onSelect,
  step,
  isShowMap,
  setIsShowMap,
  eventTreatments,
  treatmentName,
  loading
}) {
  _s();

  const [branchAddress, setBranchAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const location = (branchAddress === null || branchAddress === void 0 ? void 0 : branchAddress.lat) + "," + (branchAddress === null || branchAddress === void 0 ? void 0 : branchAddress.lon);
  const [Loading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    slug,
    empSlug
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["useParams"])();
  const {
    data,
    error,
    isLoading,
    isSuccess,
    isError
  } = Object(_services_branches__WEBPACK_IMPORTED_MODULE_13__["useGetBranchesQuery"])(slug, empSlug);
  const defaultBranchId = isSuccess && data[0].id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isSuccess && axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`${_constants_config_constant__WEBPACK_IMPORTED_MODULE_6__["API_URL"]}/api/organizations/branch/${defaultBranchId}`).then(response => {
      setBranchAddress(response.data);
    });
  }, [defaultBranchId]);

  const scrollToBottom = () => {
    mapRef.current.scrollIntoView({
      behavior: "smooth"
    }); // window.scrollTo(0, document.body.scrollHeight);
  };

  const handleShowMap = branch => {
    let url = `${_constants_config_constant__WEBPACK_IMPORTED_MODULE_6__["API_URL"]}/api/organizations/branch/${branch === null || branch === void 0 ? void 0 : branch.id}`;
    setIsShowMap(true);
    setTimeout(() => {
      scrollToBottom();
    }, 100);
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url).then(response => {
      setBranchAddress(response.data);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Filiallar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
      className: "container",
      children: [isLoading && "...Spinner", isError && error.message, isSuccess && data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
        className: "branches-wrap",
        style: {
          minHeight: "100vh"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
          className: "branches",
          children: data.map(branch => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Branch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              setIsShowMap: setIsShowMap,
              isShowMap: isShowMap,
              treatmentName: treatmentName,
              eventTreatments: eventTreatments,
              step: step,
              onSelect: onSelect,
              branch: branch,
              handleShowMap: handleShowMap,
              branchAddress: branchAddress
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 21
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
          ref: mapRef,
          className: isShowMap ? "map-container show" : "map-container",
          children: branches.length > 0 && (branchAddress === null || branchAddress === void 0 ? void 0 : branchAddress.lat) && (branchAddress === null || branchAddress === void 0 ? void 0 : branchAddress.lon) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
            style: {
              height: "100vh"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("iframe", {
              title: "adresses",
              width: "100%",
              loading: "lazy",
              height: "100%",
              style: {
                border: 0
              },
              allowFullScreen: true,
              src: `https://www.google.com/maps/embed/v1/place?key=${_constants_config_constant__WEBPACK_IMPORTED_MODULE_6__["GOOGLE_MAP_API_KEY"]}&q=${location}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("button", {
              onClick: () => setIsShowMap(false),
              className: "close-map",
              children: ["X\u0259rit\u0259ni ba\u011Fla", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__["RiCloseLine"], {
                style: {
                  fontSize: "20px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: ["Filiala uygun x\u0259rit\u0259 \u0259lav\u0259 edilm\u0259yib", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("button", {
              onClick: () => {
                setIsShowMap(false);
              },
              className: "close-map",
              children: ["X\u0259rit\u0259ni ba\u011Fla", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__["RiCloseLine"], {
                style: {
                  fontSize: "20px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Branches, "ES8+FFvqTpHEa7zHNXOZ+ZVzID4=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_12__["useParams"], _services_branches__WEBPACK_IMPORTED_MODULE_13__["useGetBranchesQuery"]];
});

_c = Branches;
/* harmony default export */ __webpack_exports__["default"] = (Branches);

var _c;

__webpack_require__.$Refresh$.register(_c, "Branches");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/categories/Categories.css":
/*!**************************************************!*\
  !*** ./src/Components/categories/Categories.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Categories.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Categories.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Categories.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Categories.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Categories.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Categories.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/categories/Categories.js":
/*!*************************************************!*\
  !*** ./src/Components/categories/Categories.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ "./src/Components/categories/Category.js");
/* harmony import */ var _branches_Branch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../branches/Branch */ "./src/Components/branches/Branch.js");
/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Categories.css */ "./src/Components/categories/Categories.css");
/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Categories_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PageHeader */ "./src/Components/common/PageHeader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/categories/Categories.js";









const Categories = ({
  getCategoryList,
  categories,
  selectedBranch,
  step,
  isShowMap,
  setIsShowMap,
  categoryItem
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_common_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Kateqoriyalar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
        justify: "space-around",
        className: "categories-container container",
        gutter: [16, 24],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
          xs: 24,
          sm: 14,
          md: 7,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_branches_Branch__WEBPACK_IMPORTED_MODULE_3__["default"], {
            isShowMap: isShowMap,
            setIsShowMap: setIsShowMap,
            step: step,
            selectedBranch: selectedBranch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
          xs: 24,
          sm: 14,
          md: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Category__WEBPACK_IMPORTED_MODULE_2__["default"], {
            categoryItem: categoryItem,
            categories: categories,
            getCategoryList: getCategoryList,
            selectedBranch: selectedBranch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_c = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c;

__webpack_require__.$Refresh$.register(_c, "Categories");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/categories/Category.css":
/*!************************************************!*\
  !*** ./src/Components/categories/Category.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Category.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Category.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Category.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Category.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Category.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/categories/Category.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/categories/Category.js":
/*!***********************************************!*\
  !*** ./src/Components/categories/Category.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.css */ "./src/Components/categories/Category.css");
/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Category_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/categories/Category.js",
    _s = __webpack_require__.$Refresh$.signature();






function Category({
  categories,
  getCategoryList,
  categoryItem
}) {
  _s();

  const [activeCategory, setActiveCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setActiveCategory(categoryItem === null ? categories[0] : categoryItem);
  }, [categoryItem, categories[0]]);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const scrollToBottom = () => {
    var _ref$current;

    ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollIntoView({
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.innerWidth <= 576) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
    className: "categories-list",
    children: categories && categories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
      ref: ref,
      className: category === activeCategory ? "category-name show" : "category-name",
      onClick: () => {
        getCategoryList(category);
        setActiveCategory(category);
        handleScroll();
      },
      children: category === null || category === void 0 ? void 0 : category.name
    }, category.id, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(Category, "b4QY7oYeJkoOeexooKiWwxqwg38=");

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

__webpack_require__.$Refresh$.register(_c, "Category");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/client/Client.css":
/*!******************************************!*\
  !*** ./src/Components/client/Client.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Client.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/client/Client.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Client.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/client/Client.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Client.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/client/Client.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/client/Client.js":
/*!*****************************************!*\
  !*** ./src/Components/client/Client.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _PhoneNumberInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PhoneNumberInput */ "./src/Components/PhoneNumberInput.js");
/* harmony import */ var _common_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PageHeader */ "./src/Components/common/PageHeader.js");
/* harmony import */ var _Client_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Client.css */ "./src/Components/client/Client.css");
/* harmony import */ var _Client_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Client_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/client/Client.js";







const validateMessages = {
  required: "Adınızı daxil edin!"
};
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const Client = ({
  handleSubmit,
  errMessage,
  ToastContainer
}) => {
  const onFinish = values => {
    handleSubmit({ ...values,
      phoneNumber: values.prefix + values.phoneNumber.replace(/[^+\d]/g, "")
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 12
      },
      sm: {
        span: 12,
        offset: 6
      }
    },
    wrapperCol: {
      xs: {
        span: 12
      },
      sm: {
        span: 12,
        offset: 6
      }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 12,
        offset: 6
      }
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_common_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "M\xFC\u015Ft\u0259ri Qeydiyyat\u0131"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "inner",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "client-form-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "image-holder",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
            src: "https://colorlib.com/etc/regform/colorlib-regform-20/images/registration-form-4.jpg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], { ...formItemLayout,
          layout: "vertical",
          name: "client-form",
          onFinish: onFinish,
          validateMessages: validateMessages,
          initialValues: {
            prefix: "+994"
          },
          className: "client-form",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            name: "name",
            label: "Ad",
            rules: [{
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            name: "surname",
            label: "Soyad",
            rules: [{
              required: false
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_PhoneNumberInput__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            name: "gender",
            label: "Cins",
            rules: [{
              required: true,
              message: "Cinsinizi seçin!"
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
              style: {
                textAlign: "left"
              },
              placeholder: "cinsinizi se\xE7in",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Option, {
                value: "MALE",
                children: "Ki\u015Fi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Option, {
                value: "FEMALE",
                children: "Qad\u0131n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Option, {
                value: "UNI",
                children: "Dig\u0259r"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              className: "form-submit",
              block: true,
              size: "middle",
              type: "primary",
              htmlType: "submit",
              children: "T\u0259sdiql\u0259"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("small", {
            style: {
              padding: "10px 0",
              display: "inline-block"
            },
            children: ["This site is protected by reCAPTCHA and the Google", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: " Privacy Policy \u2013 Privacy & Terms \u2013 Google",
              children: "Privacy Policy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, undefined), "and", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: "Google Terms of Service \u2013 Privacy & Terms \u2013 Google",
              children: "Terms of Service"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, undefined), "apply."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), errMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ToastContainer, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

_c = Client;
/* harmony default export */ __webpack_exports__["default"] = (Client);

var _c;

__webpack_require__.$Refresh$.register(_c, "Client");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/common/ErrorMessage.js":
/*!***********************************************!*\
  !*** ./src/Components/common/ErrorMessage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/common/ErrorMessage.js";




const ErrorMessage = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "error-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      className: "error-message",
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__["BiErrorCircle"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = ErrorMessage;
/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);

var _c;

__webpack_require__.$Refresh$.register(_c, "ErrorMessage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/common/PageHeader.css":
/*!**********************************************!*\
  !*** ./src/Components/common/PageHeader.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./PageHeader.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/common/PageHeader.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./PageHeader.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/common/PageHeader.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./PageHeader.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/common/PageHeader.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/common/PageHeader.js":
/*!*********************************************!*\
  !*** ./src/Components/common/PageHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageHeader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.css */ "./src/Components/common/PageHeader.css");
/* harmony import */ var _PageHeader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageHeader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/common/PageHeader.js";





const PageHeader = ({
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "overlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_c = PageHeader;
/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

var _c;

__webpack_require__.$Refresh$.register(_c, "PageHeader");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/employees/Employee.css":
/*!***********************************************!*\
  !*** ./src/Components/employees/Employee.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Employee.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/employees/Employee.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Employee.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/employees/Employee.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Employee.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/employees/Employee.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/employees/Employees.js":
/*!***********************************************!*\
  !*** ./src/Components/employees/Employees.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _util_PricingOptions_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/PricingOptions.util */ "./src/Components/util/PricingOptions.util.js");
/* harmony import */ var _util_duration_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/duration.util */ "./src/Components/util/duration.util.js");
/* harmony import */ var _branches_Branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../branches/Branch */ "./src/Components/branches/Branch.js");
/* harmony import */ var _common_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PageHeader */ "./src/Components/common/PageHeader.js");
/* harmony import */ var _images_image_rita_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/image-rita.png */ "./src/images/image-rita.png");
/* harmony import */ var _Employee_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Employee.css */ "./src/Components/employees/Employee.css");
/* harmony import */ var _Employee_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Employee_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _images_profile_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/profile.svg */ "./src/images/profile.svg");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/employees/Employees.js";
















swiper__WEBPACK_IMPORTED_MODULE_9__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_9__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_9__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_9__["Pagination"]]);
const randomColors = ["#FD8469", "#ce3d5f", "#90DFAA", "#5DDDD3", "#E366FF", "#FF5E76", "#3F7106", "#47E3FA", "#023C76"];

function Employees({
  selectedBranch,
  employees,
  onSelect,
  pricingOption
}) {
  const employeeSpecialPrice = () => {
    if (pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.specialPrice) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
        style: {
          textDecoration: "line-through"
        },
        children: pricingOption.price + " AZN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this);
    }

    return null;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_common_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "\u018Fm\u0259kda\u015Flar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: "selected-treatment",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("p", {
          children: ["Se\xE7il\u0259n xidm\u0259t: ", pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "employees-wrap container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_8__["Swiper"], {
        navigation: true,
        modules: [swiper__WEBPACK_IMPORTED_MODULE_9__["Navigation"]],
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            setWrapperSize: true
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        } // loop={true}
        ,
        onSlideChange: () => console.log("slide change"),
        onSwiper: swiper => console.log(swiper),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: "employees",
          children: employees.map((employee, index) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_8__["SwiperSlide"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                className: "card-body",
                style: {
                  borderTop: `7px solid ${randomColors[Math.floor(Math.random() * randomColors.length)]} `
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("header", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                    className: "img-box",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("img", {
                      src: _images_profile_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
                      alt: employee.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "employee-details",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h1", {
                    className: "employee-name",
                    children: employee.name + " " + employee.surname
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h2", {
                    className: "employee-price",
                    children: ["Qiym\u0259t:", !employee.isIndividual ? employeeSpecialPrice() : null, employee.isIndividual ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
                      children: [" ", Object(_util_PricingOptions_util__WEBPACK_IMPORTED_MODULE_2__["getPrice"])(employee)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
                      children: Object(_util_PricingOptions_util__WEBPACK_IMPORTED_MODULE_2__["getPrice"])(pricingOption)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
                      children: ["Xidm\u0259tin m\xFCdd\u0259ti:", " ", Object(_util_duration_util__WEBPACK_IMPORTED_MODULE_3__["getDurationText"])(employee.duration)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "btn-container",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("button", {
                    onClick: () => {
                      onSelect(employee);
                    },
                    className: "choose-btn",
                    children: "Se\xE7"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = Employees;
/* harmony default export */ __webpack_exports__["default"] = (Employees);

var _c;

__webpack_require__.$Refresh$.register(_c, "Employees");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/layout/footer/Footer.css":
/*!*************************************************!*\
  !*** ./src/Components/layout/footer/Footer.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/footer/Footer.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/footer/Footer.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/footer/Footer.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/layout/footer/Footer.js":
/*!************************************************!*\
  !*** ./src/Components/layout/footer/Footer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.css */ "./src/Components/layout/footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/layout/footer/Footer.js";






const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("footer", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "footer-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "footer-left-side",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
            className: "footer-head-text",
            children: "Rihand MMC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "divider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            className: "copyright-text",
            children: ["\xA9 ", new Date().getFullYear(), " Rihand. All rights reserved."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "footer-right-side",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
            className: "social-links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                target: "_blank",
                href: "https://www.youtube.com/playlist?list=PLEpNccdnEWZr3_gqI04zLW11dUFjLgKg-",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillYoutube"], {
                  className: "icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                target: "_blank",
                href: "https://tiktok.com/@rihand.az",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTiktok"], {
                  className: "icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                target: "_blank",
                href: "https://www.facebook.com/rihand.azerbaycan",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillFacebook"], {
                  className: "icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            children: "Support : info@rihand.az"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/layout/navbar/Navbar.css":
/*!*************************************************!*\
  !*** ./src/Components/layout/navbar/Navbar.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/navbar/Navbar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/navbar/Navbar.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/layout/navbar/Navbar.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/layout/navbar/Navbar.js":
/*!************************************************!*\
  !*** ./src/Components/layout/navbar/Navbar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_newLogo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/newLogo.svg */ "./src/images/newLogo.svg");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.css */ "./src/Components/layout/navbar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/layout/navbar/Navbar.js",
    _s = __webpack_require__.$Refresh$.signature();








const Navbar = () => {
  _s();

  const [stickyClass, setStickyClass] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const stickNavbar = () => {
    setStickyClass("sticky-nav");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("nav", {
      className: `navbar ${stickyClass}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "navbar-row container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "logo-container",
          onClick: () => refreshPage(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
            className: "logo",
            src: _images_newLogo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(Navbar, "won8wTu4rvuC/7hIfjhx6gvx2bk=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/organizations/Organization/Organization.css":
/*!********************************************************************!*\
  !*** ./src/Components/organizations/Organization/Organization.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Organization.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/Organization/Organization.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Organization.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/Organization/Organization.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Organization.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/Organization/Organization.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/organizations/Organization/Organization.js":
/*!*******************************************************************!*\
  !*** ./src/Components/organizations/Organization/Organization.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Organization_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Organization.css */ "./src/Components/organizations/Organization/Organization.css");
/* harmony import */ var _Organization_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Organization_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/organizations/Organization/Organization.js";





function Organization({
  org
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "card",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `/${org === null || org === void 0 ? void 0 : org.slug}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: org.imagePath,
          alt: org.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
        className: "organization-title",
        children: org.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "description",
        children: org.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = Organization;
/* harmony default export */ __webpack_exports__["default"] = (Organization);

var _c;

__webpack_require__.$Refresh$.register(_c, "Organization");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/organizations/OrganizationList/OrganizationList.css":
/*!****************************************************************************!*\
  !*** ./src/Components/organizations/OrganizationList/OrganizationList.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./OrganizationList.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/OrganizationList/OrganizationList.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./OrganizationList.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/OrganizationList/OrganizationList.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./OrganizationList.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/organizations/OrganizationList/OrganizationList.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/organizations/OrganizationList/OrganizationList.js":
/*!***************************************************************************!*\
  !*** ./src/Components/organizations/OrganizationList/OrganizationList.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_config_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/config.constant */ "./src/constants/config.constant.js");
/* harmony import */ var _Organization_Organization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Organization/Organization */ "./src/Components/organizations/Organization/Organization.js");
/* harmony import */ var _OrganizationList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OrganizationList.css */ "./src/Components/organizations/OrganizationList/OrganizationList.css");
/* harmony import */ var _OrganizationList_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_OrganizationList_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/organizations/OrganizationList/OrganizationList.js",
    _s = __webpack_require__.$Refresh$.signature();









const organizationUrl = `${_constants_config_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/api/organizations`;

function OrganizationList({
  setStep
}) {
  _s();

  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  const [organizationPerPage, setOrganizationPerPage] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(10);
  const [organizationList, setOrganizationList] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const [total, setTotal] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const startIndex = page * organizationPerPage - organizationPerPage;
  const endIndex = startIndex + organizationPerPage;
  const currentOrganizationList = organizationList === null || organizationList === void 0 ? void 0 : organizationList.slice(startIndex, endIndex);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(organizationUrl).then(response => {
      setOrganizationList(response.data);
      setTotal(response.data.length);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    window.scrollTo({
      behavior: "smooth",
      top: "150px"
    });
  }, [page]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
      className: "title",
      children: "Organization List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      gutter: 20,
      justify: "center",
      children: currentOrganizationList === null || currentOrganizationList === void 0 ? void 0 : currentOrganizationList.map(org => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
          style: {
            margin: "10px 0"
          },
          xs: 24,
          md: 12,
          lg: 12,
          align: "middle",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Organization_Organization__WEBPACK_IMPORTED_MODULE_4__["default"], {
            setStep: setStep,
            org: org
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this)
        }, org.id, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Pagination"], {
      className: "pagination",
      showSizeChanger: false,
      onChange: value => setPage(value),
      total: total,
      current: page,
      responsive: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(OrganizationList, "Pgp5xyhtf97ffJvsPGmuyIoN8GU=");

_c = OrganizationList;
/* harmony default export */ __webpack_exports__["default"] = (OrganizationList);

var _c;

__webpack_require__.$Refresh$.register(_c, "OrganizationList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/reservform/ReservForm.js":
/*!*************************************************!*\
  !*** ./src/Components/reservform/ReservForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-recaptcha-v3 */ "./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _branches_Branches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../branches/Branches */ "./src/Components/branches/Branches.js");
/* harmony import */ var _employees_Employees__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../employees/Employees */ "./src/Components/employees/Employees.js");
/* harmony import */ var _time_Time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../time/Time */ "./src/Components/time/Time.js");
/* harmony import */ var _client_Client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/Client */ "./src/Components/client/Client.js");
/* harmony import */ var _util_SuccessPage_SuccessPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/SuccessPage/SuccessPage */ "./src/Components/util/SuccessPage/SuccessPage.js");
/* harmony import */ var _constants_config_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/config.constant */ "./src/constants/config.constant.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _categories_Categories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../categories/Categories */ "./src/Components/categories/Categories.js");
/* harmony import */ var _treatments_Treatments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../treatments/Treatments */ "./src/Components/treatments/Treatments.js");
/* harmony import */ var _summary_Summary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../summary/Summary */ "./src/Components/summary/Summary.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_BranchSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../redux/features/BranchSlice */ "./src/redux/features/BranchSlice.js");
/* harmony import */ var _services_branches__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/branches */ "./src/services/branches.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/reservform/ReservForm.js",
    _s = __webpack_require__.$Refresh$.signature();






 // import OneSignal from 'react-onesignal';

















const organizationUrl = `${_constants_config_constant__WEBPACK_IMPORTED_MODULE_12__["API_URL"]}/api/organizations`;
const employeeInfoUrl = `${_constants_config_constant__WEBPACK_IMPORTED_MODULE_12__["API_URL"]}/api/employees`;
const blockTimeUrl = `${_constants_config_constant__WEBPACK_IMPORTED_MODULE_12__["API_URL"]}/api/block-times/employee`;
const eventUrl = `${_constants_config_constant__WEBPACK_IMPORTED_MODULE_12__["API_URL"]}/api/events`;

function ReservForm({
  organizationInfo,
  setOrganizationInfo,
  setEmployeeInfo,
  arr,
  setArr,
  setTreatmentName,
  treatmentName,
  reserveTime,
  setReserveTime,
  settName,
  step,
  setStep,
  tName,
  selectedDay,
  setSelectedDay,
  selectedDate,
  setSelectedDate,
  setEventTreatments,
  eventTreatments,
  isShow,
  setIsShow,
  setSelectedTime,
  selectedTime
}) {
  _s();

  const [isShowMap, setIsShowMap] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [branches, setbranches] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedBranch, setSelectedBranch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [treatments, setTreatments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [categoryItem, setCategoryItem] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedTreatment, setSelectedTreatment] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedPricingOption, setSelectedPricingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedEmployee, setSelectedEmployee] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [employeeAutoReservation, setEmployeeAutoReservation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["useDispatch"])();
  const {
    treatment1
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["useSelector"])(state => state.branch);
  const tr = Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["useSelector"])(_redux_features_BranchSlice__WEBPACK_IMPORTED_MODULE_18__["getState"].getTreat);
  const [blockTimes, setBlockTimes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [errMessage, setErrMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const location = Object(react_router__WEBPACK_IMPORTED_MODULE_13__["useLocation"])();
  const {
    slug,
    empSlug
  } = Object(react_router__WEBPACK_IMPORTED_MODULE_13__["useParams"])();
  const employeeId = empSlug === null || empSlug === void 0 ? void 0 : empSlug.substring(empSlug.lastIndexOf("-") + 1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }, [step]); // const getBrances = async () => {
  //   try {
  //     setLoading(true);
  //     let branchUrl = `${API_URL}/api/organizations/${slug}/branches`;
  //     if (empSlug) {
  //       branchUrl = `${API_URL}/api/organizations/${slug}/employee/${empSlug}/branches`;
  //     }
  //     await axios.get(branchUrl).then((response) => {
  //       setbranches(response.data);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // getBrances();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${organizationUrl}/${slug}/info`).then(response => {
      setOrganizationInfo(response.data);
    });

    if (empSlug) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${employeeInfoUrl}/${employeeId}`).then(response => {
        setEmployeeInfo(response.data);
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if ((branches === null || branches === void 0 ? void 0 : branches.length) === 1) {
      onSelectBranch(branches[0]);
    }
  }, [branches]);

  const getCategoryList = category => {
    setCategoryItem(category);
  };

  const onSelectTreatment = (treatment, pricingOption) => {
    var _tr$;

    setSelectedTreatment(treatment);
    setSelectedPricingOption(pricingOption);
    dispatch(Object(_redux_features_BranchSlice__WEBPACK_IMPORTED_MODULE_18__["createTreatment"])({ ...treatment1,
      branch: selectedBranch.name ? selectedBranch.name : (_tr$ = tr[0]) === null || _tr$ === void 0 ? void 0 : _tr$.selectedBranch,
      pricingOptionId: pricingOption.id,
      price: pricingOption.price,
      duration: pricingOption.duration,
      specialPrice: pricingOption.specialPrice,
      treatmentName: pricingOption.name
    }));
    nextStep();
  };

  const onSelectBranch = (branch, type) => {
    setSelectedBranch(branch);
    dispatch(Object(_redux_features_BranchSlice__WEBPACK_IMPORTED_MODULE_18__["createTreatment"])({ ...treatment1,
      selectedBranch: branch.name
    }));
    let treatmentUrl = `${_constants_config_constant__WEBPACK_IMPORTED_MODULE_12__["API_URL"]}/api/treatments/branch/${branch.id}`;

    if (empSlug) {
      treatmentUrl += `/employee/${employeeId}`;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(treatmentUrl).then(response => {
      setTreatments(response.data);
    });

    if (type !== "map") {
      nextStep();
    }
  };

  const onSelectEmployee = employee => {
    setSelectedEmployee(employee);
    dispatch(Object(_redux_features_BranchSlice__WEBPACK_IMPORTED_MODULE_18__["createTreatment"])({ ...treatment1,
      employeeId: employee.id,
      employeeName: employee.name,
      employeeSurname: employee.surname
    }));
    nextStep();
  };

  const getEmployees = () => {
    const individualPricingEmployeeIds = selectedPricingOption.employees.map(emp => emp.employeeId);
    return selectedTreatment.employees.map(emp => {
      let employee = { ...emp,
        price: selectedPricingOption.price,
        specialPrice: selectedPricingOption.specialPrice,
        priceType: selectedPricingOption.priceType,
        duration: selectedPricingOption.duration,
        isIndividual: false
      };

      if (individualPricingEmployeeIds.includes(emp.id)) {
        const index = selectedPricingOption.employees.findIndex(poe => poe.employeeId === emp.id);
        employee = { ...employee,
          price: selectedPricingOption.employees[index].price,
          specialPrice: selectedPricingOption.employees[index].specialPrice,
          priceType: selectedPricingOption.employees[index].priceType,
          duration: selectedPricingOption.employees[index].duration,
          isIndividual: true
        };
      }

      return employee;
    });
  };

  const setBlockTime = date => {
    const params = {
      branchId: selectedBranch.id,
      date: date.format("YYYY-MM-DD"),
      employeeId: selectedEmployee.id
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(blockTimeUrl, {
      params
    }).then(response => {
      setBlockTimes(response.data);
    });
  };

  const onSelectDate = date => {
    setSelectedDate(date);
    setBlockTime(date);
  };

  const onSelectTime = time => {
    setSelectedTime(time);
    dispatch(Object(_redux_features_BranchSlice__WEBPACK_IMPORTED_MODULE_18__["createTreatment"])({ ...treatment1,
      reserveTime: time
    }));
  };

  const addTreatment = () => {
    let treatment = {
      treatmentName: selectedPricingOption.name,
      selectedBranch: selectedBranch.name,
      employeeId: selectedEmployee.id,
      employeeName: selectedEmployee.name,
      employeeSurname: selectedEmployee.surname,
      pricingOptionId: selectedPricingOption.id,
      reserveTime: selectedTime,
      reserveDate: selectedDate.format("YYYY-MM-DD"),
      treatmentId: selectedTreatment.id,
      price: selectedPricingOption.price,
      specialPrice: selectedPricingOption.specialPrice,
      priceType: selectedPricingOption.priceType,
      duration: selectedPricingOption.duration
    };
    const individualPricingEmployeeIds = selectedPricingOption.employees.map(emp => emp.employeeId);

    if (individualPricingEmployeeIds.includes(selectedEmployee.id)) {
      const index = selectedPricingOption.employees.findIndex(poe => poe.employeeId === selectedEmployee.id);
      treatment = { ...treatment,
        price: selectedPricingOption.employees[index].price,
        specialPrice: selectedPricingOption.employees[index].specialPrice,
        priceType: selectedPricingOption.employees[index].priceType,
        duration: selectedPricingOption.employees[index].duration
      };
    }

    setTreatmentName([...treatmentName, selectedPricingOption.name]);
    setEmployeeAutoReservation([...employeeAutoReservation, selectedEmployee.autoReservation]);
    setEventTreatments([...eventTreatments, treatment]);
    nextStep();
  };

  const deleteTreatment = index => {
    setEventTreatments(eventTreatments.filter((item, idx) => idx !== index));
    setTreatmentName(treatmentName.filter((item, idx) => idx !== index));
    react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("Xidmət uğurla silindi");
  };

  const addNewTreatment = () => {
    setSelectedTime(null);
    setStep(2);
  };

  const submit = () => {
    nextStep();
  };

  const backToHomePage = () => {
    setSelectedBranch(null);
    setSelectedEmployee(null);
    setSelectedPricingOption(null);
    setSelectedTreatment(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setEventTreatments([]);
    setStep(1);
  };

  const {
    executeRecaptcha
  } = Object(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__["useGoogleReCaptcha"])();

  const onSend = async client => {
    if (!executeRecaptcha) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("Xəta baş verdi. Xahiş edirik daha sonra yenidən yoxlayın.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      return;
    }

    const getToken = await executeRecaptcha("client");

    if (employeeId) {
      client = { ...client,
        favoriteEmployeeId: parseInt(employeeId)
      };
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "POST",
      url: eventUrl,
      data: {
        organizationId: organizationInfo.id,
        branchId: selectedBranch.id,
        client,
        reserveDate: selectedDate.format("YYYY-MM-DD"),
        treatments: eventTreatments
      },
      headers: {
        "captcha-response": getToken
      }
    }).then(res => {
      nextStep();
    }).catch(err => {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("Xəta baş verdi. Xahiş edirik daha sonra yenidən yoxlayın.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      setErrMessage(true);
    });
  };

  const antIcon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LoadingOutlined"], {
    style: {
      fontSize: 42
    },
    spin: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 19
  }, this);

  const prevStep = () => {
    const newStep = step - 1;
    setStep(newStep);

    if (newStep === 1) {
      setSelectedBranch(null);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  if (!localStorage.getItem("ACCESS_TOKEN")) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_13__["Navigate"], {
      to: "/login",
      state: {
        from: location
      },
      replace: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 12
    }, this);
  }

  let content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["Fragment"], {}, void 0, false);

  const isBackDeactive = step === 1 || step >= 4 || step === 2 && (eventTreatments === null || eventTreatments === void 0 ? void 0 : eventTreatments.length) > 0;

  switch (step) {
    case 1:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["Fragment"], {
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_branches_Branches__WEBPACK_IMPORTED_MODULE_7__["default"], {
            loading: loading,
            setIsShowMap: setIsShowMap,
            isShowMap: isShowMap,
            treatmentName: treatmentName,
            eventTreatments: eventTreatments,
            prevStep: prevStep,
            isBackDeactive: isBackDeactive,
            step: step,
            selectedBranch: selectedBranch,
            setSelectedBranch: setSelectedBranch,
            branches: branches,
            onSelect: onSelectBranch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 15
          }, this)
        }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
          indicator: antIcon,
          tip: "Loading...",
          style: {
            color: "#ce3d5f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 13
        }, this)
      }, void 0, false);
      break;

    case 2:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_treatments_Treatments__WEBPACK_IMPORTED_MODULE_15__["default"], {
          categories: treatments,
          isShow: isShow,
          settName: settName,
          getCategoryList: getCategoryList,
          tName: tName,
          treatmentName: treatmentName,
          setTreatmentName: setTreatmentName,
          arr: arr,
          setArr: setArr,
          step: step,
          categoryItem: categoryItem,
          onSelect: onSelectTreatment,
          organizationInfo: organizationInfo,
          selectedBranch: selectedBranch,
          prevStep: prevStep
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 11
        }, this)
      }, void 0, false);
      break;

    case 3:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_employees_Employees__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isShow: isShow,
        setIsShow: setIsShow,
        arr: arr,
        setArr: setArr,
        step: step,
        selectedBranch: selectedBranch,
        pricingOption: selectedPricingOption,
        employees: getEmployees(),
        onSelect: onSelectEmployee,
        nextStep: nextStep,
        prevStep: prevStep
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 9
      }, this);
      break;

    case 4:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_time_Time__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isShow: isShow,
        setIsShow: setIsShow,
        selectedDate: selectedDate,
        selectedDay: selectedDay,
        setSelectedDay: setSelectedDay,
        reserveTime: reserveTime,
        setReserveTime: setReserveTime,
        arr: arr,
        setArr: setArr,
        organizationInfo: organizationInfo,
        eventTreatments: eventTreatments,
        setSelectedDate: setSelectedDate,
        setSelectedTime: setSelectedTime,
        onSelectDate: onSelectDate,
        onSelectTime: onSelectTime,
        selectedTime: selectedTime,
        addTreatment: addTreatment,
        pricingOption: selectedPricingOption,
        selectedEmployee: selectedEmployee,
        blockTimes: blockTimes,
        prevStep: prevStep
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 9
      }, this);
      break;

    case 5:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_summary_Summary__WEBPACK_IMPORTED_MODULE_16__["default"], {
        setStep: setStep,
        step: step,
        eventTreatments: eventTreatments,
        treatmentName: treatmentName,
        deleteTreatment: deleteTreatment,
        addNewTreatment: addNewTreatment,
        submit: submit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 9
      }, this);
      break;

    case 6:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_client_Client__WEBPACK_IMPORTED_MODULE_10__["default"], {
        handleSubmit: onSend,
        errMessage: errMessage,
        ToastContainer: react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"],
        useGoogleReCaptcha: react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__["useGoogleReCaptcha"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 9
      }, this);
      break;

    case 7:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_util_SuccessPage_SuccessPage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        employeeAutoReservation: employeeAutoReservation,
        backToHomePage: backToHomePage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 9
      }, this);
      break;

    default:
      content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["Fragment"], {}, void 0, false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("button", {
      style: isBackDeactive ? {
        display: "none"
      } : {
        display: "block"
      },
      className: "back-button",
      onClick: prevStep,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("span", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowLeftOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 9
      }, this), "Geri"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 7
    }, this), content]
  }, void 0, true);
}

_s(ReservForm, "iKHC7kfko4t80975X6b0Fbf5ffM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_17__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_17__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_17__["useSelector"], react_router__WEBPACK_IMPORTED_MODULE_13__["useLocation"], react_router__WEBPACK_IMPORTED_MODULE_13__["useParams"], react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__["useGoogleReCaptcha"]];
});

_c = ReservForm;
/* harmony default export */ __webpack_exports__["default"] = (ReservForm);

var _c;

__webpack_require__.$Refresh$.register(_c, "ReservForm");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/summary/DeleteModal.css":
/*!************************************************!*\
  !*** ./src/Components/summary/DeleteModal.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeleteModal.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/DeleteModal.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeleteModal.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/DeleteModal.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./DeleteModal.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/DeleteModal.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/summary/DeleteModal.js":
/*!***********************************************!*\
  !*** ./src/Components/summary/DeleteModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _DeleteModal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteModal.css */ "./src/Components/summary/DeleteModal.css");
/* harmony import */ var _DeleteModal_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DeleteModal_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/summary/DeleteModal.js",
    _s = __webpack_require__.$Refresh$.signature();






const DeleteModal = ({
  setIsShowModal,
  treatmentName,
  handleDelete,
  index,
  isShowModal
}) => {
  _s();

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isShowModal && ref.current && !ref.current.contains(e.target)) {
        setIsShowModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isShowModal]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "modal",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "modal-content",
      ref: ref,
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: "close-modal",
        onClick: () => setIsShowModal(false),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiCloseLine"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
        children: ["\"", treatmentName[index], "\" xidm\u0259tini silm\u0259k ist\u0259diyinizd\u0259n \u0259minsiniz?"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "btn-groups",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
          className: "cancel-btn",
          onClick: () => setIsShowModal(false),
          children: "Ba\u011Fla"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
          className: "delete-button",
          onClick: () => handleDelete(index),
          children: "Xidm\u0259ti sil"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

_s(DeleteModal, "8uVE59eA/r6b92xF80p7sH8rXLk=");

_c = DeleteModal;
/* harmony default export */ __webpack_exports__["default"] = (DeleteModal);

var _c;

__webpack_require__.$Refresh$.register(_c, "DeleteModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/summary/Summary.css":
/*!********************************************!*\
  !*** ./src/Components/summary/Summary.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Summary.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/Summary.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Summary.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/Summary.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Summary.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/summary/Summary.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/summary/Summary.js":
/*!*******************************************!*\
  !*** ./src/Components/summary/Summary.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _util_duration_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/duration.util */ "./src/Components/util/duration.util.js");
/* harmony import */ var _util_PricingOptions_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/PricingOptions.util */ "./src/Components/util/PricingOptions.util.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Summary_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Summary.css */ "./src/Components/summary/Summary.css");
/* harmony import */ var _Summary_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Summary_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DeleteModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteModal */ "./src/Components/summary/DeleteModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/summary/Summary.js",
    _s = __webpack_require__.$Refresh$.signature();













const Summary1 = ({
  step,
  eventTreatments,
  deleteTreatment,
  addNewTreatment,
  submit,
  treatmentName
}) => {
  _s();

  const totalAmount = [];
  const totalDuration = [];
  const [isShowModal, setIsShowModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [index, setIndex] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const getSumPrice = eventTreatment => {
    return (eventTreatment === null || eventTreatment === void 0 ? void 0 : eventTreatment.specialPrice) ? eventTreatment.specialPrice : eventTreatment.price;
  };

  eventTreatments.map(price => totalAmount.push(getSumPrice(price)));
  eventTreatments.map(duration => totalDuration.push(duration.duration));

  const add = (acc, x) => {
    return acc + x;
  };

  const handleDelete = index => {
    deleteTreatment(index);
    setIsShowModal(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "summary-page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
        children: ["Xidm\u0259tl\u0259r (", eventTreatments.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "table-wrap",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("table", {
          className: "table table-responsive-xl",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                children: "Filial"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                children: "Xidm\u0259t"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                children: "Usta"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                children: "Qiym\u0259t"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                children: "M\xFCdd\u0259t"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                children: "Tarix"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tbody", {
            children: eventTreatments.map((eventTreatment, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                  onClick: () => {
                    setIndex(index);
                    setIsShowModal(true);
                  },
                  className: "remove-btn",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__["RiCloseLine"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: eventTreatment.selectedBranch
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "img"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "pl-3 email",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    children: eventTreatment.treatmentName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: eventTreatment.employeeName + " " + eventTreatment.employeeSurname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: Object(_util_PricingOptions_util__WEBPACK_IMPORTED_MODULE_4__["getPrice"])(eventTreatment)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: Object(_util_duration_util__WEBPACK_IMPORTED_MODULE_3__["getDurationText"])(eventTreatment.duration)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: moment__WEBPACK_IMPORTED_MODULE_5___default()(eventTreatment.reserveDate).format("LL")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: [" ", eventTreatment.reserveTime]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "summary-tab",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "summary",
          children: ["Yekun m\u0259bl\u0259\u011F:", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
            children: totalAmount.reduce(add, 0) + " AZN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "summary-buttons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "add-treatment",
            onClick: addNewTreatment,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), " Yeni xidm\u0259t \u0259lav\u0259 et"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            disabled: eventTreatments.length === 0 && true,
            className: eventTreatments.length === 0 ? "submit-btn disabled" : "submit-btn",
            onClick: submit,
            children: "T\u0259sdiql\u0259"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), isShowModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_DeleteModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      handleDelete: handleDelete,
      index: index,
      treatmentName: treatmentName,
      isShowModal: isShowModal,
      setIsShowModal: setIsShowModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

_s(Summary1, "ojpoNhLGNRLp5Nsc+nKC7aNfo1M=");

_c = Summary1;
/* harmony default export */ __webpack_exports__["default"] = (Summary1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Summary1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/time/Time.js":
/*!*************************************!*\
  !*** ./src/Components/time/Time.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _timepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timepicker.css */ "./src/Components/time/timepicker.css");
/* harmony import */ var _timepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_timepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_az__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/az */ "./node_modules/moment/locale/az.js");
/* harmony import */ var moment_locale_az__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_az__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_es_date_picker_locale_az_AZ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/date-picker/locale/az_AZ */ "./node_modules/antd/es/date-picker/locale/az_AZ.js");
/* harmony import */ var _common_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/PageHeader */ "./src/Components/common/PageHeader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/time/Time.js",
    _s = __webpack_require__.$Refresh$.signature();












function Time({
  prevStep,
  addTreatment,
  onSelectTime,
  selectedTime,
  blockTimes,
  onSelectDate,
  selectedDate,
  setSelectedDate,
  eventTreatments,
  pricingOption,
  selectedEmployee,
  organizationInfo,
  // setReserveTime,
  // reserveTime,
  // setSelectedDay,
  // selectedDay,
  setIsShow
}) {
  _s();

  var _Object$entries$filte;

  const [workStartsAt, setWorkStartsAt] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [workEndsAt, setWorkEndsAt] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [hours, setHours] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(workStartsAt);
  const [activeTime, setActiveTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [activeHour, setActiveHour] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    Content
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
  const dateFormat = "YYYY-MM-DD";
  const today = new Date();
  const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const dayOfWeek = moment__WEBPACK_IMPORTED_MODULE_3___default()(selectedDate).day();
  const schedule = organizationInfo.schedule;
  const Monday = schedule.MONDAY;
  const Tuesday = schedule.TUESDAY;
  const Wednesday = schedule.WEDNESDAY;
  const Thursday = schedule.THURSDAY;
  const Friday = schedule.FRIDAY;
  const Saturday = schedule.SATURDAY;
  const Sunday = schedule.SUNDAY;
  const dayOffs = (_Object$entries$filte = Object.entries(schedule).filter(days => !days[1].work)) === null || _Object$entries$filte === void 0 ? void 0 : _Object$entries$filte.map(day => day[0]);

  const disabledDate = current => {
    let beforeCurrentDay = moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-1, "days") >= current;
    let dayName = moment__WEBPACK_IMPORTED_MODULE_3___default()(current).locale("en").format("dddd").toUpperCase();
    return beforeCurrentDay || (dayOffs === null || dayOffs === void 0 ? void 0 : dayOffs.find(day => day === dayName));
  };

  const onClickHours = e => {
    setHours(e.target.value);
    e.preventDefault();
  };

  const onClickFullTime = e => {
    e.preventDefault();
    getTime(e);
  };

  const getTime = e => {
    onSelectTime(e.target.value);
  };

  const takeHourFromStartTime = time => {
    return time == null ? "09" : time.slice(0, 2);
  };

  const takeHourFromEndTime = time => {
    return time == null ? "20" : time.slice(0, 2);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    switch (dayOfWeek) {
      case 0:
        setWorkStartsAt(takeHourFromStartTime(Sunday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Sunday.endTime));
        break;

      case 1:
        setWorkStartsAt(takeHourFromStartTime(Monday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Monday.endTime));
        break;

      case 2:
        setWorkStartsAt(takeHourFromStartTime(Tuesday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Tuesday.endTime));
        break;

      case 3:
        setWorkStartsAt(takeHourFromStartTime(Wednesday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Wednesday.endTime));
        break;

      case 4:
        setWorkStartsAt(takeHourFromStartTime(Thursday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Thursday.endTime));
        break;

      case 5:
        setWorkStartsAt(takeHourFromStartTime(Friday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Friday.endTime));
        break;

      case 6:
        setWorkStartsAt(takeHourFromStartTime(Saturday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Saturday.endTime));
        break;

      default:
        setWorkStartsAt(takeHourFromStartTime(Monday.startTime));
        setWorkEndsAt(takeHourFromEndTime(Monday.endTime));
    }
  }, [dayOfWeek, Monday.startTime, Monday.endTime, Tuesday.startTime, Tuesday.endTime, Wednesday.startTime, Wednesday.endTime, Thursday.startTime, Thursday.endTime, Friday.startTime, Friday.endTime, Saturday.startTime, Saturday.endTime, Sunday.startTime, Sunday.endTime]);
  let hoursArray = [];
  let fullTimeArray = [];

  const timeOptions = () => {
    for (let i = parseInt(workStartsAt); i <= parseInt(workEndsAt); i++) {
      if (i < 10) {
        i = "0" + i;
      }

      hoursArray.push(i);
    }

    for (let i = 0; i < 60; i = i + 5) {
      fullTimeArray.push(hours + ":" + (i < 10 ? "0" + i : i));
    }
  };

  const setDateToNull = () => {
    if (eventTreatments.length === 0) {
      setSelectedDate(null);
    }

    prevStep();
  };

  timeOptions();
  let duration = pricingOption.duration;
  const index = pricingOption.employees.findIndex(poe => poe.employeeId === selectedEmployee.id);

  if (index !== -1) {
    duration = pricingOption.employees[index].duration;
  }

  const isAvailable = time => {
    for (let i = 0; i < (blockTimes === null || blockTimes === void 0 ? void 0 : blockTimes.length); i++) {
      let startTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(blockTimes[i].startTime, "HH:mm").subtract(duration, "minutes");

      if (pricingOption.extraTimeDuration) {
        startTime = startTime.subtract(pricingOption.extraTimeDuration, "minutes");
      }

      if (moment__WEBPACK_IMPORTED_MODULE_3___default()(time).isSameOrAfter(startTime) && moment__WEBPACK_IMPORTED_MODULE_3___default()(time).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_3___default()(blockTimes[i].endTime, "HH:mm"))) {
        return false;
      }
    }

    if (moment__WEBPACK_IMPORTED_MODULE_3___default()(selectedDate) < moment__WEBPACK_IMPORTED_MODULE_3___default()() && moment__WEBPACK_IMPORTED_MODULE_3___default()(time).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_3___default()())) {
      return false;
    }

    return true;
  };

  const timesSelection = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "full-time",
    children: fullTimeArray.map((time, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
        className: (time < moment__WEBPACK_IMPORTED_MODULE_3___default()().format("HH:mm") && moment__WEBPACK_IMPORTED_MODULE_3___default()(selectedDate) < moment__WEBPACK_IMPORTED_MODULE_3___default()() || !isAvailable(moment__WEBPACK_IMPORTED_MODULE_3___default()(time, "HH:mm")) ? "hide" : "") || (time === activeTime ? "active" : "") || (!isAvailable(moment__WEBPACK_IMPORTED_MODULE_3___default()(time, "HH:mm")) || selectedDate === null ? "disable" : ""),
        onClick: e => {
          setActiveTime(time);
          onClickFullTime(e);
        },
        value: time,
        children: time
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_common_PageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Vaxt v\u0259 Tarix"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
      className: "time-layout",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Content, {
        className: "layout-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
          style: {
            width: 100
          },
          className: "time-back-button",
          onClick: setDateToNull,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeftOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, this), "Geri"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          children: "Tarixi se\xE7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
          disabled: (eventTreatments === null || eventTreatments === void 0 ? void 0 : eventTreatments.length) > 0,
          className: "datePicker",
          defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()(date, dateFormat),
          format: dateFormat,
          onChange: onSelectDate,
          disabledDate: disabledDate,
          value: selectedDate,
          size: "large",
          style: {
            width: "400px"
          },
          locale: antd_es_date_picker_locale_az_AZ__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "timepicker",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
            children: "Saat\u0131 se\xE7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "hours",
            children: hoursArray.map((hour, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                onClick: e => {
                  setActiveHour(hour);
                  onClickHours(e);
                },
                disabled: selectedDate === null ? true : false,
                className: (hour < moment__WEBPACK_IMPORTED_MODULE_3___default()().get("hours") && moment__WEBPACK_IMPORTED_MODULE_3___default()(selectedDate) < moment__WEBPACK_IMPORTED_MODULE_3___default()() ? "hide" : "") || (hour === activeHour ? "active" : "") || (selectedDate === null ? "disable" : ""),
                value: hour,
                children: hour
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this), activeHour && timesSelection]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: selectedTime === null || selectedDate === null ? "disabled" : "add-button",
          disabled: selectedTime === null || selectedDate === null ? true : false,
          onClick: () => {
            addTreatment(); // setReserveTime([...reserveTime, selectedTime]);
            // setSelectedDay([...selectedDay, selectedDay]);

            setIsShow(false);
          },
          children: "\u018Flav\u0259 et"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Time, "TxrVs6jvMsXPLzgLQS0B+s7YoTg=");

_c = Time;
/* harmony default export */ __webpack_exports__["default"] = (Time);

var _c;

__webpack_require__.$Refresh$.register(_c, "Time");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/time/timepicker.css":
/*!********************************************!*\
  !*** ./src/Components/time/timepicker.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./timepicker.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/time/timepicker.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./timepicker.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/time/timepicker.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./timepicker.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/time/timepicker.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/treatments/Treatments.css":
/*!**************************************************!*\
  !*** ./src/Components/treatments/Treatments.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Treatments.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/treatments/Treatments.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Treatments.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/treatments/Treatments.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Treatments.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/treatments/Treatments.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/treatments/Treatments.js":
/*!*************************************************!*\
  !*** ./src/Components/treatments/Treatments.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _common_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PageHeader */ "./src/Components/common/PageHeader.js");
/* harmony import */ var _branches_Branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../branches/Branch */ "./src/Components/branches/Branch.js");
/* harmony import */ var _Treatments_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Treatments.css */ "./src/Components/treatments/Treatments.css");
/* harmony import */ var _Treatments_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Treatments_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _categories_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../categories/Category */ "./src/Components/categories/Category.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/treatments/Treatments.js";










const {
  Panel
} = antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"];

function Treatment({
  categoryItem,
  onSelect,
  selectedBranch,
  settName,
  categories,
  getCategoryList
}) {
  const categoryItems = categoryItem ? categoryItem : categories[0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_common_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Xidm\u0259tl\u0259r"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), categoryItems ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "treatments-wrap",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        gutter: [16, 16],
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 24,
          sm: 12,
          md: 10,
          lg: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_categories_Category__WEBPACK_IMPORTED_MODULE_6__["default"], {
            categoryItem: categoryItem,
            categories: categories,
            getCategoryList: getCategoryList
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 24,
          sm: 12,
          md: 14,
          lg: 16,
          children: categoryItems === null || categoryItems === void 0 ? void 0 : categoryItems.treatments.map((treatment, index) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
                bordered: false,
                defaultActiveKey: [index],
                expandIconPosition: "right",
                expandIcon: ({
                  isActive
                }) => isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MinusOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 36
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 56
                }, this),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Panel, {
                  className: "treatment-panel",
                  header: treatment.name,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: treatment.pricingOptions.map(pricingOption => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        onClick: () => {
                          onSelect(treatment, pricingOption, selectedBranch);
                        },
                        className: "treatment-card",
                        style: treatment.pricingOptions.length > 1 ? {
                          marginBottom: 5
                        } : null,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                          children: pricingOption.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 73,
                          columnNumber: 35
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                          children: treatment.gender
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 74,
                          columnNumber: 35
                        }, this)]
                      }, pricingOption.id, true, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 33
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 25
                  }, this)
                }, 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 23
                }, this)
              }, treatment.id, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 19
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
        className: "error-message",
        children: ["Filiala uy\u011Fun xidm\u0259tl\u0259r \u0259lav\u0259 edilm\u0259yib", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__["BiErrorCircle"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_c = Treatment;
/* harmony default export */ __webpack_exports__["default"] = (Treatment);

var _c;

__webpack_require__.$Refresh$.register(_c, "Treatment");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/util/PricingOptions.util.js":
/*!****************************************************!*\
  !*** ./src/Components/util/PricingOptions.util.js ***!
  \****************************************************/
/*! exports provided: getPriceText, getPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriceText", function() { return getPriceText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrice", function() { return getPrice; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

function getPriceText(price, type, currency) {
  let text = "";

  switch (type) {
    case "FIXED":
      text = price + " " + currency;
      break;

    case "FROM":
      text = price + " " + currency + "-dan başlayır";
      break;

    case "FREE":
      text = "Pulsuz";
      break;

    default:
      break;
  }

  return text;
}
;
function getPrice(pricingOption) {
  let price = pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.price;

  if (pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.specialPrice) {
    price = pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.specialPrice;
  }

  return getPriceText(price, pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.priceType, (pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.currency) === undefined ? "AZN" : pricingOption === null || pricingOption === void 0 ? void 0 : pricingOption.currency);
}
;
const priceType = {
  FROM: "Başlanğıç",
  FIXED: "Fiks",
  FREE: "Pulsuz"
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/util/SuccessPage/SuccessPage.js":
/*!********************************************************!*\
  !*** ./src/Components/util/SuccessPage/SuccessPage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/Components/util/SuccessPage/SuccessPage.js";





function SuccessPage({
  backToHomePage,
  employeeAutoReservation
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: resultStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
        status: "success",
        title: "T\u0259\u015F\u0259kk\xFCrl\u0259r!",
        subTitle: employeeAutoReservation.includes(false) ? "Sizin sorğunuz göndərildi. Sizə geri dönüş ediləcək" : "Sizin sorğunuz qəbul edildi. Zəhmət olmasa təyin edilmiş vaxtdan 10 dəqiqə öncə ünvanda olun."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "back-to-home-page",
        onClick: backToHomePage,
        children: "Ana s\u0259hif\u0259y\u0259 geri d\xF6n"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = SuccessPage;
const resultStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "auto",
  width: "80%",
  padding: "20px 0",
  borderRadius: "5px",
  margin: "100px auto",
  boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
};
/* harmony default export */ __webpack_exports__["default"] = (SuccessPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "SuccessPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/util/duration.util.js":
/*!**********************************************!*\
  !*** ./src/Components/util/duration.util.js ***!
  \**********************************************/
/*! exports provided: getDurationText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationText", function() { return getDurationText; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

function getDurationText(minutes) {
  let hours = parseInt(minutes / 60);
  let text = '';

  if (hours >= 1) {
    text = `${hours} saat `;
  }

  minutes = minutes - hours * 60;

  if (minutes > 0) {
    text += `${minutes} dəqiqə`;
  }

  if (minutes === 0 && hours === 0) {
    text += 'Yoxdur';
  }

  return text;
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/constants/config.constant.js":
/*!******************************************!*\
  !*** ./src/constants/config.constant.js ***!
  \******************************************/
/*! exports provided: ACCESS_TOKEN, ORGANIZATION_ID, ORGANIZATIONS, DISPLAY_NAME, LANG, API_URL, ONE_SIGNAL_APP_ID, RECAPTCHA_KEY, GOOGLE_MAP_API_KEY, isProd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORGANIZATION_ID", function() { return ORGANIZATION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORGANIZATIONS", function() { return ORGANIZATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_NAME", function() { return DISPLAY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG", function() { return LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_SIGNAL_APP_ID", function() { return ONE_SIGNAL_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_KEY", function() { return RECAPTCHA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_MAP_API_KEY", function() { return GOOGLE_MAP_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProd", function() { return isProd; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const ACCESS_TOKEN = "accessToken";
const ORGANIZATION_ID = "organizationId";
const ORGANIZATIONS = "organizations";
const DISPLAY_NAME = "displayName";
const LANG = "lang";
const dev = {
  API_URL: "https://40.85.121.130:8004",
  ONE_SIGNAL_APP_ID: "67c3a1b6-e886-4515-a0e8-e0b711d7169b",
  RECAPTCHA_KEY: "6LeD-I4dAAAAAKWjpNVbQGL6SxiY8qQ0ZucX05xs",
  GOOGLE_MAP_API_KEY: "AIzaSyCK_50mUzScfEHJcToEx2gAWvwOiVryBQE"
};
const test = {
  API_URL: "https://40.85.121.130:8004",
  ONE_SIGNAL_APP_ID: "67c3a1b6-e886-4515-a0e8-e0b711d7169b",
  GOOGLE_MAP_API_KEY: "AIzaSyCK_50mUzScfEHJcToEx2gAWvwOiVryBQE",
  RECAPTCHA_KEY: "6LeD-I4dAAAAAKWjpNVbQGL6SxiY8qQ0ZucX05xs"
};
const prod = {
  API_URL: "https://rihand.az:2087",
  ONE_SIGNAL_APP_ID: "5da1245c-22d5-439d-bba8-fbce62551092",
  GOOGLE_MAP_API_KEY: "AIzaSyCK_50mUzScfEHJcToEx2gAWvwOiVryBQE",
  RECAPTCHA_KEY: "6LeD-I4dAAAAAKWjpNVbQGL6SxiY8qQ0ZucX05xs"
};
let obj = {};

switch (Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_NODE_ENV) {
  case "prod":
    obj = prod;
    break;

  case "test":
    obj = test;
    break;

  default:
    obj = dev;
}

const API_URL = obj.API_URL;
const ONE_SIGNAL_APP_ID = obj.ONE_SIGNAL_APP_ID;
const RECAPTCHA_KEY = obj.RECAPTCHA_KEY;
const GOOGLE_MAP_API_KEY = obj.GOOGLE_MAP_API_KEY;
const isProd = () => Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_NODE_ENV === "prod";

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/font/Questrial-Regular.ttf":
/*!****************************************!*\
  !*** ./src/font/Questrial-Regular.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Questrial-Regular.96dd668f.ttf");

/***/ }),

/***/ "./src/images/avatar.jpg":
/*!*******************************!*\
  !*** ./src/images/avatar.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/avatar.8aea9c69.jpg");

/***/ }),

/***/ "./src/images/image-rita.png":
/*!***********************************!*\
  !*** ./src/images/image-rita.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/image-rita.6732a429.png");

/***/ }),

/***/ "./src/images/newLogo.svg":
/*!********************************!*\
  !*** ./src/images/newLogo.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/newLogo.29bc0521.svg");

/***/ }),

/***/ "./src/images/profile.svg":
/*!********************************!*\
  !*** ./src/images/profile.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/profile.839eb715.svg");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/reset.css */ "./src/style/reset.css");
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_reset_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_config_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/config.constant */ "./src/constants/config.constant.js");
/* harmony import */ var antd_lib_locale_az_AZ__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/locale/az_AZ */ "./node_modules/antd/lib/locale/az_AZ.js");
/* harmony import */ var antd_lib_locale_az_AZ__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_az_AZ__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-google-recaptcha-v3 */ "./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redux/store/store */ "./src/redux/store/store.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/index.js";

















react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["BrowserRouter"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_12__["GoogleReCaptchaProvider"], {
    reCaptchaKey: _constants_config_constant__WEBPACK_IMPORTED_MODULE_8__["RECAPTCHA_KEY"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_10__["ConfigProvider"], {
      locale: antd_lib_locale_az_AZ__WEBPACK_IMPORTED_MODULE_9___default.a,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
          store: _redux_store_store__WEBPACK_IMPORTED_MODULE_14__["default"],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 20,
  columnNumber: 3
}, undefined), document.getElementById("root"));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/features/BranchSlice.js":
/*!*******************************************!*\
  !*** ./src/redux/features/BranchSlice.js ***!
  \*******************************************/
/*! exports provided: createTreatment, default, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTreatment", function() { return createTreatment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  eventTreatments1: [],
  treatment1: {}
};
const branchSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "branch",
  initialState,
  reducers: {
    createTreatment: (state, action) => {
      var _action$payload, _action$payload2, _action$payload3, _action$payload4, _action$payload5, _action$payload6, _action$payload7, _action$payload8, _action$payload9;

      let treatment = {
        treatmentName: (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.treatmentName,
        selectedBranch: (_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.selectedBranch,
        employeeId: (_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.employeeId,
        employeeName: (_action$payload4 = action.payload) === null || _action$payload4 === void 0 ? void 0 : _action$payload4.employeeName,
        employeeSurname: (_action$payload5 = action.payload) === null || _action$payload5 === void 0 ? void 0 : _action$payload5.employeeSurname,
        price: (_action$payload6 = action.payload) === null || _action$payload6 === void 0 ? void 0 : _action$payload6.price,
        duration: (_action$payload7 = action.payload) === null || _action$payload7 === void 0 ? void 0 : _action$payload7.duration,
        reserveTime: (_action$payload8 = action.payload) === null || _action$payload8 === void 0 ? void 0 : _action$payload8.reserveTime,
        specialPrice: (_action$payload9 = action.payload) === null || _action$payload9 === void 0 ? void 0 : _action$payload9.specialPrice
      };
      state.eventTreatments1 = [treatment];
    }
  }
});
const {
  createTreatment
} = branchSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (branchSlice.reducer);
const getState = {
  getTreat: state => state.branch.eventTreatments1
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/store/store.js":
/*!**********************************!*\
  !*** ./src/redux/store/store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var _services_branches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/branches */ "./src/services/branches.js");
/* harmony import */ var _features_BranchSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/BranchSlice */ "./src/redux/features/BranchSlice.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    [_services_branches__WEBPACK_IMPORTED_MODULE_2__["branchesApi"].reducerPath]: _services_branches__WEBPACK_IMPORTED_MODULE_2__["branchesApi"].reducer,
    branch: _features_BranchSlice__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(_services_branches__WEBPACK_IMPORTED_MODULE_2__["branchesApi"].middleware)
});
Object(_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__["setupListeners"])(store.dispatch);
/* harmony default export */ __webpack_exports__["default"] = (store);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/services/branches.js":
/*!**********************************!*\
  !*** ./src/services/branches.js ***!
  \**********************************/
/*! exports provided: branchesApi, useGetBranchesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branchesApi", function() { return branchesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetBranchesQuery", function() { return useGetBranchesQuery; });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _constants_config_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config.constant */ "./src/constants/config.constant.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const branchesApi = Object(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__["createApi"])({
  reducerPath: "branches",
  baseQuery: Object(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__["fetchBaseQuery"])({
    baseUrl: _constants_config_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"]
  }),
  endpoints: builder => ({
    getBranches: builder.query({
      query: slug => `api/organizations/${slug}/branches`
    })
  })
});
const {
  useGetBranchesQuery
} = branchesApi;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/style/reset.css":
/*!*****************************!*\
  !*** ./src/style/reset.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./reset.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/reset.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./reset.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/reset.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./reset.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/reset.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/style.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/user/Desktop/Rihand/RihandProjects/RihandBooking/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/user/Desktop/Rihand/RihandProjects/RihandBooking/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/user/Desktop/Rihand/RihandProjects/RihandBooking/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/user/Desktop/Rihand/RihandProjects/RihandBooking/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map