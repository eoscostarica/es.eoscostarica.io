(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/blockchain-cover-eb7e109aa217693cbc87bd19dd1b2921.jpg");

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/como-funciona-92345e76e3fb0425af96f883abb0062a.png");

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/proceso-519130047e78e11600d553d02cf85a61.png");

/***/ }),

/***/ 78:
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
var _excluded=["components"];var frontMatter={slug:'que-es-blockchain',title:'¿Qué es blockchain?',image:'/img/blog/que-es-blockchain/blockchain-cover.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain'],metaTitle:'EOS Costa Rica Blog: What Is Blockchain? A Quick Guide',metaDescription:'Aprenda sobre qué es blockchain y cómo implementarla en su organización. Blockchain ofrece mayor seguridad, trazabilidad y eficiencia a su compañía.',langPost:'https://eoscostarica.io/blog/what-is-blockchain/'};var metadata={"permalink":"/blog/que-es-blockchain","editUrl":"https://github.com/eoscostarica/es.eoscostarica.io/edit/master/website/blog/blog/2020-11-25-que-es-blockchain.md","source":"@site/blog/2020-11-25-que-es-blockchain.md","description":"¿Qué es blockchain?","date":"2020-11-25T00:00:00.000Z","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"}],"title":"¿Qué es blockchain?","readingTime":6.15,"truncated":true,"prevItem":{"title":"Leveling Up the Gaming Industry with Blockchain","permalink":"/blog/gaming-blockchain"},"nextItem":{"title":"A Rating System for EOS","permalink":"/blog/eos-rate"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>What is Blockchain?</strong>',id:'what-is-blockchain',children:[]},{value:'<strong>¿Cómo funciona una blockchain?</strong>',id:'¿cómo-funciona-una-blockchain',children:[]},{value:'Más allá de blockchain',id:'más-allá-de-blockchain',children:[]},{value:'<strong>Contáctenos para aprender más sobre blockchain.</strong>',id:'contáctenos-para-aprender-más-sobre-blockchain',children:[]},{value:'Resumen',id:'resumen',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"¿Qué es blockchain?",src:__webpack_require__(514).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"what-is-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"What is Blockchain?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"La tecnolog\xEDa blockchain o \u201Ccadena de bloques\u201D ha estado revolucionando varias industrias")," por su seguridad y transparencia, pero\u2026 \xBFrealmente, qu\xE9 es blockchain? "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Una blockchain es un registro de datos que funciona como un gran libro de cuentas compartido entre varios usuarios o \u201Cnodos\u201D en el que se registran transacciones de una manera confiable y segura. En este libro de cuentas se van registrando \u201Cbloques\u201D, que son colecciones de datos. Estos bloques son conectados entre s\xED de manera cronol\xF3gica creando una especie de cadena. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Por consiguiente, la seguridad y confiabilidad de esta tecnolog\xEDa se debe en parte a la descentralizaci\xF3n: cada uno de los nodos contiene una copia de este libro de cuentas que deben verificar y validar cada una de las transacciones realizadas."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Adem\xE1s, un usuario no puede eliminar o alterar ning\xFAn registro en la blockchain. En otras palabras, una blockchain solo puede crecer en tama\xF1o. Para cambiar un registro, una nueva transacci\xF3n deber\xEDa ser validada y a\xF1adida a la cadena."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Cada bloque contendr\xE1 los siguientes datos:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Informaci\xF3n sobre las transacciones. Por ejemplo: fecha, hora y cantidades.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("em",{parentName:"li"},"   Informaci\xF3n sobre qui\xE9nes participan en las transacciones. Por ejemplo: usuarios o identidades digitales."),"   Informaci\xF3n distintiva del bloque, conocida como \u201Chash,\u201D la cual es dif\xEDcil de manipular. Un \u201Chash\u201D es un c\xF3digo creado por una funci\xF3n matem\xE1tica que convierte los datos en una l\xEDnea de n\xFAmeros y letras de longitud espec\xEDfica. ")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"(Resumen al final del art\xEDculo).")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"¿cómo-funciona-una-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"\xBFC\xF3mo funciona una blockchain?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Para entender mejor c\xF3mo funciona, se puede comparar este libro de cuentas (o \u201Cledger\u201D en ingl\xE9s) descentralizado con un juego de domin\xF3, en el que los nodos son cada uno de los jugadores. Todos los jugadores tienen visibilidad sobre lo que est\xE1 pasando en el tablero y saben que existe una serie de reglas a seguir. Por ejemplo, una persona no puede saltarse su turno sin permiso o colocar una ficha de domin\xF3 donde no corresponde, porque los dem\xE1s jugadores pueden inmediatamente restringirle esa jugada\u2013esa es la responsabilidad de los nodos. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"How does blockchain work",src:__webpack_require__(755).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"La tecnolog\xEDa blockchain permite una descentralizaci\xF3n en los registros. En particular, blockchain permite la ejecuci\xF3n autom\xE1tica y aut\xF3noma de transacciones, lo que quiere decir que ahora los usuarios pueden administrar sus transacciones de forma directa y segura, sin necesidad de intermediarios. \xBFC\xF3mo? Los nodos deber\xE1n verificar que todos los jugadores en el tablero (ya sea de manera an\xF3nima o con identidades conocidas) est\xE1n jugando seg\xFAn las reglas. A esto se le conoce como \u201Cconsenso.\u201D"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Por ejemplo, una compa\xF1\xEDa de log\xEDstica puede elegir asignar sus computadoras como nodos a distintas organizaciones a lo largo de la cadena de suministros, incluyendo autoridades de impuestos, puertos, proveedores y mayoristas. Entonces, esto muy probablemente incrementar\xE1 la confianza entre todas las partes ya que todos podr\xE1n validar cada transacci\xF3n y tener completa visibilidad del proceso de log\xEDstica."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Al usar blockchain, los usuarios mantienen su anonimato, o bien, utilizan un pseud\xF3nimo, y los registros que generan (que son los bloques) se encuentran cifrados para proteger su privacidad y seguridad. Cualquier solicitud de transacci\xF3n que realice alguno de los usuarios; sea, por ejemplo, enviar criptomonedas, generar un registro contable o agregar datos a su expediente m\xE9dico, debe ser verificada y validada por los nodos."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"How does blockchain work",src:__webpack_require__(756).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"De vuelta al ejemplo de domin\xF3, podemos decir que es como si un jugador decidiera que va a colocar una ficha de domin\xF3 en el tablero y, al momento de colocarla, el resto de los jugadores se taparan los ojos para no ver qui\xE9n jug\xF3; al finalizar su turno, todos los jugadores abren los ojos para validar la nueva ficha."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Consecuentemente, luego de que la mayor\xEDa de los jugadores aprobaron la transacci\xF3n como v\xE1lida, el bloque se a\xF1ade a la cadena. En este punto, el bloque se mantiene inmutable y no podr\xE1 ser cambiado o eliminado de la cadena. Por ende, el bloque es irreversible, lo que evita el fraude o cambios sin autorizaci\xF3n."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"En resumen, una red descentralizada a\xF1ade capas de seguridad a la blockchain. Adicionalmente, cada bloque est\xE1 conectado a su predecesor por un c\xF3digo \xFAnico llamado \u201Chash.\u201D Este c\xF3digo hash representa la informaci\xF3n en el bloque. El hash es fundamental para la trazabilidad y prevenir ciberataques. Es decir, si un hacker quiere intentar modificar la informaci\xF3n en una blockchain, \xE9ste tendr\xE1 que intentar hackear todos los c\xF3digos hash en la cadena, lo que lo hace pr\xE1cticamente imposible. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"En otras palabras, de vuelta al ejemplo del domin\xF3, esta puede ser una forma de verificar que el n\xFAmero de fichas en la cadena llevan un orden l\xF3gico. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"más-allá-de-blockchain"},"M\xE1s all\xE1 de blockchain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"A pesar que blockchain se ha popularizado por su uso en criptomonedas, son muchas las industrias en las que blockchain puede y ha estado disrumpiendo. Plataformas como EOSIO, conocida por su eficiencia energ\xE9tica y en costos, han divulgado el uso de \u201Ccontratos inteligentes\u201D para extender el alcance de las tecnolog\xEDas blockchain. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"En particular, los contratos inteligentes son c\xF3digos programados para ejecutarse de forma autom\xE1tica y aut\xF3noma cuando los requisitos se cumplen. Por ejemplo, imaginemos que dos personas est\xE1n jugando a lanzar la moneda. Ambos acuerdan que si sale cara, la persona A deber\xE1 pagar a la persona B unos $100. Pero, si sale cruz, la persona B deber\xE1 pagar a la persona A la misma cantidad. No hay preguntas, ya que solo hay dos posibles escenarios y ambos tendr\xE1n la visibilidad de la verdad. Esto mismo sucede con los contratos inteligentes en una blockchain, como una forma de verificar la verdad."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Algunos ejemplos de aplicaciones de blockchain en la vida real son:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Soluciones empresariales:")," La ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://energiaabierta.cl/blockchain/que-es-blockchain/"},"Comisi\xF3n Nacional de Energ\xEDa")," de Chile (CNE) lanz\xF3 una plataforma basada en blockchain para mantener registros de costos y precios."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Trazabilidad de alimentos:")," Walmart empez\xF3 a usar blockchain para la. trazabilidad de productos perecederos a lo largo de su cadena de suministros. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io/blockchain-in-logistics/"},"Lea m\xE1s sobre blockchain en log\xEDstica aqu\xED."),". "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"Gobierno y datos abiertos:")," Dubai se propuso la meta de ser el ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.forbes.com/sites/suparnadutt/2017/12/18/dubai-sets-sights-on-becoming-the-worlds-first-blockchain-powered-government/#4e4ad0d5454b"},"primer gobierno del mundo")," con tramitolog\xEDa y procesos corriendo en blockchain para el a\xF1o 2020. ")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"contáctenos-para-aprender-más-sobre-blockchain"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"h2"},"Cont\xE1ctenos para aprender m\xE1s sobre blockchain.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," opera desde 2018. Nuestro equipo desarrolla soluciones basadas en blockchain con gran atenci\xF3n al detalle para crear aplicaciones centradas en el usuario para uso empresarial. Adem\xE1s, ofrecemos recursos a la infraestructura EOSIO y promovemos el ecosistema EOSIO local. Conversemos sobre c\xF3mo puede implementar esta tecnolog\xEDa en las operaciones de su organizaci\xF3n. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"p","href":"https://eoscostarica.io/"},"Cont\xE1ctenos")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"}," S\xEDganos en redes sociales:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"resumen"},"Resumen"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"La tecnolog\xEDa blockchain ofrece mayor seguridad, transparencia, privacidad, trazabilidad y eficiencia a compa\xF1\xEDas y organizaciones. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Una blockchain es un registro de datos que funciona como un gran libro de cuentas compartido entre varios usuarios o \u201Cnodos\u201D en el que se registran transacciones de una manera confiable y segura. Esta cadena solo puede crecer en tama\xF1o, lo que quiere decir que para cambiar un registro, un usuario deber\xE1 solicitar una nueva transacci\xF3n. Esto hace la informaci\xF3n en una blockchain pr\xE1cticamente inalterable y previene errores causados por humanos al registrar transacciones. "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Algunos casos de uso de esta tecnolog\xEDa son:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Registrar informaci\xF3n de la empresa de forma segura y privada. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://medium.com/@eoscostarica/how-to-choose-an-enterprise-blockchain-platform-7c3665994ad6?source=your_stories_page---------------------------"},"Lea m\xE1s aqu\xED."),". "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Mejorar la trazabilidad en la cadena de suministros. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",{parentName:"li","href":"https://eoscostarica.io/blockchain-in-logistics/"},"Lea m\xE1s aqu\xED.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ol"},"Aumentar la transparencia y la eficiencia en gobiernos y en la forma de mostrar datos abiertos.")));};MDXContent.isMDXComponent=true;

/***/ })

}]);