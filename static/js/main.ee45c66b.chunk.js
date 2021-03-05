(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{33:function(e,c,a){},34:function(e,c,a){},37:function(e,c,a){},38:function(e,c,a){},39:function(e,c,a){},40:function(e,c,a){},41:function(e,c,a){},42:function(e,c,a){},43:function(e,c,a){},44:function(e,c,a){},45:function(e,c,a){"use strict";a.r(c);var t=a(0),r=a(15),n=a.n(r),s=a(5),i=a(10),o=a(11),l=a(24),d=(a(33),a(4)),j=(a(34),a(1)),h=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("ul",{className:"header__list",children:[Object(j.jsx)("li",{className:"header__item",children:Object(j.jsx)(s.c,{to:"/",exact:!0,className:"header__link",children:"Home Page"})}),Object(j.jsx)("li",{className:"header__item",children:Object(j.jsx)(s.c,{to:"/characters",exact:!0,className:"header__link",children:"All Characters"})}),Object(j.jsx)("li",{className:"header__item",children:Object(j.jsx)(s.c,{to:"/locations",exact:!0,className:"header__link",children:"All Locations"})}),Object(j.jsx)("li",{className:"header__item",children:Object(j.jsx)(s.c,{to:"/episodes",exact:!0,className:"header__link",children:"All Episodes"})})]})})},u=function(){return Object(j.jsx)("div",{children:"Welcome to Home Page"})},m=a(2),O="START_LOAD_CHARACTERS",b="LOADED_CHARACTERS",p="ERROR_CHARACTERS",_="START_LOAD_CHARACTER",f="LOADED_CHARACTER",x="ERROR_CHARACTER",N="START_LOAD_LOCATIONS",g="LOADED_LOCATIONS",v="ERROR_LOCATIONS",y="START_LOAD_LOCATION",A="LOADED_LOCATION",L="ERROR_LOCATION",R=function(){return{type:O}},E=function(e){return{type:b,payload:Object(m.a)({},e)}},T=function(e){return{type:p,payload:{error:e}}},C=(a(37),function(e){var c=e.character;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:c.image,className:"card__img",alt:"photo"}),Object(j.jsxs)("div",{className:"card__wrapper",children:["Name: \xa0",Object(j.jsx)(s.b,{to:"character/".concat(c.id),className:"card__link",children:c.name}),Object(j.jsxs)("div",{className:"card__item",children:["Gender: \xa0 ",c.gender]}),Object(j.jsxs)("div",{className:"card__item",children:["Species: \xa0 ",c.species]}),Object(j.jsxs)("div",{className:"card__item",children:["Status: \xa0 ",c.status]}),Object(j.jsxs)("div",{className:"card__item",children:["Type: \xa0 ",c.type]})]})]})}),k=(a(38),Object(i.b)((function(e){return{loading:e.characters.loading,loaded:e.characters.loaded,charactersList:e.characters.charactersList,error:e.characters.error}}),(function(e){return{getCharacters:function(){e((function(e){e(R()),fetch("https://rickandmortyapi.com/api/character").then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(c){e(E(c))})).catch((function(c){e(T(c.message))}))}))}}}))((function(e){var c=e.getCharacters,a=e.loading,r=e.loaded,n=e.charactersList;e.error;return Object(t.useEffect)((function(){r||a||c()}),[]),Object(j.jsx)("div",{className:"characters",children:Object(j.jsx)("ul",{className:"characters__list",children:n.map((function(e){return Object(j.jsx)("li",{className:"characters__item",children:Object(j.jsx)(C,{character:e})},e.id)}))})})}))),w=function(){return{type:N}},D=function(e){return{type:g,payload:Object(m.a)({},e)}},S=function(e){return{type:v,payload:{error:e}}},P=(a(39),function(e){var c=e.location;return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card__wrapper",children:["Name: \xa0",Object(j.jsx)(s.b,{to:"location/".concat(c.id),className:"card__link",children:c.name}),Object(j.jsxs)("div",{className:"card__item",children:["Type: \xa0 ",c.type]}),Object(j.jsxs)("div",{className:"card__item",children:["Dimension: \xa0 ",c.dimension]})]})})}),I=(a(40),Object(i.b)((function(e){return{loading:e.locations.loading,loaded:e.locations.loaded,locationsList:e.locations.locationsList,error:e.locations.error}}),(function(e){return{getLocations:function(){e((function(e){e(w()),fetch("https://rickandmortyapi.com/api/location").then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(c){e(D(c))})).catch((function(c){e(S(c.message))}))}))}}}))((function(e){var c=e.getLocations,a=e.loading,r=e.loaded,n=e.locationsList;e.error;return Object(t.useEffect)((function(){r||a||c()}),[]),console.log(n,"locationsList"),Object(j.jsx)("div",{className:"locations",children:Object(j.jsx)("ul",{className:"locations__list",children:n.map((function(e){return Object(j.jsx)("li",{className:"locations__item",children:Object(j.jsx)(P,{location:e})},e.id)}))})})}))),H=function(){return Object(j.jsx)("div",{children:"Welcome to list of all episodes"})},G=(a(41),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("a",{href:"https://github.com/FaychakA/New-app",className:"footer__link",children:"github"}),Object(j.jsx)("div",{className:"footer__text",children:"\xa92021"})]})}),J=function(){return{type:_}},W=function(e){return{type:f,payload:Object(m.a)({},e)}},B=function(e){return{type:x,payload:{error:e}}},F=(a(42),Object(i.b)((function(e){return{loading:e.character.loading,characterParams:e.character.characterParams,error:e.character.error}}),(function(e){return{getCharacter:function(c){e(function(e){return function(c){c(J()),fetch("https://rickandmortyapi.com/api/character/".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){c(W(e))})).catch((function(e){c(B(e.message))}))}}(c))}}}))((function(e){var c=e.match,a=e.getCharacter,r=e.loading,n=e.characterParams;e.error;return Object(t.useEffect)((function(){r||a(c.params.characterId)}),[]),r||!n?null:Object(j.jsx)("div",{className:"character",children:Object(j.jsxs)("div",{className:"character__wrapper",children:[Object(j.jsx)("img",{src:n.image,className:"character__img",alt:"photo"}),Object(j.jsxs)("div",{className:"character__params",children:[Object(j.jsxs)("div",{className:"character__params--text",children:["Name: \xa0 ",n.name]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Gender: \xa0 ",n.gender]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Species: \xa0 ",n.species]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Status: \xa0 ",n.status]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Type: \xa0 ",n.type]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Origin: \xa0",Object(j.jsx)(s.b,{to:"/location/".concat(n.origin.url.split("/").reverse()[0]),className:"character__link",children:n.origin.name})]}),Object(j.jsxs)("div",{className:"character__episode",children:[Object(j.jsx)("div",{children:"Episodes:"}),Object(j.jsxs)("ul",{className:"character__episode--list",children:["\xa0",n&&n.episode&&n.episode.map((function(e,c){return Object(j.jsx)("li",{className:"character__episode--item",children:Object(j.jsx)(s.b,{to:"/episode/".concat(e.split("/").reverse()[0]),className:"character__link",children:e.split("/").reverse()[0]})},c)}))]})]}),Object(j.jsxs)("div",{className:"character__location",children:["Location: \xa0",Object(j.jsx)(s.b,{to:"/location/".concat(n.location.url.split("/").reverse()[0]),className:"character__link",children:n.location.url.split("/").reverse()[0]})]})]})]})})}))),q=function(){return{type:y}},z=function(e){return{type:A,payload:Object(m.a)({},e)}},K=function(e){return{type:L,payload:{error:e}}},M=(a(43),Object(i.b)((function(e){return{loading:e.location.loading,locationParams:e.location.locationParams,error:e.location.error}}),(function(e){return{getLocation:function(c){e(function(e){return function(c){c(q()),fetch("https://rickandmortyapi.com/api/location/".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){c(z(e))})).catch((function(e){c(K(e.message))}))}}(c))}}}))((function(e){var c=e.match,a=e.getLocation,r=e.loading,n=e.locationParams;e.error;return Object(t.useEffect)((function(){r||a(c.params.locationId)}),[]),console.log(n,"locationParams"),r||!n?null:Object(j.jsx)("div",{className:"location",children:Object(j.jsxs)("div",{className:"location__wrapper",children:[Object(j.jsx)("img",{src:n.image,className:"location__img",alt:"photo"}),Object(j.jsxs)("div",{className:"location__params",children:[Object(j.jsxs)("div",{className:"location__params--text",children:["Name: \xa0 ",n.name]}),Object(j.jsxs)("div",{className:"location__params--text",children:["Type: \xa0 ",n.type]}),Object(j.jsxs)("div",{className:"location__params--text",children:["Dimension: \xa0 ",n.dimension]}),Object(j.jsxs)("div",{className:"location__characters",children:[Object(j.jsx)("div",{children:"Residents:"}),Object(j.jsxs)("ul",{className:"location__characters--list",children:["\xa0",n&&n.residents&&n.residents.map((function(e,c){return Object(j.jsx)("li",{className:"location__characters--item",children:Object(j.jsx)(s.b,{to:"/character/".concat(e.split("/").reverse()[0]),className:"location__link",children:e.split("/").reverse()[0]})},c)}))]})]})]})]})})})));a(44);var Q=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("div",{className:"app__header",children:Object(j.jsx)(h,{})}),Object(j.jsx)("main",{className:"app__main",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(d.a,{path:"/characters",exact:!0,component:k}),Object(j.jsx)(d.a,{path:"/locations",exact:!0,component:I}),Object(j.jsx)(d.a,{path:"/episodes",exact:!0,component:H}),Object(j.jsx)(d.a,{path:"/character/:characterId",exact:!0,component:F}),Object(j.jsx)(d.a,{path:"/location/:locationId",exact:!0,component:M})]})}),Object(j.jsx)("div",{className:"app__footer",children:Object(j.jsx)(G,{})})]})},U=a(13),V={loading:!1,loaded:!1,charactersList:[],error:null};var X={loading:!1,characterParams:null,error:null};var Y={loading:!1,loaded:!1,locationsList:[],error:null};var Z={loading:!1,locationParams:null,error:null};var $=Object(o.c)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case O:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,loaded:!1});case b:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,loaded:!0,charactersList:[].concat(Object(U.a)(e.charactersList),Object(U.a)(c.payload.results))});case p:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:c.payload.error});default:return e}},character:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case _:return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case f:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,characterParams:Object(m.a)({},c.payload)});case x:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:c.payload.error});default:return e}},locations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case N:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,loaded:!1});case g:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,loaded:!0,locationsList:[].concat(Object(U.a)(e.locationsList),Object(U.a)(c.payload.results))});case v:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:c.payload.error});default:return e}},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case y:return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case A:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,locationParams:Object(m.a)({},c.payload)});case L:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:c.payload.error});default:return e}}}),ee=Object(o.d)($,Object(o.a)(l.a));n.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(i.a,{store:ee,children:Object(j.jsx)(Q,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ee45c66b.chunk.js.map