"use strict";
(self["webpackChunkes_eoscostarica_io"] = self["webpackChunkes_eoscostarica_io"] || []).push([[5060],{

/***/ 41749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86010);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1591);


// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/






var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justifyContent="center"`. */
    'justify-content-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justifyContent="flex-end"`. */
    'justify-content-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justifyContent="space-between"`. */
    'justify-content-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justifyContent="space-around"`. */
    'justify-content-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justifyContent="space-evenly"`. */
    'justify-content-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      justify = props.justify,
      _props$justifyContent = props.justifyContent,
      justifyContent = _props$justifyContent === void 0 ? 'flex-start' : _props$justifyContent,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "justifyContent", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], (justify || justifyContent) !== 'flex-start' && classes["justify-content-xs-".concat(String(justify || justifyContent))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
    className: className,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
var StyledGrid = (0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(styles, {
  name: 'MuiGrid'
})(Grid);

if (false) { var requireProp; }

/* harmony default export */ __webpack_exports__["Z"] = (StyledGrid);

/***/ }),

/***/ 79437:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ debounce; }
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ 67557:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74165);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80343);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41749);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15575);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43950);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15046);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1591);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1852);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34853);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95477);
var GenericInput=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({root:{width:'100%',padding:'10px',border:'solid 1px gray'},input:{fontFamily:'Lato',fontSize:19,fontWeight:'normal','&:-webkit-autofill':{transitionDelay:'9999s',transitionProperty:'background-color, color'}},focused:{border:'solid 1px #5484b3'}})(function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,props);});var LacchainForm=function LacchainForm(){var isMobile=(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({query:'(max-width: 960px)'});var isDesktop=(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({query:'(min-width: 960px)'});var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),resultsSection=_useState[0],setResultsSection=_useState[1];var ContactForm=function ContactForm(){var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),errorMessage=_useState2[0],setErrorMessage=_useState2[1];var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),recaptchaValue=_useState3[0],setRecaptchaValue=_useState3[1];var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),submitLoading=_useState4[0],setSubmitLoading=_useState4[1];var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({email:'',firstName:'',lastName:'',companyName:'',additionalComments:''}),contactForm=_useState5[0],setContactForm=_useState5[1];var handleSetField=function handleSetField(field,value){var _Object$assign;setContactForm(Object.assign({},contactForm,(_Object$assign={},_Object$assign[field]=value,_Object$assign)));};var handleCloseErrorMessage=function handleCloseErrorMessage(){setErrorMessage(false);};var validateEmail=function validateEmail(mail){var regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;return regex.test(mail);};var onSubmitForms=/*#__PURE__*/function(){var _ref=(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(/*#__PURE__*/(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee(e){return (0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:e.preventDefault();setSubmitLoading(true);sendData();case 3:case"end":return _context.stop();}}},_callee);}));return function onSubmitForms(_x){return _ref.apply(this,arguments);};}();var sendData=/*#__PURE__*/function(){var _ref2=(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(/*#__PURE__*/(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee2(){var jsonData,requestOptions,response;return (0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:jsonData={"fields":[{"name":"email","value":contactForm.email},{"name":"company","value":contactForm.companyName},{"name":"firstname","value":contactForm.firstName},{"name":"lastname","value":contactForm.lastName},{"name":"message","value":contactForm.additionalComments}],"context":{"pageUri":"https://es.eoscostarica.io/lacchain","pageName":"EOS Costa Rica: LACChain EOSIO"},"legalConsentOptions":{"consent":{"consentToProcess":true,"text":"Acepto permitir que EOS Costa Rica almacene y procese mis datos personales.","communications":[{"value":true,"subscriptionTypeId":999,"text":"Acepto recibir comunicaciones de marketing de EOS Costa Rica."}]}}};requestOptions={method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(jsonData)};_context2.next=4;return fetch("https://api.hsforms.com/submissions/v3/integration/submit/"+"9018734"+"/"+"49f5c2c0-5f35-4faf-bff3-0b3531c6a2a3",requestOptions);case 4:response=_context2.sent;if(response.ok)setResultsSection(true);else setErrorMessage(true);setSubmitLoading(false);case 7:case"end":return _context2.stop();}}},_callee2);}));return function sendData(){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{onSubmit:onSubmitForms,noValidate:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{container:true,spacing:2},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:6},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"firstName_contact"},"Nombre *"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"inputFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericInput,{id:"firstName_contact",value:contactForm.firstName||'',onChange:function onChange(event){return handleSetField('firstName',event.target.value);},required:true}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:6},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"lastName_contact"},"Apellido *"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"inputFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericInput,{id:"lastName_contact",value:contactForm.lastName||'',onChange:function onChange(event){return handleSetField('lastName',event.target.value);},required:true}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:6},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"email_contact"},"Email *"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"inputFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericInput,{id:"email_contact",value:contactForm.email||'',onChange:function onChange(event){return handleSetField('email',event.target.value);},required:true}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:6},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"companyName_contact"},"Organizaci\xF3n o compa\xF1\xEDa"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"inputFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericInput,{id:"companyName_contact",value:contactForm.companyName||'',onChange:function onChange(event){return handleSetField('companyName',event.target.value);},required:true}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"additionalComments_contact"},"Comentarios adicionales"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"inputFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GenericInput,{id:"additionalComments_contact",value:contactForm.additionalComments||'',onChange:function onChange(event){return handleSetField('additionalComments',event.target.value);},required:true,multiline:true,rows:3}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Respetamos su privacidad. No compartiremos su informaci\xF3n de contacto y la usaremos \xFAnicamente para contactarlo acerca de nuestros servicios. Puede desinscribirse de estas comunicaciones en cualquier momento.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{sitekey:"6Lf3CXMaAAAAAN8_to0Gc3AYeHGOBtjd6X51GFcb",onChange:function onChange(value){return setRecaptchaValue(value);}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{item:true,xs:12,md:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:isMobile?"centerBox":""},submitLoading&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{style:{color:'#5484B3'}}),!submitLoading&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"submit",className:"buttonPrimary",value:"Submit",disabled:!contactForm.firstName||!contactForm.lastName||!contactForm.email||!contactForm.companyName||!recaptchaValue||!validateEmail(contactForm.email)}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{open:errorMessage,autoHideDuration:4000,onClose:handleCloseErrorMessage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{severity:"error"},"\xA1Algo pas\xF3! Int\xE9ntalo de nuevo")))));};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isDesktop&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"containerSec"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"h3Box"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Crear una cuenta en LACChain EOSIO")),!resultsSection&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"contactFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"spacingBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"\xBFTodo listo para crear una cuenta y empezar a usar LACChain EOSIO? \xA1Cont\xE1ctenos!")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContactForm,null)),resultsSection&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"contactFormBox",style:{height:'120px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Gracias por contactar a EOS Costa Rica. Te responderemos a la brevedad")))),isMobile&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"sectionHeroMobile"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"h3Box"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Contact Us")),!resultsSection&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"contactFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"spacingBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{padding:0}},"Comencemos la conversaci\xF3n. Preg\xFAntenos c\xF3mo podemos ayudarlo a implementar la tecnolog\xEDa blockchain en su organizaci\xF3n.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContactForm,null)),resultsSection&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{className:"contactFormBox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{padding:0}},"Gracias por contactar a EOS Costa Rica. Te responderemos a la brevedad"))));};/* harmony default export */ __webpack_exports__["default"] = (LacchainForm);

/***/ })

}]);