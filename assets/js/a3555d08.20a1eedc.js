(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{150:function(e,t,r){"use strict";var n=r(3),a=r(146),o=r(0),i=r.n(o),c=(r(1),r(28)),s=r.n(c),p=r(805),l=r(516),u=r(799),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){var o=t.defaultTheme,c=t.withTheme,m=void 0!==c&&c,f=t.name,d=Object(a.a)(t,["defaultTheme","withTheme","name"]);var g=f,h=Object(p.a)(e,Object(n.a)({defaultTheme:o,Component:r,name:f||r.displayName,classNamePrefix:g},d)),x=i.a.forwardRef((function(e,t){e.classes;var c,s=e.innerRef,p=Object(a.a)(e,["classes","innerRef"]),d=h(Object(n.a)({},r.defaultProps,e)),g=p;return("string"==typeof f||m)&&(c=Object(u.a)()||o,f&&(g=Object(l.a)({theme:c,name:f,props:p})),m&&!g.theme&&(g.theme=c)),i.a.createElement(r,Object(n.a)({ref:s||t,classes:d},g))}));return s()(x,r),x}},f=r(261);t.a=function(e,t){return m(e,Object(n.a)({defaultTheme:f.a},t))}},163:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(16),a=r(193);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,p=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+l:l}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},193:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},283:function(e,t,r){"use strict";var n=r(146),a=r(3),o=r(0),i=(r(1),r(148)),c=r(150),s=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseFloat(e);return"".concat(r/t).concat(String(e).replace(String(r),"")||"px")}var u=o.forwardRef((function(e,t){var r=e.alignContent,c=void 0===r?"stretch":r,s=e.alignItems,p=void 0===s?"stretch":s,l=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,d=e.container,g=void 0!==d&&d,h=e.direction,x=void 0===h?"row":h,b=e.item,v=void 0!==b&&b,y=e.justify,j=void 0===y?"flex-start":y,w=e.lg,O=void 0!==w&&w,E=e.md,N=void 0!==E&&E,S=e.sm,C=void 0!==S&&S,B=e.spacing,P=void 0===B?0:B,k=e.wrap,T=void 0===k?"wrap":k,W=e.xl,K=void 0!==W&&W,I=e.xs,z=void 0!==I&&I,R=e.zeroMinWidth,A=void 0!==R&&R,G=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),L=Object(i.a)(l.root,u,g&&[l.container,0!==P&&l["spacing-xs-".concat(String(P))]],v&&l.item,A&&l.zeroMinWidth,"row"!==x&&l["direction-xs-".concat(String(x))],"wrap"!==T&&l["wrap-xs-".concat(String(T))],"stretch"!==p&&l["align-items-xs-".concat(String(p))],"stretch"!==c&&l["align-content-xs-".concat(String(c))],"flex-start"!==j&&l["justify-xs-".concat(String(j))],!1!==z&&l["grid-xs-".concat(String(z))],!1!==C&&l["grid-sm-".concat(String(C))],!1!==N&&l["grid-md-".concat(String(N))],!1!==O&&l["grid-lg-".concat(String(O))],!1!==K&&l["grid-xl-".concat(String(K))]);return o.createElement(f,Object(a.a)({className:L,ref:t},G))})),m=Object(c.a)((function(e){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var r={};return s.forEach((function(n){var a=e.spacing(n);0!==a&&(r["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(l(a,2)),width:"calc(100% + ".concat(l(a),")"),"& > $item":{padding:l(a,2)}})})),r}(e,"xs"),e.breakpoints.keys.reduce((function(t,r){return function(e,t,r){var n={};p.forEach((function(e){var t="grid-".concat(r,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===r?Object(a.a)(e,n):e[t.breakpoints.up(r)]=n}(t,e,r),t}),{}))}),{name:"MuiGrid"})(u);t.a=m},349:function(e,t,r){"use strict";var n=r(3),a=r(146),o=r(0),i=r.n(o),c=r(148),s=(r(1),r(28)),p=r.n(s),l=r(805);function u(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var m=r(261);t.a=function(e){var t=function(e){return function(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=o.name,m=Object(a.a)(o,["name"]),f=s,d="function"==typeof t?function(e){return{root:function(r){return t(Object(n.a)({theme:e},r))}}}:{root:t},g=Object(l.a)(d,Object(n.a)({Component:e,name:s||e.displayName,classNamePrefix:f},m));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var h=i.a.forwardRef((function(t,o){var s=t.children,p=t.className,l=t.clone,m=t.component,f=Object(a.a)(t,["children","className","clone","component"]),d=g(t),h=Object(c.a)(d.root,p),x=f;if(r&&(x=u(x,r)),l)return i.a.cloneElement(s,Object(n.a)({className:Object(c.a)(s.props.className,h)},x));if("function"==typeof s)return s(Object(n.a)({className:h},x));var b=m||e;return i.a.createElement(b,Object(n.a)({ref:o,className:h},x),s)}));return p()(h,e),h}}(e);return function(e,r){return t(e,Object(n.a)({defaultTheme:m.a},r))}}},513:function(e,t,r){"use strict";var n=r(268),a=r(3),o=(r(1),r(336));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(a.a)({},Object(o.a)(r,e(Object(a.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(n.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?Object(o.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},s=r(195),p=r(426);function l(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var u=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,a=e.themeKey,o=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=l(e.theme,a)||{};return Object(p.a)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=l(i,e)||e,o&&(t=o(t))),!1===n?t:Object(s.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function m(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var f=c(u({prop:"border",themeKey:"borders",transform:m}),u({prop:"borderTop",themeKey:"borders",transform:m}),u({prop:"borderRight",themeKey:"borders",transform:m}),u({prop:"borderBottom",themeKey:"borders",transform:m}),u({prop:"borderLeft",themeKey:"borders",transform:m}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),d=c(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),g=c(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),h=c(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),x=c(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),b=c(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=u({prop:"boxShadow",themeKey:"shadows"});function y(e){return e<=1?"".concat(100*e,"%"):e}var j=u({prop:"width",transform:y}),w=u({prop:"maxWidth",transform:y}),O=u({prop:"minWidth",transform:y}),E=u({prop:"height",transform:y}),N=u({prop:"maxHeight",transform:y}),S=u({prop:"minHeight",transform:y}),C=(u({prop:"size",cssProperty:"width",transform:y}),u({prop:"size",cssProperty:"height",transform:y}),c(j,w,O,E,N,S,u({prop:"boxSizing"}))),B=r(806),P=c(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),k=r(349),T=i(c(f,d,g,h,x,b,v,C,B.b,P)),W=Object(k.a)("div")(T,{name:"MuiBox"});t.a=W},516:function(e,t,r){"use strict";function n(e){var t=e.theme,r=e.name,n=e.props;if(!t||!t.props||!t.props[r])return n;var a,o=t.props[r];for(a in o)void 0===n[a]&&(n[a]=o[a]);return n}r.d(t,"a",(function(){return n}))},66:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(148),i=r(513),c=r(2),s=r(283),p=r(163);t.default=function(){var e=Object(c.k)();return a.a.createElement(i.a,{className:"containerSec"},a.a.createElement(i.a,{className:"section"},a.a.createElement(i.a,{className:"titleBox"},a.a.createElement("h2",null,"Recursos adicionales")),a.a.createElement(i.a,{className:"spacingBox"},a.a.createElement("p",null,"Encuentre materiales para lectura y otros recursos para continuar aprendiendo sobre "," ",a.a.createElement("a",{href:"https://eoscostarica.medium.com/how-to-choose-an-enterprise-blockchainplatform-7c3665994ad6",target:"_blank"}," blockchain empresarial")," y",a.a.createElement("a",{href:"https://eos.io/",target:"_blank"}," EOSIO"),".")),a.a.createElement("br",null),a.a.createElement(s.a,{container:!0,spacing:5,justify:"center"},a.a.createElement(s.a,{onClick:function(){return e.push("/blog/")},className:"gridButton",item:!0,xs:5,md:5},a.a.createElement(i.a,{className:Object(o.a)("centerBox","spacingBox","paddingLeft")},a.a.createElement("img",{className:"resourcesIcon",srcSet:Object(p.a)("img/icons/blog.svg")}),a.a.createElement("h3",{className:"marginLeft",style:{width:"210px"}},"Blog"))),a.a.createElement(s.a,{onClick:function(){return e.push("/prensa/")},className:"gridButton",item:!0,xs:5,md:5},a.a.createElement(i.a,{className:Object(o.a)("centerBox","spacingBox","paddingLeft")},a.a.createElement("img",{className:"resourcesIcon",srcSet:Object(p.a)("img/icons/press.svg")}),a.a.createElement("h3",{className:"marginLeft",style:{width:"210px"}},"Prensa"))),a.a.createElement(s.a,{onClick:function(){return window.open("https://guias.eoscostarica.io/")},className:"gridButton",item:!0,xs:5,md:5},a.a.createElement(i.a,{className:Object(o.a)("centerBox","paddingLeft2")},a.a.createElement("img",{className:"resourcesIcon",srcSet:Object(p.a)("img/icons/decs.svg")}),a.a.createElement(i.a,{className:"marginLeft"},a.a.createElement("h3",{style:{width:"210px"}},"Para "),a.a.createElement("h3",{style:{width:"210px"}},"Dev ")))),a.a.createElement(s.a,{onClick:function(){return window.open("https://github.com/eoscostarica")},className:"gridButton",item:!0,xs:5,md:5},a.a.createElement(i.a,{className:Object(o.a)("centerBox","paddingLeft2")},a.a.createElement("img",{className:"resourcesIcon",srcSet:Object(p.a)("img/icons/github-ours.svg")}),a.a.createElement(i.a,{className:"marginLeft"},a.a.createElement("h3",{style:{marginBottom:"5px",width:"210px"}},"Nuestro"),a.a.createElement("h3",{style:{marginBottom:"5px",width:"210px"}},"Github")))))))}}}]);