"use strict";
(self["webpackChunkes_eoscostarica_io"] = self["webpackChunkes_eoscostarica_io"] || []).push([[1309],{

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

/***/ 29151:
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
var _excluded=["components"];var frontMatter={slug:'inmutrust-anuncio',title:'InmuTrust: EOSIO Blockchain para la distribución de vacunas',image:'/img/blog/inmutrust-blog/inmutrust.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain','blockchain technology','lacchain','healthcare'],metaTitle:'EOS Costa Rica: InmuTrust - blockchain para distribución de vacunas',metaDescription:'Aprenda sobre InmuTrust, una plataforma que usa la tecnología blockchain EOSIO para mejorar la transparencia y confianza en la distribución de vacunas COVID-19.'};var contentTitle=undefined;var metadata={"permalink":"/blog/inmutrust-anuncio","editUrl":"https://github.com/eoscostarica/es.eoscostarica.io/edit/master/website/blog/blog/2021-08-05-inmutrust.md","source":"@site/blog/2021-08-05-inmutrust.md","title":"InmuTrust: EOSIO Blockchain para la distribución de vacunas","description":"Get to Know LACChain EOSIO","date":"2021-08-05T00:00:00.000Z","formattedDate":"August 5, 2021","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"blockchain technology","permalink":"/blog/tags/blockchain-technology"},{"label":"lacchain","permalink":"/blog/tags/lacchain"},{"label":"healthcare","permalink":"/blog/tags/healthcare"}],"readingTime":3.825,"truncated":true,"authors":[{"name":"Luis Diego Rojas","title":"Content Strategist","url":"https://twitter.com/ldrojas","imageURL":"https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4"}],"nextItem":{"title":"¿Por qué involucrarse en proyectos open source?","permalink":"/blog/proyectos-open-source"}};var assets={"authorsImageUrls":[undefined]};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Brindando transparencia y visibilidad al proceso de vacunación',id:'brindando-transparencia-y-visibilidad-al-proceso-de-vacunación',children:[],level:2},{value:'Sobre LACChain:',id:'sobre-lacchain',children:[],level:2},{value:'Sobre EOS Costa Rica:',id:'sobre-eos-costa-rica',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Get to Know LACChain EOSIO",src:(__webpack_require__(29491)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"brindando-transparencia-y-visibilidad-al-proceso-de-vacunación"},"Brindando transparencia y visibilidad al proceso de vacunaci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Hoy, la empresa de desarrollo de blockchain ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," anunci\xF3 una colaboraci\xF3n con ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.lacchain.net/"},"LACChain")," \u2013 una iniciativa liderada por ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://bidlab.org/en"},"BID Lab"),", el Laboratorio de Innovaci\xF3n del Grupo del Banco Interamericano de Desarrollo (BID)  \u2013 para construir y lanzar la prueba de concepto de ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://inmutrust.com/"},"InmuTrust"),". InmuTrust es una plataforma que implementa la tecnolog\xEDa blockchain EOSIO para garantizar la transparencia y la confianza en la distribuci\xF3n de vacunas, concentr\xE1ndose en las vacunas COVID-19."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\"InmuTrust  respondi\xF3 a una necesidad urgente de una distribuci\xF3n transparente de las vacunas donde la confianza y la visibilidad juegan un papel clave\", dijo Xavier Fern\xE1ndez, co-fundador y l\xEDder tecnol\xF3gico de EOS Costa Rica. \"Empezamos a trabajar en la prueba de concepto a finales del a\xF1o pasado. Se convirti\xF3 en un proyecto estrella para nuestro equipo con el fin de ayudar al sistema de salud regional a trav\xE9s del uso de la tecnolog\xEDa blockchain dada la situaci\xF3n global.\""),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"InmuTrust implementa la tecnolog\xEDa blockchain para ayudar a rastrear cada vacuna desde el fabricante hasta su aplicaci\xF3n, certificando que no tuvo ninguna irregularidad durante su proceso de cadena de suministro. Cuenta con varias funcionalidades, incluyendo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"La tecnolog\xEDa blockchain de EOSIO permite a un usuario administrar permisos, autorizaciones y registrar puntos de control y datos operativos para manejar las transacciones correctamente y realizar un seguimiento de quien accede a la informaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Tambi\xE9n permite una completa visibilidad y trazabilidad del inventario de vacunas en tiempo real, incluido el historial de temperatura de la vacuna para garantizar su almacenamiento adecuado. Estos registros de datos permanecen inmutables, por lo que cada transacci\xF3n se almacenar\xE1 de forma fiable."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"El panel de control ofrece visualizaci\xF3n de la distribuci\xF3n geogr\xE1fica y demogr\xE1fica de las vacunas y de los procedimientos de vacunaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"InmuTrust implementa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://eoscostarica.io/blog/nfts-for-enterprise/"},"NFTs")," (tokens no fungibles) y ofrece integraci\xF3n con certificados de vacunaci\xF3n verificables almacenados en una cadena de bloques.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los equipos de EOS Costa Rica y LACChain decidieron construir  InmuTrust en medio de la pandemia de COVID-19 despu\xE9s de identificar posibles problemas al rastrear la distribuci\xF3n regional de las vacunas. Las vacunas de diferentes fabricantes tienen condiciones \xFAnicas con respecto a las temperaturas de almacenamiento, la caducidad y el manejo, lo que requiere una trazabilidad precisa en todas las operaciones log\xEDsticas para salvaguardar su integridad."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"InmuTrust es el segundo proyecto de colaboraci\xF3n entre EOS Costa Rica y LACChain para aprovechar la tecnolog\xEDa blockchain de EOSIO. Anteriormente, se anunci\xF3 el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/blog/lacchain-eosio-launch/"},"lanzamiento de la red LACChain EOSIO"),". Esta red implementa una versi\xF3n p\xFAblico-permisionada de EOSIO dentro de un entorno de pruebas en Am\xE9rica Latina y el Caribe.  InmuTrust  es uno de los primeros proyectos en desplegar la red LACChain EOSIO."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u201CUn usuario de  InmuTrust  podr\xE1 acceder a la trazabilidad completa de la log\xEDstica de vacunas en todo el mundo y de acuerdo a los est\xE1ndares de las entidades de salud\",  agreg\xF3  Edgar Fern\xE1ndez, co-fundador y gerente de negocios de EOS Costa Rica. \"Ahora, estamos buscando instituciones gubernamentales en Am\xE9rica Latina y el Caribe que deseen asegurar procesos de vacunaci\xF3n transparentes y confiables para salvaguardar la integridad de cada dosis. \""),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para obtener m\xE1s informaci\xF3n sobre ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://inmutrust.com/"},"InmuTrust"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://es.eoscostarica.io/contactenos/"},"p\xF3ngase en contacto con nosotros"),"  y programemos una breve demostraci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"sobre-lacchain"},"Sobre LACChain:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LACChain es una alianza global para el desarrollo del ecosistema blockchain en Am\xE9rica Latina y el Caribe. Liderada por BID Lab, el Laboratorio de Innovaci\xF3n de Grupo Banco Interamericano de Desarrollo. LACChain proporciona una red abierta interoperable internacionalmente reconocida para desplegar casos de uso innovadores para reducir las desigualdades econ\xF3micas, sociales, de g\xE9nero y de otro tipo, promover la calidad y la seguridad en el empleo, la inclusi\xF3n financiera, la protecci\xF3n del consumidor y la integridad del mercado. Para ello, LACChain se centra en dos pilares principales: la comunidad y la infraestructura. Los resultados se derivan del empoderamiento de las personas, la mejora de la seguridad digital, el fomento de la confianza en la econom\xEDa y la sociedad digitales, la promoci\xF3n de la eficiencia energ\xE9tica, apoyando as\xED el crecimiento inclusivo, el bienestar, los derechos humanos y los valores fundamentales. Para m\xE1s informaci\xF3n visite: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://www.lacchain.net"},"www.lacchain.net"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"sobre-eos-costa-rica"},"Sobre EOS Costa Rica:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"EOS Costa Rica opera desde 2018. Nuestro equipo desarrolla soluciones basadas en blockchain con gran atenci\xF3n al detalle en la creaci\xF3n de  dapps centradas en el usuario para  uso empresarial. Tambi\xE9n proporcionamos recursos a la infraestructura de EOSIO y promovemos el ecosistema local de EOSIO.  Hablemos de c\xF3mo puede implementar esta tecnolog\xEDa en su organizaci\xF3n. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://es.eoscostarica.io/contactenos/"},"Cont\xE1ctenos")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"S\xEDganos en las redes sociales:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://eoscostarica.io/"},"Website")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.youtube.com/c/eoscostarica/"},"YouTube")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 29491:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/inmutrust-712ce8ced9c18616b195bb0dc8028276.jpg");

/***/ })

}]);