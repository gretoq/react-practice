(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(8),r=c.n(s),n=(c(14),c(15),c(9)),i=c(3),l=c(7),o=c(1),d=c.n(o),u=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),j=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],h=c(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=j.find((function(t){return t.id===e.categoryId}))||null,c=u.find((function(e){return e.id===t.ownerId}))||null;return Object(l.a)(Object(l.a)({},e),{},{category:t,user:c})})),f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),o=l[0],f=l[1],m=Object(a.useState)([]),x=Object(i.a)(m,2),p=x[0],O=x[1],y=Object(a.useState)(!1),g=Object(i.a)(y,2),N=g[0],w=g[1],v=Object(a.useState)(""),I=Object(i.a)(v,2),k=I[0],C=I[1],S=b.filter((function(e){var t=o.trim().toLowerCase();return e.name.toLowerCase().includes(t)})).filter((function(e){var t=e.categoryId;return p.length>0?p.includes(t):b})).filter((function(e){var t=e.user;return c?t.id===c:b})),P=Boolean(S.length),A=function(e,t,c){var a=e.sort((function(e,c){switch(t){case"":return 0;case"id":return e.id-c.id;case"product":return e.name.localeCompare(c.name);case"category":return e.category.title.localeCompare(c.category.title);case"user":return e.user.name.localeCompare(c.user.name);default:throw new Error("Unknown sort type - ".concat(t))}}));return c?a.reverse():a}(S,k,N);return Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:d()({"is-active":""===c}),value:c,onClick:function(){return s("")},children:"All"}),u.map((function(e){var t=e.id,a=e.name;return Object(h.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:d()({"is-active":c===t}),value:t,onClick:function(){return s(t)},children:a},t)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:o,onChange:function(e){f(e.currentTarget.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),o&&Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return f("")}})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",className:d()("button is-success mr-6",{"is-outlined":!(0===p.length)}),onClick:function(){O([])},children:"All"}),j.map((function(e){var t=e.id,c=e.title;return Object(h.jsx)("a",{"data-cy":"Category",className:d()("button mr-2 my-1",{"is-info":p.includes(t)}),href:"#/",onClick:function(){return function(e){var t=e;if(p.includes(e)){var c=p.filter((function(t){return t!==e}));O(c)}else O([].concat(Object(n.a)(p),[t]))}(t)},children:c},t)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(""),f(""),O([])},children:"Reset all filters"})})]})}),Object(h.jsxs)("div",{className:"box table-container",children:[!P&&Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),P&&Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",onClick:function(){"id"!==k&&(C("id"),w(!1)),"id"!==k||N||w(!0),"id"===k&&N&&(C(""),w(!1))},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":"id"!==k,"fa-sort-up":"id"===k&&!N,"fa-sort-down":"id"===k&&N})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",onClick:function(){"product"!==k&&(C("product"),w(!1)),"product"!==k||N||w(!0),"product"===k&&N&&(C(""),w(!1))},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":"product"!==k,"fa-sort-up":"product"===k&&!N,"fa-sort-down":"product"===k&&N})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",onClick:function(){"category"!==k&&(C("category"),w(!1)),"category"!==k||N||w(!0),"category"===k&&N&&(C(""),w(!1))},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":"product"!==k,"fa-sort-up":"category"===k&&!N,"fa-sort-down":"category"===k&&N})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",onClick:function(){"user"!==k&&(C("user"),w(!1)),"user"!==k||N||w(!0),"user"===k&&N&&(C(""),w(!1))},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":"user"!==k,"fa-sort-up":"user"===k&&!N,"fa-sort-down":"user"===k&&N})})})})]})})]})}),Object(h.jsx)("tbody",{children:A.map((function(e){var t=e.id,c=e.name,a=e.category,s=e.user;return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t}),Object(h.jsx)("td",{"data-cy":"ProductName",children:c}),Object(h.jsxs)("td",{"data-cy":"ProductCategory",children:[Object(h.jsx)("span",{children:a.icon})," - ",a.title]}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:d()({"has-text-link":"m"===s.sex},{"has-text-danger":"f"===s.sex}),children:s.name})]},t)}))})]})]})]})})};r.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5db717de.chunk.js.map