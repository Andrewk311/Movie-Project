(this["webpackJsonpcap1-project"]=this["webpackJsonpcap1-project"]||[]).push([[0],{106:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),i=c(0),r=c(24),s=(c(81),c(33)),l=c.n(s),j=c(143),o=c(22),b=c(148),d=c(153),h=c(152),u=c(147),O=c(150),p=c(151),f=c(149),x=c(155),m=c(154),g=c(145),v=c(50),w=c.n(v),S=c(49),y=c.n(S),N=c(156),k=c(5);function R(e,t,c){return{Title:e,Year:t,imdbID:c}}var D=Object(j.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}})),B=[];var C=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)({}),s=Object(r.a)(n,2),j=s[0],v=s[1],S=Object(i.useState)({}),C=Object(r.a)(S,2),I=C[0],P=C[1],T=Object(i.useState)(1),E=Object(r.a)(T,2),Y=E[0],A=E[1],G=Object(i.useState)(!0),M=Object(r.a)(G,2),J=M[0],K=M[1],L=Object(i.useState)(10),q=Object(r.a)(L,2),z=q[0],F=q[1],H=Object(i.useState)(!0),Q=Object(r.a)(H,2),U=Q[0],V=Q[1],W=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e}),[e]),t.current}(c),X="7c60f5fa",Z="http://www.omdbapi.com/?s=".concat(c,"&type=movie&page=").concat(Y,"&apikey=").concat(X),$=function(e){if(V(!0),K(!0),10===z){if(l.a.get("http://www.omdbapi.com/?s=".concat(c,"&type=movie&page=").concat(Y+1,"&apikey=").concat(X)).then((function(e){null!=e&&null!=e.data&&null!=e.data.Search||V(!1)})),B.length/z>=Y&&c===W)return;l.a.get(Z).then((function(e){if(null!=e&&null!=e.data&&null!=e.data.Search){for(var t=0;t<e.data.Search.length;t++)B.push(R(e.data.Search[t].Title,e.data.Search[t].Year,e.data.Search[t].imdbID));v(e.data)}}))}if(5===z){if(l.a.get("http://www.omdbapi.com/?s=".concat(c,"&type=movie&page=").concat((Y+2)/2,"&apikey=").concat(X)).then((function(e){null!=e&&null!=e.data&&null!=e.data.Search||V(!1)})),B.length/z>=Y&&c===W)return;l.a.get("http://www.omdbapi.com/?s=".concat(c,"&type=movie&page=").concat((Y+1)/2,"&apikey=").concat(X)).then((function(e){if(null!=e&&null!=e.data&&null!=e.data.Search){for(var t=0;t<e.data.Search.length;t++)B.push(R(e.data.Search[t].Title,e.data.Search[t].Year,e.data.Search[t].imdbID));v(e.data)}}))}};function _(){Y>=100||!1===U||A((function(e){return e+1}))}function ee(){1!==Y&&A((function(e){return e-1}))}var te=function(e){F(parseInt(e.target.value,10)),A(1)};function ce(){var e=D(),t=Object(o.a)();return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)(g.a,{onClick:ee,disabled:1===Y,"aria-label":"previous page",children:"rtl"===t.direction?Object(k.jsx)(y.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(g.a,{onClick:_,disabled:!1===U,"aria-label":"next page",children:"rtl"===t.direction?Object(k.jsx)(w.a,{}):Object(k.jsx)(y.a,{})})]})}function ae(e){return"True"===e.Response&&!0===J?Object(k.jsxs)(N.a,{className:"Box",display:"flex",flexDirection:"row",justifyContent:"center",children:["       ",Object(k.jsx)(u.a,{className:b.a,component:f.a,children:Object(k.jsxs)(b.a,{className:b.a,"aria-label":"simple table",children:[Object(k.jsx)(O.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(h.a,{componenet:"th",scope:"row",children:Object(k.jsx)("b",{children:"Movie Name"})}),Object(k.jsx)(h.a,{style:{width:125},align:"left",children:Object(k.jsx)("b",{children:"Release Year"})})]})}),Object(k.jsx)(d.a,{children:(z>0?B.slice((Y-1)*z,(Y-1)*z+z):B).map((function(e){return Object(k.jsxs)(p.a,{hover:!0,onClick:function(t){return function(e,t){K(!1),l.a.get("http://www.omdbapi.com/?i=".concat(t.imdbID,"&apikey=7c60f5fa")).then((function(e){P(e.data)}))}(0,e)},children:[Object(k.jsx)(h.a,{componenet:"th",scope:"row",children:e.Title}),Object(k.jsxs)(h.a,{style:{width:125},align:"center",children:[e.Year," "]})]},e.imdbID)}))}),Object(k.jsx)(m.a,{children:Object(k.jsx)(p.a,{children:Object(k.jsx)(x.a,{rowsPerPageOptions:[5,10,{label:"All",value:-1}],count:B.length,rowsPerPage:z,page:Y-1,onChangeRowsPerPage:te,ActionsComponent:ce})})})]})})]}):"True"===e.Response?Object(k.jsxs)("div",{className:"movieResponse",children:[Object(k.jsx)("h2",{className:"Title",children:e.Title}),Object(k.jsx)("img",{className:"poster",src:e.Poster,alt:""}),Object(k.jsxs)("p",{className:"Genre",children:[Object(k.jsx)("u",{children:Object(k.jsx)("b",{children:"Genre:"})})," ",e.Genre]}),Object(k.jsxs)("p",{className:"Director",children:[Object(k.jsx)("u",{children:Object(k.jsx)("b",{children:"Director:"})})," ",e.Director]}),Object(k.jsxs)("p",{className:"Rated",children:[Object(k.jsxs)("b",{children:[Object(k.jsx)("u",{children:"Rating"}),":"]})," ",e.Rated]}),Object(k.jsxs)("p",{className:"imdbRating",children:[Object(k.jsxs)("b",{children:[Object(k.jsx)("u",{children:"IMDBRating"}),":"]})," ",e.imdbRating]}),Object(k.jsxs)("p",{className:"boxOffice",children:[Object(k.jsx)("b",{children:Object(k.jsx)("u",{children:"Box Office:"})})," ",e.BoxOffice]}),Object(k.jsx)("p",{className:"goBack",onClick:$,children:" Back to Search"})]}):Object(k.jsx)("p",{})}return Object(i.useEffect)((function(){ae(I)}),[I]),Object(i.useEffect)((function(){$()}),[Y]),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("header",{children:Object(k.jsx)("h1",{children:"Movie App"})}),Object(k.jsx)("section",{className:"search",children:Object(k.jsx)("input",{className:"searchBox",type:"text",placeholder:"Search for a movie...",value:c,onKeyPress:function(e){"Enter"===e.key&&(c===W?$():($(),B=[],A(1)))},onChange:function(e){a(e.target.value)}})}),J&&ae(j),!J&&ae(I)]})};n.a.render(Object(k.jsx)(C,{}),document.getElementById("root"))},81:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.3997a15a.chunk.js.map