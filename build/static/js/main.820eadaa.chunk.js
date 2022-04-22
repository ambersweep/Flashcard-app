(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(19),s=c.n(a),i=c(5),o=c(3),d=c(6),l=c(2),b=c.n(l),u=c(0);var j=function(){return Object(u.jsx)("header",{className:"jumbotron bg-dark",children:Object(u.jsxs)("div",{className:"container text-white",children:[Object(u.jsxs)("h1",{className:"display-4",children:[Object(u.jsx)("i",{className:"bi bi-card-text"})," Flashcard-o-matic"]}),Object(u.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})},m=c(4);function h(){return Object(u.jsx)("div",{children:Object(u.jsxs)(m.b,{className:"btn btn-secondary mb-2 ml-3",to:"/decks/new",children:[Object(u.jsx)("i",{className:"bi bi-plus-circle mr-2"}),"Create Deck"]})})}var x=c(21),p=["cards"],O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:8080",f=new Headers;function v(e){e.cards;return Object(x.a)(e,p)}function k(e,t,c){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(b.a.mark((function e(t,c,r){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:if(204!==n.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(r));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/decks?_embed=cards"),e.next=3,k(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(b.a.mark((function e(t,c){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks"),n={method:"POST",headers:f,body:JSON.stringify(v(t)),signal:c},e.next=4,k(r,n,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(b.a.mark((function e(t,c){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t,"?_embed=cards"),e.next=3,k(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(b.a.mark((function e(t,c){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t.id,"?_embed=cards"),n={method:"PUT",headers:f,body:JSON.stringify(v(t)),signal:c},e.next=4,k(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(b.a.mark((function e(t,c){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t),n={method:"DELETE",signal:c},e.next=4,k(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(o.a)(b.a.mark((function e(t,c,r){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(O,"/cards"),c.deckId=Number(t),a={method:"POST",headers:f,body:JSON.stringify(c),signal:r},e.next=5,k(n,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(b.a.mark((function e(t,c){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t),e.next=3,k(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(b.a.mark((function e(t,c){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t.id),n={method:"PUT",headers:f,body:JSON.stringify(t)},e.next=4,k(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return J.apply(this,arguments)}function J(){return(J=Object(o.a)(b.a.mark((function e(t,c){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t),n={method:"DELETE",signal:c},e.next=4,k(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){var t=e.id,c=e.description,r=e.name,n=e.totalCards,a=e.updateDecks,s=Object(i.f)(),d=function(){var e=Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this deck? You will not be able to recover it.")){e.next=6;break}return e.next=3,I(t);case 3:a(-1),e.next=7;break;case 6:s.go(0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h5",{className:"card-title col-sm-10 text-truncate",children:r}),Object(u.jsxs)("p",{className:"text-muted ml-3",children:[n," cards"]})]}),Object(u.jsx)("p",{className:"card-text",children:c}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"row"}),Object(u.jsxs)(m.b,{className:"btn btn-secondary mr-2",to:"/decks/".concat(t),children:[Object(u.jsx)("i",{className:"bi bi-eye-fill mr-2"}),"View"]}),Object(u.jsxs)(m.b,{className:"btn btn-primary mr-2",to:"/decks/".concat(t,"/study"),children:[Object(u.jsx)("i",{className:"bi bi-journal-bookmark-fill mr-2"}),"Study"]}),Object(u.jsx)("button",{type:"button",className:"btn btn-danger",onClick:d,children:Object(u.jsx)("i",{className:"bi bi-trash-fill"})})]})]})})})})}function U(e){var t=e.decks.map((function(e){var t=e.id,c=e.name,r=e.description,n=e.cards;return Object(u.jsx)(R,{id:t,name:c,description:r,totalCards:n.length},t)}));return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)(h,{}),t]})})}function Y(e){var t=e.name,c=e.page;return Object(u.jsx)("div",{className:"flex-container",children:Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsxs)("ol",{className:"breadcrumb",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("i",{className:"bi bi-house-door-fill"})," Home"]})}),Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsx)("a",{href:"/",children:t})}),Object(u.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:c})]})})})}function q(){var e=Object(i.f)(),t=Object(r.useState)([]),c=Object(d.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(!0),l=Object(d.a)(s,2),j=l[0],h=l[1],x=Object(r.useState)(""),p=Object(d.a)(x,2),O=p[0],f=p[1],v=Object(r.useState)(0),k=Object(d.a)(v,2),N=k[0],w=k[1],y=Object(i.g)().deckId,g=n.find((function(e,t){return t===N}));return Object(r.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(o.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(y,e.signal);case 3:c=t.sent,a(c.cards),f(c.name),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"AbortError"===t.t0.type&&console.error("Aborted",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return e.abort()}}),[y]),n.length>2?Object(u.jsxs)("div",{children:[Object(u.jsx)(Y,{name:O,page:"Study"}),Object(u.jsxs)("h1",{children:["Study: ",O]}),Object(u.jsx)("div",{className:"row p-3",children:Object(u.jsx)("div",{className:"card w-100",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:["Card ",N+1," of ",n.length]}),Object(u.jsx)("p",{className:"card-text",children:j?g.front:g.back}),Object(u.jsxs)("button",{onClick:function(){h((function(){return!j})),console.log(j)},className:"btn btn-secondary mr-3",children:[Object(u.jsx)("i",{class:"bi bi-arrow-clockwise mr-2"}),"Flip"]}),j?null:Object(u.jsxs)("button",{onClick:function(){N===n.length-1?window.confirm("Restart cards? Click 'cancel' to return to the home page.")?w((function(){return 0})):e.push("/"):w((function(e){return e+1}))},className:"btn btn-primary",children:[Object(u.jsx)("i",{class:"bi bi-arrow-right mr-2"}),"Next"]})]})})})]}):n.length<=2?Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsx)(Y,{name:O,page:"Study"}),Object(u.jsxs)("h1",{children:["Study: ",O]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Not enough cards."}),Object(u.jsxs)("p",{className:"card-text",children:["You need at least 3 cards to study. There are ",n.length," cards in this deck."]}),Object(u.jsxs)(m.b,{to:"/decks/".concat(y,"/cards/new"),className:"btn btn-primary",children:[Object(u.jsx)("i",{className:"bi bi-plus-circle mr-2"}),"Add Cards"]})]})]}):"Loading..."}f.append("Content-Type","application/json");var K=c(12),W=c(8);var V=function(e){var t=e.updateDecks,c=Object(r.useState)({name:"",description:""}),n=Object(d.a)(c,2),a=n[0],s=n[1],l=Object(i.f)(),j=Object(i.g)().deckId;Object(r.useEffect)((function(){var e=new AbortController,t=function(){var t=Object(o.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(j,e.signal);case 2:c=t.sent,s((function(){return c}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[j]);var h=function(e){var t=e.target;s(Object(W.a)(Object(W.a)({},a),{},Object(K.a)({},t.name,t.value)))},x=function(){var e=Object(o.a)(b.a.mark((function e(c){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,E(a);case 3:r=e.sent,l.push("/decks/".concat(r.id)),t(1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsxs)("ol",{className:"breadcrumb",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("i",{className:"bi bi-house-door-fill mr-1"}),"Home"]})}),Object(u.jsx)("li",{className:"breadcrumb-item",children:"Edit Deck"})]})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Edit Deck"})}),Object(u.jsxs)("form",{onSubmit:x,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",value:a.name,onChange:h,id:"name",className:"form-control",placeholder:a.name})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("textarea",{name:"description",value:a.description,onChange:h,className:"form-control",id:"description",placeholder:a.description,rows:4})]}),Object(u.jsx)(m.b,{to:"/decks/".concat(j),name:"cancel",className:"btn btn-secondary mr-2",children:"Cancel"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]}):Object(u.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(u.jsx)("span",{className:"sr-only",children:"Loading..."})})};var M=function(e){var t=e.updateDecks,c=Object(r.useState)([]),n=Object(d.a)(c,2),a=n[0],s=n[1],l=Object(i.g)().deckId,j=Object(i.f)(),h=Object(i.h)().url,x=a.id,p=a.name,O=a.description,f=a.cards;Object(r.useEffect)((function(){var e=new AbortController,t=function(){var t=Object(o.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(l,e.signal);case 2:c=t.sent,s((function(){return c}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[l]);var v=function(){var e=Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this deck? You will not be able to recover it.")){e.next=7;break}return e.next=3,I(x);case 3:t(-1),j.push("/"),e.next=8;break;case 7:j.go(0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a&&f?Object(u.jsxs)("div",{children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsxs)("ol",{className:"breadcrumb",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("i",{className:"bi bi-house-door-fill mr-1"}),"Home"]})}),Object(u.jsx)("li",{className:"breadcrumb-item text-truncate",children:p})]})}),Object(u.jsx)("div",{className:"flex-container",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("h5",{className:"card-title ml-3",children:p})}),Object(u.jsx)("p",{className:"card-text",children:O}),Object(u.jsxs)("div",{children:[Object(u.jsxs)(m.b,{to:"/decks/".concat(x,"/edit"),className:"btn btn-secondary mr-2",children:[Object(u.jsx)("i",{className:"bi bi-pencil-square mr-2"}),"Edit"]}),Object(u.jsxs)(m.b,{to:"/decks/".concat(x,"/study"),className:"btn btn-primary mr-2",children:[Object(u.jsx)("i",{className:"bi bi-journal-bookmark-fill mr-2"}),"Study"]}),Object(u.jsxs)(m.b,{to:"/decks/".concat(x,"/cards/new"),className:"btn btn-primary mr-2",children:[Object(u.jsx)("i",{className:"bi bi-plus-circle mr-2"}),"Add Cards"]}),Object(u.jsx)("button",{onClick:v,name:"delete",value:x,className:"btn btn-danger",children:Object(u.jsx)("i",{className:"bi bi-trash-fill"})})]})]})}),Object(u.jsx)("div",{className:"flex-container ml-2",children:Object(u.jsx)("h1",{children:"Cards"})}),f.length?f.map((function(e,t){return Object(u.jsxs)("div",{className:"row d-flex",children:[Object(u.jsxs)("div",{className:"card col-sm-5 m-4",children:[Object(u.jsxs)("div",{className:"row card-body",children:[Object(u.jsx)("p",{className:"text-muted",children:"front"}),Object(u.jsx)("h4",{className:"col-10 card-text",children:e.front})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-end pl-4",children:[Object(u.jsxs)(m.b,{to:"".concat(h,"/cards/").concat(e.id,"/edit"),className:"btn btn-secondary mb-2",children:[Object(u.jsx)("i",{className:"bi bi-pencil-square mr-2"}),"Edit"]}),Object(u.jsx)("button",{type:"delete",onClick:Object(o.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to delete this card? You will not be able to recover it.")){t.next=6;break}return t.next=3,H(e.id);case 3:j.go(0),t.next=7;break;case 6:j.go(0);case 7:case"end":return t.stop()}}),t)}))),name:"deleteCard",value:e.id,className:"btn btn-danger ml-2 mb-2",children:Object(u.jsx)("i",{className:"bi bi-trash-fill"})})]})]}),Object(u.jsxs)("div",{className:"card col-sm-5 m-4",children:[Object(u.jsxs)("div",{className:"row card-body",children:[Object(u.jsx)("p",{className:"text-muted",children:"back"}),Object(u.jsx)("h4",{className:"col-10 card-text",children:e.back})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-end pl-4",children:[Object(u.jsxs)(m.b,{to:"".concat(h,"/cards/").concat(e.id,"/edit"),className:"btn btn-secondary mr-2 mb-2",children:[Object(u.jsx)("i",{className:"bi bi-pencil-square mr-2"}),"Edit"]}),Object(u.jsxs)("button",{onClick:Object(o.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to delete this card? You will not be able to recover it.")){t.next=6;break}return t.next=3,H(e.id);case 3:j.go(0),t.next=7;break;case 6:j.go(0);case 7:case"end":return t.stop()}}),t)}))),name:"deleteCard",value:e.id,className:"btn btn-danger mr-2 mb-2",children:[Object(u.jsx)("i",{"aria-hidden":"true",style:{color:"#ffffff"},className:"fa fa-trash"}),Object(u.jsx)("i",{className:"bi bi-trash-fill"})]})]})]})]},t)})):null]}):Object(u.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(u.jsx)("span",{className:"sr-only",children:"Loading..."})})};var z=function(e){var t=e.updateDecks,c=Object(r.useState)({name:"",description:""}),n=Object(d.a)(c,2),a=n[0],s=n[1],l=Object(i.f)(),j=function(e){var t=e.target;s(Object(W.a)(Object(W.a)({},a),{},Object(K.a)({},t.name,t.value)))},h=function(){var e=Object(o.a)(b.a.mark((function e(c){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,g(a);case 3:r=e.sent,l.push("/decks/".concat(r.id)),t(1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsx)(Y,{name:"New Deck",page:"Create Deck"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Create Deck"})}),Object(u.jsxs)("form",{onSubmit:h,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",value:a.name,onChange:j,id:"name",className:"form-control",placeholder:"Deck Name"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("textarea",{name:"description",value:a.description,onChange:j,className:"form-control",id:"description",placeholder:"Brief description of the deck.",rows:4})]}),Object(u.jsx)(m.b,{to:"/",name:"cancel",className:"btn btn-secondary mr-2",children:"Cancel"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})};var G=function(e){var t=e.submitForm,c=e.changeForm,r=e.card,n=e.deckId,a=e.cardFront,s=e.cardBack,i=e.firstBtnText;return Object(u.jsxs)("form",{id:"cardForm",onSubmit:t,children:[Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Front"}),Object(u.jsx)("textarea",{name:"front",value:r.front,onChange:c,id:"front",className:"form-control",placeholder:a,rows:4})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Back"}),Object(u.jsx)("textarea",{name:"back",value:r.back,onChange:c,className:"form-control",id:"back",placeholder:s,rows:4})]})]}),Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsx)(m.b,{to:"/decks/".concat(n),name:"cancel",className:"btn btn-secondary mr-2",children:i}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})};var Q=function(e){var t=e.updateDecks,c=Object(r.useState)([]),n=Object(d.a)(c,2),a=n[0],s=n[1],l=Object(r.useState)({front:"",back:"",deckId:""}),j=Object(d.a)(l,2),m=j[0],h=j[1],x=Object(i.g)(),p=x.deckId,O=x.cardId,f=Object(i.f)();Object(r.useEffect)((function(){var e=new AbortController,t=function(){var t=Object(o.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(O,e.signal);case 2:c=t.sent,h((function(){return c}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[O]),Object(r.useEffect)((function(){var e=new AbortController,t=function(){var t=Object(o.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(p,e.signal);case 2:c=t.sent,s((function(){return c}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[p]);var v=function(){var e=Object(o.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,L(m);case 3:f.push("/decks/".concat(a.id)),t(1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)(Y,{name:a.name,page:m.id}),Object(u.jsx)("div",{className:"flex-container",children:Object(u.jsx)("h1",{children:"Edit Card"})}),Object(u.jsx)(G,{submitForm:v,changeForm:function(e){var t=e.target;h(Object(W.a)(Object(W.a)({},m),{},Object(K.a)({},t.name,t.value)))},card:m,deckId:p,firstBtnText:"Cancel"})]})};var X=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)({front:"",back:"",deckId:""}),s=Object(d.a)(a,2),l=s[0],j=s[1],m=Object(i.g)().deckId;return Object(r.useEffect)((function(){var e=new AbortController,t=function(){var t=Object(o.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(m,e.signal);case 2:c=t.sent,n((function(){return c}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[m]),Object(u.jsxs)("div",{children:[Object(u.jsx)(Y,{name:c.name,page:"Add Card"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:c.name?c.name+": Add Card":"Loading title..."})}),Object(u.jsx)(G,{submitForm:function(e){e.preventDefault(),j(Object(W.a)(Object(W.a)({},l),{},{deckId:m})),function(e,t,c){F.apply(this,arguments)}(m,l),j({front:"",back:"",deckId:""})},changeForm:function(e){var t=e.target;j(Object(W.a)(Object(W.a)({},l),{},Object(K.a)({},t.name,t.value)))},card:l,deckId:m,firstBtnText:"Done",cardFront:"Front side of card",cardBack:"Back side of card"})]})};var Z=function(){return Object(u.jsx)("div",{className:"NotFound",children:Object(u.jsx)("h1",{children:"Not Found"})})};var $=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(0),s=Object(d.a)(a,2),l=s[0],m=s[1],h=function(e){m((function(){return l+e}))};return Object(r.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(o.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e.signal);case 3:c=t.sent,n(c),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),"AbortError"===t.t0.type&&console.error("Aborted",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return e.abort()}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",children:Object(u.jsx)(U,{decks:c})}),Object(u.jsx)(i.a,{path:"/decks/new",children:Object(u.jsx)(z,{updateDecks:h})}),Object(u.jsx)(i.a,{path:"/decks/:deckId",exact:!0,children:Object(u.jsx)(M,{updateDecks:h})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(u.jsx)(q,{decks:c})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(u.jsx)(X,{updateDecks:h})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(u.jsx)(V,{updateDecks:h})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(u.jsx)(Q,{updateDecks:h})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(Z,{})})]})})]})};var ee=function(){return Object(u.jsx)("div",{className:"app-routes",children:Object(u.jsx)(i.c,{children:Object(u.jsx)(i.a,{path:"/",children:Object(u.jsx)($,{})})})})};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(m.a,{children:Object(u.jsx)(ee,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.820eadaa.chunk.js.map