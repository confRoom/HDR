(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/loader.baeaf0c7.gif"},35:function(e,t,a){e.exports=a.p+"static/media/off.0727485c.png"},36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(29),c=a.n(o),i=(a(41),a(20)),s=a(13),m=(a(22),a(9)),r=a(4),u=a.n(r),d=a(30),f=a.n(d);function p(e){return l.a.createElement("div",{className:"loading d-flex justify-content-center align-items-center flex-column",style:e},l.a.createElement("img",{src:f.a,alt:"loader"}))}var b=l.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!1),o=Object(m.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)(""),r=Object(m.a)(s,2),d=r[0],f=r[1];return Object(n.useEffect)(function(){u.a.auth().onAuthStateChanged(function(e){i(!!e),f(e)})},[]),l.a.createElement(b.Provider,{value:{user:d,signIn:c}},t)},E=a(31),g=a.n(E);u.a.apps.length||u.a.initializeApp({apiKey:"AIzaSyCamod-TYh1tRDNvyYnh0pGi58vCvKhHjY",authDomain:"rubicorooms.firebaseapp.com",databaseURL:"https://rubicorooms.firebaseio.com",projectId:"rubicorooms",storageBucket:"rubicorooms.appspot.com",messagingSenderId:"299533422362",appId:"1:299533422362:web:5afac257628cdd1cd4a6a3",measurementId:"G-TNK37MYFLK"});var x=function(){var e=Object(n.useContext)(b).signIn,t=Object(s.g)();Object(n.useEffect)(function(){i(!0),e?null!==u.a.auth().currentUser&&(-1===u.a.auth().currentUser.email.indexOf("ithands")&&-1===u.a.auth().currentUser.email.indexOf("rubico")?(u.a.auth().signOut(),alert("You are not authorized to login in. Please ask your HR to add you in Quiped"),window.location.reload()):t.push("/dashboard")):setTimeout(function(){i(!1)},1500)},[e,t]);var a=Object(n.useState)(!1),o=Object(m.a)(a,2),c=o[0],i=o[1],r={signInFlow:"popup",signInOptions:[{provider:u.a.auth.GoogleAuthProvider.PROVIDER_ID,customParameters:{prompt:"select_account"}}],callbacks:{signInSuccess:function(){return!1}}};return c?l.a.createElement(p,{style:{display:c?"flex":"none"}}):l.a.createElement("div",{className:"bg"},l.a.createElement("div",{className:"d-flex flex-column justify-content-center  align-items-center h-100"},l.a.createElement("h1",{className:"text-dark font-weight-bold title"},"Rubico IT"),l.a.createElement("h6",{className:"text-capitalize text-white tag"},"HDR conference room management application."),l.a.createElement(g.a,{uiConfig:r,firebaseAuth:u.a.auth()})))},v=a(11),y=a.n(v),N=a(35),w=a.n(N);function k(e){var t=e.src,a=e.onClick,n=e.stats,o=e.style,c=e.show,i=e.showInfo;return l.a.createElement("div",{className:"pb-3 header"},l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c?l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("h6",{className:"my-3 font-weight-bold",style:o},"Occupancy Status: ",n," available")," ",l.a.createElement("h4",{className:"text-warning mx-2 bg-light hand px-2 rounded-circle",onClick:i},"\u2139")):l.a.createElement("h6",{className:"my-3  font-weight-bold text-info"},"HDR Conference Room Management"),l.a.createElement("div",{className:"d-flex ml-3 align-items-center"},l.a.createElement("img",{src:t,alt:"profile",className:"profile"}),l.a.createElement("button",{onClick:a},l.a.createElement("p",{className:"logout font-weight-bold"},"Sign Out"),l.a.createElement("img",{className:"off",src:w.a,alt:"loader"})))),l.a.createElement("li",{className:"small text-dark font-weight-bold"},"Rooms already occupied by other members can't be occupied."),l.a.createElement("li",{className:"small text-dark font-weight-bold"},"You can only occupy one vacant room at a time."),l.a.createElement("li",{className:"small text-dark font-weight-bold"},"Extend button would be visible five minutes before the end time. Clicking on it will add another 15 mins in your end time."),l.a.createElement("li",{className:"small text-dark font-weight-bold"},"Rooms will automatically vacate after the alloted time.However, Do remember to vacate by clicking again at the end of the meeting."))}function j(e){var t=e.keyValue,a=e.name,n=e.item,o=e.enabled,c=e.onClick,i=e.occupied,s=e.user,m=e.status,r=e.time,u=e.showExtend,d=e.handleExtend,f=e.fade;return console.log(u),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center list",style:{opacity:f?0:1},key:t},l.a.createElement("p",{className:"text-info font-weight-bold",key:t},a),l.a.createElement("div",{className:"d-flex  justify-content-between "},"Invalid date mins left"!==r?l.a.createElement("p",{className:"tab text-info px-2"},r):null,u&&s===n?l.a.createElement("p",{className:"tab text-danger hand px-1",onClick:d},"Book again"):null,n?l.a.createElement("p",{className:"tab text-success px-1"},n):l.a.createElement("p",{className:"tab text-info px-1"},"Vacant"),l.a.createElement("div",{style:{borderColor:m?"#0c9":"#999",display:m?"block":!i&&o?"block":"none"},className:"box",onClick:c})))}function O(){return l.a.createElement("footer",{className:"fixed-bottom bg-info w-100 d-flex justify-content-between py-2 px-1"},l.a.createElement("p",{className:"small text-white"},"\xa9 Copyright 2020, All rights reserved."),l.a.createElement("p",{className:"small text-white"},"Made with \u2665 by Sudhir"))}var C=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),i=Object(m.a)(c,2),r=i[0],d=i[1],f=Object(n.useState)([]),h=Object(m.a)(f,2),E=h[0],g=h[1],x=Object(n.useState)(!1),v=Object(m.a)(x,2),N=v[0],w=v[1],C=Object(n.useContext)(b),R=C.user,I=C.signIn,S=Object(n.useState)(!1),D=Object(m.a)(S,2),L=D[0],H=D[1],P=Object(n.useState)(!1),Y=Object(m.a)(P,2),A=Y[0],B=Y[1];Object(n.useEffect)(function(){setInterval(function(){V()},1e3)},[]);var U=function(e,t){var n,l=a.some(function(e){return e.occupant===R.displayName});n=a.map(function(a){return l||a.id!==e||""!==a.occupant?l&&a.id===e&&a.occupant===R.displayName&&(a.status=!a.status,a.occupant="",a.timestamp=null,a.timeLimit=null):(a.status=!a.status,a.occupant=R.displayName,a.enabled=!0,a.timestamp=y()().unix(),a.timeLimit=t,d(null),w(!1)),a}),o(n),T()},T=function(){u.a.database().ref("RoomsHDR/").set({data:a})},V=function(){H(!0),u.a.database().ref("RoomsHDR/").on("value",function(e){o(e.val().data),g(e.val().data.some(function(e){return e.occupant===R.displayName})),H(!1)})},z=function(e,t){var a,n=y()(y.a.unix(e).toLocaleString()).add(t,"m").diff(y()(),"seconds");return 1440===t?a=y.a.unix(e).format("DD")!==y()().format("DD")?"00:00":"full day":240===t?y.a.utc(1e3*n).format("hh")>"04"&&y.a.utc(1e3*n).format("hh")<="12"?(a=y.a.utc(1e3*n).format("mm:ss"),console.log(a.length)):a=y.a.utc(1e3*n).format("hh:mm:ss"):a=y.a.utc(1e3*n).format("mm:ss"),a},F=function(e,t,a){var n=e-1,l={enabled:!0,id:e,name:t,occupant:"",status:!1,timestamp:null};u.a.database().ref("Occupy/").on("value",function(e){for(var t in e.val())e.val()[t].User===a&&u.a.database().ref().child("Occupy/"+t).remove()}),u.a.database().ref("RoomsHDR/data").child(n).set(l)};if(!I)return l.a.createElement(s.a,{to:"/"});var K=a.filter(function(e){return""===e.occupant}).length,G=0===K?"No room":1===K?"1 room":"".concat(K," rooms"),M="No room"===G?"tomato":"#38a2b8";return 0!==a.length?l.a.createElement("div",{className:"bg"},l.a.createElement("div",{className:"bg-white position-relative vh-100"},l.a.createElement("div",{className:"container position-relative"},l.a.createElement(k,{style:{color:M},src:R&&R.photoURL,onClick:function(){return u.a.auth().signOut()},showInfo:function(){return B(!A)},stats:G,show:0!==K}),N?l.a.createElement("div",{className:"d-flex bg-white flex-column justify-content-center align-items-center position-absolute w-100 h-100"},l.a.createElement("div",{className:"d-flex flex-column justify-content-around"},l.a.createElement("h6",{className:"font-weight-bold p-2 text-center text-info small"},"Select Time period for the meeting. "),l.a.createElement("button",{onClick:function(){return U(r,15)}},"15 mins"),l.a.createElement("button",{onClick:function(){return U(r,30)}},"30 mins"),l.a.createElement("button",{onClick:function(){return U(r,45)}},"45 mins"),l.a.createElement("button",{onClick:function(){return U(r,59.99)}},"60 mins"),l.a.createElement("button",{onClick:function(){return U(r,240)}},"4 hours"),l.a.createElement("button",{onClick:function(){return U(r,1440)}},"Full Day")),l.a.createElement("p",{className:"tag font-weight-bold position-absolute close",onClick:function(){w(!1),d(null)}},"X")):null,L?l.a.createElement(p,{style:{display:L?"flex":"none"}}):void 0!==a?a.map(function(e){return l.a.createElement(j,{keyValue:e.id,name:e.name,item:e.occupant,status:e.status,occupied:E,user:R.displayName,enabled:e.enabled,time:z(e.timestamp,e.timeLimit)<="00:00 mins left"?F(e.id,e.name,e.occupant):z(e.timestamp,e.timeLimit)>0&&z(e.timestamp,e.timeLimit)<=5?z(e.timestamp,e.timeLimit)+" mins left":"full day"===z(e.timestamp,e.timeLimit)?"Full day":z(e.timestamp,e.timeLimit)+" mins left",onClick:e.status?function(){return U(e.id)}:function(){return t=e.id,d(t),void w(!0);var t},handleExtend:function(){return function(e,t,a,n,l){var o=e-1,c={enabled:!0,id:e,name:t,occupant:a,status:!0,timestamp:n,timeLimit:l+15};u.a.database().ref("RoomsHDR/data").child(o).set(c)}(e.id,e.name,e.occupant,e.timestamp,e.timeLimit)},showExtend:e.status&&8===z(e.timestamp,e.timeLimit).length?z(e.timestamp,e.timeLimit)<="00:05:00 mins left":z(e.timestamp,e.timeLimit)<="05:00 mins left",fade:null!==r})}):l.a.createElement("p",null,"Please ask your administrator to add rooms."),null===r&&A?l.a.createElement("div",{className:"fixed-bottom flex-column  mb-5 d-flex"},l.a.createElement("p",{className:"text-center small text-dark pb-2"},"How to use ?"),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("p",{className:"small mx-2"},"Press"),l.a.createElement("div",{className:"boxs",style:{borderColor:"#999"}}),l.a.createElement("p",{className:"small mx-2"},"to Book a room.")),l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("p",{className:"small mx-2"},"Press"),l.a.createElement("div",{className:"boxs",style:{borderColor:"#0c9"}}),l.a.createElement("p",{className:"small mx-2"}," to Vacate a room.")))):null,l.a.createElement(O,null)))):null},R=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(h,null,l.a.createElement(i.a,{basename:"/HDR"},l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:x}),l.a.createElement(s.b,{exact:!0,path:"/dashboard",component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.disableYellowBox=!0,c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.fc2dfcfa.chunk.js.map