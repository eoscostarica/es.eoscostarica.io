(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createChainedFunction; });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    if (false) {}

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createSvgIcon; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(143);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon_SvgIcon = /*#__PURE__*/react["forwardRef"](function SvgIcon(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'svg' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'medium' : _props$fontSize,
      htmlColor = props.htmlColor,
      titleAccess = props.titleAccess,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, color !== 'inherit' && classes["color".concat(Object(capitalize["a" /* default */])(color))], fontSize !== 'default' && fontSize !== 'medium' && classes["fontSize".concat(Object(capitalize["a" /* default */])(fontSize))]),
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, other), children, titleAccess ? /*#__PURE__*/react["createElement"]("title", null, titleAccess) : null);
});
 false ? undefined : void 0;
SvgIcon_SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ var esm_SvgIcon_SvgIcon = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon_SvgIcon));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js



/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react_default.a.createElement(esm_SvgIcon_SvgIcon, Object(esm_extends["a" /* default */])({
      ref: ref
    }, props), path);
  };

  if (false) {}

  Component.muiName = esm_SvgIcon_SvgIcon.muiName;
  return /*#__PURE__*/react_default.a.memo( /*#__PURE__*/react_default.a.forwardRef(Component));
}

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(135);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(229);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(769);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(143);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: '50%',
      overflow: 'visible',
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* alpha */ "a"])(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      '$sizeSmall&': {
        marginLeft: -3
      }
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      '$sizeSmall&': {
        marginRight: -3
      }
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* alpha */ "a"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* alpha */ "a"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },

    /* Styles applied to the children container element. */
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

var IconButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function IconButton(props, ref) {
  var _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, color !== 'default' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(color))], disabled && classes.disabled, size === "small" && classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))], {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: classes.label
  }, children));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiIconButton'
})(IconButton));

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(767);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(741);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(743);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(737);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(736);
var GenericRadio=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({root:{color:'gray','&$checked':{color:'#5484b3'}},checked:{}})(function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],Object(_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({color:"default"},props));});var FormComponent=function FormComponent(_ref){var formQuestions=_ref.formQuestions,isDesktop=_ref.isDesktop,onSubmit=_ref.onSubmit;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),activeStep=_useState[0],setActiveStep=_useState[1];var _useState2=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),disableButton=_useState2[0],setDisableButton=_useState2[1];var refNextSection=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);refNextSection.current=Array(formQuestions.length).fill().map(function(_,i){return/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();});var handleNext=function handleNext(){setActiveStep(function(prevActiveStep){return prevActiveStep+1;});formQuestions[activeStep+1].visible=true;refNextSection.current[activeStep+1].scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});handleDisableButton();};var handleEnableButton=function handleEnableButton(){setDisableButton(false);};var handleDisableButton=function handleDisableButton(){setDisableButton(true);};var setQuestionValue=function setQuestionValue(indexSection,indexQuestion,value){formQuestions[indexSection].questions[indexQuestion].value=value;if(isSectionComplete(indexSection)){handleEnableButton();}};var isSectionComplete=function isSectionComplete(indexSection){var flag=true;formQuestions[indexSection].questions.map(function(item){if(item.value===-1)flag=false;});return flag;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,formQuestions.map(function(section,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{key:section.title,className:"formBox",style:{backgroundColor:section.color},ref:function ref(el){return refNextSection.current[i]=el;}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",{style:{margin:0}},section.title),section.visible&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])("topSpacingBox","spacingBox")},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,section.description)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null,section.questions.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:"spacingBox",key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"itemQuestion"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b",null,section.index+1,".",i+1)," - ",item.question),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:"radioBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{component:"fieldset"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{row:true,"aria-label":"form",name:"form1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"1",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"1",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,1);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"2",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"2",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,2);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"3",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"3",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,3);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"4",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"4",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,4);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{value:"5",control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GenericRadio,null),label:"5",style:{marginRight:isDesktop?'50px':'20px'},onChange:function onChange(){setQuestionValue(section.index,i,5);}})))));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{className:Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])("boxFlexEnd","spacingBox")},activeStep===section.index&&activeStep!==formQuestions.length-1&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"buttonPrimary",style:{marginLeft:'10px'},onClick:handleNext,disabled:disableButton},"Next"),activeStep===section.index&&activeStep===formQuestions.length-1&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"buttonPrimary",style:{marginLeft:'10px'},onClick:onSubmit,disabled:disableButton},"Finish"))));}));};FormComponent.propTypes={formQuestions:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,isDesktop:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,onSubmit:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func};FormComponent.defaultProps={formQuestions:[]};/* harmony default export */ __webpack_exports__["default"] = (FormComponent);

/***/ })

}]);