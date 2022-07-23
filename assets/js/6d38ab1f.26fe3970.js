"use strict";
(self["webpackChunkes_eoscostarica_io"] = self["webpackChunkes_eoscostarica_io"] || []).push([[917],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 2560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={slug:'blockchain-en-el-sector-agricola',title:'¿Por qué implementar blockchain en el sector agrícola?',image:'/img/blog/agricultura/agricultura-cover.png',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain'],metaTitle:'EOS Costa Rica Blog: Blockchain en el sector agrícola',metaDescription:'El sector agrícola se puede beneficiar de implementar blockchain al incrementar la eficiencia, transparencia y mejorar la administración.',langPost:'https://eoscostarica.io/blog/blockchain-in-agriculture/'};var contentTitle=undefined;var metadata={"permalink":"/blog/blockchain-en-el-sector-agricola","editUrl":"https://github.com/eoscostarica/es.eoscostarica.io/edit/master/website/blog/blog/2020-12-09-agricultura.md","source":"@site/blog/2020-12-09-agricultura.md","title":"¿Por qué implementar blockchain en el sector agrícola?","description":"¿Qué es blockchain?","date":"2020-12-09T00:00:00.000Z","formattedDate":"December 9, 2020","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"}],"readingTime":4.94,"truncated":true,"authors":[{"name":"Luis Diego Rojas","title":"Content Strategist","url":"https://twitter.com/ldrojas","imageURL":"https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4"}],"prevItem":{"title":"¿Por qué involucrarse en proyectos open source?","permalink":"/blog/proyectos-open-source"},"nextItem":{"title":"Blockchain en el sector energético","permalink":"/blog/blockchain-en-el-sector-energetico"}};var assets={"authorsImageUrls":[undefined]};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>Blockchain y agricultura</strong>',id:'blockchain-y-agricultura',children:[],level:2},{value:'<strong>Estas son algunas posibilidades que trae blockchain para el sector agrícola:</strong>',id:'estas-son-algunas-posibilidades-que-trae-blockchain-para-el-sector-agrícola',children:[{value:'<strong>1. Aumenta la eficiencia y trazabilidad en la cadena de producción:</strong>',id:'1-aumenta-la-eficiencia-y-trazabilidad-en-la-cadena-de-producción',children:[],level:3},{value:'<strong>2. Mejora los procesos de producción:</strong>',id:'2-mejora-los-procesos-de-producción',children:[],level:3},{value:'<strong>3. Aumenta la transparencia con los consumidores finales:</strong>',id:'3-aumenta-la-transparencia-con-los-consumidores-finales',children:[],level:3},{value:'<strong>4. Mejora la gestión de las finanzas agrícolas:</strong>',id:'4-mejora-la-gestión-de-las-finanzas-agrícolas',children:[],level:3}],level:2},{value:'<strong>Contáctenos para aprender más sobre blockchain.</strong>',id:'contáctenos-para-aprender-más-sobre-blockchain',children:[],level:2},{value:'Resumen',id:'resumen',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"¿Qué es blockchain?",src:(__webpack_require__(3298)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"blockchain-y-agricultura"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Blockchain y agricultura")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El sector agr\xEDcola representa una gran fuente de trabajo y aporte econ\xF3mico para varios pa\xEDses del mundo. Se espera que para el a\xF1o 2030, la demanda de alimentos ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.weforum.org/agenda/2019/09/here-s-how-we-can-use-agriculture-to-fight-climate-change/"},"crezca en un 35"),", lo cual demandar\xEDa mayores eficiencias en los sistemas de producci\xF3n. El sector ha experimentado grandes cambios con la aparici\xF3n de nuevas tecnolog\xEDas y aun hoy existe mucho espacio para implementar soluciones innovadoras de la industria 4.0."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una de las nuevas tecnolog\xEDas que est\xE1 teniendo gran impacto en el sector agr\xEDcola es blockchain. La tecnolog\xEDa blockchain es un registro de datos que funciona como un gran libro de cuentas compartido entre varios usuarios o \u201Cnodos\u201D en el que se registran transacciones de una manera confiable, segura e inmutable, es decir, que no puede ser alterada. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/@eoscostarica/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3"},"Lea m\xE1s aqu\xED acerca de blockchain.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esta tecnolog\xEDa se ha abierto camino hacia varios usos por sus facultades de trazabilidad y costo-eficiencia. Con el pasar de los a\xF1os, han surgido varias plataformas para trabajar en una blockchain y el protocolo conocido como EOSIO (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/@eoscostarica/que-es-eosio-178e21ac2ebb"},"https://medium.com/@eoscostarica/que-es-eosio-178e21ac2ebb"),") ha demostrado sobresalir por sus caracter\xEDsticas de versatilidad y en ejecuci\xF3n de los llamados ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/@eoscostarica/qu%C3%A9-es-un-smart-contract-793d2042c65d"},"contratos inteligentes o \u201Csmart contracts\u201D.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"(Resumen al final del art\xEDculo).")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"estas-son-algunas-posibilidades-que-trae-blockchain-para-el-sector-agrícola"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Estas son algunas posibilidades que trae blockchain para el sector agr\xEDcola:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"1-aumenta-la-eficiencia-y-trazabilidad-en-la-cadena-de-producción"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"1. Aumenta la eficiencia y trazabilidad en la cadena de producci\xF3n:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Blockchain puede resolver problemas en el manejo de informaci\xF3n en tiempo real durante el proceso de producci\xF3n y transporte de productos agr\xEDcolas. Como se mencion\xF3 anteriormente, una blockchain provee un registro de datos no alterable y transparente. Este registro provee una opci\xF3n eficiente, optimizada y sencilla para monitorear la informaci\xF3n del proceso y mejorar la trazabilidad en la cadena de log\xEDstica."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Adem\xE1s, el uso de esta tecnolog\xEDa permite mantener registros de informaci\xF3n de manera precisa sobre el origen de los productos, su fecha de producci\xF3n y qui\xE9nes fueron los productores. Esto puede ser valioso al momento de exportar, ya que aumenta la seguridad y confiabilidad entre partes, por ejemplo, en caso de un retiro por problemas sanitarios o para la trazabilidad en el uso de agroqu\xEDmicos o fertilizantes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La empresa italiana de alimentos Barilla est\xE1 implementando blockchain para garantizar el origen, calidad del producto y materiales crudos, as\xED como para certificar la frescura de la albahaca usada en su producci\xF3n.(",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.foodnavigator.com/Article/2019/09/24/Blockchain-technology-is-improving-food-traceability"},"https://www.foodnavigator.com/Article/2019/09/24/Blockchain-technology-is-improving-food-traceability"),") Asimismo, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://techcrunch.com/2018/09/24/walmart-is-betting-on-the-blockchain-to-improve-food-safety/"},"Walmart")," empez\xF3 a usar blockchain para digitalizar el rastreo de los alimentos perecederos en la cadena de suministros, lo que ha permitido una mejor trazabilidad, ayudando a las autoridades a reaccionar m\xE1s r\xE1pidamente en caso de identificar contaminaci\xF3n en productos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"¿Qué es blockchain?",src:(__webpack_require__(91204)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"2-mejora-los-procesos-de-producción"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"2. Mejora los procesos de producci\xF3n:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El uso de tecnolog\xEDas tiene un impacto positivo en la eficiencia y productividad de las fincas. Por ejemplo, con la implementaci\xF3n de sensores que puedan medir la temperatura de la tierra, el uso de agroqu\xEDmicos y fertilizantes, la disponibilidad de agua y las condiciones clim\xE1ticas, todo esto puede ser guardado en una blockchain y usar esa informaci\xF3n para acciones espec\xEDficas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Al tener un panorama de condiciones clim\xE1ticas que generalmente son impredecibles, los agricultores podr\xEDan prepararse para mejorar la supervivencia de sus cosechas, mejorar la manera en que se determinan precios e incluso podr\xEDa llegar a tener un impacto en los niveles de empleo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"3-aumenta-la-transparencia-con-los-consumidores-finales"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"3. Aumenta la transparencia con los consumidores finales:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los consumidores exigen cada vez m\xE1s conocer el origen de sus productos. Esto ha abierto una ventana de oportunidad para la tecnolog\xEDa blockchain. En algo tan competitivo como el cultivo de bienes b\xE1sicos (caf\xE9, arroz, frijoles), los consumidores finales valoran poder identificar las condiciones en que se produjeron, a qui\xE9n est\xE1n comprando y la calidad del producto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por ejemplo, la cadena de supermercados Carrefour y Nestl\xE9 han estado implementando blockchain en una marca de pur\xE9 en Francia. Usando un tel\xE9fono inteligente, los consumidores pueden escanear un c\xF3digo en el empaque. De esta manera tienen visibilidad sobre el trayecto del producto desde la f\xE1brica hasta las tiendas y otra informaci\xF3n relevante como la fecha de producci\xF3n, par\xE1metros de control de calidad, tiempos en almacenamiento y ubicaci\xF3n de las bodegas. (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.nestle.com/media/news/carrefour-consumers-blockchain-mousline-puree-france"},"https://www.nestle.com/media/news/carrefour-consumers-blockchain-mousline-puree-france"),") Carrefour ha estado implementando blockchain en otros productos como carne, leche y frutas. (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.reuters.com/article/us-carrefour-blockchain/carrefour-says-blockchain-tracking-boosting-sales-of-some-products-idUSKCN1T42A5"},"https://www.reuters.com/article/us-carrefour-blockchain/carrefour-says-blockchain-tracking-boosting-sales-of-some-products-idUSKCN1T42A5"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"4-mejora-la-gestión-de-las-finanzas-agrícolas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"4. Mejora la gesti\xF3n de las finanzas agr\xEDcolas:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El manejo de finanzas, contabilidad e informaci\xF3n administrativa puede ser un desaf\xEDo para el sector agr\xEDcola, lo que incluso podr\xEDa dificultar el momento de definir precios competitivos. Por medio de blockchain, el proceso de gesti\xF3n de estos datos puede ser m\xE1s transparente y accesible, adem\xE1s de eficiente y en tiempo real. Las capacidades de blockchain de mantener registros no alterables puede ser un gran aliado de los agricultores."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contáctenos-para-aprender-más-sobre-blockchain"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Cont\xE1ctenos para aprender m\xE1s sobre blockchain.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," opera desde 2018. Nuestro equipo desarrolla soluciones basadas en blockchain con gran atenci\xF3n al detalle para crear aplicaciones centradas en el usuario para uso empresarial. Adem\xE1s, ofrecemos recursos a la infraestructura EOSIO y promovemos el ecosistema EOSIO local. Conversemos sobre c\xF3mo usted puede implementar esta tecnolog\xEDa en su negocio agr\xEDcola. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"Cont\xE1ctenos")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\xA0S\xEDganos en redes sociales:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"resumen"},"Resumen"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La tecnolog\xEDa blockchain ofrece mayor seguridad, transparencia, privacidad, trazabilidad y eficiencia a compa\xF1\xEDas y organizaciones. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una blockchain es un registro de datos que funciona como un gran libro de cuentas compartido entre varios usuarios o \u201Cnodos\u201D en el que se registran transacciones de una manera confiable y segura. Esta cadena solo puede crecer en tama\xF1o, lo que quiere decir que para cambiar un registro, un usuario deber\xE1 solicitar una nueva transacci\xF3n. Esto hace la informaci\xF3n en una blockchain pr\xE1cticamente inalterable y previene errores causados por humanos al registrar transacciones. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Algunos casos de uso de esta tecnolog\xEDa son:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Registrar informaci\xF3n de la empresa de forma segura y privada. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://medium.com/@eoscostarica/how-to-choose-an-enterprise-blockchain-platform-7c3665994ad6?source=your_stories_page---------------------------"},"Lea m\xE1s aqu\xED."),".\xA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Mejorar la trazabilidad en la cadena de suministros. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://eoscostarica.io/blockchain-in-logistics/"},"Lea m\xE1s aqu\xED.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Aumentar la transparencia y la eficiencia en gobiernos y en la forma de mostrar datos abiertos.")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 3298:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/agricultura-cover-0446fe332307c1319e7cc8a12746e064.png");

/***/ }),

/***/ 91204:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/agricultura-diagrama-c6fa8369fbfe139934792897b773f747.png");

/***/ })

}]);