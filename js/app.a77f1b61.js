(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],p=0,b=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&b.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0626":function(e,t,n){"use strict";n("f247")},4990:function(e,t,n){"use strict";n("e122")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,u){var o=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(o)}n("64be");const c={};c.render=a;var u=c,o=n("6c02"),i={class:"welcome container"},s={key:0},l=Object(r["g"])("h2",null,"Login",-1),p=Object(r["f"])("No account yet? "),b=Object(r["f"])(" instead."),d={key:1},f=Object(r["g"])("h2",null,"Sign up",-1),v=Object(r["f"])("Already registered? "),O=Object(r["f"])(" instead.");function j(e,t,n,a,c,u){var o=Object(r["x"])("LoginForm"),j=Object(r["x"])("SignupForm");return Object(r["q"])(),Object(r["d"])("div",i,[a.showLogin?(Object(r["q"])(),Object(r["d"])("div",s,[l,Object(r["g"])(o,{onLogin:a.enterChat},null,8,["onLogin"]),Object(r["g"])("p",null,[p,Object(r["g"])("span",{onClick:t[1]||(t[1]=function(e){return a.showLogin=!1})},"Signup"),b])])):(Object(r["q"])(),Object(r["d"])("div",d,[f,Object(r["g"])(j,{onSignup:a.enterChat},null,8,["onSignup"]),Object(r["g"])("p",null,[v,Object(r["g"])("span",{onClick:t[2]||(t[2]=function(e){return a.showLogin=!0})},"Login"),O])]))])}var m={class:"error"},g=Object(r["g"])("button",null,"Sign up",-1);function h(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=Object(r["H"])((function(){return a.handleSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["F"])(Object(r["g"])("input",{type:"text",required:"",placeholder:"display name","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.displayName=e})},null,512),[[r["B"],a.displayName]]),Object(r["F"])(Object(r["g"])("input",{type:"email",required:"",placeholder:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.email=e})},null,512),[[r["B"],a.email]]),Object(r["F"])(Object(r["g"])("input",{type:"password",required:"",placeholder:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.password=e})},null,512),[[r["B"],a.password]]),Object(r["g"])("div",m,Object(r["z"])(a.error),1),g],32)}n("96cf");var w=n("1da1"),y=n("260b"),x=(n("e71f"),n("ea7b"),{apiKey:"AIzaSyDu28oFhXx-SQYy-plpOCxIAP7WqXsEBSU",authDomain:"livechat-8fd68.firebaseapp.com",projectId:"livechat-8fd68",storageBucket:"livechat-8fd68.appspot.com",messagingSenderId:"499415994120",appId:"1:499415994120:web:4b23ad660254fb266ae6bd"});y["a"].initializeApp(x);var k=y["a"].auth(),S=y["a"].firestore(),q=y["a"].firestore.FieldValue.serverTimestamp,C=Object(r["v"])(null),R=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return C.value=null,e.prev=1,e.next=4,k.createUserWithEmailAndPassword(t,n);case 4:if(a=e.sent,a){e.next=7;break}throw new Error("Could not complete signup");case 7:return e.next=9,a.user.updateProfile({displayName:r});case 9:return C.value=null,e.abrupt("return",a);case 13:e.prev=13,e.t0=e["catch"](1),console.log(e.t0.message),C.value=e.t0.message;case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n,r){return e.apply(this,arguments)}}(),A=function(){return{error:C,signup:R}},F=A,L={setup:function(e,t){var n=Object(r["v"])(""),a=Object(r["v"])(""),c=Object(r["v"])(""),u=F(),o=u.error,i=u.signup,s=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i(a.value,c.value,n.value);case 2:o.value||t.emit("signup");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{displayName:n,email:a,password:c,handleSubmit:s,error:o}}};n("684b");L.render=h;var U=L,z={class:"error"},I=Object(r["g"])("button",null,"Log in",-1);function N(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=Object(r["H"])((function(){return a.handleSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["F"])(Object(r["g"])("input",{type:"email",required:"",placeholder:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e})},null,512),[[r["B"],a.email]]),Object(r["F"])(Object(r["g"])("input",{type:"password",required:"",placeholder:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[r["B"],a.password]]),Object(r["g"])("div",z,Object(r["z"])(a.error),1),I],32)}var P=Object(r["v"])(null),_=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return P.value=null,e.prev=1,e.next=4,k.signInWithEmailAndPassword(t,n);case 4:return r=e.sent,P.value=null,e.abrupt("return",r);case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0.message),P.value="Incorrect login credentials";case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){return{error:P,login:_}},D=B,E={setup:function(e,t){var n=Object(r["v"])(""),a=Object(r["v"])(""),c=D(),u=c.error,o=c.login,i=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(n.value,a.value);case 2:u.value||t.emit("login");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{email:n,password:a,handleSubmit:i,error:u}}};n("4990");E.render=N;var W=E,V={components:{SignupForm:U,LoginForm:W},setup:function(){var e=Object(r["v"])(!0),t=Object(o["c"])(),n=function(){t.push({name:"Chatroom"})};return{showLogin:e,enterChat:n}}};n("d09b");V.render=j;var H=V,T={class:"container"};function M(e,t,n,a,c,u){var o=Object(r["x"])("Navbar"),i=Object(r["x"])("ChatWindow"),s=Object(r["x"])("NewChatForm");return Object(r["q"])(),Object(r["d"])("div",T,[Object(r["g"])(o),Object(r["g"])(i),Object(r["g"])(s)])}var J=Object(r["I"])("data-v-62e59748");Object(r["t"])("data-v-62e59748");var K={key:0,class:"error"};Object(r["r"])();var X=J((function(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("form",null,[Object(r["F"])(Object(r["g"])("textarea",{placeholder:"Type a message and hit enter to send...","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.message=e}),onKeypress:t[2]||(t[2]=Object(r["G"])(Object(r["H"])((function(){return a.handleSubmit.apply(a,arguments)}),["prevent"]),["enter"]))},null,544),[[r["B"],a.message]]),a.error?(Object(r["q"])(),Object(r["d"])("div",K,Object(r["z"])(a.error)+" blah",1)):Object(r["e"])("",!0)])})),G=function(e){var t=Object(r["v"])(null),n=function(){var n=Object(w["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.value=null,n.prev=1,n.next=4,S.collection(e).add(r);case 4:n.next=10;break;case 6:n.prev=6,n.t0=n["catch"](1),console.log(n.t0.message),t.value="could not send the message";case 10:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}();return{error:t,addDoc:n}},Q=G,Y=Object(r["v"])(k.currentUser);k.onAuthStateChanged((function(e){console.log("User state change. Current user is:",e),Y.value=e}));var Z=function(){return{user:Y}},$=Z,ee={setup:function(){var e=$(),t=e.user,n=Q("messages"),a=n.addDoc,c=n.error,u=Object(r["v"])(""),o=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t.value.displayName,message:u.value,createdAt:q()},e.next=3,a(n);case 3:c.value||(u.value="");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{message:u,handleSubmit:o,error:c}}};n("0626");ee.render=X,ee.__scopeId="data-v-62e59748";var te=ee,ne=(n("b0c0"),Object(r["I"])("data-v-53e230cd"));Object(r["t"])("data-v-53e230cd");var re={class:"chat-window"},ae={key:0},ce={key:1,ref:"messages",class:"messages"},ue={class:"created-at"},oe={class:"name"},ie={class:"message"};Object(r["r"])();var se=ne((function(e,t,n,a,c,u){return Object(r["q"])(),Object(r["d"])("div",re,[a.error?(Object(r["q"])(),Object(r["d"])("div",ae,Object(r["z"])(a.error),1)):Object(r["e"])("",!0),a.formattedDocuments?(Object(r["q"])(),Object(r["d"])("div",ce,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.formattedDocuments,(function(e){return Object(r["q"])(),Object(r["d"])("div",{key:e.id,class:"single"},[Object(r["g"])("span",ue,Object(r["z"])(e.createdAt),1),Object(r["g"])("span",oe,Object(r["z"])(e.name),1),Object(r["g"])("span",ie,Object(r["z"])(e.message),1)])})),128))],512)):Object(r["e"])("",!0)])})),le=(n("d81d"),n("5530")),pe=(n("4160"),n("159b"),function(e){var t=Object(r["v"])(null),n=Object(r["v"])(null),a=S.collection(e).orderBy("createdAt"),c=a.onSnapshot((function(e){console.log(e);var r=[];e.docs.forEach((function(e){e.data().createdAt&&r.push(Object(le["a"])(Object(le["a"])({},e.data()),{},{id:e.id}))})),t.value=r,n.value=null}),(function(e){console.log(e.message),t.value=null,n.value="could not fetch the data"}));return Object(r["E"])((function(e){e((function(){return c()}))})),{error:n,documents:t}}),be=pe,de=n("ef1b"),fe={setup:function(){var e=be("messages"),t=e.error,n=e.documents,a=Object(r["b"])((function(){if(n.value)return n.value.map((function(e){var t=Object(de["a"])(e.createdAt.toDate());return Object(le["a"])(Object(le["a"])({},e),{},{createdAt:t})}))})),c=Object(r["v"])(null);return Object(r["p"])((function(){c.value.scrollTop=c.value.scrollHeight})),{error:t,documents:n,formattedDocuments:a,messages:c}}};n("deaa");fe.render=se,fe.__scopeId="data-v-53e230cd";var ve=fe,Oe={key:0},je={class:"email"};function me(e,t,n,a,c,u){return a.user?(Object(r["q"])(),Object(r["d"])("nav",Oe,[Object(r["g"])("div",null,[Object(r["g"])("p",null,"Hey there "+Object(r["z"])(a.user.displayName),1),Object(r["g"])("p",je,"Currently logged in as "+Object(r["z"])(a.user.email),1)]),Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return a.handleClick.apply(a,arguments)})},"Logout")])):Object(r["e"])("",!0)}var ge=Object(r["v"])(null),he=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return ge.value=null,e.prev=1,e.next=4,k.signOut();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0.message),ge.value=e.t0.message;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),we=function(){return{error:ge,logout:he}},ye=we,xe={setup:function(){var e=ye(),t=e.logout,n=(e.error,$()),r=n.user,a=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleClick:a,user:r}}};n("6005");xe.render=me;var ke=xe,Se={components:{Navbar:ke,NewChatForm:te,ChatWindow:ve},setup:function(){var e=Object(o["c"])(),t=$(),n=t.user;Object(r["D"])(n,(function(){n.value||e.push({name:"Welcome"})}))}};n("756a");Se.render=M;var qe,Ce=Se,Re=function(e,t,n){var r=k.currentUser;console.log("current user in auth guard: ",r),r?n():n({name:"Welcome"})},Ae=function(e,t,n){var r=k.currentUser;r?n({name:"Chatroom"}):n()},Fe=[{path:"/",name:"Welcome",component:H,beforeEnter:Ae},{path:"/chatroom",name:"Chatroom",component:Ce,beforeEnter:Re}],Le=Object(o["a"])({history:Object(o["b"])("/"),routes:Fe}),Ue=Le;n("845f");k.onAuthStateChanged((function(){qe||(qe=Object(r["c"])(u).use(Ue).mount("#app"))}))},6005:function(e,t,n){"use strict";n("8727")},"64be":function(e,t,n){"use strict";n("c894")},"684b":function(e,t,n){"use strict";n("ae82")},"756a":function(e,t,n){"use strict";n("826d")},"826d":function(e,t,n){},"845f":function(e,t,n){},8727:function(e,t,n){},ae82:function(e,t,n){},bea2:function(e,t,n){},c894:function(e,t,n){},d09b:function(e,t,n){"use strict";n("bea2")},db93:function(e,t,n){},deaa:function(e,t,n){"use strict";n("db93")},e122:function(e,t,n){},f247:function(e,t,n){}});
//# sourceMappingURL=app.a77f1b61.js.map