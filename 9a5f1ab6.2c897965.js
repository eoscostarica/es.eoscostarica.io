(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
var Accordion=function Accordion(_ref){var _clsx,_clsx2;var content=_ref.content,title=_ref.title,titleStyle=_ref.titleStyle,_ref$useMaxWidth=_ref.useMaxWidth,useMaxWidth=_ref$useMaxWidth===void 0?false:_ref$useMaxWidth;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),isOpen=_useState[0],setIsOpen=_useState[1];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.accordion},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,onClick:function onClick(){return setIsOpen(!isOpen);}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleText,titleStyle)},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:isOpen?_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.arrowUp:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.arrowDown})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,(_clsx={},_clsx[_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentOpen]=isOpen,_clsx[_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boxWrapper]=useMaxWidth,_clsx))},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentText,(_clsx2={},_clsx2[_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTextOpen]=isOpen,_clsx2))},content)));};/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Accordion));

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