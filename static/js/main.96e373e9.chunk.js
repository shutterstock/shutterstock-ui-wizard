(this["webpackJsonpshutterstock-widget-demo-builder"]=this["webpackJsonpshutterstock-widget-demo-builder"]||[]).push([[0],{17:function(e,t,a){e.exports={container:"LeftNavMenu_container__1m6cF",borderBottom:"LeftNavMenu_borderBottom__UYb6G",heading:"LeftNavMenu_heading__33HtF",containerWithIcon:"LeftNavMenu_containerWithIcon__WOUAk",onItemClickBlock:"LeftNavMenu_onItemClickBlock__2yQVW"}},22:function(e,t,a){e.exports={container:"CodeSnippetBlock_container__1Q7MC",topBorder:"CodeSnippetBlock_topBorder__1pHxX",pre:"CodeSnippetBlock_pre__1JecP",code:"CodeSnippetBlock_code__2_j7q font-body-static-xs",copy:"CodeSnippetBlock_copy__2ajnJ"}},41:function(e,t,a){e.exports={snackbar:"Snackbar_snackbar__1-2gT",show:"Snackbar_show__1p7nf",fadein:"Snackbar_fadein__2jUCz",fadeout:"Snackbar_fadeout__2fHTR"}},43:function(e,t,a){e.exports={container:"TabbedCodeSnippet_container__3KvMq"}},50:function(e,t,a){e.exports={leftColumn:"Layout_leftColumn___eN4-",navbarBrand:"Layout_navbarBrand__qh9nu",navbarContainer:"Layout_navbarContainer__1H727",bottomShadow:"Layout_bottomShadow__KcSu8"}},69:function(e,t,a){e.exports={container:"SearchWidget_container__3WyqZ"}},73:function(e,t,a){e.exports=a(95)},83:function(e,t,a){},84:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),o=(a(78),a(14)),l=a(19),s=a(56),u=a(10),m={mediaType:"images",inputs:{apiKey:"0OviQeVft2KY9BiFNJF8XRPvTe3ZXUFS",htmlElement:"widget-container",widgetSubtitle:"",widgetTitle:"Shutterstock UI Search Widget",assetsPerPage:26},booleans:{dynamicSubtitle:!0,dynamicTitle:!0,showMore:!0,showSearchBar:!0,onItemClick:!0}},d=Object(l.c)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(u.a)({},m),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return{result:t.payload};case"SET_PARAMS":return{mediaType:t.payload.mediaType,inputs:Object(u.a)({},e.inputs,{},t.payload.inputs),booleans:Object(u.a)({},e.inputs,{},t.payload.booleans)};default:return e}}});a(83);var h=a(27),p=a(28),g=a(37),b=a(38),f=(a(84),a(57)),v=a.n(f),y=a(6),w=a(108),k=a(104),E=a(105),S=a(61),C=a(58),j=a.n(C),_=a(106),O=a(99),T=a(60),I=a(62),B=a(102),P=function(e){var t=e.label,a=e.name,n=e.id,r=e.value,i=e.checked,o=e.defaultChecked,l=void 0!==o&&o;return c.a.createElement(_.a.Check,{type:"radio",label:t,name:a,id:n,value:r,checked:i,defaultChecked:l})},N=function(e){var t=e.label,a=e.value,n=e.defaultChecked,r=e.onChange;return c.a.createElement(_.a.Group,{controlId:a},c.a.createElement(_.a.Check,{type:"checkbox",label:t,defaultChecked:n,onChange:r}))},x=function(e){e.label;var t=e.value,a=e.onChange;return c.a.createElement(O.a,{size:"sm",className:"mb-3"},c.a.createElement(T.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",onChange:a,value:t}))},M=a(100),W=a(101),A=function(e){var t=e.heading,a=e.children,n=e.open,r=e.classes,i=e.onClick;return c.a.createElement("div",{className:r.borderBottom},c.a.createElement("div",{className:r.containerWithIcon,onClick:i},c.a.createElement("h6",{className:r.heading},t),n?c.a.createElement(M.a,{color:"black",size:15}):c.a.createElement(W.a,{color:"black",size:15})),c.a.createElement(I.a,{in:n},c.a.createElement("div",null,a)))},R=a(26),K=a(109),L=a(110),U=a(66),z=a.n(U),q=a(67),D=a.n(q),F=a(68),G=a.n(F),H=a(64),J=a.n(H),X=a(3),Q=a.n(X),V=a(41),Y=a.n(V),Z=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).message="",e.state={isActive:!1},e.openSnackBar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong...";e.message=t,e.setState({isActive:!0},(function(){setTimeout((function(){e.setState({isActive:!1})}),3e3)}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.isActive;return c.a.createElement("div",{className:e?[Y.a.snackbar,Y.a.show].join(" "):Y.a.snackbar},this.message)}}]),a}(n.PureComponent),$=a(22),ee=a.n($);L.a.registerLanguage("javascript",z.a),L.a.registerLanguage("xml",D.a);var te=function(e){var t=e.language,a=e.value,r=(e.theme,e.showCopyButton),i=void 0===r||r,o=e.topBorder,l=void 0!==o&&o,s=Object(n.useRef)();return c.a.createElement("div",{className:Q()(ee.a.container,Object(R.a)({},ee.a.topBorder,l))},c.a.createElement(K.a,{padding:"sm",style:{border:"none"}},c.a.createElement("pre",{className:ee.a.pre},c.a.createElement(L.a,{className:ee.a.code,language:t,style:G.a},a))),i&&c.a.createElement("span",{className:ee.a.copy,onClick:function(e){e.preventDefault(),J()(a),s.current.openSnackBar("Copied to clipboard.")}},"Copy"),c.a.createElement(Z,{ref:s}))};te.defaultProps={language:"javascript",value:""};var ae=te,ne=a(17),ce=a.n(ne),re=function(e){var t=e.mediaType,a=e.inputs,r=e.booleans,i=e.setParams,o=Object(n.useState)(t),l=Object(y.a)(o,2),s=l[0],m=l[1],d=Object(n.useState)(a.apiKey),h=Object(y.a)(d,2),p=h[0],g=h[1],b=Object(n.useState)(a.htmlElement),f=Object(y.a)(b,2),v=f[0],w=f[1],k=Object(n.useState)(a.widgetSubtitle),E=Object(y.a)(k,2),S=E[0],C=E[1],j=Object(n.useState)(a.widgetTitle),M=Object(y.a)(j,2),W=M[0],R=M[1],K=Object(n.useState)(r.dynamicSubtitle),L=Object(y.a)(K,2),U=L[0],z=L[1],q=Object(n.useState)(r.dynamicTitle),D=Object(y.a)(q,2),F=D[0],G=D[1],H=Object(n.useState)(r.showMore),J=Object(y.a)(H,2),X=J[0],Q=J[1],V=Object(n.useState)(r.showSearchBar),Y=Object(y.a)(V,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(a.assetsPerPage),te=Object(y.a)(ee,2),ne=te[0],re=te[1],ie=Object(n.useState)(r.onItemClick),oe=Object(y.a)(ie,2),le=oe[0],se=oe[1],ue=Object(n.useState)({options:!0,mediaType:!0,htmlContainer:!0,apiKey:!0,titleAndSubtitle:!0,callbacks:!0}),me=Object(y.a)(ue,2),de=me[0],he=me[1],pe=Object(n.useState)({onItemClick:!1}),ge=Object(y.a)(pe,2);ge[0],ge[1];return c.a.createElement("div",{className:ce.a.container,style:{marginTop:20}},c.a.createElement(A,{heading:"Select media type",classes:ce.a,open:de.mediaType,onClick:function(){return he(Object(u.a)({},de,{mediaType:!de.mediaType}))}},c.a.createElement(_.a.Group,{onChange:function(e){return m(e.target.value)}},c.a.createElement(P,{label:"Images",name:"mediaType",id:"images",value:"images",defaultChecked:"images"===s}),c.a.createElement(P,{label:"Videos",name:"mediaType",id:"videos",value:"videos",defaultChecked:"videos"===s}))),c.a.createElement(A,{heading:"Title & Subtitle",classes:ce.a,open:de.titleAndSubtitle,onClick:function(){return he(Object(u.a)({},de,{titleAndSubtitle:!de.titleAndSubtitle}))}},c.a.createElement("h6",null,"Title"),c.a.createElement(x,{value:W,onChange:function(e){return R(e.target.value)}}),c.a.createElement("h6",null,"Subtitle"),c.a.createElement(x,{value:S,onChange:function(e){return C(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Enter custom text (uncheck dynamic titles)")),c.a.createElement(A,{heading:"Options",classes:ce.a,open:de.options,onClick:function(){return he(Object(u.a)({},de,{options:!de.options}))}},c.a.createElement(O.a,{className:"mb-3"},c.a.createElement(O.a.Prepend,null,c.a.createElement(O.a.Text,null,"Assets per page")),c.a.createElement(T.a,{type:"number","aria-label":"assets-per-page",value:ne,onChange:function(e){return re(e.target.value)}})),c.a.createElement(N,{label:"Show search bar",value:"showSearchBar",defaultChecked:Z,onChange:function(e){return $(e.target.checked)}}),c.a.createElement(N,{label:"Show more button",value:"showMore",defaultChecked:X,onChange:function(e){return Q(e.target.checked)}}),c.a.createElement(N,{label:"Use dynamic title",value:"dynamicTitle",defaultChecked:F,onChange:function(e){return G(e.target.checked)}}),c.a.createElement(N,{label:"Use dynamic subtitle",value:"dynamicSubtitle",defaultChecked:U,onChange:function(e){return z(e.target.checked)}}),c.a.createElement(N,{label:"Use onItemClick callback",value:"onItemClick",defaultChecked:le,onChange:function(e){return se(e.target.checked)}}),c.a.createElement(I.a,{in:le},c.a.createElement("div",{className:ce.a.onItemClickBlock},c.a.createElement(ae,{value:"(e, item) => {\n  e.preventDefault();\n  console.log(item);\n}",language:"javascript",showCopyButton:!1,topBorder:!0})))),c.a.createElement(A,{heading:"HTML container",classes:ce.a,open:de.htmlContainer,onClick:function(){return he(Object(u.a)({},de,{htmlContainer:!de.htmlContainer}))}},c.a.createElement(x,{value:v,onChange:function(e){return w(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Element you want the widget to render in.")),c.a.createElement(A,{heading:"API key",classes:ce.a,open:de.apiKey,onClick:function(){return he(Object(u.a)({},de,{apiKey:!de.apiKey}))}},c.a.createElement(x,{value:p,onChange:function(e){return g(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Example - use your own API key in the integration.")),c.a.createElement("div",{className:"mt-4 mb-5 text-center"},c.a.createElement(B.a,{className:"btn btn-danger",style:{borderRadius:"25px"},onClick:function(){i({mediaType:s,inputs:{apiKey:p,htmlElement:v,widgetSubtitle:S,widgetTitle:W,assetsPerPage:ne>0?ne:26},booleans:{dynamicSubtitle:U,dynamicTitle:F,onItemClick:le,showMore:X,showSearchBar:Z}})}},"Load widget")))},ie={setParams:function(e){return function(t){t({type:"SET_PARAMS",payload:e})}}},oe=Object(o.b)((function(e){return e.main}),ie)(re),le=function(e){var t=e.apiKey,a=e.assetsPerPage,c=void 0===a?26:a,r=e.dynamicSubtitle,i=e.dynamicTitle,o=e.htmlElement,l=e.mediaType,s=e.onItemClick,m=e.showItemId,d=e.showMore,h=e.showSearchBar,p=e.widgetSubtitle,g=e.widgetTitle,b=Object(n.useRef)(),f=Object(n.useRef)(),v=Object(n.useCallback)((function(){var e=Object(u.a)({mediaType:l,title:g,subtitle:p,container:f.current,showMore:d,key:t,showItemId:m,dynamicTitle:i,dynamicSubtitle:r,showSearchBar:h,assetsPerPage:c},s&&{onItemClick:function(e,t){e.preventDefault(),console.log(t)}});if("object"===typeof window&&window.ShutterstockWidget){var a=new window.ShutterstockWidget(e);a.search({query:""}),b.current=a}}),[t,c,r,i,o,l,s,m,d,h,p,g]);return Object(n.useEffect)(v,[t,c,r,i,o,l,s,m,d,h,p,g]),{widgetInstanceRef:b,widgetRef:f}},se=a(69),ue=a.n(se),me=function(e){var t=e.mediaType,a=e.inputs,n=a.apiKey,r=a.assetsPerPage,i=a.htmlElement,o=a.widgetSubtitle,l=a.widgetTitle,s=e.booleans,u=s.dynamicSubtitle,m=s.dynamicTitle,d=s.onItemClick,h=s.showMore,p=s.showItemId,g=s.showSearchBar,b=le({apiKey:n,assetsPerPage:r,dynamicSubtitle:u,dynamicTitle:m,htmlElement:i,mediaType:t,onItemClick:d,showItemId:p,showMore:h,showSearchBar:g,widgetSubtitle:o,widgetTitle:l}).widgetRef;return c.a.createElement("div",{className:ue.a.container},c.a.createElement("div",{ref:b}))},de=Object(o.b)((function(e){return e.main}))(me),he=a(103),pe=a(107),ge=a(43),be=a.n(ge),fe=function(e){var t=e.codes,a=Object(n.useState)("html"),r=Object(y.a)(a,2),i=r[0],o=r[1],l=t.map((function(e){return c.a.createElement(he.a,{eventKey:e.language,title:(t=e.language,{html:"Html",react:"React"}[t]),key:e.language},c.a.createElement(ae,{value:e.value,language:e.language,theme:{emptyCard:be.a.emptyCard}}));var t}));return c.a.createElement("div",{className:be.a.container},c.a.createElement(pe.a,{activeKey:i,onSelect:function(e){return o(e)},className:be.a.tabs},l))},ve=function(e){var t=e.mediaType,a=e.inputs,n=a.apiKey,c=a.assetsPerPage,r=void 0===c?26:c,i=a.htmlElement,o=a.widgetSubtitle,l=a.widgetTitle,s=e.booleans,u=s.dynamicSubtitle,m=s.dynamicTitle,d=s.onItemClick,h=(s.showMore,s.showSearchBar),p=d?"\n          onItemClick: (e, item) => {\n            e.preventDefault();\n            console.log(item);\n          }":"";return'\n<html>\n  <head>\n    <link rel="stylesheet" type="text/css" href="https://api-cdn.shutterstock.com/0.1.13/static/css/sstk-widget.css">\n  </head>\n  <body>\n    <div id="'.concat(i,"\"></div>\n    <script>\n      window.onload = () => {\n        const widget = new ShutterstockWidget({\n          container: document.getElementById('").concat(i,"'),\n          dynamicTitle: ").concat(m,",\n          dynamicSubtitle: ").concat(u,",\n          key: '").concat(n,"',\n          mediaType: '").concat(t,"',\n          showMore: true,\n          showSearchBar: ").concat(h,",\n          title: '").concat(l,"',\n          subtitle: '").concat(o,"',\n          assetsPerPage: ").concat(r,",").concat(p,"\n        });\n\n        widget.search({\n          query: ''\n        });\n      }\n    <\/script>\n    <script src=\"https://api-cdn.shutterstock.com/0.1.13/static/js/sstk-widget.js\"><\/script>\n  </body>\n</html>\n")},ye=function(e){var t=e.mediaType,a=e.inputs,n=a.apiKey,c=a.assetsPerPage,r=(a.htmlElement,a.widgetSubtitle),i=a.widgetTitle,o=e.booleans,l=o.dynamicSubtitle,s=o.dynamicTitle,u=o.onItemClick,m=o.showMore,d=o.showSearchBar,h=u?"\n      onItemClick: (e, item) => {\n          e.preventDefault();\n          console.log(item);\n        }":"";return"\nimport React, { useRef, useEffect } from 'react';\nimport PropTypes from 'prop-types';\n\nconst SearchWidget = () => {\n  const widgetRef = useRef();\n\n  useEffect(() => {\n    const widgetConfig = {\n      mediaType: '".concat(t,"',\n      title: '").concat(i,"',\n      subtitle: '").concat(r,"',\n      container: widgetRef.current,\n      showMore: ").concat(m,",\n      key: '").concat(n,"',\n      dynamicTitle: ").concat(s,",\n      dynamicSubtitle: ").concat(l,",\n      showSearchBar: ").concat(d,",\n      assetsPerPage: ").concat(c,",").concat(h,"\n    };\n\n    // eslint-disable-next-line no-undef\n    if (typeof window === 'object' && window.ShutterstockWidget) {\n      // eslint-disable-next-line no-undef\n      const widgetInstance = new window.ShutterstockWidget(widgetConfig);\n      widgetInstance.search({\n        query: '',\n      });\n      widgetRef.current = widgetInstance;\n    }\n  }, []);\n\n  return <div ref={widgetRef} />;\n};\n\nexport default SearchWidget;\n")},we=Object(o.b)((function(e){var t=e.main;return{codes:[{language:"html",value:ve(t)},{language:"react",value:ye(t)}]}}))(fe),ke=a(50),Ee=a.n(ke),Se=function(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,{bg:"light",variant:"light",className:Ee.a.bottomShadow},"Shutterstock UI Wizard"),c.a.createElement(k.a,{fluid:!0,style:{padding:0}},c.a.createElement(E.a,{noGutters:!0},c.a.createElement(S.a,{sm:"12",lg:"2",className:Ee.a.leftColumn},c.a.createElement(oe,null)),c.a.createElement(S.a,{sm:"12",lg:"10"},c.a.createElement(E.a,null,c.a.createElement(S.a,null,c.a.createElement(we,null))),c.a.createElement(E.a,null,c.a.createElement(S.a,null,a&&c.a.createElement(de,null),c.a.createElement(j.a,{url:"https://api-cdn.shutterstock.com/0.1.13/static/js/sstk-widget.js",onLoad:function(){return r(!0)}})))))))};var Ce=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var c=new v.a({sourceId:"Eb1vf7gnQNmiiKX8ESJXLenE0pG49XOk"},{page:{applicationName:"ShutterstockUIWizard",environment:"production",pageLanguage:"en",site:"developers"}});return c.loadProvider().then((function(){c.setInitialData({page:{applicationName:"ShutterstockUIWizard",environment:"production",originalUrl:"https://tech.shutterstock.com/shutterstock-ui-wizard",pageLanguage:"en",pageType:"shutterstockUiWizard",referringUrl:"https://tech.shutterstock.com/shutterstock-ui-wizard",site:"developers"}})})),c.page({pageType:"shutterstockUiWizard",site:"developers"}),n}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),a}(c.a.Component),je=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(Se,null),c.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(o.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.d)(d,e,Object(l.a)(s.a))}()},c.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.96e373e9.chunk.js.map