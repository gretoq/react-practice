(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(8),n=a.n(s),r=(a(14),a(15),a(9)),i=a(5),l=a(7),d=a(2),o=a.n(d),j=(a(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],u=a(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=h.find((function(t){return t.id===e.categoryId}))||null,a=j.find((function(e){return e.id===t.ownerId}))||null;return Object(l.a)(Object(l.a)({},e),{},{category:t,user:a})})),x=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),l=Object(i.a)(n,2),d=l[0],x=l[1],m=Object(c.useState)([]),f=Object(i.a)(m,2),O=f[0],p=f[1],g=b.filter((function(e){var t=d.trim().toLowerCase();return e.name.toLowerCase().includes(t)})).filter((function(e){var t=e.categoryId;return O.length>0?O.includes(t):b})).filter((function(e){var t=e.user;return a?t.id===a:b})),y=Boolean(g.length);return Object(u.jsx)("div",{className:"section",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"title",children:"Product Categories"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsxs)("nav",{className:"panel",children:[Object(u.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(u.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(u.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:o()({"is-active":""===a}),value:a,onClick:function(){return s("")},children:"All"}),j.map((function(e){var t=e.id,c=e.name;return Object(u.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:o()({"is-active":a===t}),value:t,onClick:function(){return s(t)},children:c},t)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:d,onChange:function(e){x(e.currentTarget.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),d&&Object(u.jsx)("span",{className:"icon is-right",children:Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return x("")}})})]})}),Object(u.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(u.jsx)("a",{href:"#/","data-cy":"AllCategories",className:o()("button is-success mr-6",{"is-outlined":!(0===O.length)}),onClick:function(){var e=h.map((function(e){return e.id}));O.length===e.length?p([]):p(e)},children:"All"}),h.map((function(e){var t=e.id,a=e.title;return Object(u.jsx)("a",{"data-cy":"Category",className:o()("button mr-2 my-1",{"is-info":O.includes(t)}),href:"#/",onClick:function(){return function(e){var t=e;if(O.includes(e)){var a=O.filter((function(t){return t!==e}));p(a)}else p([].concat(Object(r.a)(O),[t]))}(t)},children:a},t)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(""),x(""),p([])},children:"Reset all filters"})})]})}),Object(u.jsxs)("div",{className:"box table-container",children:[!y&&Object(u.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),y&&Object(u.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(u.jsx)("tbody",{children:g.map((function(e){var t=e.id,a=e.name,c=e.category,s=e.user;return Object(u.jsxs)("tr",{"data-cy":"Product",children:[Object(u.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t}),Object(u.jsx)("td",{"data-cy":"ProductName",children:a}),Object(u.jsxs)("td",{"data-cy":"ProductCategory",children:[Object(u.jsx)("span",{children:c.icon})," - ",c.title]}),Object(u.jsx)("td",{"data-cy":"ProductUser",className:o()({"has-text-link":"m"===s.sex},{"has-text-danger":"f"===s.sex}),children:s.name})]},t)}))})]})]})]})})};n.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.899404f3.chunk.js.map