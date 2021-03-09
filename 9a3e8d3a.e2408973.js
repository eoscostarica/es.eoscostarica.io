(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
var ContactUs=function ContactUs(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({name:"",lastname:"",email:"",companyName:"",comments:""}),formData=_useState[0],setFormData=_useState[1];var handleOnChange=function handleOnChange(key){return function(event){var _Object$assign;setFormData(Object.assign({},formData,(_Object$assign={},_Object$assign[key]=event.target.value,_Object$assign)));};};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sectionWhite,_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactUsBox)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("container",_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.noMarginTop),id:"contactUs"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("row",_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flexColumn)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Cont\xE1ctenos"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Conversemos. Preg\xFAntenos c\xF3mo podemos ayudarlo a implementar la tecnolog\xEDa blockchain en su organizaci\xF3n."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.completeName},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textField,placeholder:"Nombre",onChange:handleOnChange("name"),value:formData.name}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textField,placeholder:"Apellido",onChange:handleOnChange("lastname"),value:formData.lastname})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textField,placeholder:"Email",onChange:handleOnChange("email"),value:formData.email}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textField,placeholder:"Nombre de la compa\xF1\xEDa (opcional)",onChange:handleOnChange("companyName"),value:formData.companyName}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textareaField,rows:"4",placeholder:"Comentarios adicionales (opcional)",onChange:handleOnChange("comments"),value:formData.comments})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactUsMessage},"Solo mantendremos su informaci\xF3n para responder a este mensaje y no la utilizaremos para otros prop\xF3sitos."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainButton},"Enviar"))));};/* harmony default export */ __webpack_exports__["default"] = (ContactUs);

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