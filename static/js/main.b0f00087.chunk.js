(this["webpackJsonpshutterstock-widget-demo-builder"]=this["webpackJsonpshutterstock-widget-demo-builder"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},11:function(e,t,a){e.exports={container:"LeftNavMenu_container__1m6cF",borderBottom:"LeftNavMenu_borderBottom__UYb6G",heading:"LeftNavMenu_heading__33HtF",containerWithIcon:"LeftNavMenu_containerWithIcon__WOUAk",onItemClickBlock:"LeftNavMenu_onItemClickBlock__2yQVW"}},120:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=(a(99),a(10)),s=a(26),l=a(72),m=a(7),u={name:"searchPage",props:{title:"Shutterstock UI Search Widget",widgetSubtitle:"",widgetTitle:"Shutterstock UI Search Widget",assetsPerPage:26,dynamicSubtitle:!0,dynamicTitle:!0,showMore:!0,showSearchBar:!0,onItemClick:!0,overlayActions:!1,searchFilters:!1,mediaType:"images"}},p={inputs:{apiKey:"0OviQeVft2KY9BiFNJF8XRPvTe3ZXUFS",htmlElement:"widget-container"},page:u},d=a(30),g={activePage:"searchPage",searchPage:u,imageDetailsPage:{name:"imageDetailsPage",props:{displayButtons:!0,showSearchBar:!1}},imageLicensingPage:{name:"imageLicensingPage",props:{displayButtons:!0,showSearchBar:!1}},imageLicenseHistoryPage:{name:"imageLicenseHistoryPage",props:{onLicenseHistoryItemClick:!0}}},_=Object(s.c)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(m.a)({},p),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return{result:t.payload};case"SET_PARAMS":return Object(m.a)({},e,{inputs:Object(m.a)({},e.inputs,{},t.payload.inputs),page:Object(m.a)({},t.payload.page)});default:return e}},pages:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(m.a)({},g),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_ACTIVE_PAGE":return Object(m.a)({},a,{activePage:n.payload.activePage});case"SET_PAGES_PARAMS":var c=null===(e=n.payload)||void 0===e?void 0:e.name;return Object(m.a)({},a,Object(d.a)({},c,Object(m.a)({},null===a||void 0===a?void 0:a[c],{props:Object(m.a)({},null===(t=n.payload)||void 0===t?void 0:t.props)})));default:return a}}}),h="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.d;a(104);var f=a(43),b=a(44),v=a(53),E=a(54),y=(a(105),a(73)),k=a.n(y),w=a(6),O=a(134),C=a(129),P=a(130),S=a(77),j=a(74),I=a.n(j),T=a(127),D=a(132),L=function(e){var t=e.label,a=e.name,n=e.id,r=e.value,i=e.checked,o=e.defaultChecked,s=void 0!==o&&o,l=e.className,m=void 0===l?"":l;return c.a.createElement(D.a.Check,{type:"radio",label:t,name:a,id:n,value:r,checked:i,defaultChecked:s,className:m})},B=function(e){var t=e.label,a=e.value,n=e.defaultChecked,r=e.onChange;return c.a.createElement(D.a.Group,{controlId:a},c.a.createElement(D.a.Check,{type:"checkbox",label:t,defaultChecked:n,onChange:r}))},M=a(124),N=a(76),A=function(e){e.label;var t=e.value,a=e.onChange;return c.a.createElement(M.a,{size:"sm",className:"mb-3"},c.a.createElement(N.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",onChange:a,value:t}))},W=a(78),R=a(125),U=a(126),K=function(e){var t=e.heading,a=e.children,n=e.open,r=e.classes,i=e.onClick,o=e.style,s=void 0===o?{}:o;return c.a.createElement("div",{className:r.borderBottom,style:s},c.a.createElement("div",{className:r.containerWithIcon,onClick:i},c.a.createElement("h6",{className:r.heading},t),n?c.a.createElement(R.a,{color:"black",size:15}):c.a.createElement(U.a,{color:"black",size:15})),c.a.createElement(W.a,{in:n},c.a.createElement("div",null,a)))},x=a(136),F=a(135),H=a(81),z=a.n(H),q=a(82),J=a.n(q),G=a(83),X=a.n(G),V=a(79),Y=a.n(V),Z=a(3),Q=a.n(Z),$=a(55),ee=a.n($),te=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).message="",e.state={isActive:!1},e.openSnackBar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong...";e.message=t,e.setState({isActive:!0},(function(){setTimeout((function(){e.setState({isActive:!1})}),3e3)}))},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.isActive;return c.a.createElement("div",{className:e?[ee.a.snackbar,ee.a.show].join(" "):ee.a.snackbar},this.message)}}]),a}(n.PureComponent),ae=a(35),ne=a.n(ae);F.a.registerLanguage("javascript",z.a),F.a.registerLanguage("xml",J.a);var ce=function(e){var t=e.language,a=e.value,r=(e.theme,e.showCopyButton),i=void 0===r||r,o=e.topBorder,s=void 0!==o&&o,l=Object(n.useRef)();return c.a.createElement("div",{className:Q()(ne.a.container,Object(d.a)({},ne.a.topBorder,s))},c.a.createElement(x.a,{padding:"sm",style:{border:"none"}},c.a.createElement("pre",{className:ne.a.pre},c.a.createElement(F.a,{className:ne.a.code,language:t,style:X.a},a))),i&&c.a.createElement("span",{className:ne.a.copy,onClick:function(e){e.preventDefault(),Y()(a),l.current.openSnackBar("Copied to clipboard.")}},"Copy"),c.a.createElement(te,{ref:l}))};ce.defaultProps={language:"javascript",value:""};var re=ce,ie=a(29),oe=a.n(ie),se=a(19),le=a(131),me=function(e){e.page;var t=e.pageDisplayName,a=(e.setParams,e.show),n=e.setShow,r=e.children;return c.a.createElement(le.a,{show:a,onHide:function(){return n(!1)},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",size:"lg"},c.a.createElement(le.a.Header,{closeButton:!0},c.a.createElement(le.a.Title,{id:"example-custom-modal-styling-title"},"Edit ",c.a.createElement("b",null,t," ")," configuration")),c.a.createElement(le.a.Body,null,r))},ue=a(11),pe=a.n(ue),de="[\n  {\n    label: 'Insert preview',\n    icon:'".concat(oe.a,"',\n    onClick: (e, item) => {\n      e.preventDefault();\n      console.log(item);\n    }\n  }\n]"),ge=function(e){var t=e.page,a=e.setParams,r=e.activated;console.log({activated:r});var i=Object(n.useState)(t.props.mediaType),o=Object(w.a)(i,2),s=o[0],l=o[1],u=Object(n.useState)(t.props.widgetSubtitle),p=Object(w.a)(u,2),d=p[0],g=p[1],_=Object(n.useState)(t.props.widgetTitle),h=Object(w.a)(_,2),f=h[0],b=h[1],v=Object(n.useState)(t.props.dynamicSubtitle),E=Object(w.a)(v,2),y=E[0],k=E[1],O=Object(n.useState)(t.props.dynamicTitle),C=Object(w.a)(O,2),P=C[0],S=C[1],j=Object(n.useState)(t.props.showMore),I=Object(w.a)(j,2),R=I[0],U=I[1],x=Object(n.useState)(t.props.showSearchBar),F=Object(w.a)(x,2),H=F[0],z=F[1],q=Object(n.useState)(t.props.assetsPerPage),J=Object(w.a)(q,2),G=J[0],X=J[1],V=Object(n.useState)(t.props.onItemClick),Y=Object(w.a)(V,2),Z=Y[0],Q=Y[1],$=Object(n.useState)(t.props.searchFilters),ee=Object(w.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(t.props.overlayActions),ce=Object(w.a)(ne,2),re=ce[0],ie=ce[1],oe=Object(n.useState)(de),le=Object(w.a)(oe,2),ue=(le[0],le[1],Object(n.useState)({options:!0,mediaType:!0,htmlContainer:!0,apiKey:!0,titleAndSubtitle:!0,callbacks:!0})),ge=Object(w.a)(ue,2),_e=ge[0],he=ge[1],fe=Object(n.useState)(!1),be=Object(w.a)(fe,2),ve=be[0],Ee=be[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,r&&c.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),Ee(!0)}}," Edit")),c.a.createElement(me,{show:ve,setShow:Ee,pageDisplayName:"Search Page"},c.a.createElement(D.a,null,c.a.createElement(K,{heading:"Select media type",classes:pe.a,open:_e.mediaType,onClick:function(){return he(Object(m.a)({},_e,{mediaType:!_e.mediaType}))}},c.a.createElement(D.a.Group,{onChange:function(e){return l(e.target.value)}},c.a.createElement(L,{label:"Images",name:"mediaType",id:"images",value:"images",defaultChecked:"images"===s}),c.a.createElement(L,{label:"Videos",name:"mediaType",id:"videos",value:"videos",defaultChecked:"videos"===s}))),c.a.createElement(K,{heading:"Options",classes:pe.a,open:_e.options,onClick:function(){return he(Object(m.a)({},_e,{options:!_e.options}))},style:{borderBottom:0}},c.a.createElement("h6",null,"Title"),c.a.createElement(A,{value:f,onChange:function(e){return b(e.target.value)}}),c.a.createElement("h6",null,"Subtitle"),c.a.createElement(A,{value:d,onChange:function(e){return g(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Enter custom text (uncheck dynamic titles)"),c.a.createElement("h6",{className:"mt-3"},"Assets per page"),c.a.createElement(M.a,{className:"mb-3"},c.a.createElement(N.a,{type:"number","aria-label":"assets-per-page",value:G,onChange:function(e){return X(e.target.value)}})),c.a.createElement(B,{label:"Show search bar",value:"showSearchBar",defaultChecked:H,onChange:function(e){return z(e.target.checked)}}),c.a.createElement(B,{label:"Show more button",value:"showMore",defaultChecked:R,onChange:function(e){return U(e.target.checked)}}),c.a.createElement(B,{label:"Use dynamic title",value:"dynamicTitle",defaultChecked:P,onChange:function(e){return S(e.target.checked)}}),c.a.createElement(B,{label:"Use dynamic subtitle",value:"dynamicSubtitle",defaultChecked:y,onChange:function(e){return k(e.target.checked)}}),"images"===s&&c.a.createElement(B,{label:"Use Image Search filters",value:"searchFilters",defaultChecked:te,onChange:function(e){return ae(e.target.checked)}}),c.a.createElement(W.a,{in:te},c.a.createElement("div",{className:pe.a.onItemClickBlock},c.a.createElement(se.a,{code:"{\n  showFilterDrawer: true,\n  images: {\n    imageTypeFilter: true,\n    orientationFilter: true\n  }\n}"}))),c.a.createElement(B,{label:"Use Overlay Actions",value:"overlayActions",defaultChecked:re,onChange:function(e){return ie(e.target.checked)}}),c.a.createElement(W.a,{in:re},c.a.createElement("div",{className:pe.a.onItemClickBlock},c.a.createElement(se.a,{code:de}))),c.a.createElement(B,{label:"Use onItemClick callback",value:"onItemClick",defaultChecked:Z,onChange:function(e){return Q(e.target.checked)}}),c.a.createElement(W.a,{in:Z},c.a.createElement("div",{className:pe.a.onItemClickBlock},c.a.createElement(se.a,{code:"(e, item) => {\n  e.preventDefault();\n  console.log(item);\n}"})))),c.a.createElement(T.a,{className:"btn btn-danger",onClick:function(){a({name:"searchPage",props:Object(m.a)({mediaType:s,dynamicSubtitle:y,dynamicTitle:P,onItemClick:Z,showMore:R,showSearchBar:H,overlayActions:re,widgetSubtitle:d,widgetTitle:f,assetsPerPage:G>0?G:26},"images"===s?{searchFilters:te}:{})}),Ee(!1)}},"Save changes"))))},_e=function(e){return function(t){t({type:"SET_PAGES_PARAMS",payload:e})}},he={setParams:_e},fe=Object(o.b)((function(e){return{page:e.pages.searchPage}}),he)(ge),be=function(e){var t=e.page,a=e.setParams,r=e.activated,i=Object(n.useState)(t.props.displayButtons),o=Object(w.a)(i,2),s=o[0],l=o[1],m=Object(n.useState)(!1),u=Object(w.a)(m,2),p=u[0],d=u[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,r&&c.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),d(!0)}}," Edit")),c.a.createElement(me,{show:p,setShow:d,pageDisplayName:"Image Details Page"},c.a.createElement(D.a,null,c.a.createElement(B,{label:"Display custom buttons",value:"displayButtons",defaultChecked:s,onChange:function(e){return l(e.target.checked)}}),c.a.createElement(W.a,{in:s},c.a.createElement("div",{className:pe.a.onItemClickBlock},c.a.createElement(se.a,{code:"[\n  {\n    label: 'License',\n    isPrimary: true,\n    onClick: async (e, item) => {\n      e.preventDefault();\n      console.log(item);\n    }\n  }\n]"}))),c.a.createElement(T.a,{className:"btn btn-danger mt-3",onClick:function(){a({name:"imageDetailsPage",props:{displayButtons:s}}),d(!1)}},"Save changes"))))},ve={setParams:_e},Ee=Object(o.b)((function(e){return{page:e.pages.imageDetailsPage}}),ve)(be),ye=function(e){var t=e.page,a=e.setParams,r=e.activated,i=Object(n.useState)(t.props.displayButtons),o=Object(w.a)(i,2),s=o[0],l=o[1],m=Object(n.useState)(!1),u=Object(w.a)(m,2),p=u[0],d=u[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,r&&c.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),d(!0)}}," Edit")),c.a.createElement(me,{show:p,setShow:d,pageDisplayName:"Image Licensing Page"},c.a.createElement(D.a,null,c.a.createElement(B,{label:"Display custom buttons",value:"displayButtons",defaultChecked:s,onChange:function(e){return l(e.target.checked)}}),c.a.createElement(W.a,{in:s},c.a.createElement("div",{className:pe.a.onItemClickBlock},c.a.createElement(se.a,{code:"[\n  {\n    label: 'License',\n    isPrimary: true,\n    onClick: async (e, item, props) => {\n      e.preventDefault();\n      console.log(item);\n      console.log(props.subscriptions);\n    }\n  }\n]"}))),c.a.createElement(T.a,{className:"btn btn-danger mt-3",onClick:function(){a({name:"imageLicensingPage",props:{displayButtons:s}}),d(!1)}},"Save changes"))))},ke={setParams:_e},we=Object(o.b)((function(e){return{page:e.pages.imageLicensingPage}}),ke)(ye),Oe=function(e){var t=e.page,a=e.setParams,r=e.activated,i=Object(n.useState)(t.props.onLicenseHistoryItemClick),o=Object(w.a)(i,2),s=o[0],l=o[1],m=Object(n.useState)(!1),u=Object(w.a)(m,2),p=u[0],d=u[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,r&&c.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),d(!0)}}," Edit")),c.a.createElement(me,{show:p,setShow:d,pageDisplayName:"Image Details Page"},c.a.createElement(D.a,null,c.a.createElement(B,{label:"License History Item click callback",value:"onLicenseHistoryItemClick",defaultChecked:s,onChange:function(e){return l(e.target.checked)}}),c.a.createElement(W.a,{in:s},c.a.createElement("div",{className:pe.a.onItemClickBlock},c.a.createElement(se.a,{code:"onLicenseHistoryItemClick: (item) => {\n  console.log(item);\n},"}))),c.a.createElement(T.a,{className:"btn btn-danger mt-3",onClick:function(){a({name:"imageLicenseHistoryPage",props:{onLicenseHistoryItemClick:s}}),d(!1)}},"Save changes"))))},Ce={setParams:_e},Pe=Object(o.b)((function(e){return{page:e.pages.imageLicenseHistoryPage}}),Ce)(Oe),Se=a(89),je=a.n(Se),Ie=[{name:"searchPage",component:function(e){return c.a.createElement(fe,{activated:e})},label:"Search Page"},{name:"imageDetailsPage",component:function(e){return c.a.createElement(Ee,{activated:e})},label:"Image Details Page"},{name:"imageLicensingPage",component:function(e){return c.a.createElement(we,{activated:e})},label:"Image Licensing Page"},{name:"imageLicenseHistoryPage",component:function(e){return c.a.createElement(Pe,{activated:e})},label:"Image Licensing History Page"}],Te=function(e){var t=e.setActivePage,a=Object(n.useState)("searchPage"),r=Object(w.a)(a,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){}),[i]),c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a.Group,{onChange:function(e){"pageType"===e.target.name&&(o(e.target.value),t({activePage:e.target.value}))}},Ie.map((function(e){var t=e.name,a=e.component,n=e.label;return c.a.createElement("div",{className:je.a.pageContainer},c.a.createElement(L,{label:n,name:"pageType",id:t,value:t,defaultChecked:i===t,className:"mr-2"}),a(i===t))}))),c.a.createElement("small",{className:"form-text text-muted"},"Select a page to customize and add to the widget. To add other pages, see the ",c.a.createElement("a",{href:"https://ui-reference.shutterstock.com/#pages",target:"_blank"},"documentation.")))},De={setActivePage:function(e){return function(t){t({type:"SET_ACTIVE_PAGE",payload:e})}}},Le=Object(o.b)(null,De)(Te),Be=function(e){var t=e.inputs,a=e.setParams,r=e.page,i=Object(n.useState)(t.apiKey),o=Object(w.a)(i,2),s=o[0],l=o[1],u=Object(n.useState)(t.htmlElement),p=Object(w.a)(u,2),d=p[0],g=p[1],_=Object(n.useState)({options:!0,htmlContainer:!0,apiKey:!0,configurePages:!0}),h=Object(w.a)(_,2),f=h[0],b=h[1];return c.a.createElement("div",{className:pe.a.container,style:{marginTop:20}},c.a.createElement(K,{heading:"HTML container",classes:pe.a,open:f.htmlContainer,onClick:function(){return b(Object(m.a)({},f,{htmlContainer:!f.htmlContainer}))}},c.a.createElement(A,{value:d,onChange:function(e){return g(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Element you want the widget to render in.")),c.a.createElement(K,{heading:"API key",classes:pe.a,open:f.apiKey,onClick:function(){return b(Object(m.a)({},f,{apiKey:!f.apiKey}))}},c.a.createElement(A,{value:s,onChange:function(e){return l(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"Enter your API application's consumer key")),c.a.createElement(K,{heading:"Configure pages",classes:pe.a,open:f.configurePages,onClick:function(){return b(Object(m.a)({},f,{configurePages:!f.configurePages}))}},c.a.createElement(Le,null)),c.a.createElement("div",{className:"mt-4 mb-5 text-center"},c.a.createElement(T.a,{className:"btn btn-danger",style:{borderRadius:"25px"},onClick:function(){a({inputs:{apiKey:s,htmlElement:d},page:r})}},"Load widget")))},Me={setParams:function(e){return function(t){t({type:"SET_PARAMS",payload:e})}}},Ne=Object(o.b)((function(e){var t=e.pages.activePage;return Object(m.a)({},e.main,{page:e.pages[t]})}),Me)(Be),Ae=a(40),We=a.n(Ae),Re=a(67),Ue=a(21),Ke=a(32),xe=a(33),Fe=function(e){var t=e.apiKey,a=e.htmlElement,c=e.page,r=void 0===c?{}:c,i=Object(n.useRef)(),o=Object(n.useRef)(),s=Object(n.useCallback)((function(){var e={};"searchPage"===r.name&&(e={name:r.name,component:window.ShutterstockWidget.components.SearchPage,props:Object(m.a)({},r.props,{mediaType:r.props.mediaType,title:r.props.widgetTitle,subtitle:r.props.widgetSubtitle},r.props.onItemClick&&{onItemClick:function(e,t){e.preventDefault(),console.log(t)}},{},r.props.searchFilters&&{searchFilters:{showFilterDrawer:!0,images:{imageTypeFilter:!0,orientationFilter:!0}}},{},r.props.overlayActions&&{overlayActions:[{label:"Insert preview",icon:"/static/media/insert-preview.ca5fa11b.svg",onClick:function(e,t){e.preventDefault(),console.log(t)}}]},{},"videos"===r.props.mediaType?{searchFilters:!1}:{})}),"imageDetailsPage"===r.name&&(e={name:r.name,component:window.ShutterstockWidget.components.ImageDetailsPage,props:Object(m.a)({item:Ue},r.props.displayButtons&&{buttons:[{label:"License",isPrimary:!0,onClick:function(){var e=Object(Re.a)(We.a.mark((function e(t,a){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]})}),"imageLicensingPage"===r.name&&(e={name:r.name,component:window.ShutterstockWidget.components.ImageLicensingPage,props:Object(m.a)({item:Ue,subscriptions:Ke},r.props.displayButtons&&{buttons:[{label:"License",isPrimary:!0,onClick:function(){var e=Object(Re.a)(We.a.mark((function e(t,a,n){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(a),console.log(n.subscription);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()}]})}),"imageLicenseHistoryPage"===r.name&&(e={name:r.name,component:window.ShutterstockWidget.components.ImageLicenseHistoryPage,props:Object(m.a)({},r.props.onLicenseHistoryItemClick&&{onLicenseHistoryItemClick:function(e){console.log(e)}},{licenseHistory:xe})});var a={container:o.current,key:t,languageCode:"en",pages:[e]};if("object"===typeof window&&window.ShutterstockWidget){var n=new window.ShutterstockWidget(a);"searchPage"===r.name?n.getPage(r.name).search():n.getPage(r.name).render(),n.navigateTo(r.name),i.current=n}}),[t,a,r]);return Object(n.useEffect)(s,[t,a,r]),{widgetInstanceRef:i,widgetRef:o}},He=a(90),ze=a.n(He),qe=function(e){var t=e.inputs,a=t.apiKey,n=t.htmlElement,r=e.page,i=Fe({apiKey:a,htmlElement:n,page:r}).widgetRef;return c.a.createElement("div",{className:ze.a.container},c.a.createElement("div",{ref:i}))},Je=Object(o.b)((function(e){var t=e.pages.activePage,a=e.pages[t];return Object(m.a)({},e.main,{page:a})}))(qe),Ge=a(128),Xe=a(133),Ve=a(57),Ye=a.n(Ve),Ze=function(e){var t=e.codes,a=Object(n.useState)("html"),r=Object(w.a)(a,2),i=r[0],o=r[1],s=t.map((function(e){return c.a.createElement(Ge.a,{eventKey:e.language,title:(t=e.language,{html:"Html",react:"React"}[t]),key:e.language},c.a.createElement(re,{value:e.value,language:e.language,theme:{emptyCard:Ye.a.emptyCard}}));var t}));return c.a.createElement("div",{className:Ye.a.container},c.a.createElement(Xe.a,{activeKey:i,onSelect:function(e){return o(e)},className:Ye.a.tabs},s))},Qe=function(e){var t=e.inputs,a=t.apiKey,n=t.htmlElement,c=e.page,r=function(e){if("searchPage"===e.name){var t=e.props.onItemClick?",\n            onItemClick: (e, item) => {\n              e.preventDefault();\n              console.log(item);\n            }":"",a=e.props.overlayActions?",\n            overlayActions: [\n              {\n                label: 'Insert preview',\n                icon: 'path_to_your_icon',\n                onClick: (e, item) => {\n                  e.preventDefault();\n                  console.log(item);\n                }\n              },\n            ]":"",n=e.props.searchFilters?",\n            searchFilters: {\n              showFilterDrawer: true,\n              images: {\n                imageTypeFilter: true,\n                orientationFilter: true\n              }\n            }":"";return"{\n          name: '".concat(e.name,"',\n          component: ShutterstockWidget.components.SearchPage,\n          props: {\n            mediaType: '").concat(e.props.mediaType,"',\n            title: '").concat(e.props.widgetTitle,"',\n            subtitle: '").concat(e.props.widgetSubtitle,"',\n            dynamicTitle: ").concat(e.props.dynamicTitle,",\n            dynamicSubtitle: ").concat(e.props.dynamicSubtitle,",\n            showMore: ").concat(e.props.showMore,",\n            showSearchBar: ").concat(e.props.showMore).concat(t).concat(a).concat(n,"\n          }\n        }")}if("imageDetailsPage"===e.name){var c=e.props.displayButtons?",\n            buttons:[{\n              label: 'License',\n              isPrimary: true,\n              onClick: async (e, item) => {\n                e.preventDefault();\n                console.log(item);\n              },\n            }]":"";return"{\n          name: '".concat(e.name,"',\n          component: ShutterstockWidget.components.ImageDetailsPage,\n          props: {\n            // This is mocked data for image.\n            item: ").concat(JSON.stringify(Ue)).concat(c,"\n          }\n        }")}if("imageLicensingPage"===e.name){var r=e.props.displayButtons?",\n            buttons: [{\n              label: 'License',\n              isPrimary: true,\n              onClick: async (e, item, props) => {\n                e.preventDefault();\n                console.log(item);\n                console.log(props.subscriptions);\n              }\n            }]":"";return"{\n          name: '".concat(e.name,"',\n          component: ShutterstockWidget.components.ImageLicensingPage,\n          props: {\n            // This is mocked data for image.\n            item: ").concat(JSON.stringify(Ue),",\n            // This is mocked data for subscription. You will need to implement server side code to get the users subscriptions.\n            subscriptions: ").concat(JSON.stringify(Ke)).concat(r,"\n          }\n        }")}if("imageLicenseHistoryPage"===e.name){var i=e.props.onLicenseHistoryItemClick?",\n            onLicenseHistoryItemClick: (item) => {\n              // navigate to the image details when a user clicks on image on license history\n              console.log(item);\n            },":"";return"{\n          name: '".concat(e.name,"',\n          component: ShutterstockWidget.components.ImageLicenseHistoryPage,\n          props: {\n            // This is mocked data for license history. You will need to implement server side code to get the license history\n            licenseHistory: ").concat(JSON.stringify(xe)).concat(i,"\n          }\n        }")}}(c),i="widget.getPage('".concat(c.name,"').").concat("searchPage"===c.name?"search()":"render();");return'\n<html>\n  <head>\n    <link rel="stylesheet" type="text/css" href="https://github.shuttercorp.net/pages/api-team/shutterstock-widget-demo/builds/2.0/static/css/sstk-widget.css">\n  </head>\n  <body>\n    <div id="'.concat(n,'"></div>\n    <script>\n      window.onload = () => {\n        const ').concat(c.name," = ").concat(r,";\n\n        const widget = new ShutterstockWidget({\n          container: document.getElementById('").concat(n,"'),\n          key: '").concat(a,"',\n          pages: [").concat(c.name,"]\n        });\n\n        ").concat(i,'\n      }\n    <\/script>\n    <script src="https://github.shuttercorp.net/pages/api-team/shutterstock-widget-demo/builds/2.0/static/js/sstk-widget.js"><\/script>\n  </body>\n</html>\n')},$e=function(e){var t=e.inputs.apiKey,a=e.page,n=function(e){if("searchPage"===e.name){var t=e.props.onItemClick?",\n      onItemClick: (e, item) => {\n        e.preventDefault();\n        console.log(item);\n      }":"",a=e.props.overlayActions?",\n      overlayActions: [\n        {\n          label: 'Insert preview',\n          icon: 'path_to_your_icon',\n          onClick: (e, item) => {\n            e.preventDefault();\n            console.log(item);\n          }\n        },\n      ]":"",n=e.props.searchFilters?",\n      searchFilters: {\n        showFilterDrawer: true,\n        images: {\n          imageTypeFilter: true,\n          orientationFilter: true\n        }\n      }":"";return"{\n    name: '".concat(e.name,"',\n    component: window.ShutterstockWidget.components.SearchPage,\n    props: {\n      mediaType: '").concat(e.props.mediaType,"',\n      title: '").concat(e.props.widgetTitle,"',\n      subtitle: '").concat(e.props.widgetSubtitle,"',\n      dynamicTitle: ").concat(e.props.dynamicTitle,",\n      dynamicSubtitle: ").concat(e.props.dynamicSubtitle,",\n      showMore: ").concat(e.props.showMore,",\n      showSearchBar: ").concat(e.props.showMore).concat(t).concat(a).concat(n,"\n    }\n  }")}if("imageDetailsPage"===e.name){var c=e.props.displayButtons?",\n      buttons:[{\n        label: 'License',\n        isPrimary: true,\n        onClick: async (e, item) => {\n          e.preventDefault();\n          console.log(item);\n        },\n      }]":"";return"{\n    name: '".concat(e.name,"',\n    component: window.ShutterstockWidget.components.ImageDetailsPage,\n    props: {\n      // This is mocked data for image.\n      item: ").concat(JSON.stringify(Ue)).concat(c,"\n    }\n  }")}if("imageLicensingPage"===e.name){var r=e.props.displayButtons?",\n      buttons: [{\n        label: 'License',\n        isPrimary: true,\n        onClick: async (e, item, props) => {\n          e.preventDefault();\n          console.log(item);\n          console.log(props.subscriptions);\n        }\n      }]":"";return"{\n    name: '".concat(e.name,"',\n    component: window.ShutterstockWidget.components.ImageLicensingPage,\n    props: {\n      // This is mocked data for image.\n      item: ").concat(JSON.stringify(Ue),",\n      // This is mocked data for subscription. You will need to implement server side code to get the users subscriptions.\n      subscriptions: ").concat(JSON.stringify(Ke)).concat(r,"\n    }\n  }")}if("imageLicenseHistoryPage"===e.name){var i=e.props.onLicenseHistoryItemClick?",\n      onLicenseHistoryItemClick: (item) => {\n        // navigate to the image details when a user clicks on image on license history\n        console.log(item);\n      },":"";return"{\n    name: '".concat(e.name,"',\n    component: window.ShutterstockWidget.components.ImageLicenseHistoryPage,\n    props: {\n      // This is mocked data for license history. You will need to implement server side code to get the license history\n      licenseHistory: ").concat(JSON.stringify(xe)).concat(i,"\n    }\n  }")}}(a),c="widgetInstance.getPage('".concat(a.name,"').").concat("searchPage"===a.name?"search();":"render();");return"\nimport React, { useRef, useEffect } from 'react';\nimport PropTypes from 'prop-types';\n\nconst SearchWidget = () => {\n  const widgetRef = useRef();\n  const ".concat(a.name," = ").concat(n,";\n\n  useEffect(() => {\n    const widgetConfig = {\n      key: '").concat(t,"',\n      pages: [").concat(a.name,"],\n      container: widgetRef.current,\n    };\n\n    // eslint-disable-next-line no-undef\n    if (typeof window === 'object' && window.ShutterstockWidget) {\n      // eslint-disable-next-line no-undef\n      const widgetInstance = new window.ShutterstockWidget(widgetConfig);\n      ").concat(c,"\n      widgetRef.current = widgetInstance;\n    }\n  }, []);\n\n  return <div ref={widgetRef} />;\n};\n\nexport default SearchWidget;\n")},et=Object(o.b)((function(e){var t=e.pages.activePage,a=e.pages[t],n=Object(m.a)({},e.main,{page:a});return{codes:[{language:"html",value:Qe(n)},{language:"react",value:$e(n)}]}}))(Ze),tt=a(68),at=a.n(tt),nt=function(){var e=Object(n.useState)(!1),t=Object(w.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{bg:"light",variant:"light",className:at.a.bottomShadow},"Shutterstock UI Wizard"),c.a.createElement(C.a,{fluid:!0,style:{padding:0}},c.a.createElement(P.a,{noGutters:!0},c.a.createElement(S.a,{sm:"12",lg:"2",className:at.a.leftColumn},c.a.createElement(Ne,null)),c.a.createElement(S.a,{sm:"12",lg:"10"},c.a.createElement(P.a,null,c.a.createElement(S.a,null,c.a.createElement(et,null))),c.a.createElement(P.a,null,c.a.createElement(S.a,null,a&&c.a.createElement(Je,null),c.a.createElement(I.a,{url:"https://api-cdn.shutterstock.com/2.0.0/static/js/sstk-widget.js",onLoad:function(){return r(!0)}})))))))};var ct=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(f.a)(this,a),n=t.call(this,e);var c=new k.a({sourceId:"Eb1vf7gnQNmiiKX8ESJXLenE0pG49XOk"},{page:{applicationName:"ShutterstockUIWizard",environment:"production",pageLanguage:"en",site:"developers"}});return c.loadProvider().then((function(){c.setInitialData({page:{applicationName:"ShutterstockUIWizard",environment:"production",originalUrl:"https://tech.shutterstock.com/shutterstock-ui-wizard",pageLanguage:"en",pageType:"shutterstockUiWizard",referringUrl:"https://tech.shutterstock.com/shutterstock-ui-wizard",site:"developers"}})})),c.page({pageType:"shutterstockUiWizard",site:"developers"}),n}return Object(b.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),a}(c.a.Component),rt=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(nt,null),c.a.createElement(ct,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(o.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.e)(_,e,h(Object(s.a)(l.a)))}()},c.a.createElement(rt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(84),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_1__),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_2__),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(115),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_3__),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(116),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__),prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(117),prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__),CodeEditor=function CodeEditor(_ref){var _ref$code=_ref.code,code=void 0===_ref$code?"":_ref$code,setCode=_ref.setCode;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_1___default.a,{value:code,onValueChange:function onValueChange(code){try{setCode(code);var evalCode=eval(code)}catch(e){}},readOnly:!0,highlight:function(e){return Object(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_2__.highlight)(e,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_2__.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:14,border:"1px solid rgba(12, 18, 28, 0.12)",borderRadius:4}})};__webpack_exports__.a=CodeEditor},21:function(e){e.exports=JSON.parse('{"id":"1670341648","aspect":1.5,"src":"https://image.shutterstock.com/image-photo/young-female-nurse-camera-wearing-260nw-1670341648.jpg","slug":"Young female nurse at camera wearing surgical mask and scrubs-1670341648","link":"https://www.shutterstock.com/image-photo/1670341648","contributor":{"id":"250738318"},"description":"Young female nurse at camera wearing surgical mask and scrubs","preview_1000":{"url":"https://ak.picdn.net/shutterstock/photos/1670341648/watermark_1000/adf0c933ab7a2f50041d1396ff4fc8bb/preview_1000-1670341648.jpg","width":1000,"height":667},"preview_1500":{"url":"https://image.shutterstock.com/z/stock-photo-young-female-nurse-at-camera-wearing-surgical-mask-and-scrubs-1670341648.jpg","width":1500,"height":1000},"height":166.66666666666669,"url":"https://image.shutterstock.com/image-photo/young-female-nurse-camera-wearing-260nw-1670341648.jpg","width":250,"media_type":"image","searchId":"ae045fe5-0f41-4376-a79a-b2f98527078d","search_id":"ae045fe5-0f41-4376-a79a-b2f98527078d"}')},29:function(e,t,a){e.exports=a.p+"static/media/insert-preview.ca5fa11b.svg"},32:function(e){e.exports=JSON.parse('[{"id":"s123456789","license":"premier","description":"Premier Account","price_per_download":{"local_amount":26,"local_currency":"USD"},"formats":[{"size":"small","format":"jpg","media_type":"image","description":"Small"},{"size":"medium"},{"size":"large","format":"jpg","media_type":"image","description":"Huge"}]},{"id":"s87564321","expiration_time":"2022-03-31T14:43:42-04:00","license":"media_digital","description":"Media Digital Account (with metadata)","asset_type":"images","price_per_download":{"local_amount":46,"local_currency":"USD"},"allotment":{"downloads_left":0,"downloads_limit":11},"formats":[{"media_type":"image","description":"Huge","format":"jpg","min_resolution":4000000,"size":"huge"}],"metadata":{"purchase_order":{"is_required":true,"name":"Purchase Order"},"job":{"is_required":false,"name":"Job"},"client":{"is_required":false,"name":"Client/Licensee"},"other":{"is_required":false,"name":"Project Notes"}}}]')},33:function(e){e.exports=JSON.parse('{"total_count":5,"page":1,"per_page":5,"data":[{"id":"2e2342w23r23r","license":"standard","download_time":"2020-11-03T14:49:43.000Z","is_downloadable":true,"image":{"id":"1670341648","thumb":"https://image.shutterstock.com/image-vector/cute-cats-vector-illustration-black-450w-1708754152.jpg","format":{"size":"large"}}},{"id":"234234wsdsadasdqr23re","download_time":"2020-11-03T14:49:43.000Z","license":"standard","is_downloadable":true,"image":{"id":"1663685476","format":{"size":"large"}}},{"id":"2e2342w23r23r4","license":"standard","download_time":"2020-10-15T14:49:43.000Z","is_downloadable":true,"image":{"id":"1570154773","format":{"size":"small"}}},{"id":"2e2342w23r23r43","license":"standard","is_downloadable":true,"download_time":"2020-08-11T14:49:43.000Z","image":{"id":"1570154773","format":{"size":"small"}}},{"id":"2e2342w23r23r4333","license":"standard","is_downloadable":true,"download_time":"2020-08-01T14:49:43.000Z","image":{"id":"1717616221","format":{"size":"huge"}}}]}')},35:function(e,t,a){e.exports={container:"CodeSnippetBlock_container__1Q7MC",topBorder:"CodeSnippetBlock_topBorder__1pHxX",pre:"CodeSnippetBlock_pre__1JecP",code:"CodeSnippetBlock_code__2_j7q font-body-static-xs",copy:"CodeSnippetBlock_copy__2ajnJ"}},55:function(e,t,a){e.exports={snackbar:"Snackbar_snackbar__1-2gT",show:"Snackbar_show__1p7nf",fadein:"Snackbar_fadein__2jUCz",fadeout:"Snackbar_fadeout__2fHTR"}},57:function(e,t,a){e.exports={container:"TabbedCodeSnippet_container__3KvMq"}},68:function(e,t,a){e.exports={leftColumn:"Layout_leftColumn___eN4-",navbarBrand:"Layout_navbarBrand__qh9nu",navbarContainer:"Layout_navbarContainer__1H727",bottomShadow:"Layout_bottomShadow__KcSu8"}},89:function(e,t,a){e.exports={pageContainer:"PagesConfig_pageContainer__1qbj-"}},90:function(e,t,a){e.exports={container:"SearchWidget_container__3WyqZ"}},94:function(e,t,a){e.exports=a(120)}},[[94,1,2]]]);
//# sourceMappingURL=main.b0f00087.chunk.js.map