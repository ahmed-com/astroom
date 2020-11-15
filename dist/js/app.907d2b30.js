(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],f=0,l=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/astroom/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},a=[],i=r["a"].extend({name:"App",components:{},data:function(){return{}}}),c=i,s=n("2877"),u=Object(s["a"])(c,o,a,!1,null,null,null),m=u.exports,f=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"grey lighten-5 mb-6"},[n("v-row",{staticStyle:{height:"150px"},attrs:{align:"center"}},[n("v-col",{attrs:{"align-self":"center"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("button",{on:{click:function(t){return e.createRoom()}}},[e._v("create room")])])],1)],1)],1)},p=[],h=(n("b0c0"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),d=n("d4ec"),v=n("bee2"),y=n("262e"),k=n("2caf"),b=n("9ab4"),w=n("60a3"),g=function(e){Object(y["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.name="User",e}return Object(v["a"])(n,[{key:"createRoom",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("createRoom",this.name);case 2:this.$router.replace("/conference");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(r["a"]);g=Object(b["a"])([w["a"]],g);var j=g,O=j,_=n("6544"),S=n.n(_),R=n("b0af"),x=n("62ad"),$=n("a523"),I=n("0fd9"),V=Object(s["a"])(O,l,p,!1,null,null,null),E=V.exports;S()(V,{VCard:R["a"],VCol:x["a"],VContainer:$["a"],VRow:I["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("video",{ref:"me",attrs:{autoplay:"",muted:"",width:"100%",id:"me"},domProps:{muted:!0}})]),n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Astroom")]),n("v-spacer"),n("h2",[e._v("join link:")]),n("h6",[e._v(e._s(e.joinLink))])],1),n("v-main",[e.inRoom?n("Users"):e._e()],1)],1)},C=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",e._l(e.usersList,(function(e){return n("v-col",{key:e.socketId,attrs:{cols:"6"}},[n("User",{attrs:{user:e}})],1)})),1)],1)},N=[],P=n("2fe1"),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{height:"300"}},[n("video",{ref:"user",attrs:{id:e.id,autoplay:"",muted:"",width:"100%"},domProps:{muted:!0}}),n("h2",[e._v(e._s(e.name))])])},U=[],M=(n("4160"),n("d3b7"),n("159b"),n("3835")),D=function(){function e(t,n){var r,o=this;Object(d["a"])(this,e),this._name=t,this._socketId=n,this._pc=new RTCPeerConnection,this._mySocket=ge.$store.getters.socket,this._videoStreamEventListeners=[],this._pc.ontrack=function(e){var t=e.streams,n=Object(M["a"])(t,1),r=n[0];o.videoStream=r},this.startStreaming(),null===(r=this._mySocket)||void 0===r||r.on("offerCreated",(function(e){e.socketId===o._socketId&&o.handleOffer(e.offer)}))}return Object(v["a"])(e,[{key:"startStreaming",value:function(){var t=this;e.myStream.getTracks().forEach((function(n){t._pc.addTrack(n,e.myStream)}))}},{key:"onVideoStream",value:function(e){this._videoStreamEventListeners.push(e)}},{key:"getVideoStream",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){t.onVideoStream(e)})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"handleOffer",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this._pc.setRemoteDescription(t);case 2:return e.t0=RTCSessionDescription,e.next=5,this._pc.createAnswer();case 5:e.t1=e.sent,r=new e.t0(e.t1),null===(n=this._mySocket)||void 0===n||n.emit("createAnswer",{answer:r,to:this._socketId});case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"connect",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=RTCSessionDescription,e.next=3,this._pc.createOffer();case 3:return e.t1=e.sent,r=new e.t0(e.t1),e.next=7,this._pc.setLocalDescription(r);case 7:null===(t=this._mySocket)||void 0===t||t.emit("createOffer",{offer:r,to:this._socketId}),null===(n=this._mySocket)||void 0===n||n.on("answerCreated",(function(e){e.socketId===o._socketId&&o.handleAnswer(e.answer)}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"handleAnswer",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this._pc.setRemoteDescription(t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"videoStream",set:function(e){this._videoStreamEventListeners.forEach((function(t){t(e)}))}},{key:"name",get:function(){return this._name}},{key:"socketId",get:function(){return this._socketId}}],[{key:"setMyStream",value:function(t){e.myStream=t}}]),e}(),J=r["a"].extend({props:{user:D}}),q=function(e){Object(y["a"])(n,e);var t=Object(k["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(v["a"])(n,[{key:"mounted",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.user.getVideoStream();case 2:t=e.sent,this.playVideo(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"playVideo",value:function(e){this.$refs.user.srcObject=e}},{key:"name",get:function(){return this.user.name}},{key:"id",get:function(){return this.user.socketId}}]),n}(J);q=Object(b["a"])([P["b"]],q);var z=q,B=z,G=Object(s["a"])(B,L,U,!1,null,null,null),Y=G.exports;S()(G,{VCard:R["a"]});var H=function(e){Object(y["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.usersList=e.$store.getters.users,e}return n}(r["a"]);H=Object(b["a"])([Object(P["b"])({components:{User:Y}})],H);var F=H,K=F,Q=Object(s["a"])(K,T,N,!1,null,null,null),W=Q.exports;S()(Q,{VCol:x["a"],VContainer:$["a"],VRow:I["a"]});var X=function(e){Object(y["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.drawer=!0,e}return Object(v["a"])(n,[{key:"initializeApp",value:function(e){var t=this;D.setMyStream(e),this.inRoom||this.$store.dispatch("joinRoom",{room:this.room,name:this.name}),this.$store.getters.socket.on("userJoined",(function(e){var n=new D(e.name,e.socketId);t.$store.commit("pushUser",n),n.connect()})),this.$refs.me.srcObject=e}},{key:"mounted",value:function(){var e=this;navigator.getUserMedia({video:!0,audio:!0},(function(t){return e.initializeApp(t)}),(function(e){return console.log(e.message)}))}},{key:"inRoom",get:function(){return this.$store.getters.inRoom}},{key:"name",get:function(){var e=this.$store.getters.name;""===e&&(e=this.$route.query.name);while(!e)e=prompt("please enter your name");return"".concat(e)}},{key:"room",get:function(){var e=this.$store.getters.room;return""===e&&(e=this.$route.query.room),e||this.$router.replace("/"),"".concat(e)}},{key:"joinLink",get:function(){var e=window.location.origin,t="?room=".concat(this.room);return e+"/conference"+t}}]),n}(r["a"]);X=Object(b["a"])([Object(w["a"])({components:{Users:W}})],X);var Z=X,ee=Z,te=n("7496"),ne=n("40dc"),re=n("5bc1"),oe=n("f6c4"),ae=n("f774"),ie=n("2fa4"),ce=n("2a7f"),se=Object(s["a"])(ee,A,C,!1,null,null,null),ue=se.exports;S()(se,{VApp:te["a"],VAppBar:ne["a"],VAppBarNavIcon:re["a"],VMain:oe["a"],VNavigationDrawer:ae["a"],VSpacer:ie["a"],VToolbarTitle:ce["a"]}),r["a"].use(f["a"]);var me=[{path:"/",name:"Home",component:E},{path:"/conference",name:"Conference",component:ue}],fe=new f["a"]({mode:"history",base:"/astroom/",routes:me}),le=fe,pe=(n("a434"),n("2f62")),he=n("f355");r["a"].use(pe["a"]);var de=new pe["a"].Store({state:{inRoom:!1,myName:null,mySocket:null,room:null,users:[]},mutations:{pushUser:function(e,t){var n=e.users;n.length<4&&n.push(t)},removeUser:function(e,t){var n=e.users;n.forEach((function(e,r){e.socketId===t&&n.splice(r,1)}))},setSocket:function(e,t){e.mySocket=t},removeSocket:function(e){e.mySocket=null},setRoom:function(e,t){e.inRoom=!0,e.room=t},setName:function(e,t){e.myName=t}},getters:{users:function(e){return e.users},socket:function(e){return e.mySocket},name:function(e){return null===e.myName?"":e.myName},socketId:function(e){return e.mySocket?e.mySocket.id:""},room:function(e){return e.inRoom?e.room:""},inRoom:function(e){return e.inRoom}},actions:{createRoom:function(e,t){var n=e.commit,r=e.getters,o=r.socketId;return fetch(he["a"],{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,socketId:o})}).then((function(e){if(201!==e.status)throw new Error("PLEASE TRY AGAIN LATER");return e.json()})).then((function(e){n("setRoom",e.room),n("setName",t)}))},joinRoom:function(e,t){var n=e.commit,r=e.getters,o=t.name,a=t.room,i=r.socketId;return fetch(he["b"],{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,room:a,socketId:i})}).then((function(e){if(200!==e.status)throw new Error("PLEASE TRY AGAIN LATER");return e.json()})).then((function(e){n("setRoom",a),n("setName",o),e.users.forEach((function(e){var t=new D(e.name,e.socketId);n("pushUser",t)}))}))}},modules:{}}),ve=n("f309");r["a"].use(ve["a"]);var ye=new ve["a"]({}),ke=n("8e27");r["a"].config.productionTip=!1;var be=new r["a"]({router:le,store:de,vuetify:ye,render:function(e){return e(m)}}).$mount("#app"),we=Object(ke["io"])(he["c"]);we.on("connect",(function(){be.$store.commit("setSocket",we),we.on("userLeft",(function(e){be.$store.commit("removeUser",e.socketId)})),we.on("diconnect",(function(){be.$store.commit("removeSocket")}))}));var ge=t["default"]=be},f355:function(e){e.exports=JSON.parse('{"c":"https://desolate-castle-52338.herokuapp.com/","b":"https://desolate-castle-52338.herokuapp.com/joinRoom","a":"https://desolate-castle-52338.herokuapp.com/createRoom"}')}});
//# sourceMappingURL=app.907d2b30.js.map