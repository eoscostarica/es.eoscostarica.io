(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
var ContentSection=function ContentSection(_ref){var children=_ref.children,sectionStyle=_ref.sectionStyle,boxStyle=_ref.boxStyle,childrenWrapperStyle=_ref.childrenWrapperStyle;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:sectionStyle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("container",boxStyle)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("row",childrenWrapperStyle)},children)));};/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ContentSection));

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ })

}]);