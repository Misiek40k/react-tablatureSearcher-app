(this["webpackJsonpreact-tablature-searcher-app"]=this["webpackJsonpreact-tablature-searcher-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports={component:"ListItem_component__21RtX",fadeIn:"ListItem_fadeIn__3Ea_L",link:"ListItem_link__3zNku",title:"ListItem_title__3T8wG",author:"ListItem_author__2uGIm",tabTypes:"ListItem_tabTypes__1pObI"}},function(e,t,a){e.exports={component:"Search_component__2vykU",checkboxes:"Search_checkboxes__1x-UV",buttons:"Search_buttons__10AGK",buttonsShown:"Search_buttonsShown__3-aiC",fadeIn:"Search_fadeIn__uqQYJ"}},,,function(e,t,a){e.exports={component:"Header_component__RSHwJ",logo:"Header_logo__E8pCI",name:"Header_name__1HVhl",fadeIn:"Header_fadeIn__15lW0"}},function(e,t,a){e.exports={list:"Pagination_list__28H_q",fadeIn:"Pagination_fadeIn__13q33",active:"Pagination_active__1BiKF"}},,,function(e,t,a){e.exports={title:"Title_title__O4tU3",subtitle:"Title_subtitle__1i9cZ",fadeIn:"Title_fadeIn__S46QO"}},function(e,t,a){e.exports={component:"Button_component__bNw4C",danger:"Button_danger__23D2e",fadeIn:"Button_fadeIn__1PeM6"}},,,,,,,function(e,t,a){e.exports={component:"Checkbox_component__2f1T7",fadeIn:"Checkbox_fadeIn__39vke"}},function(e,t,a){e.exports={component:"ContentContainer_component__21GA5",centered:"ContentContainer_centered__1vtt0",fadeIn:"ContentContainer_fadeIn__1V71B"}},function(e,t,a){e.exports={component:"TabType_component__2u6Fl",fadeIn:"TabType_fadeIn__LtQEG"}},function(e,t,a){e.exports={title:"List_title__3DxHS",fadeIn:"List_fadeIn__3FTnc"}},,,,function(e,t,a){e.exports=a(39)},,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=a(17),s=a(18),i=a(24),m=a(19),u=a(25),_=a(1),p={sm:12,md:8,lg:6,mdOffset:2,lgOffset:3},f="guitar",h={name:"Tablature searcher"},d={pageTitle:{title:"Search",subtitle:"and play your best songs"},fetchReq:"https://www.songsterr.com/a/ra/songs.json?pattern=",search:{buttons:{search:{txt:" Search",ico:"search"},cancel:{txt:" Cancel",ico:"ban",variant:"danger"}},placeholder:"Search for tablature...",checkboxes:["player","guitar","chords","bass"]}},b={title:"Found records: ",href:"https://www.songsterr.com/a/wa/song?id=",pageItems:25},E=function(e){return c.a.createElement("i",{className:"fas fa-".concat(e.name)})},g=a(8),v=a.n(g),k=function(){return c.a.createElement("header",{className:v.a.component},c.a.createElement(_.Grid,null,c.a.createElement(_.Row,null,c.a.createElement(_.Col,{xs:!0},c.a.createElement("div",{className:v.a.logo},c.a.createElement(E,{name:f}),c.a.createElement("span",{className:v.a.name},h.name))))))},C=a(2),I=a(3),x=function(e){switch(e){case"TEXT_GUITAR_TAB":return"guitar";case"CHORDS":return"chords";case"TEXT_BASS_TAB":return"bass";default:return"player"}},w=a(12),O=a.n(w),y=function(e){var t=e.title,a=e.subtitle;return c.a.createElement(n.Fragment,null,t&&c.a.createElement("h1",{className:O.a.title},t),a&&c.a.createElement("h3",{className:O.a.subtitle},a))},T=a(26),j=a(13),N=a.n(j),S=function(e){var t=e.variant,a=void 0===t?"":t,n=Object(T.a)(e,["variant"]);return c.a.createElement("button",Object.assign({},n,{className:N.a.component+a.split(" ").map((function(e){return" "+(N.a[e]||e)})).join("")}))},R=a(7),B=a(20),L=a.n(B),H=function(e){var t=e.label,a=e.checked,n=e.setChecked;return c.a.createElement("label",{className:L.a.component},c.a.createElement("input",{type:"checkbox",checked:a[t],onChange:function(){return n(Object(I.a)({},a,Object(R.a)({},t,!a[t])))}}),c.a.createElement("span",null,c.a.createElement(E,{name:f}),c.a.createElement("span",null,t)))},A=a(5),G=a.n(A),P=function(e){var t=e.makeVisible,a=e.visibleButtons,n=e.setValue,r=e.value,l=e.fetchData,o=e.checked,s=e.setChecked,i=Object(I.a)({},d.search);return c.a.createElement("div",{className:G.a.component},c.a.createElement("input",{type:"text",placeholder:i.placeholder,value:r,onChange:function(e){n(e.target.value),e.target.value.length?t(!0):t(!1)}}),c.a.createElement("div",{className:G.a.checkboxes},i.checkboxes.map((function(e){return c.a.createElement(H,{key:e,label:e,checked:o,setChecked:s})}))),c.a.createElement("div",{className:G.a.buttons+(a?" ".concat(G.a.buttonsShown):"")},c.a.createElement(S,{onClick:function(){return l(r)}},c.a.createElement(E,{name:i.buttons.search.ico}),c.a.createElement("span",null,i.buttons.search.txt)),c.a.createElement(S,{variant:i.buttons.cancel.variant,onClick:function(){n(""),t(!1)}},c.a.createElement(E,{name:i.buttons.cancel.ico}),c.a.createElement("span",null,i.buttons.cancel.txt))))},F=a(21),V=a.n(F),q=a(22),D=a.n(q),J=function(e){var t=e.tabType;return c.a.createElement("span",{className:D.a.component},c.a.createElement(E,{name:f}),x(t))},U=a(4),Q=a.n(U),W=function(e){var t=e.id,a=e.title,n=e.artist.name,r=e.tabTypes;return c.a.createElement(_.Col,p,c.a.createElement("div",{className:Q.a.component},c.a.createElement("a",{href:"".concat(b.href).concat(t),target:"blank",className:Q.a.link},c.a.createElement(_.Row,null,c.a.createElement(_.Col,{xs:!0},c.a.createElement("h4",{className:Q.a.title},a))),c.a.createElement(_.Row,null,c.a.createElement(_.Col,{xs:!0},c.a.createElement("span",{className:Q.a.author},"By: ",c.a.createElement("strong",null,n)))),c.a.createElement(_.Row,null,c.a.createElement(_.Col,{xs:!0},c.a.createElement("div",{className:Q.a.tabTypes},r.map((function(e){return c.a.createElement(J,{key:e,tabType:e})}))))))))},X=a(9),K=a.n(X),M=function(e){for(var t=e.pagesCount,a=e.activePage,n=e.setActivePage,r=[],l=function(e){r.push(c.a.createElement("li",{className:K.a.list,key:e},c.a.createElement("span",{onClick:function(){return n(e)},className:e===a?K.a.active:null},"page ".concat(e))))},o=0;o<t;o++)l(o);return c.a.createElement("ul",{className:K.a.list},r)},z=a(23),Y=a.n(z),Z=function(e){var t=e.filteredList,a=b,r=Object(n.useState)(0),l=Object(C.a)(r,2),o=l[0],s=l[1],i=a.pageItems,m=Math.ceil(t.length/i);return c.a.createElement(n.Fragment,null,c.a.createElement(_.Row,null,c.a.createElement(_.Col,p,c.a.createElement("div",{className:Y.a.title},c.a.createElement(y,{subtitle:"".concat(a.title," ").concat(t.length)})))),c.a.createElement(_.Row,{center:"xs"},c.a.createElement(_.Col,{xs:!0},c.a.createElement(M,{pagesCount:m,activePage:o,setActivePage:s}))),c.a.createElement(_.Row,null,t.slice(o*i,(o+1)*i).map((function(e){return c.a.createElement(W,Object.assign({key:e.id},e))}))))},$=function(){var e=Object(I.a)({},d),t=Object(n.useState)(""),a=Object(C.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(C.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)([]),f=Object(C.a)(u,2),h=f[0],b=f[1],E=Object(n.useState)({player:!0,guitar:!0,chords:!0,bass:!0}),g=Object(C.a)(E,2),v=g[0],k=g[1],w=h.filter((function(e){return e.tabTypes.every((function(e){return v[x(e)]}))}));return c.a.createElement("section",{className:V.a.component},c.a.createElement(_.Grid,null,c.a.createElement(_.Row,{middle:"md"},c.a.createElement(_.Col,p,c.a.createElement(y,e.pageTitle))),c.a.createElement(_.Row,{middle:"md"},c.a.createElement(_.Col,p,c.a.createElement(P,{value:r,setValue:l,visibleButtons:i,makeVisible:m,fetchData:function(t){fetch("".concat(e.fetchReq).concat(t)).then((function(e){return e.json()})).then((function(e){b(e)}),(function(e){console.log(e)}))},checked:v,setChecked:k}))),h.length>0&&c.a.createElement(Z,{filteredList:w})))},ee=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(k,null),c.a.createElement("main",null,c.a.createElement($,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);l.a.render(c.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.5854a36b.chunk.js.map