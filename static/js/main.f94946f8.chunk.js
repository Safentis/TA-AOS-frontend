(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{128:function(e,t,a){},135:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var c,n=a(0),s=a.n(n),r=a(28),i=a.n(r),l=a(51),o=a(49),j=a.n(o),d=a(64),u=a(5),b=a(47),m=(a(128),a(3)),h=function(e){var t=e.className,a=void 0===t?"":t;return Object(m.jsx)("header",{className:"header ".concat(a),children:Object(m.jsx)("div",{className:"header__inner",children:Object(m.jsx)("h2",{className:"header__title",children:"Rick and Morty"})})})},O=a(14),_=a(101),f=a(87);a(135);!function(e){e.PATH_MAIN="/",e.PATH_ABOUT="/about"}(c||(c={}));var p=function(e){var t=e.className,a=void 0===t?"":t,n=Object(O.f)().pathname,s=[{link:"Home",to:c.PATH_MAIN,icon:f.a},{link:"About",to:c.PATH_ABOUT,icon:f.b}].map((function(e,t){var a=e.link,c=e.to,s=e.icon;return Object(m.jsx)("li",{className:"nav__item",children:Object(m.jsxs)(l.b,{className:"nav__link ".concat(n===c?"nav__link_active":""),to:c,children:[a,Object(m.jsx)(_.a,{className:"nav__icon ".concat(n===c?"nav__icon_active":""),icon:s})]})},t)}));return Object(m.jsx)("aside",{className:"aside ".concat(a),children:Object(m.jsx)("div",{className:"aside__inner",children:Object(m.jsx)("nav",{className:"nav aside__nav",children:Object(m.jsx)("ul",{className:"nav__list",children:s})})})})},v=(a(141),function(e){var t=e.children,a=e.className,c=void 0===a?"":a;return Object(m.jsx)("main",{className:"main ".concat(c),children:t})}),x=a(222),N=a(1),g=a(54),k=a(221),P=(a(142),function(e){var t=e.children,a=e.className,c=void 0===a?"":a,n=e.content;return Object(m.jsxs)("label",{className:"label "+c,children:[Object(m.jsx)("span",{className:"label__content",children:n}),t]})}),A=(a(143),Object(n.createContext)({entries:[],numberOfPages:0,numberOfItems:0,currentPage:1,handlePagination:function(){},filter:{status:"",gender:"",search:""},setFilter:function(){}})),y=function(){return Object(n.useContext)(A)},T=function(e){var t=e.className,a=void 0===t?"":t,c=g.a.Option,n=y(),s=n.filter,r=n.setFilter,i=n.handlePagination,l=function(e,t){var a=Object(N.a)({},s),c="none"!==e?e:"";"status"===t.title?a.status=c:a.gender=c,r(a),i(1)},o=["alive","dead","unknown","none"].map((function(e){return Object(m.jsx)(c,{value:e,title:"status",children:e},e)})),j=["male","female","genderless","unknown","none"].map((function(e){return Object(m.jsx)(c,{value:e,title:"gender",children:e},e)}));return Object(m.jsxs)("div",{className:"filters ".concat(a),children:[Object(m.jsx)(P,{className:"filters__label",content:"search",children:Object(m.jsx)(k.a,{className:"search filters__search",placeholder:"Type here...",onChange:function(e){var t=Object(N.a)({},s),a=e.target.value;t.search=a,r(t),i(1)},id:"search",value:s.search})}),Object(m.jsx)(P,{className:"filters__label",content:"status",children:Object(m.jsx)(g.a,{className:"select filters__select",onChange:l,placeholder:"Status",defaultValue:"none",children:o})}),Object(m.jsx)(P,{className:"filters__label",content:"gender",children:Object(m.jsx)(g.a,{className:"select filters__select",onChange:l,placeholder:"Gender",defaultValue:"none",children:j})})]})},w=(a(212),function(e){var t=e.className,a=void 0===t?"":t,c=e.gender,n=e.species,s=e.status,r=e.image,i=e.name;return Object(m.jsxs)("section",{className:"character "+a,children:[Object(m.jsx)("div",{className:"character__avatar",children:Object(m.jsx)("img",{className:"character__image",src:r})}),Object(m.jsxs)("ul",{className:"description-character character__description",children:[Object(m.jsx)("li",{className:"description-character__item",children:Object(m.jsx)("h2",{children:i})}),Object(m.jsx)("li",{className:"description-character__item",children:c}),Object(m.jsx)("li",{className:"description-character__item",children:n}),Object(m.jsx)("li",{className:"description-character__item",children:s})]})]})}),S=(a(213),function(e){var t=e.className,a=void 0===t?"":t,c=y().entries.map((function(e,t){var a=e.gender,c=e.status,n=e.image,s=e.name,r=e.species;return Object(m.jsx)(w,{className:"content__character",gender:a,species:r,status:c,image:n,name:s},t)}));return Object(m.jsx)("div",{className:"content ".concat(a),children:c})}),C=(a(214),function(e){Object(b.a)(e);var t=y(),a=t.handlePagination,c=t.numberOfPages,n=t.numberOfItems,s=t.currentPage;return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)(T,{className:"home__filters"}),Object(m.jsx)(S,{className:"home__content"}),c?Object(m.jsx)(x.a,{className:"home__pagination",current:s,total:n,onChange:a,showSizeChanger:!1,defaultPageSize:20,defaultCurrent:1}):null]})}),H=(a(215),function(e){return Object(b.a)(e),Object(m.jsx)("section",{className:"about",children:Object(m.jsxs)("div",{className:"about__inner",children:[Object(m.jsx)("div",{className:"about__avatar",children:Object(m.jsx)("img",{className:"about__image",src:"https://thumbs.dfs.ivi.ru/storage5/contents/7/1/22be48dae13ba93ed78d2ccffb44fb.jpg"})}),Object(m.jsxs)("div",{className:"about__description",children:[Object(m.jsx)("h2",{className:"about__title",children:"About me"}),Object(m.jsx)("p",{className:"about__text",children:'Hello, my name is Anton i am beginner front-end developer, i like read books, play on guitar and concerts, my favorite books are 1983 by George Orwell and "Three friends" by Erich Maria Remarque, if talk about concerts i like genre punk and post-hardcore, last concert that i visited in St. Petersburg at 2019 year, was of group the Napalm Death. My favorite direction is development, i like write code and to solve interesting tasks.'}),Object(m.jsx)("p",{className:"about__text",children:"Thanks for a reading!"})]})]})})}),I=[{path:c.PATH_MAIN,component:C},{path:c.PATH_ABOUT,component:H}];function M(){return Object(m.jsx)(O.c,{children:I.map((function(e,t){var a=e.path,c=e.component;return Object(m.jsx)(O.a,{path:a,component:c,exact:!0},t)}))})}a(216);var B=function(e){Object(b.a)(e);var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)({status:"",gender:"",search:""}),i=Object(u.a)(r,2),l=i[0],o=i[1],O=Object(n.useState)(0),_=Object(u.a)(O,2),f=_[0],x=_[1],N=Object(n.useState)(0),g=Object(u.a)(N,2),k=g[0],P=g[1],y=Object(n.useState)(1),T=Object(u.a)(y,2),w=T[0],S=T[1];Object(n.useEffect)((function(){Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://rickandmortyapi.com/api/character/?page=".concat(w,"&name=").concat(l.search,"&status=").concat(l.status,"&gender=").concat(l.gender));case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent).error?(s([]),x(0),P(0)):(s(a.results),x(a.info.pages),P(a.info.count)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error with request to api"),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[l,w]);var C={handlePagination:function(e){S(e)},numberOfPages:f,numberOfItems:k,currentPage:w,setFilter:o,entries:c,filter:l};return Object(m.jsx)(A.Provider,{value:C,children:Object(m.jsx)("div",{className:"application",children:Object(m.jsxs)("div",{className:"application__inner",children:[Object(m.jsx)(h,{className:"application__header"}),Object(m.jsx)(p,{className:"application__aside"}),Object(m.jsx)(v,{className:"application__main",children:Object(m.jsx)(M,{})})]})})})};a(217),a(218);i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(B,{})})}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.f94946f8.chunk.js.map