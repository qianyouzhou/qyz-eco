(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},119:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),s=(a(74),a(10)),i=a(9),o=a(8),u=(a(79),a(22)),m=(a(80),Object(s.g)((function(e){var t=e.title,a=e.imageUrl,n=e.linkUrl,c=e.history,l=e.match;return r.a.createElement("div",{className:"menu-item",onClick:function(){return c.push("".concat(l.url).concat(n))}},r.a.createElement("div",{className:"menu-background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"menu-content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"subtitle"},"SHOP NOW")))}))),p=Object(o.a)([function(e){return e.directory}],(function(e){return e.sections})),d=(a(82),Object(i.b)((function(e){return{sections:p(e)}}))((function(e){var t=e.sections;return r.a.createElement("div",{className:"menu"},t.map((function(e){var t=e.id,a=Object(u.a)(e,["id"]);return r.a.createElement(m,Object.assign({key:t},a))})))}))),f=a(29),b=a(30);function E(){var e=Object(f.a)(["\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n"]);return E=function(){return e},e}var O=b.a.div(E()),g=function(e){return r.a.createElement(O,null,r.a.createElement(d,null))},h=a(13),v=function(e){return r.a.createElement("div",null,r.a.createElement(h.b,{to:"".concat(e.match.url,"/0")}," Hats 0 "),r.a.createElement(h.b,{to:"".concat(e.match.url,"/1")}," Hats 1 "),r.a.createElement(h.b,{to:"".concat(e.match.url,"/2")}," Hats 2 "),r.a.createElement("h1",null,"Hats Page"))},S=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement(h.b,{to:"/hats"}," To Hats "),r.a.createElement("button",{onClick:function(){return e.history.push("/hats")}}," To Hats2 "),r.a.createElement("h1",null,"Hats Detial:",e.match.params.hatid))},N=a(60),I=a(61),j=a(68),y=a(66),_=a(12),C=function(e){return e.shop},w=Object(o.a)([C],(function(e){return e.isFetching})),T=Object(o.a)([C],(function(e){return e.collections})),k=Object(o.a)([C],(function(e){return!!e.collections})),x=(Object(o.a)([C],(function(e){return e.errorMessage})),Object(o.a)([T],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})));function U(){var e=Object(f.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return U=function(){return e},e}function A(){var e=Object(f.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return e},e}var L=b.a.div(A()),G=b.a.div(U()),R=function(e){return function(t){var a=t.isLoading,n=Object(u.a)(t,["isLoading"]);return a?r.a.createElement(L,null,r.a.createElement(G,null)):r.a.createElement(e,n)}},P=(a(83),a(84),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(u.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("button",Object.assign({className:"\n        ".concat(a?"google-sign-in":""," custom-button")},n),t)}),H={TOOGLE_CART_HIDDEN:"TOOGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM:"CLEAR_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"},F=function(){return{type:H.TOOGLE_CART_HIDDEN}},M=function(e){return{type:H.ADD_ITEM,payload:e}},D=Object(i.b)(null,(function(e){return{addItem:function(t){return e(M(t))}}}))((function(e){var t=e.item,a=e.addItem,n=(t.id,t.name),c=t.imageUrl,l=t.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement(P,{className:"content",onClick:function(){return a(t)}},"ADD TO CART"),r.a.createElement("div",{className:"detail"},r.a.createElement("div",null,n),r.a.createElement("div",null,"$".concat(l))))})),q=(a(85),Object(i.b)((function(e,t){return{collection:(a=t.match.params.categoryId,Object(o.a)([T],(function(e){return e?e[a]:null})))(e)};var a}))((function(e){var t=e.collection,a=t.items,n=t.title;return r.a.createElement("div",{className:"category-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(D,{key:e.id,item:e})}))))}))),z=Object(o.b)({isLoading:function(e){return!k(e)}}),W=Object(_.d)(Object(i.b)(z),R)(q),V=(a(86),function(e){var t=e.title,a=(e.id,e.items);return r.a.createElement("div",{className:"collection-page"},r.a.createElement("div",null,t.toUpperCase()),r.a.createElement("div",{className:"collection"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(D,{key:e.id,item:e})}))))}),B=(a(87),Object(o.b)({collections:x})),K=Object(i.b)(B)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},console.log(t),t.map((function(e){var t=e.id,a=Object(u.a)(e,["id"]);return r.a.createElement(V,Object.assign({key:t},a))})))})),J=Object(o.b)({isLoading:w}),Z=Object(_.d)(Object(i.b)(J),R)(K),$={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAIL:"FETCH_COLLECTIONS_FAIL"},Q=a(2),Y=a.n(Q),X=a(4),ee=a(16),te=a(28),ae=a.n(te);a(89),a(92);ae.a.initializeApp({apiKey:"AIzaSyCssFkasakm5PbhFWahb5YHooeBpN-hJEM",authDomain:"ecommerce-db-b9987.firebaseapp.com",databaseURL:"https://ecommerce-db-b9987.firebaseio.com",projectId:"ecommerce-db-b9987",storageBucket:"ecommerce-db-b9987.appspot.com",messagingSenderId:"19868329927",appId:"1:19868329927:web:aa64baa6b78cc20535dbe2",measurementId:"G-BS8K65VEBP"});var ne=ae.a.auth(),re=ae.a.firestore(),ce=function(){var e=Object(ee.a)(Y.a.mark((function e(t,a){var n,r,c,l,s;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=re.doc("/user/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=19;break}return r=t.email,c=new Date,l=a.password,s=a.displayName,e.prev=11,e.next=14,n.set(Object(X.a)({displayName:s,email:r,createAt:c,password:l},a));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),console.log("error while creating user",e.t0.message);case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t,a){return e.apply(this,arguments)}}(),le=function(e){return e.docs.map((function(e){var t=e.data(),a=t.title,n=t.items;return{routeName:encodeURI(a.toLowerCase()),id:e.id,title:a,items:n}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},se=new ae.a.auth.GoogleAuthProvider;se.setCustomParameters({prompt:"select_account"});ae.a;var ie=function(){return{type:$.FETCH_COLLECTIONS_START}},oe=function(e){return{type:$.FETCH_COLLECTIONS_SUCCESS,payload:e}},ue=function(e){return{type:$.FETCH_COLLECTIONS_FAIL,payload:e}},me=function(e){Object(j.a)(a,e);var t=Object(y.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{exact:!0,path:"".concat(e.path),component:Z}),r.a.createElement(s.b,{exact:!0,path:"".concat(e.path,"/:categoryId"),component:W}))}}]),a}(r.a.Component),pe=Object(i.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(ie())}}}))(me);function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var be=r.a.createElement("title",null,"Group"),Ee=r.a.createElement("desc",null,"Created with Sketch."),Oe=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),ge=function(e){var t=e.svgRef,a=e.title,n=fe(e,["svgRef","title"]);return r.a.createElement("svg",de({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?be:a?r.a.createElement("title",null,a):null,Ee,Oe)},he=r.a.forwardRef((function(e,t){return r.a.createElement(ge,de({svgRef:t},e))}));a.p;function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ne=r.a.createElement("g",null),Ie=r.a.createElement("g",null),je=r.a.createElement("g",null),ye=r.a.createElement("g",null),_e=r.a.createElement("g",null),Ce=r.a.createElement("g",null),we=r.a.createElement("g",null),Te=r.a.createElement("g",null),ke=r.a.createElement("g",null),xe=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Le=r.a.createElement("g",null),Ge=r.a.createElement("g",null),Re=r.a.createElement("g",null),Pe=function(e){var t=e.svgRef,a=e.title,n=Se(e,["svgRef","title"]);return r.a.createElement("svg",ve({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ne,Ie,je,ye,_e,Ce,we,Te,ke,xe,Ue,Ae,Le,Ge,Re)},He=r.a.forwardRef((function(e,t){return r.a.createElement(Pe,ve({svgRef:t},e))})),Fe=(a.p,a(94),function(e){return e.cart}),Me=Object(o.a)([Fe],(function(e){return e.cartItems})),De=Object(o.a)([Fe],(function(e){return e.hidden})),qe=Object(o.a)([Me],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ze=Object(o.a)([Me],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),We=Object(i.b)((function(e){return{itemCount:qe(e)}}),(function(e){return{toggleCartHidden:function(){return e(F())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(He,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),Ve=(a(95),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item-image"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"item-name"},c),r.a.createElement("span",{className:"item-price"},l,"x",n)))}),Be=(a(96),Object(o.b)({cartItems:Me})),Ke=Object(s.g)(Object(i.b)(Be)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ve,{key:e.id,item:e})})):r.a.createElement("span",null,"Your cart is empty")),r.a.createElement(P,{onClick:function(){a.push("/checkout"),n(F())}},"GO TO CHECKOUT"))}))),Je=function(e){return e.user},Ze=Object(o.a)([Je],(function(e){return e.error})),$e=Object(o.a)([Je],(function(e){return e.currentUser})),Qe={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAIL:"SIGN_IN_FAIL",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAIL:"SIGN_OUT_FAIL",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAIL:"SIGN_UP_FAIL",CHECK_USER_SESSION:"CHECK_USER_SESSION"},Ye=function(e){return{type:Qe.SIGN_IN_FAIL,payload:e}},Xe=function(e){var t=e.user,a=e.additionalData;return{type:Qe.SIGN_UP_SUCCESS,payload:{user:t,additionalData:a}}},et=(a(97),Object(o.b)({currentUser:$e,hidden:De})),tt=Object(i.b)(et,(function(e){return{signOutStart:function(){return e({type:Qe.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,a=e.hidden,n=e.signOutStart;return r.a.createElement("div",{className:"header"},r.a.createElement(h.b,{to:"/",className:"logo"},r.a.createElement(he,null)),r.a.createElement("div",{className:"options"},r.a.createElement(h.b,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(h.b,{to:"/",className:"option"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:n},"SIGN OUT"):r.a.createElement(h.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(We,{className:"option"})),a?null:r.a.createElement(Ke,null))})),at=(a(98),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"solid"}),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"right"},"Copyright \xa9 2020 Qianyou Zhou. All rights reserved.")))}),nt=(a(99),a(15)),rt=a(20),ct=a(36),lt=(a(100),r.a.forwardRef((function(e,t){var a=e.handleChange,n=e.label,c=Object(u.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",ref:t,onChange:a},c)),n?r.a.createElement("label",{className:"".concat(c.value.length?"shrink":"","form-input-label")},n):null)}))),st=(a(101),Object(o.b)({signInError:Ze})),it=Object(i.b)(st,(function(e){return{signInWithGoogle:function(){return e({type:Qe.GOOGLE_SIGN_IN_START})},signInWithEmail:function(t,a){return e({type:Qe.EMAIL_SIGN_IN_START,payload:{email:t,password:a}})}}}))((function(e){var t=e.signInWithEmail,a=e.signInWithGoogle,c=e.signInError,l=Object(n.useState)({email:"",password:""}),s=Object(rt.a)(l,2),i=s[0],o=s[1],u=i.email,m=i.password,p=Object(ct.a)({mode:"onBlur",reValidateMode:"onSubmit"}),d=p.register,f=p.errors,b=p.handleSubmit,E=function(){var e=Object(ee.a)(Y.a.mark((function e(a,n){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),n.target.reset(),console.log("data"+a),t(u,m),o(Object(X.a)(Object(X.a)({},i),{},{email:"",password:""}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(e){var t=e.target,a=t.value,n=t.name;console.log(i),o(Object(X.a)(Object(X.a)({},i),{},Object(nt.a)({},n,a))),console.log(i)};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null," I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:b(E)},r.a.createElement(lt,{type:"email",name:"email",value:u,handleChange:O,label:"email",ref:d({required:{value:!0,message:"Email must not be empty"},minLength:{value:3,message:"Email address must longer than 3"},pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Email must be a valid email address"}})}),f.email&&r.a.createElement("p",{className:"sign-in-error"},f.email.message),r.a.createElement(lt,{type:"password",name:"password",value:m,handleChange:O,label:"password",ref:d({required:{value:!0,message:"Password must not be empty"},pattern:{value:/^\d{6,}$/,message:"Password must contain at least 1 Upper case and 1 special character"}})}),f.password&&r.a.createElement("p",{className:"sign-in-error"},f.password.message),r.a.createElement("p",{className:"sign-in-error"},c?"the password and user doesn't match,please try again":null),r.a.createElement("div",{className:"buttons"},r.a.createElement(P,{type:"submit"}," Sign in "),r.a.createElement(P,{type:"button",onClick:a,isGoogleSignIn:!0},"Sign In With Google"))))})),ot=Object(i.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:Qe.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,a=Object(n.useState)({email:"",displayName:"",password:"",confirmPassword:""}),c=Object(rt.a)(a,2),l=c[0],s=c[1],i=l.displayName,o=l.email,u=l.password,m=l.confirmPassword,p=Object(ct.a)({mode:"onBlur",reValidateMode:"onSubmit"}),d=p.register,f=p.errors,b=p.handleSubmit,E=function(){var e=Object(ee.a)(Y.a.mark((function e(a,n){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),console.log("data"+a),t({email:o,password:u,displayName:i});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(e){var t=e.target,a=t.name,n=t.value;s(Object(X.a)(Object(X.a)({},l),{},Object(nt.a)({},a,n)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:b(E)},r.a.createElement(lt,{type:"text",name:"displayName",value:i,handleChange:O,label:"Name",required:!0}),r.a.createElement(lt,{type:"email",name:"email",value:o,handleChange:O,label:"Email",ref:d({required:{value:!0,message:"Email must not be empty"},minLength:{value:3,message:"Email address must longer than 3"},pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Email must be a valid email address"}})}),f.email&&r.a.createElement("p",{className:"sign-in-error"},f.email.message),r.a.createElement(lt,{type:"password",name:"password",value:u,handleChange:O,label:"Password",ref:d({required:{value:!0,message:"Password must not be empty"},pattern:{value:/^\d{6,}$/,message:"Password must contain at least 1 Upper case and 1 special character"}})}),f.password&&r.a.createElement("p",{className:"sign-in-error"},f.password.message),r.a.createElement(lt,{type:"password",name:"confirmPassword",value:m,handleChange:O,label:"Confirm Password",required:!0}),r.a.createElement(P,{type:"submit"},"SIGN UP")))})),ut=function(){return r.a.createElement("div",{className:"signin-page"},r.a.createElement(it,null),r.a.createElement(ot,null))},mt=(a(102),Object(i.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:H.CLEAR_ITEM,payload:e}}(t))},addItem:function(t){return e(M(t))},removeItem:function(t){return e(function(e){return{type:H.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,l=t.imageUrl,s=t.price,i=t.name,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("img",{src:l,alt:"item-image",className:"image"}),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("span",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),o,r.a.createElement("span",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("span",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),pt=a(62),dt=a.n(pt),ft=a(63),bt=a.n(ft),Et=function(e){var t=e.price,a=100*t;return r.a.createElement(dt.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful"),bt()({url:"payment",method:"post",data:{amount:a,token:e}}).then((function(e){alert("Payment Successful")})).catch((function(e){console.log("Payment error: ",JSON.parse(e)),alert("There was an issue with your payment. Please make sure you use the provided credit card.")}))},stripeKey:"pk_test_51HBsf0JIs70I1fLvJZVlSePiIPrjqGcKkxWOJa9YslkHUxjlfkmHCwvQIigm80Axojj2kwkqnNXTKz8zslqK1gkN00RT2VmMKz",alipay:!0,bitcoin:!0})},Ot=(a(119),Object(o.b)({totalPrice:ze,cartItems:Me})),gt=Object(i.b)(Ot)((function(e){var t=e.cartItems,a=e.totalPrice;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),r.a.createElement("div",{className:"checkout-items"},t.map((function(e){return r.a.createElement(mt,{key:e.id,cartItem:e})}))),r.a.createElement("div",{className:"checkout-totalamount"},"Total:",a),r.a.createElement(Et,{price:a}))})),ht=Object(o.b)({currentUser:$e}),vt=Object(i.b)(ht,(function(e){return{checkUserSession:function(){return e({type:Qe.CHECK_USER_SESSION})}}}))((function(e){e.checkUserSession;var t=e.currentUser;return r.a.createElement("div",null,r.a.createElement(tt,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:g}),r.a.createElement(s.b,{exact:!0,path:"/hats",component:v}),r.a.createElement(s.b,{path:"/hats/:hatid",component:S}),r.a.createElement(s.b,{path:"/shop",component:pe}),r.a.createElement(s.b,{exact:!0,path:"/signin",render:function(){return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement(ut,null)}}),r.a.createElement(s.b,{exact:!0,path:"/checkout",component:gt})),r.a.createElement(at,null))})),St=a(64),Nt=a(35),It=(a(120),a(67)),jt=a(5),yt=Y.a.mark(Ct),_t=Y.a.mark(wt);function Ct(){var e,t,a;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=re.collection("collections"),n.next=4,e.get();case 4:return t=n.sent,n.next=7,Object(jt.b)(le,t);case 7:return a=n.sent,console.log(a),n.next=11,Object(jt.c)(oe(a));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(jt.c)(ue(n.t0.message));case 17:case"end":return n.stop()}}),yt,null,[[0,13]])}function wt(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)($.FETCH_COLLECTIONS_START,Ct);case 2:case"end":return e.stop()}}),_t)}var Tt=Y.a.mark(zt),kt=Y.a.mark(Wt),xt=Y.a.mark(Vt),Ut=Y.a.mark(Bt),At=Y.a.mark(Kt),Lt=Y.a.mark(Jt),Gt=Y.a.mark(Zt),Rt=Y.a.mark($t),Pt=Y.a.mark(Qt),Ht=Y.a.mark(Yt),Ft=Y.a.mark(Xt),Mt=Y.a.mark(ea),Dt=Y.a.mark(ta),qt=Y.a.mark(aa);function zt(e,t){var a,n;return Y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(jt.b)(ce,e,t);case 3:return a=r.sent,r.next=6,a.get();case 6:return n=r.sent,r.next=9,Object(jt.c)((c=Object(X.a)({id:n.id},n.data()),{type:Qe.SIGN_IN_SUCCESS,payload:c}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(jt.c)(Ye(r.t0.message));case 15:case"end":return r.stop()}var c}),Tt,null,[[0,11]])}function Wt(){var e,t;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ne.signInWithPopup(se);case 3:return e=a.sent,t=e.user,a.next=7,zt(t);case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(jt.c)(Ye(a.t0.message));case 13:case"end":return a.stop()}}),kt,null,[[0,9]])}function Vt(e){var t,a,n,r,c;return Y.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,a=t.email,n=t.password,l.prev=1,l.next=4,ne.signInWithEmailAndPassword(a,n);case 4:return r=l.sent,c=r.user,l.next=8,zt(c);case 8:l.next=14;break;case 10:return l.prev=10,l.t0=l.catch(1),l.next=14,Object(jt.c)(Ye(l.t0.message));case 14:case"end":return l.stop()}}),xt,null,[[1,10]])}function Bt(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.signOut();case 3:return e.next=5,Object(jt.c)({type:Qe.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(jt.c)((t=e.t0,{type:Qe.SIGN_OUT_FAIL,payload:t}));case 11:case"end":return e.stop()}var t}),Ut,null,[[0,7]])}function Kt(e){var t,a,n,r,c,l,s;return Y.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,a=t.email,n=t.password,r=t.displayName,i.prev=1,i.next=4,ne.createUserWithEmailAndPassword(a,n);case 4:return c=i.sent,l=c.user,s={password:n,displayName:r},i.next=9,Object(jt.c)(Xe({user:l,additionalData:s}));case 9:i.next=15;break;case 11:return i.prev=11,i.t0=i.catch(1),i.next=15,Object(jt.c)((o=i.t0,{type:Qe.SIGN_UP_FAIL,payload:o}));case 15:case"end":return i.stop()}var o}),At,null,[[1,11]])}function Jt(e){var t,a,n;return Y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t.user,n=t.additionalData,console.log(a,n),r.next=4,zt(a,n);case 4:case"end":return r.stop()}}),Lt)}function Zt(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var a=ne.onAuthStateChanged((function(t){a(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,zt(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(jt.c)(Ye(t.t0));case 14:case"end":return t.stop()}}),Gt,null,[[0,10]])}function $t(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)(Qe.GOOGLE_SIGN_IN_START,Wt);case 2:case"end":return e.stop()}}),Rt)}function Qt(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)(Qe.EMAIL_SIGN_IN_START,Vt);case 2:case"end":return e.stop()}}),Pt)}function Yt(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)(Qe.SIGN_OUT_START,Bt);case 2:case"end":return e.stop()}}),Ht)}function Xt(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)(Qe.SIGN_UP_START,Kt);case 2:case"end":return e.stop()}}),Ft)}function ea(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)(Qe.SIGN_UP_SUCCESS,Jt);case 2:case"end":return e.stop()}}),Mt)}function ta(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)(Qe.CHECK_USER_SESSION,Zt);case 2:case"end":return e.stop()}}),Dt)}function aa(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.a)([Object(jt.b)($t),Object(jt.b)(Qt),Object(jt.b)(Yt),Object(jt.b)(Xt),Object(jt.b)(ea),Object(jt.b)(ta)]);case 2:case"end":return e.stop()}}),qt)}var na=Y.a.mark(la),ra=Y.a.mark(sa),ca=Y.a.mark(ia);function la(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.c)({type:H.CLEAR_CART});case 2:case"end":return e.stop()}}),na)}function sa(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.d)(Qe.SIGN_OUT_SUCCESS,la);case 2:case"end":return e.stop()}}),ra)}function ia(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.a)([Object(jt.b)(sa)]);case 2:case"end":return e.stop()}}),ca)}var oa=Y.a.mark(ua);function ua(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(jt.a)([Object(jt.b)(wt),Object(jt.b)(aa),Object(jt.b)(ia)]);case 2:case"end":return e.stop()}}),oa)}var ma=a(65),pa=a.n(ma),da={currentUser:null,error:void 0},fa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:da,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe.SIGN_IN_SUCCESS:return Object(X.a)(Object(X.a)({},e),{},{currentUser:t.payload,error:null});case Qe.SIGN_OUT_SUCCESS:return Object(X.a)(Object(X.a)({},e),{},{currentUser:null,error:null});case Qe.SIGN_IN_FAIL:case Qe.SIGN_OUT_FAIL:case Qe.SIGN_UP_FAIL:return Object(X.a)(Object(X.a)({},e),{},{currentUser:null,error:t.payload});default:return e}},ba=a(11),Ea=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(X.a)(Object(X.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ba.a)(e),[Object(X.a)(Object(X.a)({},t),{},{quantity:1})])},Oa=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(X.a)(Object(X.a)({},e),{},{quantity:e.quantity-1}):e}))},ga={cartItems:[],hidden:!0},ha=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ga,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.TOOGLE_CART_HIDDEN:return Object(X.a)(Object(X.a)({},e),{},{hidden:!e.hidden});case H.ADD_ITEM:return Object(X.a)(Object(X.a)({},e),{},{cartItems:Ea(e.cartItems,t.payload)});case H.CLEAR_ITEM:return Object(X.a)(Object(X.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case H.REMOVE_ITEM:return Object(X.a)(Object(X.a)({},e),{},{cartItems:Oa(e.cartItems,t.payload)});case H.CLEAR_CART:return Object(X.a)(Object(X.a)({},e),{},{cartItems:[]});default:return e}},va={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:va,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Na={collections:null,isFetching:!1,errorMessage:null},Ia=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Na,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.FETCH_COLLECTIONS_START:return Object(X.a)(Object(X.a)({},e),{},{isFetching:!0,collections:null,errorMessage:null});case $.FETCH_COLLECTIONS_SUCCESS:return Object(X.a)(Object(X.a)({},e),{},{isFetching:!1,collections:t.payload,errorMessage:null});case $.FETCH_COLLECTIONS_FAIL:return Object(X.a)(Object(X.a)({},e),{},{isFetching:!1,collections:null,errorMessage:t.payload});default:return e}},ja={key:"root",storage:pa.a,whitelist:["cart"]},ya=Object(_.c)({user:fa,cart:ha,directory:Sa,shop:Ia}),_a=Object(Nt.a)(ja,ya),Ca=Object(It.a)(),wa=[Ca];var Ta=Object(_.e)(_a,_.a.apply(void 0,wa));Ca.run(ua);var ka=Object(Nt.b)(Ta);l.a.render(r.a.createElement(i.a,{store:Ta},r.a.createElement(h.a,null,r.a.createElement(St.a,{persistor:ka},r.a.createElement(vt,null)))),document.getElementById("root"))},69:function(e,t,a){e.exports=a(123)},74:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.20f5f206.chunk.js.map