(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/cart.4fc9a81c.svg"},31:function(e,t,a){e.exports=a(52)},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=a(8),u=(a(36),a(13)),o=(a(37),function(e){var t=e.pxSize,a=e.children;return r.a.createElement("div",{className:"HeadingText",style:{fontSize:"".concat(t,"px")}},a)}),m=a(2),s=a(11),d=a(4),g=a(7),p=Object(g.b)({name:"cart",initialState:{},reducers:{addProduct:function(e,t){var a=t.payload,n=e[a]||0;return Object(d.a)({},e,Object(s.a)({},a,n+1))},removeProduct:function(e,t){var a=t.payload,n=e[a]||0;return Object(d.a)({},e,Object(s.a)({},a,n>=1?n-1:0))},deleteProduct:function(e,t){delete e[t.payload]}}}),f=p.reducer,b=a(10),E=function(e){return e.cart},y=function(e){return e.page},v=function(e){return e.catalog.products},h=function(e){return e.catalog.categories},O=function(e){return e.filterCatalog},j=Object(b.a)([v,O],(function(e,t){return e.filter((function(e){return"all"===t||e.category===t}))})),N=Object(b.a)([j,y],(function(e,t){return e.filter((function(e,a){return a>=12*(t-1)&&a<12*t})).sort((function(e,t){return e.name.localeCompare(t.name)}))})),w=Object(b.a)(j,(function(e){return Math.ceil(e.length/12)})),_=Object(b.a)(E,(function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)})),C=Object(b.a)(E,(function(e){return Object.keys(e).map((function(e){return+e}))})),x=Object(b.a)([v,C],(function(e,t){return t.reduce((function(t,a){var n=e.find((function(e){return e.id===+a}));return Object(d.a)({},t,Object(s.a)({},a,(null===n||void 0===n?void 0:n.price)||0))}),{})})),P=Object(b.a)([E,C],(function(e,t){return t.reduce((function(t,a){return Object(d.a)({},t,Object(s.a)({},a,e[a]))}),{})})),k=Object(b.a)([C,x,P],(function(e,t,a){var n=e.reduce((function(e,n){return e+t[n]*a[n]}),0);return Math.round(100*(n+Number.EPSILON))/100})),S=Object(b.a)([C,P,v],(function(e,t,a){return e.map((function(e){var n=a.find((function(t){return t.id===e})),r=n.name,c=n.price,l=t[e];return{id:e,name:r,price:c,quantity:l}}))})),R=(a(42),function(){var e=Object(m.c)(_),t=Object(m.c)(k),a=Object(m.c)(S),n=p.actions,c=n.addProduct,l=n.removeProduct,u=n.deleteProduct,s=Object(m.b)();return r.a.createElement("div",{className:"Cart"},r.a.createElement(o,{pxSize:32},"Cart"),a.length?r.a.createElement("div",{className:"cart_products"},a.map((function(e){var t=e.id,a=e.name,n=e.price,i=e.quantity;return r.a.createElement("div",{className:"cart_product",key:t.toString()},r.a.createElement("span",{className:"grid_item"},a),r.a.createElement("span",{className:"grid_item"},"$",n*i),r.a.createElement("span",{className:"grid_item"},"Qty: ",i),r.a.createElement("div",{className:"grid_item"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{onClick:function(){return function(e){s(l(e))}(t)},disabled:1===i},"-"),r.a.createElement("button",{onClick:function(){return function(e){s(c(e))}(t)}},"+"),r.a.createElement("button",{onClick:function(){return function(e){s(u(e))}(t)}},"\xd7"))))}))):null,e&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Total Products: ",e),r.a.createElement("div",null,"Total Sum: ",t)):r.a.createElement("div",{className:"empty"},"Your cart is empty."),e?r.a.createElement(i.b,{to:"/order"},r.a.createElement("button",{className:"cart_btn"},"Process Order")):r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{className:"cart_btn"},"Go to main"))))}),B=a(20),M=(a(44),{name:"",phone:"",email:"",address:"",date:"",time:"",showMessage:"hide"}),z=function(e,t){var a=t.field,n=t.value;return"reset"===t.type?M:Object(d.a)({},e,Object(s.a)({},a,n))},F=function(){var e=Object(n.useReducer)(z,M),t=Object(B.a)(e,2),a=t[0],c=t[1],l=a.name,u=a.phone,s=a.email,d=a.address,g=a.date,p=a.time,f=a.showMessage,b=function(e){var t=e.currentTarget,a=t.name,n=t.value;c({field:a,value:n})};var E=Object(m.c)(k);return r.a.createElement("div",{className:"Order"},r.a.createElement(o,{pxSize:32},"Order"),"hide"===f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"$",E),r.a.createElement("form",null,r.a.createElement("label",{className:"flex_item"},r.a.createElement("span",null,"Your name"),r.a.createElement("input",{name:"name",type:"text",value:l,placeholder:"name",onChange:b})),r.a.createElement("label",{className:"flex_item"},r.a.createElement("span",null,"Phone number"),r.a.createElement("input",{name:"phone",type:"tel",value:u,placeholder:"phone",onChange:b})),r.a.createElement("label",{className:"flex_item"},r.a.createElement("span",null,"Email"),r.a.createElement("input",{name:"email",type:"email",value:s,placeholder:"email",onChange:b})),r.a.createElement("label",{className:"flex_item"},r.a.createElement("span",null,"Delivery address"),r.a.createElement("input",{name:"address",type:"text",value:d,placeholder:"address",onChange:b})),r.a.createElement("label",{className:"flex_item"},r.a.createElement("span",null,"Delivery date"),r.a.createElement("input",{name:"date",type:"date",value:g,placeholder:"date",onChange:b})),r.a.createElement("label",{className:"flex_item"},r.a.createElement("span",null,"Delivery time"),r.a.createElement("input",{name:"time",type:"time",value:p,onChange:b})),r.a.createElement("label",{className:"flex_item"},r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),c({field:"showMessage",value:"show"}),setTimeout((function(){window.location.href="/"}),2e3)}},"Submit"))))):r.a.createElement("div",{className:"message"},"Your order for $",E," was successully submitted"))},T=(a(45),function(e){var t=e.name,a=e.image,n=e.price,c=e.onClick;return r.a.createElement("div",{className:"ProductCard"},r.a.createElement(o,{pxSize:16},t),r.a.createElement("img",{alt:"product",src:a}),r.a.createElement("div",{className:"buy_button"},r.a.createElement("div",{className:"buy_button__item"},"$",n),r.a.createElement("button",{className:"buy_button__item",onClick:c},"Add to cart")))}),A=(a(46),a(47),Object(g.b)({name:"filterCatalog",initialState:"all",reducers:{setFilter:function(e,t){return t.payload}}})),H=A.reducer,$=Object(g.b)({name:"page",initialState:1,reducers:{incrementPage:function(e){return e+1},decrementPage:function(e){if(e>1)return e-1},dropPage:function(e){return 1}}}),D=$.reducer,I=a(21),Y=function(e){var t=function(e){return e.reduce((function(t,a){if(e.find((function(e){return e.subcategory&&e.subcategory===a.name})))return Object(I.a)(t);if(!a.subcategory)return[].concat(Object(I.a)(t),[Object(d.a)({},a)]);var n=function t(a){var n=e.find((function(e){return!!a.subcategory&&e.name===a.subcategory}));return n.subcategory?Object(d.a)({},a,{subcategory:t(n)}):Object(d.a)({},a,{subcategory:Object(d.a)({},n)})}(a);return[].concat(Object(I.a)(t),[Object(d.a)({},n)])}),[])},a=Object(n.useState)([]),r=Object(B.a)(a,2),c=r[0],l=r[1],i=Object(m.c)(h);return Object(n.useEffect)((function(){l(t(i))}),[i]),c},q=function(){var e=Object(m.b)(),t=Object(m.c)(O),a=A.actions.setFilter,n=$.actions.dropPage,c=function(t){var r=t.currentTarget.value;e(a(r)),e(n())},l=(Object(m.c)(h),Y()),i=l.map((function(e){return r.a.createElement("li",{key:e.id},function e(a){return a.subcategory?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:c,value:a.name,className:a.name===t?"active":""},a.name),r.a.createElement("ul",{className:"sub"},r.a.createElement("li",null,e(a.subcategory)))):r.a.createElement("button",{onClick:c,value:a.name,className:a.name===t?"active":""},a.name)}(e))}));return r.a.createElement("ul",{className:"Catalog"},r.a.createElement("li",null,r.a.createElement("button",{onClick:c,value:"all",className:"all"===t?"active":""},"All")),i)};a(48);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=r.a.createElement("path",{clipRule:"evenodd",d:"M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z",fill:"#121313",fillRule:"evenodd",id:"Arrow_Back"}),Q=r.a.createElement("g",null),W=r.a.createElement("g",null),K=r.a.createElement("g",null),U=r.a.createElement("g",null),V=r.a.createElement("g",null),X=r.a.createElement("g",null),Z=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return r.a.createElement("svg",J({enableBackground:"new 0 0 32 32",id:"\\u0421\\u043B\\u043E\\u0439_1",viewBox:"0 0 32 32",xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,G,Q,W,K,U,V,X)},ee=r.a.forwardRef((function(e,t){return r.a.createElement(Z,J({svgRef:t},e))}));a.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ne=r.a.createElement("path",{clipRule:"evenodd",d:"M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z",fill:"#121313",fillRule:"evenodd",id:"Arrow_Forward"}),re=r.a.createElement("g",null),ce=r.a.createElement("g",null),le=r.a.createElement("g",null),ie=r.a.createElement("g",null),ue=r.a.createElement("g",null),oe=r.a.createElement("g",null),me=function(e){var t=e.svgRef,a=e.title,n=ae(e,["svgRef","title"]);return r.a.createElement("svg",te({enableBackground:"new 0 0 32 32",id:"\\u0421\\u043B\\u043E\\u0439_1",viewBox:"0 0 32 32",xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,ne,re,ce,le,ie,ue,oe)},se=r.a.forwardRef((function(e,t){return r.a.createElement(me,te({svgRef:t},e))})),de=(a.p,function(){var e=Object(m.c)(y),t=Object(m.c)(w)===e,a=Object(m.b)(),n=$.actions,c=n.incrementPage,l=n.decrementPage;return r.a.createElement("div",{className:"Pager"},r.a.createElement("button",{className:"arrow_btn",onClick:function(){return a(l())},disabled:1===e},r.a.createElement(ee,null)),r.a.createElement("div",{className:"page_number"},e),r.a.createElement("button",{className:"arrow_btn",onClick:function(){return a(c())},disabled:t},r.a.createElement(se,null)))}),ge=function(){var e=Object(m.b)(),t=p.actions.addProduct,a=Object(m.c)(N);return r.a.createElement("div",{className:"Homepage"},r.a.createElement(q,null),r.a.createElement("div",{className:"product_gallery"},a?a.map((function(a){return r.a.createElement(T,Object.assign({key:a.id},a,{onClick:function(){return n=a.id,void e(t(n));var n}}))})):null),r.a.createElement(de,null))},pe=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/cart"},r.a.createElement(R,null)),r.a.createElement(u.a,{path:"/order"},r.a.createElement(F,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(ge,null)))},fe=function(){return r.a.createElement("main",{className:"container"},r.a.createElement(pe,null))},be=(a(49),a(30)),Ee=a.n(be),ye=(a(50),function(){var e=Object(m.c)(_),t=Object(m.c)(k);return r.a.createElement("div",{className:"CartWidget"},r.a.createElement("img",{src:Ee.a,alt:"cart"}),!!e&&r.a.createElement("div",{className:"text"},e),!!t&&r.a.createElement("div",{className:"text"},"$",t))}),ve=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("nav",{className:"container"},r.a.createElement(i.c,{to:"/"},r.a.createElement("h1",null,"E-Shop")),r.a.createElement(i.c,{to:"/cart"},r.a.createElement(ye,null))))};a(51);var he=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ve,null),r.a.createElement(fe,null))},Oe=Object(g.b)({name:"catalog",initialState:{categories:[{id:1,name:"category1",image:"https://fillmurray.com/g/200/300"},{id:2,name:"category2",image:"https://fillmurray.com/g/200/300",subcategory:"category3"},{id:3,name:"category3",image:"https://fillmurray.com/g/200/300",subcategory:"category4"},{id:4,name:"category4",image:"https://fillmurray.com/g/200/300"},{id:5,name:"category5",image:"https://fillmurray.com/g/200/300",subcategory:"category6"},{id:6,name:"category6",image:"https://fillmurray.com/g/200/300"}],products:[{id:1,name:"name",price:100,image:"https://placem.at/things?w=250&random=1",category:"category1"},{id:2,name:"name",price:200,image:"https://placem.at/things?w=250&random=1",category:"category3"},{id:3,name:"category1product1",price:100,image:"https://placem.at/things?w=250&random=1",category:"category1"},{id:4,name:"category1product2",price:200,image:"https://placem.at/things?w=250&random=1",category:"category2"},{id:5,name:"subcategory1product1",price:100,image:"https://placem.at/things?w=250&random=1",category:"category4"},{id:6,name:"subcategory1product2",price:200,image:"https://placem.at/things?w=250&random=1",category:"category4"},{id:7,name:"category2product1",price:100,image:"https://placem.at/things?w=250&random=1",category:"category5"},{id:8,name:"category2product2",price:200,image:"https://placem.at/things?w=250&random=1"},{id:9,name:"name",price:100,image:"https://placem.at/things?w=250&random=1"},{id:10,name:"name",price:200,image:"https://placem.at/things?w=250&random=1",category:"category1"},{id:11,name:"category1product1",price:100,image:"https://placem.at/things?w=250&random=1",category:"category1"},{id:12,name:"category1product2",price:200,image:"https://placem.at/things?w=250&random=1",category:"category3"},{id:13,name:"subcategory1product1",price:100,image:"https://placem.at/things?w=250&random=1",category:"category4"},{id:14,name:"subcategory1product2",price:200,image:"https://placem.at/things?w=250&random=1",category:"category5"},{id:15,name:"category2product1",price:100,image:"https://placem.at/things?w=250&random=1",category:"category6"},{id:16,name:"category2product2",price:200,image:"https://placem.at/things?w=250&random=1",category:"category2"}]},reducers:{}}).reducer,je=Object(g.a)({reducer:{page:D,cart:f,filterCatalog:H,catalog:Oe}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:je},r.a.createElement(i.a,{basename:"/e-shop"},r.a.createElement(he,null)))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.08ce4aa6.chunk.js.map