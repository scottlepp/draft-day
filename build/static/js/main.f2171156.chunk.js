(this["webpackJsonpdraft-day"]=this["webpackJsonpdraft-day"]||[]).push([[1],{36:function(e,n,t){},56:function(e,n,t){var r={"./ion-action-sheet.entry.js":[80,5],"./ion-alert.entry.js":[81,6],"./ion-app_8.entry.js":[82,7],"./ion-avatar_3.entry.js":[83,17],"./ion-back-button.entry.js":[84,18],"./ion-backdrop.entry.js":[85,43],"./ion-button_2.entry.js":[86,19],"./ion-card_5.entry.js":[87,20],"./ion-checkbox.entry.js":[88,21],"./ion-chip.entry.js":[89,22],"./ion-col_3.entry.js":[90,44],"./ion-datetime_3.entry.js":[91,10],"./ion-fab_3.entry.js":[92,23],"./ion-img.entry.js":[93,45],"./ion-infinite-scroll_2.entry.js":[94,46],"./ion-input.entry.js":[95,24],"./ion-item-option_3.entry.js":[96,25],"./ion-item_8.entry.js":[97,26],"./ion-loading.entry.js":[98,27],"./ion-menu_3.entry.js":[99,28],"./ion-modal.entry.js":[100,8],"./ion-nav_2.entry.js":[101,14],"./ion-popover.entry.js":[102,9],"./ion-progress-bar.entry.js":[103,29],"./ion-radio_2.entry.js":[104,30],"./ion-range.entry.js":[105,31],"./ion-refresher_2.entry.js":[106,11],"./ion-reorder_2.entry.js":[107,16],"./ion-ripple-effect.entry.js":[108,47],"./ion-route_4.entry.js":[109,32],"./ion-searchbar.entry.js":[110,33],"./ion-segment_2.entry.js":[111,34],"./ion-select_3.entry.js":[112,35],"./ion-slide_2.entry.js":[113,48],"./ion-spinner.entry.js":[114,13],"./ion-split-pane.entry.js":[115,49],"./ion-tab-bar_2.entry.js":[116,36],"./ion-tab_2.entry.js":[117,15],"./ion-text.entry.js":[118,37],"./ion-textarea.entry.js":[119,38],"./ion-toast.entry.js":[120,39],"./ion-toggle.entry.js":[121,12],"./ion-virtual-scroll.entry.js":[122,50]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=56,e.exports=o},58:function(e,n,t){var r={"./ion-icon.entry.js":[123,57]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=58,e.exports=o},76:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(26),i=t.n(c),a=t(21),s=t(2),l=t(44),j=t(14),d=(t(66),t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(74),t(75),t(76),t(30)),u=t(5),f=t.n(u),h=t(13),b=t(22),p=(t(36),t(3)),O=function(){var e=Object(r.useState)([]),n=Object(b.a)(e,2),t=n[0],o=n[1];Object(s.z)((function(){c(!0).then((function(e){return o(e)}))}));var c=function(){var e=Object(h.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(n);case 2:return t=e.sent,e.next=5,a();case 5:return r=e.sent,e.abrupt("return",t.filter((function(e){return-1===r.findIndex((function(n){return n.name===e.name}))})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=Object(h.a)(f.a.mark((function e(n){var t,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}if(!(t=localStorage.getItem("dd-all-players"))){e.next=4;break}return e.abrupt("return",JSON.parse(t));case 4:return e.next=6,fetch("https://jayzheng-ff-api.herokuapp.com/rankings?format=standard");case 6:return r=e.sent,e.next=9,r.json();case 9:return o=e.sent,localStorage.setItem("dd-all-players",JSON.stringify(o.rankings)),e.abrupt("return",o.rankings);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),a=function(){var e=Object(h.a)(f.a.mark((function e(){var n,t,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("dd-players")||"[]",t=JSON.parse(n),n=localStorage.getItem("dd-drafted")||"[]",r=JSON.parse(n),o=[].concat(Object(d.a)(t),Object(d.a)(r)),e.abrupt("return",Promise.resolve(o));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(s.j,{id:"home-page",children:Object(p.jsxs)(s.b,{children:[Object(p.jsx)(s.k,{slot:"fixed",onIonRefresh:function(e){c(!1).then((function(n){o(n),e.detail.complete()}))},children:Object(p.jsx)(s.l,{})}),Object(p.jsx)(s.i,{children:t.map((function(e){return Object(p.jsxs)(s.g,{children:[Object(p.jsx)(s.f,{side:"start",children:Object(p.jsx)(s.e,{onClick:function(){return function(e){var n=localStorage.getItem("dd-players")||"[]",r=JSON.parse(n);r.push(e),localStorage.setItem("dd-players",JSON.stringify(r));var c=t.filter((function(n){return n.name!==e.name}));o(c)}(e)},children:"Draft"})}),Object(p.jsxs)(s.d,{children:[Object(p.jsxs)(s.h,{children:[e.name,"(",e.rank,")"]}),Object(p.jsx)(s.h,{slot:"end",children:e.position}),Object(p.jsx)(s.h,{slot:"end",children:e.tier})]}),Object(p.jsx)(s.f,{side:"end",children:Object(p.jsx)(s.e,{color:"danger",onClick:function(){return function(e){var n=localStorage.getItem("dd-drafted")||"[]",r=JSON.parse(n);r.push(e),localStorage.setItem("dd-drafted",JSON.stringify(r));var c=t.filter((function(n){return n.name!==e.name}));o(c)}(e)},children:"Drafted"})})]},e.name)}))})]})})},x=function(){var e=Object(r.useState)([]),n=Object(b.a)(e,2),t=n[0],o=n[1];Object(s.z)((function(){c().then((function(e){return o(e)}))}));var c=function(){var e=Object(h.a)(f.a.mark((function e(){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("dd-players")||"[]",t=JSON.parse(n),e.abrupt("return",Promise.resolve(t));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(s.j,{id:"home-page",children:Object(p.jsx)(s.b,{children:Object(p.jsx)(s.i,{children:t.map((function(e){return Object(p.jsxs)(s.g,{children:[Object(p.jsx)(s.f,{side:"start",children:Object(p.jsx)(s.e,{onClick:function(){return function(e){var n=localStorage.getItem("dd-players")||"[]",t=JSON.parse(n);t=t.filter((function(n){return n.name!==e.name})),localStorage.setItem("dd-players",JSON.stringify(t)),o(t)}(e)},children:"Remove"})}),Object(p.jsxs)(s.d,{children:[Object(p.jsxs)(s.h,{children:[e.name,"(",e.rank,")"]}),Object(p.jsx)(s.h,{slot:"end",children:e.position}),Object(p.jsx)(s.h,{slot:"end",children:e.tier})]}),Object(p.jsx)(s.f,{side:"end",children:Object(p.jsx)(s.e,{color:"danger",onClick:function(){return console.log("unread clicked")},children:"Drafted"})})]},e.name)}))})})})},y=function(){var e=Object(r.useState)([]),n=Object(b.a)(e,2),t=n[0],o=n[1];Object(s.z)((function(){c().then((function(e){return o(e)}))}));var c=function(){var e=Object(h.a)(f.a.mark((function e(){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("dd-drafted")||"[]",t=JSON.parse(n),e.abrupt("return",Promise.resolve(t));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(s.j,{id:"home-page",children:Object(p.jsx)(s.b,{children:Object(p.jsx)(s.i,{children:t.map((function(e){return Object(p.jsxs)(s.g,{children:[Object(p.jsx)(s.f,{side:"start",children:Object(p.jsx)(s.e,{onClick:function(){return function(e){var n=localStorage.getItem("dd-drafted")||"[]",t=JSON.parse(n);t=t.filter((function(n){return n.name!==e.name})),localStorage.setItem("dd-drafted",JSON.stringify(t)),o(t)}(e)},children:"Remove"})}),Object(p.jsxs)(s.d,{children:[Object(p.jsxs)(s.h,{children:[e.name,"(",e.rank,")"]}),Object(p.jsx)(s.h,{slot:"end",children:e.position}),Object(p.jsx)(s.h,{slot:"end",children:e.tier})]})]},e.name)}))})})})},g=function(){return Object(p.jsx)(s.a,{children:Object(p.jsx)(l.a,{children:Object(p.jsxs)(s.q,{children:[Object(p.jsxs)(s.n,{children:[Object(p.jsx)(a.b,{path:"/",exact:!0,children:Object(p.jsx)(a.a,{to:"/home"})}),Object(p.jsx)(a.b,{path:"/home",exact:!0,children:Object(p.jsx)(O,{})}),Object(p.jsx)(a.b,{path:"/team",exact:!0,children:Object(p.jsx)(x,{})}),Object(p.jsx)(a.b,{path:"/drafted",exact:!0,children:Object(p.jsx)(y,{})})]}),Object(p.jsxs)(s.o,{slot:"top",children:[Object(p.jsxs)(s.p,{tab:"players",href:"/home",children:[Object(p.jsx)(s.c,{icon:j.l}),Object(p.jsx)(s.h,{children:"Players"})]}),Object(p.jsxs)(s.p,{tab:"heart",href:"/team",children:[Object(p.jsx)(s.c,{icon:j.i}),Object(p.jsx)(s.h,{children:"My Team"})]}),Object(p.jsxs)(s.p,{tab:"drafted",href:"/drafted",children:[Object(p.jsx)(s.c,{icon:j.a}),Object(p.jsx)(s.h,{children:"Drafted"})]})]})]})})})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,140)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):v(n,e)}))}}(),k()}},[[78,3,4]]]);
//# sourceMappingURL=main.f2171156.chunk.js.map