(this["webpackJsonpshutterstock-widget-demo-builder"]=this["webpackJsonpshutterstock-widget-demo-builder"]||[]).push([[0],{17:function(e,t,a){e.exports={container:"LeftNavMenu_container__1m6cF",borderBottom:"LeftNavMenu_borderBottom__UYb6G",heading:"LeftNavMenu_heading__33HtF",containerWithIcon:"LeftNavMenu_containerWithIcon__WOUAk",onItemClickBlock:"LeftNavMenu_onItemClickBlock__2yQVW"}},22:function(e,t,a){e.exports={container:"CodeSnippetBlock_container__1Q7MC",topBorder:"CodeSnippetBlock_topBorder__1pHxX",pre:"CodeSnippetBlock_pre__1JecP",code:"CodeSnippetBlock_code__2_j7q font-body-static-xs",copy:"CodeSnippetBlock_copy__2ajnJ"}},37:function(e,t,a){e.exports={snackbar:"Snackbar_snackbar__1-2gT",show:"Snackbar_show__1p7nf",fadein:"Snackbar_fadein__2jUCz",fadeout:"Snackbar_fadeout__2fHTR"}},39:function(e,t,a){e.exports={container:"TabbedCodeSnippet_container__3KvMq"}},46:function(e,t,a){e.exports={leftColumn:"Layout_leftColumn___eN4-",navbarBrand:"Layout_navbarBrand__qh9nu",navbarContainer:"Layout_navbarContainer__1H727",bottomShadow:"Layout_bottomShadow__KcSu8"}},65:function(e,t,a){e.exports={container:"SearchWidget_container__3WyqZ"}},71:function(e,t,a){e.exports=a(94)},82:function(e,t,a){},83:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(12),r=a.n(i),o=(a(76),a(14)),l=a(19),s=a(51),u=a(10),m={mediaType:"images",inputs:{apiKey:"0OviQeVft2KY9BiFNJF8XRPvTe3ZXUFS",htmlElement:"widget-container",widgetSubtitle:"",widgetTitle:"Shutterstock UI Search Widget",assetsPerPage:26},booleans:{dynamicSubtitle:!0,dynamicTitle:!0,showMore:!0,showSearchBar:!0,onItemClick:!1}},d=Object(l.c)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(u.a)({},m),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return{result:t.payload};case"SET_PARAMS":return{mediaType:t.payload.mediaType,inputs:Object(u.a)({},e.inputs,{},t.payload.inputs),booleans:Object(u.a)({},e.inputs,{},t.payload.booleans)};default:return e}}});a(82),a(83);var h=a(6),b=a(107),g=a(103),p=a(104),f=a(55),v=a(52),y=a.n(v),w=a(105),k=a(98),E=a(54),S=a(56),C=a(101),j=function(e){var t=e.label,a=e.name,n=e.id,i=e.value,r=e.checked,o=e.defaultChecked,l=void 0!==o&&o;return c.a.createElement(w.a.Check,{type:"radio",label:t,name:a,id:n,value:i,checked:r,defaultChecked:l})},_=function(e){var t=e.label,a=e.value,n=e.defaultChecked,i=e.onChange;return c.a.createElement(w.a.Group,{controlId:a},c.a.createElement(w.a.Check,{type:"checkbox",label:t,defaultChecked:n,onChange:i}))},O=function(e){e.label;var t=e.value,a=e.onChange;return c.a.createElement(k.a,{size:"sm",className:"mb-3"},c.a.createElement(E.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",onChange:a,value:t}))},T=a(99),I=a(100),B=function(e){var t=e.heading,a=e.children,n=e.open,i=e.classes,r=e.onClick;return c.a.createElement("div",{className:i.borderBottom},c.a.createElement("div",{className:i.containerWithIcon,onClick:r},c.a.createElement("h6",{className:i.heading},t),n?c.a.createElement(T.a,{color:"black",size:15}):c.a.createElement(I.a,{color:"black",size:15})),c.a.createElement(S.a,{in:n},c.a.createElement("div",null,a)))},P=a(26),N=a(108),x=a(109),M=a(62),A=a.n(M),R=a(63),W=a.n(R),K=a(64),L=a.n(K),U=a(58),q=a.n(U),z=a(3),F=a.n(z),H=a(59),D=a(60),G=a(69),J=a(70),Q=a(37),V=a.n(Q),X=function(e){Object(J.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(H.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).message="",e.state={isActive:!1},e.openSnackBar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong...";e.message=t,e.setState({isActive:!0},(function(){setTimeout((function(){e.setState({isActive:!1})}),3e3)}))},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this.state.isActive;return c.a.createElement("div",{className:e?[V.a.snackbar,V.a.show].join(" "):V.a.snackbar},this.message)}}]),a}(n.PureComponent),Y=a(22),Z=a.n(Y);x.a.registerLanguage("javascript",A.a),x.a.registerLanguage("xml",W.a);var $=function(e){var t=e.language,a=e.value,i=(e.theme,e.showCopyButton),r=void 0===i||i,o=e.topBorder,l=void 0!==o&&o,s=Object(n.useRef)();return c.a.createElement("div",{className:F()(Z.a.container,Object(P.a)({},Z.a.topBorder,l))},c.a.createElement(N.a,{padding:"sm",style:{border:"none"}},c.a.createElement("pre",{className:Z.a.pre},c.a.createElement(x.a,{className:Z.a.code,language:t,style:L.a},a))),r&&c.a.createElement("span",{className:Z.a.copy,onClick:function(e){e.preventDefault(),q()(a),s.current.openSnackBar("Copied to clipboard.")}},"Copy"),c.a.createElement(X,{ref:s}))};$.defaultProps={language:"javascript",value:""};var ee=$,te=a(17),ae=a.n(te),ne=function(e){var t=e.mediaType,a=e.inputs,i=e.booleans,r=e.setParams,o=Object(n.useState)(t),l=Object(h.a)(o,2),s=l[0],m=l[1],d=Object(n.useState)(a.apiKey),b=Object(h.a)(d,2),g=b[0],p=b[1],f=Object(n.useState)(a.htmlElement),v=Object(h.a)(f,2),y=v[0],T=v[1],I=Object(n.useState)(a.widgetSubtitle),P=Object(h.a)(I,2),N=P[0],x=P[1],M=Object(n.useState)(a.widgetTitle),A=Object(h.a)(M,2),R=A[0],W=A[1],K=Object(n.useState)(i.dynamicSubtitle),L=Object(h.a)(K,2),U=L[0],q=L[1],z=Object(n.useState)(i.dynamicTitle),F=Object(h.a)(z,2),H=F[0],D=F[1],G=Object(n.useState)(i.showMore),J=Object(h.a)(G,2),Q=J[0],V=J[1],X=Object(n.useState)(i.showSearchBar),Y=Object(h.a)(X,2),Z=Y[0],$=Y[1],te=Object(n.useState)(a.assetsPerPage),ne=Object(h.a)(te,2),ce=ne[0],ie=ne[1],re=Object(n.useState)(a.onItemClick),oe=Object(h.a)(re,2),le=oe[0],se=oe[1],ue=Object(n.useState)({options:!0,mediaType:!0,htmlContainer:!0,apiKey:!0,titleAndSubtitle:!0,callbacks:!0}),me=Object(h.a)(ue,2),de=me[0],he=me[1],be=Object(n.useState)({onItemClick:!1}),ge=Object(h.a)(be,2);ge[0],ge[1];return c.a.createElement("div",{className:ae.a.container,style:{marginTop:20}},c.a.createElement(B,{heading:"Select media type",classes:ae.a,open:de.mediaType,onClick:function(){return he(Object(u.a)({},de,{mediaType:!de.mediaType}))}},c.a.createElement(w.a.Group,{onChange:function(e){return m(e.target.value)}},c.a.createElement(j,{label:"Images",name:"mediaType",id:"images",value:"images",defaultChecked:"images"===s}),c.a.createElement(j,{label:"Videos",name:"mediaType",id:"videos",value:"videos",defaultChecked:"videos"===s}))),c.a.createElement(B,{heading:"Title & Subtitle",classes:ae.a,open:de.titleAndSubtitle,onClick:function(){return he(Object(u.a)({},de,{titleAndSubtitle:!de.titleAndSubtitle}))}},c.a.createElement("h6",null,"Title"),c.a.createElement(O,{value:R,onChange:function(e){return W(e.target.value)}}),c.a.createElement("h6",null,"Subtitle"),c.a.createElement(O,{value:N,onChange:function(e){return x(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Enter custom text (uncheck dynamic titles)")),c.a.createElement(B,{heading:"Options",classes:ae.a,open:de.options,onClick:function(){return he(Object(u.a)({},de,{options:!de.options}))}},c.a.createElement(k.a,{className:"mb-3"},c.a.createElement(k.a.Prepend,null,c.a.createElement(k.a.Text,null,"Assets per page")),c.a.createElement(E.a,{type:"number","aria-label":"assets-per-page",value:ce,onChange:function(e){return ie(e.target.value)}})),c.a.createElement(_,{label:"Show search bar",value:"showSearchBar",defaultChecked:Z,onChange:function(e){return $(e.target.checked)}}),c.a.createElement(_,{label:"Show more button",value:"showMore",defaultChecked:Q,onChange:function(e){return V(e.target.checked)}}),c.a.createElement(_,{label:"Use dynamic title",value:"dynamicTitle",defaultChecked:H,onChange:function(e){return D(e.target.checked)}}),c.a.createElement(_,{label:"Use dynamic subtitle",value:"dynamicSubtitle",defaultChecked:U,onChange:function(e){return q(e.target.checked)}}),c.a.createElement(_,{label:"Use onItemClick callback",value:"onItemClick",defaultChecked:le,onChange:function(e){return se(e.target.checked)}}),c.a.createElement(S.a,{in:le},c.a.createElement("div",{className:ae.a.onItemClickBlock},c.a.createElement(ee,{value:"(e, item) => {\n  e.preventDefault();\n  console.log(item);\n}",language:"javascript",showCopyButton:!1,topBorder:!0})))),c.a.createElement(B,{heading:"HTML container",classes:ae.a,open:de.htmlContainer,onClick:function(){return he(Object(u.a)({},de,{htmlContainer:!de.htmlContainer}))}},c.a.createElement(O,{value:y,onChange:function(e){return T(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Element you want the widget to render in.")),c.a.createElement(B,{heading:"API key",classes:ae.a,open:de.apiKey,onClick:function(){return he(Object(u.a)({},de,{apiKey:!de.apiKey}))}},c.a.createElement(O,{value:g,onChange:function(e){return p(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Example - use your own API key in the integration.")),c.a.createElement("div",{className:"mt-4 mb-5 text-center"},c.a.createElement(C.a,{className:"btn btn-danger",style:{borderRadius:"25px"},onClick:function(){r({mediaType:s,inputs:{apiKey:g,htmlElement:y,widgetSubtitle:N,widgetTitle:R,assetsPerPage:ce>0?ce:26},booleans:{dynamicSubtitle:U,dynamicTitle:H,onItemClick:le,showMore:Q,showSearchBar:Z}})}},"Load widget")))},ce={setParams:function(e){return function(t){t({type:"SET_PARAMS",payload:e})}}},ie=Object(o.b)((function(e){return e.main}),ce)(ne),re=function(e){var t=e.apiKey,a=e.assetsPerPage,c=void 0===a?26:a,i=e.dynamicSubtitle,r=e.dynamicTitle,o=e.htmlElement,l=e.mediaType,s=e.onItemClick,m=e.showItemId,d=e.showMore,h=e.showSearchBar,b=e.widgetSubtitle,g=e.widgetTitle,p=Object(n.useRef)(),f=Object(n.useRef)(),v=Object(n.useCallback)((function(){var e=Object(u.a)({mediaType:l,title:g,subtitle:b,container:f.current,showMore:d,key:t,showItemId:m,dynamicTitle:r,dynamicSubtitle:i,showSearchBar:h,assetsPerPage:c},s&&{onItemClick:function(e,t){e.preventDefault(),console.log(t)}});if("object"===typeof window&&window.ShutterstockWidget){var a=new window.ShutterstockWidget(e);a.search({query:""}),p.current=a}}),[t,c,i,r,o,l,s,m,d,h,b,g]);return Object(n.useEffect)(v,[t,c,i,r,o,l,s,m,d,h,b,g]),{widgetInstanceRef:p,widgetRef:f}},oe=a(65),le=a.n(oe),se=function(e){var t=e.mediaType,a=e.inputs,n=a.apiKey,i=a.assetsPerPage,r=a.htmlElement,o=a.widgetSubtitle,l=a.widgetTitle,s=e.booleans,u=s.dynamicSubtitle,m=s.dynamicTitle,d=s.onItemClick,h=s.showMore,b=s.showItemId,g=s.showSearchBar,p=re({apiKey:n,assetsPerPage:i,dynamicSubtitle:u,dynamicTitle:m,htmlElement:r,mediaType:t,onItemClick:d,showItemId:b,showMore:h,showSearchBar:g,widgetSubtitle:o,widgetTitle:l}).widgetRef;return c.a.createElement("div",{className:le.a.container},c.a.createElement("div",{ref:p}))},ue=Object(o.b)((function(e){return e.main}))(se),me=a(102),de=a(106),he=a(39),be=a.n(he),ge=function(e){var t=e.codes,a=Object(n.useState)("html"),i=Object(h.a)(a,2),r=i[0],o=i[1],l=t.map((function(e){return c.a.createElement(me.a,{eventKey:e.language,title:(t=e.language,{html:"Html",react:"React"}[t]),key:e.language},c.a.createElement(ee,{value:e.value,language:e.language,theme:{emptyCard:be.a.emptyCard}}));var t}));return c.a.createElement("div",{className:be.a.container},c.a.createElement(de.a,{activeKey:r,onSelect:function(e){return o(e)},className:be.a.tabs},l))},pe=function(e){var t=e.mediaType,a=e.inputs,n=a.apiKey,c=a.assetsPerPage,i=void 0===c?26:c,r=a.htmlElement,o=a.widgetSubtitle,l=a.widgetTitle,s=e.booleans,u=s.dynamicSubtitle,m=s.dynamicTitle,d=s.onItemClick,h=(s.showMore,s.showSearchBar),b=d?"\n          onItemClick: (e, item) => {\n            e.preventDefault();\n            console.log(item);\n          }":"";return'\n<html>\n  <head>\n    <link rel="stylesheet" type="text/css" href="https://api-cdn.shutterstock.com/static/css/sstk-widget.css">\n  </head>\n  <body>\n    <div id="'.concat(r,"\"></div>\n    <script>\n      window.onload = () => {\n        const widget = new ShutterstockWidget({\n          container: document.getElementById('").concat(r,"'),\n          dynamicTitle: ").concat(m,",\n          dynamicSubtitle: ").concat(u,",\n          key: '").concat(n,"',\n          mediaType: '").concat(t,"',\n          showMore: true,\n          showSearchBar: ").concat(h,",\n          title: '").concat(l,"',\n          subtitle: '").concat(o,"',\n          assetsPerPage: ").concat(i,",").concat(b,"\n        });\n\n        widget.search({\n          query: ''\n        });\n      }\n    <\/script>\n    <script src=\"https://api-cdn.shutterstock.com/static/js/sstk-widget.js\"><\/script>\n  </body>\n</html>\n")},fe=function(e){var t=e.mediaType,a=e.inputs,n=a.apiKey,c=a.assetsPerPage,i=(a.htmlElement,a.widgetSubtitle),r=a.widgetTitle,o=e.booleans,l=o.dynamicSubtitle,s=o.dynamicTitle,u=o.onItemClick,m=o.showMore,d=o.showSearchBar,h=u?"\n      onItemClick: (e, item) => {\n          e.preventDefault();\n          console.log(item);\n        }":"";return"\nimport React, { useRef, useEffect } from 'react';\nimport PropTypes from 'prop-types';\n\nconst SearchWidget = () => {\n  const widgetRef = useRef();\n\n  useEffect(() => {\n    const widgetConfig = {\n      mediaType: '".concat(t,"',\n      title: '").concat(r,"',\n      subtitle: '").concat(i,"',\n      container: widgetRef.current,\n      showMore: ").concat(m,",\n      key: '").concat(n,"',\n      dynamicTitle: ").concat(s,",\n      dynamicSubtitle: ").concat(l,",\n      showSearchBar: ").concat(d,",\n      assetsPerPage: ").concat(c,",").concat(h,"\n    };\n\n    // eslint-disable-next-line no-undef\n    if (typeof window === 'object' && window.ShutterstockWidget) {\n      // eslint-disable-next-line no-undef\n      const widgetInstance = new window.ShutterstockWidget(widgetConfig);\n      widgetInstance.search({\n        query: '',\n      });\n      widgetRef.current = widgetInstance;\n    }\n  }, []);\n\n  return <div ref={widgetRef} />;\n};\n\nexport default SearchWidget;\n")},ve=Object(o.b)((function(e){var t=e.main;return{codes:[{language:"html",value:pe(t)},{language:"react",value:fe(t)}]}}))(ge),ye=a(46),we=a.n(ye),ke=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],i=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{bg:"light",variant:"light",className:we.a.bottomShadow},"Shutterstock UI Wizard"),c.a.createElement(g.a,{fluid:!0,style:{padding:0}},c.a.createElement(p.a,{noGutters:!0},c.a.createElement(f.a,{sm:"12",lg:"2",className:we.a.leftColumn},c.a.createElement(ie,null)),c.a.createElement(f.a,{sm:"12",lg:"10"},c.a.createElement(p.a,null,c.a.createElement(f.a,null,c.a.createElement(ve,null))),c.a.createElement(p.a,null,c.a.createElement(f.a,null,a&&c.a.createElement(ue,null),c.a.createElement(y.a,{url:"https://api-cdn.shutterstock.com/static/js/sstk-widget.js",onLoad:function(){return i(!0)}})))))))};var Ee=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.d)(d,e,Object(l.a)(s.a))}()},c.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.ec73eae2.chunk.js.map