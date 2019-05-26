(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,a){e.exports=a(343)},343:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),i=a(17),c=a.n(i),o=a(22),l=a(20),s=a(136),u=a(32),m=a(33),p=a(35),d=a(34),h=a(36),b=a(16),g=a(9),f=a(53),E=a.n(f),O=[],j=1;j<=5;j++)O.push({label:j,value:j});var y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={amount:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.item,n=t.classes;return r.a.createElement(g.j,{item:!0,md:3,sm:6},r.a.createElement(g.d,{className:n.cardItem},r.a.createElement(g.e,null,r.a.createElement(g.h,{component:"img",alt:"image",height:"140",image:"https://dummyimage.com/250x250/858585/fff",title:"sample image"})),r.a.createElement(g.g,null,r.a.createElement(g.p,{variant:"h5",component:"h2"},a.name),r.a.createElement(g.p,{component:"p"},"$",a.price)),r.a.createElement("div",{className:n.cardContent},r.a.createElement(g.f,{className:n.cardActions},r.a.createElement(g.n,{select:!0,id:"outlined-adornment-amount",className:n.textField,variant:"outlined",label:"Qty",value:this.state.amount,onChange:function(t){e.setState({amount:t.target.value})}},O.map(function(e){return r.a.createElement(g.m,{key:e.value,value:e.value},e.label)})),r.a.createElement(g.c,{size:"small",color:"primary",onClick:function(){e.props.onAddItemToCart(a,e.state.amount),e.setState({amount:0})}},r.a.createElement(E.a,null),"Add to Cart")))))}}]),t}(n.Component),v=Object(l.b)(null,function(e){return{onAddItemToCart:function(t,a){return e({type:"ADD_TO_CART",payload:{item:t,qty:a}})}}})(Object(b.withStyles)(function(e){return{cardContent:{display:"flex"},cardActions:{marginLeft:"10px"},textField:{width:"auto"}}})(y)),w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.classes,n=t.length?t.map(function(e){return r.a.createElement(v,{item:e,key:e.id})}):r.a.createElement("p",null,"No Items Found!");return r.a.createElement(g.j,{container:!0,spacing:40,className:a.wrapper},n)}}]),t}(n.Component),C=Object(l.b)(function(e){return{items:e.item.items}})(Object(b.withStyles)(function(e){return{wrapper:{marginLeft:"15%",marginRight:"15%",marginTop:"auto"}}})(w)),N=a(23),k=a(137),_=a.n(k),R=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return console.log(this.props.cartCount),r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"fixed",className:e.navbar},r.a.createElement(g.o,null,r.a.createElement(g.p,{className:e.title,variant:"h6",color:"inherit",noWrap:!0},"Shopping Cart"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(_.a,null)),r.a.createElement(g.l,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput}})),r.a.createElement(g.k,{className:e.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(g.b,{badgeContent:this.props.cartCount,color:"secondary"},r.a.createElement(E.a,null))))))}}]),t}(n.Component),T=Object(l.b)(function(e){return{cartCount:e.cart.totalQty}})(Object(b.withStyles)(function(e){return{root:Object(N.a)({width:"100%",margin:"5%"},e.breakpoints.down("sm"),{margin:"10%"}),grow:{flexGrow:1},title:Object(N.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(N.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(R)),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.i,null),r.a.createElement(T,null),r.a.createElement(g.j,{container:!0},r.a.createElement(C,null)))},I=a(84),S=a(54),x={cart:[],totalQty:0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.totalQty+t.payload.qty;return 0===t.payload.qty?Object(S.a)({},e,{cart:Object(I.a)(e.cart)}):Object(S.a)({},e,{cart:[].concat(Object(I.a)(e.cart),[Object(S.a)({},t.payload.item,{qty:t.payload.qty})]),totalQty:a});case"REMOVE_TO_CART":case"CLEAR_CART":default:return e}},L=a(24),q=a.n(L),B={items:[{id:q()(),name:"Cereal",price:.99},{id:q()(),name:"Milk",price:1.99},{id:q()(),name:"Eggs",price:2.99},{id:q()(),name:"Beef",price:5.99},{id:q()(),name:"Fish",price:3.99},{id:q()(),name:"Bread",price:2.99}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;arguments.length>1&&arguments[1];return e},M=Object(o.c)({cart:D,item:F}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,J=Object(o.e)(M,Q(Object(o.a)(function(e){return function(t){return function(a){console.log("[Middleware] Dispatching",a);var n=t(a);return console.log("[Middleware] Next state",e.getState()),n}}},s.a)));c.a.render(r.a.createElement(l.a,{store:J},r.a.createElement(A,null)),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.c7c3bfca.chunk.js.map