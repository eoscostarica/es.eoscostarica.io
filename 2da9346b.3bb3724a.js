(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
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

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/energia-cover-01408102e362e835553d540311c7bfb9.jpg");

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/energia-diagrama-1f8d747a25de9dcb70a2d46adbe4512a.jpg");

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toc", function() { return toc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(200);
var _excluded=["components"];var frontMatter={slug:'blockchain-en-el-sector-energetico',title:'Blockchain en el sector energético',image:'/img/blog/energia/energia-cover.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain'],metaTitle:'EOS Costa Rica Blog: Blockchain en el sector energético',metaDescription:'El sector energético se puede beneficiar de implementar blockchain al incrementar la eficiencia, transparencia y reducir costos. Lea más aquí.'};var metadata={"permalink":"/blog/blockchain-en-el-sector-energetico","editUrl":"https://github.com/eoscostarica/es.eoscostarica.io/edit/master/website/blog/blog/2020-12-09-blockchain-en-el-sector-energetico.md","source":"@site/blog/2020-12-09-blockchain-en-el-sector-energetico.md","description":"¿Qué es blockchain?","date":"2020-12-09T00:00:00.000Z","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"}],"title":"Blockchain en el sector energético","readingTime":7.71,"truncated":true,"prevItem":{"title":"¿Por qué implementar blockchain en el sector agrícola?","permalink":"/blog/blockchain-en-el-sector-agricola"},"nextItem":{"title":"Leveling Up the Gaming Industry with Blockchain","permalink":"/blog/gaming-blockchain"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>¿Cómo puede blockchain transformar el sector energético?:</strong>',id:'¿cómo-puede-blockchain-transformar-el-sector-energético',children:[]},{value:'<strong>Implementaciones de blockchain en el sector energético:</strong>',id:'implementaciones-de-blockchain-en-el-sector-energético',children:[{value:'<strong>1. Mejorar la eficiencia y la reducción de costos:</strong>',id:'1-mejorar-la-eficiencia-y-la-reducción-de-costos',children:[]},{value:'<strong>2. Mayor transparencia en el manejo de datos eléctricos:</strong>',id:'2-mayor-transparencia-en-el-manejo-de-datos-eléctricos',children:[]},{value:'<strong>3. Promover la generación eléctrica privada:</strong>',id:'3-promover-la-generación-eléctrica-privada',children:[]},{value:'<strong>4. Mayor adopción de alternativas sostenibles:</strong>',id:'4-mayor-adopción-de-alternativas-sostenibles',children:[]}]},{value:'<strong>Contáctenos para aprender más sobre blockchain.</strong>',id:'contáctenos-para-aprender-más-sobre-blockchain',children:[]},{value:'Resumen',id:'resumen',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"¿Qué es blockchain?",src:__webpack_require__(724).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"¿cómo-puede-blockchain-transformar-el-sector-energético"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"\xBFC\xF3mo puede blockchain transformar el sector energ\xE9tico?:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"La industria energ\xE9tica juega un papel clave en las operaciones y la econom\xEDa de un pa\xEDs. Por ende, este sector ha visto una constante transformaci\xF3n al innovar e incorporar nuevas tecnolog\xEDas. La industria busca maneras para mejorar la ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"eficiencia energ\xE9tica"),". Entre estas nuevas tecnolog\xEDas se encuentra ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://medium.com/@eoscostarica/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3"},"blockchain"),". \xBFC\xF3mo impactar\xEDa blockchain en el sector energ\xE9tico?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Seg\xFAn la Agencia Alemana de la Energ\xEDa, la tecnolog\xEDa blockchain cuenta con el potencial de ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.sciencedirect.com/science/article/pii/S1364032118307184"},"mejorar la eficiencia energ\xE9tica"),", acelerar el desarrollo de plataformas de Internet of things (IoT) y aportar innovaci\xF3n en el intercambio de energ\xEDa descentralizada. Blockchain es una tecnolog\xEDa que permite el registro de datos de manera compartida entre varios usuarios o \u201Cnodos.\u201D En una blockchain se registran transacciones con mayor confiabilidad, seguridad e inmutabilidad, es decir, sin posibilidad de alteraci\xF3n en los datos. Algunos beneficios de blockchain para el sector energ\xEDa incluyen:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Mejorar la eficiencia y la reducci\xF3n de costos."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Transparencia en el manejo de datos el\xE9ctricos.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("em",{parentName:"li"},"   Promover la generaci\xF3n el\xE9ctrica privada."),"   Mayor adopci\xF3n de alternativas sostenibles o energ\xEDas renovables.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"(Resumen al final del art\xEDculo).")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Las facultades de blockchain han abierto camino para esta tecnolog\xEDa en varios casos de uso como ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://medium.com/@eoscostarica/why-integrating-erp-systems-into-blockchain-is-a-great-idea-e384b298a4a8"},"sistemas empresariales")," y el ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://medium.com/@eoscostarica/por-que-implementar-blockchain-en-el-sector-agricola-b3f37efd038"},"sector agr\xEDcola"),". Por ejemplo, algunas cadenas de supermercados como Walmart han adoptado blockchain para el rastreo y trazabilidad de productos perecederos en su cadena de suministro. Esto aumenta la trazabilidad alimentaria y permite a las autoridades actuar de manera m\xE1s r\xE1pida en casos de contaminaci\xF3n."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Por otro lado, existen plataformas de blockchain con adopci\xF3n empresarial como el ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://medium.com/@eoscostarica/que-es-eosio-178e21ac2ebb"},"protocolo EOSIO")," que permiten la ejecuci\xF3n de ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://medium.com/@eoscostarica/qu%C3%A9-es-un-smart-contract-793d2042c65d"},"contratos inteligentes o \u201Csmart contracts\u201D"),". Los smart contracts permiten ejecutar de manera aut\xF3noma y autom\xE1tica c\xF3digos inform\xE1ticos. Estos funcionan como contratos para regular relaciones entre partes, por ejemplo, en el intercambio de generaci\xF3n el\xE9ctrica entre varias partes."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"implementaciones-de-blockchain-en-el-sector-energético"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Implementaciones de blockchain en el sector energ\xE9tico:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"¿Qué es blockchain?",src:__webpack_require__(760).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"1-mejorar-la-eficiencia-y-la-reducción-de-costos"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h3"},"1. Mejorar la eficiencia y la reducci\xF3n de costos:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"La tecnolog\xEDa blockchain podr\xEDa transformar por completo el sector energ\xE9tico. Las empresas de energ\xEDa podr\xEDan experimentar cambios en la eficiencia al momento de manejar las operaciones y el registro de datos. Adem\xE1s, esto podr\xEDa hacer que los consumidores experimenten una reducci\xF3n en la factura el\xE9ctrica."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Las capacidades de blockchain y los ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://medium.com/@eoscostarica/qu%C3%A9-es-un-smart-contract-793d2042c65"},"smart contracts"),", de ejecutarse de forma aut\xF3noma y autom\xE1tica podr\xEDan solucionar varios procesos que se hacen de manera manual, o que incluso podr\xEDan tener un factor de error humano. Al resolver este papeleo con smart contracts, los tiempos en procesos se ver\xEDan reducidos, as\xED como otros costos asociados."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Por ejemplo, si se combinara la tecnolog\xEDa blockchain con dispositivos IoT, los consumidores podr\xEDan conectarse a la red el\xE9ctrica de manera directa y as\xED facilitar el intercambio de energ\xEDa. Un caso de uso lo est\xE1 creando la empresa ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://gridplus.io/energy"},"Grid+"),". La plataforma permite a los usuarios conectarse de manera directa a la red el\xE9ctrica para adquirir energ\xEDa a mejores precios. Grid+ ha incorporado no solo blockchain, sino software y hardware inteligentes para convertirse en los proveedores de energ\xEDa de la siguiente generaci\xF3n."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Otro caso es el de la compa\xF1\xEDa proveedora de energ\xEDa en Nueva York llamada Drift. La empresa busca mejorar la ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.greentechmedia.com/articles/read/drift-is-a-startup-applying-peer-to-peer-trading-to-retail-electricity"},"eficiencia y transparencia")," en el env\xEDo de facturas a sus clientes a trav\xE9s de algoritmos, machine learning y blockchain. Por otro lado, la compa\xF1\xEDa holandesa Alliander, en colaboraci\xF3n con Spectral Energy, est\xE1 implementando una blockchain privada permisionada para conectar medidores inteligentes en una plataforma peer-to-peer (red entre pares) y usando su propio token, incrementando as\xED la rapidez de las transacciones y mejorando la eficiencia."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"2-mayor-transparencia-en-el-manejo-de-datos-eléctricos"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h3"},"2. Mayor transparencia en el manejo de datos el\xE9ctricos:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Una blockchain funciona como un libro de cuentas distribuido, es decir, que no es almacenado por un \xFAnico ente central. Es, por ejemplo, como repartir un cuaderno a varias personas en una clase y se les pide que escriban exactamente lo que el profesor est\xE1 dictando. Al finalizar, se la persona autorizada revisa las notas y si todos coinciden con lo escrito en sus cuadernos, damos por sentado que el profesor dict\xF3 esas palabras."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Por lo general los proveedores de energ\xEDa manejan gran cantidad de datos sobre sus clientes y su consumo el\xE9ctrico. \xC9stos pueden almacenar esta informaci\xF3n en una blockchain para lograr una mejor transparencia y confianza en los registros. De esta manera, los usuarios podr\xEDan tener mayor tranquilidad cuando les lleguen los cobros respectivos. Asimismo, las empresas de energ\xEDa pueden distribuir la administraci\xF3n de su red usando una blockchain, as\xED como incrementar la seguridad de sus datos privados usando atributos como autenticaci\xF3n de identidades, otra caracter\xEDstica de esta tecnolog\xEDa."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"La transparencia va a ser beneficiosa para los usuarios que quieran tener control sobre su consumo energ\xE9tico y las empresas que quieran confiar en sus colaboradores. Asimismo, las entidades reguladoras tambi\xE9n podr\xEDan ver ventajas en esta tecnolog\xEDa. Al mantener registros inmutables y transparentes, es posible mejorar y agilizar los ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.sciencedirect.com/science/article/pii/S1364032118307184"},"procesos de auditor\xEDa y cumplimiento"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Un caso de uso es el de la ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"http://energiaabierta.cl/blockchain/que-es-blockchain/"},"Comisi\xF3n Nacional de Energ\xEDa (CNE)")," de Chile que lanz\xF3 una plataforma basada en blockchain para llevar registros de datos como costos y precios. CNE identific\xF3 una oportunidad en la tecnolog\xEDa ya que manejan gran n\xFAmero de transacciones que deben ser monitoreadas por diversos grupos de inter\xE9s y que necesitan un ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.cne.cl/prensa/prensa-2019/11-noviembre/secretario-ejecutivo-de-la-cne-participa-en-lanzamiento-de-piloto-blockchain-para-combustibles/"},"alto nivel de confiabilidad, transparencia y trazabilidad"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"3-promover-la-generación-eléctrica-privada"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h3"},"3. Promover la generaci\xF3n el\xE9ctrica privada:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\xBFQu\xE9 significa que blockchain sea una red distribuida o descentralizada y qu\xE9 implicaciones podr\xEDa tener? Como se coment\xF3 anteriormente, los datos registrados en una blockchain no se encuentran almacenados en la base de datos de un ente central. M\xE1s bien, se encuentran guardados de manera criptogr\xE1fica en varias computadoras o \u201Cnodos.\u201D"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Esto quiere decir que no se requiere de un ente central que controle c\xF3mo se registran los datos. Por ende, puede ser f\xE1cil incluso crear conexiones entre pares que se administren de manera autosuficiente. Tomemos como ejemplo un servicio de transporte de personas por medio de una aplicaci\xF3n. Es probable que la empresa due\xF1a de la aplicaci\xF3n funciona como ente controlador. Sin embargo, \xBFqu\xE9 pasar\xEDa si quienes brindan el servicio se conectan sin intermediarios con sus usuarios de manera directa?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Algo similar podr\xEDa pasar con la tecnolog\xEDa blockchain. El uso de redes entre pares o peer-to-peer podr\xEDa colaborar en el intercambio de energ\xEDa de manera eficiente entre consumidores y proveedores. Incluso se podr\xEDa incentivar la aparici\xF3n de nuevos micro generadores de electricidad que se unan a la red."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"La compa\xF1\xEDa ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.brooklyn.energy/"},"Brooklyn MicroGrid")," ofrece una alternativa como un marketplace de energ\xEDa renovable generada de manera local. El sistema corre en una red peer-to-peer. Mediante el uso de smart contracts permite a personas vender los excedentes de energ\xEDa de manera directa a sus vecinos."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Otro caso es el de la empresa ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://prosume.io/"},"Prosume"),". La empresa ofrece una plataforma basada en blockchain con sistemas autoregulados y aut\xF3nomos para el intercambio de energ\xEDa con el fin de acelerar modelos comunitarios."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"4-mayor-adopción-de-alternativas-sostenibles"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h3"},"4. Mayor adopci\xF3n de alternativas sostenibles:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Blockchain podr\xEDa aportar tambi\xE9n en el uso de nuevas alternativas para la generaci\xF3n de energ\xEDa. Por ejemplo, podr\xEDa ser posible almacenar grandes datos de patrones de consumo, picos de uso de energ\xEDa y generaci\xF3n de energ\xEDa seg\xFAn patrones atmosf\xE9ricos para identificar la manera m\xE1s eco eficiente de producir electricidad."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"A su vez, existen iniciativas para emitir certificados de uso de energ\xEDas renovables. Nasdaq lanz\xF3 un proyecto piloto en 2016 para ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://www.nasdaq.com/solutions/electricity-certificates-european-commodities"},"emitir certificados verdes"),". Estos son obtenidos por empresas generadoras de energ\xEDas renovables. Con el uso de la tecnolog\xEDa blockchain, estos certificados se pueden emitir de manera autom\xE1tica y a la vez llevar un control de su trazabilidad."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Por otro lado, el startup ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://wepower.network/"},"WePower"),"  conecta a consumidores de manera directa con generadores de energ\xEDas renovables a precios competitivos y transparentes. Adem\xE1s, cuenta con una plataforma que ejecuta \u201Csmart energy contracts\u201D o contratos de energ\xEDa inteligente. Estos representan la capacidad de producir energ\xEDa en una planta. As\xED pueden vender de manera anticipada su capacidad y facilitar el financiamiento de la producci\xF3n."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"contáctenos-para-aprender-más-sobre-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Cont\xE1ctenos para aprender m\xE1s sobre blockchain.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," opera desde 2018. Nuestro equipo desarrolla soluciones basadas en blockchain con gran atenci\xF3n al detalle para crear aplicaciones centradas en el usuario para uso empresarial. Adem\xE1s, ofrecemos recursos a la infraestructura EOSIO y promovemos el ecosistema EOSIO local. Conversemos sobre c\xF3mo usted puede implementar esta tecnolog\xEDa para impactar el sector energ\xE9tico. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"Cont\xE1ctenos")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\xA0S\xEDganos en redes sociales:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"resumen"},"Resumen"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"La tecnolog\xEDa blockchain ofrece mayor seguridad, transparencia, privacidad, trazabilidad y eficiencia a compa\xF1\xEDas y organizaciones. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Una blockchain es un registro de datos que funciona como un gran libro de cuentas compartido entre varios usuarios o \u201Cnodos\u201D en el que se registran transacciones de una manera confiable y segura. Esta cadena solo puede crecer en tama\xF1o, lo que quiere decir que para cambiar un registro, un usuario deber\xE1 solicitar una nueva transacci\xF3n. Esto hace la informaci\xF3n en una blockchain pr\xE1cticamente inalterable y previene errores causados por humanos al registrar transacciones. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Algunos casos de uso de esta tecnolog\xEDa son:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Registrar informaci\xF3n de la empresa de forma segura y privada. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica/how-to-choose-an-enterprise-blockchain-platform-7c3665994ad6?source=your_stories_page---------------------------"},"Lea m\xE1s aqu\xED."),".\xA0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Mejorar la trazabilidad en la cadena de suministros. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io/blockchain-in-logistics/"},"Lea m\xE1s aqu\xED.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Aumentar la transparencia y la eficiencia en gobiernos y en la forma de mostrar datos abiertos.")));};MDXContent.isMDXComponent=true;

/***/ })

}]);