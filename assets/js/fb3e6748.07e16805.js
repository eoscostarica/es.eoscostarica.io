(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{349:function(e,r,t){"use strict";var n=t(3),o=t(146),a=t(0),p=t.n(a),i=t(148),l=(t(1),t(28)),c=t.n(l),s=t(805);function u(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}var m=t(261);r.a=function(e){var r=function(e){return function(r){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.name,m=Object(o.a)(a,["name"]),f=l,d="function"==typeof r?function(e){return{root:function(t){return r(Object(n.a)({theme:e},t))}}}:{root:r},b=Object(s.a)(d,Object(n.a)({Component:e,name:l||e.displayName,classNamePrefix:f},m));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var y=p.a.forwardRef((function(r,a){var l=r.children,c=r.className,s=r.clone,m=r.component,f=Object(o.a)(r,["children","className","clone","component"]),d=b(r),y=Object(i.a)(d.root,c),h=f;if(t&&(h=u(h,t)),s)return p.a.cloneElement(l,Object(n.a)({className:Object(i.a)(l.props.className,y)},h));if("function"==typeof l)return l(Object(n.a)({className:y},h));var g=m||e;return p.a.createElement(g,Object(n.a)({ref:a,className:y},h),l)}));return c()(y,e),y}}(e);return function(e,t){return r(e,Object(n.a)({defaultTheme:m.a},t))}}},513:function(e,r,t){"use strict";var n=t(268),o=t(3),a=(t(1),t(336));var p=function(e){var r=function(r){var t=e(r);return r.css?Object(o.a)({},Object(a.a)(t,e(Object(o.a)({theme:r.theme},r.css))),function(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(n.a)(e.filterProps)),r};var i=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=function(e){return r.reduce((function(r,t){var n=t(e);return n?Object(a.a)(r,n):r}),{})};return n.propTypes={},n.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),n},l=t(195),c=t(426);function s(e,r){return r&&"string"==typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var u=function(e){var r=e.prop,t=e.cssProperty,n=void 0===t?e.prop:t,o=e.themeKey,a=e.transform,p=function(e){if(null==e[r])return null;var t=e[r],p=s(e.theme,o)||{};return Object(c.a)(e,t,(function(e){var r;return"function"==typeof p?r=p(e):Array.isArray(p)?r=p[e]||e:(r=s(p,e)||e,a&&(r=a(r))),!1===n?r:Object(l.a)({},n,r)}))};return p.propTypes={},p.filterProps=[r],p};function m(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var f=i(u({prop:"border",themeKey:"borders",transform:m}),u({prop:"borderTop",themeKey:"borders",transform:m}),u({prop:"borderRight",themeKey:"borders",transform:m}),u({prop:"borderBottom",themeKey:"borders",transform:m}),u({prop:"borderLeft",themeKey:"borders",transform:m}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),d=i(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),b=i(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),y=i(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),h=i(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),g=i(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),x=u({prop:"boxShadow",themeKey:"shadows"});function v(e){return e<=1?"".concat(100*e,"%"):e}var j=u({prop:"width",transform:v}),E=u({prop:"maxWidth",transform:v}),O=u({prop:"minWidth",transform:v}),w=u({prop:"height",transform:v}),P=u({prop:"maxHeight",transform:v}),C=u({prop:"minHeight",transform:v}),N=(u({prop:"size",cssProperty:"width",transform:v}),u({prop:"size",cssProperty:"height",transform:v}),i(j,E,O,w,P,C,u({prop:"boxSizing"}))),k=t(806),K=i(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),R=t(349),S=p(i(f,d,b,y,h,g,x,N,k.b,K)),T=Object(R.a)("div")(S,{name:"MuiBox"});r.a=T},70:function(e,r,t){"use strict";t.r(r);var n=t(3),o=t(0),a=t.n(o),p=t(150),i=t(148),l=t(1),c=t.n(l),s=t(513),u=t(781),m=t(784),f=t(777),d=t(776),b=Object(p.a)({root:{color:"gray","&$checked":{color:"#5484b3"}},checked:{}})((function(e){return a.a.createElement(u.a,Object(n.a)({color:"default"},e))})),y=function(e){var r=e.formQuestions,t=e.isDesktop,n=e.onSubmit,p=Object(o.useState)(0),l=p[0],c=p[1],u=Object(o.useState)(!0),y=u[0],h=u[1],g=Object(o.useRef)([]);g.current=Array(r.length).fill().map((function(e,r){return Object(o.createRef)()}));var x=function(){c((function(e){return e+1})),r[l+1].visible=!0,g.current[l+1].scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),v()},v=function(){h(!0)},j=function(e,t,n){r[e].questions[t].value=n,E(e)&&h(!1)},E=function(e){var t=!0;return r[e].questions.map((function(e){-1===e.value&&(t=!1)})),t};return a.a.createElement(a.a.Fragment,null,r.map((function(e,o){return a.a.createElement(s.a,{key:e.title,className:"formBox",style:{backgroundColor:e.color},ref:function(e){return g.current[o]=e}},a.a.createElement("h3",{style:{margin:0}},e.title),e.visible&&a.a.createElement(s.a,null,a.a.createElement(s.a,{className:Object(i.a)("topSpacingBox","spacingBox")},a.a.createElement("p",null,e.description)),a.a.createElement(s.a,null,e.questions.map((function(r,n){return a.a.createElement(s.a,{className:"spacingBox",key:n},a.a.createElement("p",{className:"itemQuestion"},a.a.createElement("b",null,e.index+1,".",n+1)," - ",r.question),a.a.createElement(s.a,{className:"radioBox"},a.a.createElement(d.a,{component:"fieldset"},a.a.createElement(m.a,{row:!0,"aria-label":"form",name:"form1"},a.a.createElement(f.a,{value:"1",control:a.a.createElement(b,null),label:"1",style:{marginRight:t?"50px":"20px"},onChange:function(){j(e.index,n,1)}}),a.a.createElement(f.a,{value:"2",control:a.a.createElement(b,null),label:"2",style:{marginRight:t?"50px":"20px"},onChange:function(){j(e.index,n,2)}}),a.a.createElement(f.a,{value:"3",control:a.a.createElement(b,null),label:"3",style:{marginRight:t?"50px":"20px"},onChange:function(){j(e.index,n,3)}}),a.a.createElement(f.a,{value:"4",control:a.a.createElement(b,null),label:"4",style:{marginRight:t?"50px":"20px"},onChange:function(){j(e.index,n,4)}}),a.a.createElement(f.a,{value:"5",control:a.a.createElement(b,null),label:"5",style:{marginRight:t?"50px":"20px"},onChange:function(){j(e.index,n,5)}})))))}))),a.a.createElement(s.a,{className:Object(i.a)("boxFlexEnd","spacingBox")},l===e.index&&l!==r.length-1&&a.a.createElement("button",{className:"buttonPrimary",style:{marginLeft:"10px"},onClick:x,disabled:y},"Next"),l===e.index&&l===r.length-1&&a.a.createElement("button",{className:"buttonPrimary",style:{marginLeft:"10px"},onClick:n,disabled:y},"Finish"))))})))};y.propTypes={formQuestions:c.a.array,isDesktop:c.a.bool,onSubmit:c.a.func},y.defaultProps={formQuestions:[]},r.default=y}}]);