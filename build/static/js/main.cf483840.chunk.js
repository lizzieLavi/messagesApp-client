(this.webpackJsonpmyclient=this.webpackJsonpmyclient||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},129:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},185:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(15),r=n.n(c),i=n(4),o=(n(129),n(3)),l=n.n(o),u=n(6),d=(n(75),n(13)),j=n.n(d),p=n(9),b=n(40),h=(n(148),n(1));function m(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),d=o[0],m=o[1],f=Object(a.useState)(""),O=Object(i.a)(f,2),x=O[0],g=O[1],v=Object(p.g)();function y(){return(y=Object(u.a)(l.a.mark((function t(n){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(""),n.preventDefault(),a={name:d,phone:s},t.next=5,j.a.post("https://messagesapp1.herokuapp.com/api/logIn",a);case 5:"not found"!==(c=t.sent).data?(sessionStorage.config=c.data.token,sessionStorage.id=c.data.User._id,sessionStorage.name=c.data.User.name,e.CanLogIn(c.data.User._id),v.push("/App")):g("One or more of your identification details is incorrect.");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsx)("div",{class:"overlay",children:Object(h.jsx)("form",{className:"login_form",onSubmit:function(e){return y.apply(this,arguments)},children:Object(h.jsxs)("div",{class:"con",children:[Object(h.jsxs)("header",{class:"head-form",children:[Object(h.jsx)("h2",{children:"Log In"}),Object(h.jsx)("p",{children:"welcome to  my whatsApp"})]}),Object(h.jsxs)("div",{class:"field-set",children:[Object(h.jsxs)("span",{class:"input-item",children:[Object(h.jsx)("i",{class:"fa fa-user-circle"}),Object(h.jsx)("input",{class:"form-input",id:"txt-input",type:"text",placeholder:"@UserName",onChange:function(e){return m(e.target.value)},required:!0})]}),Object(h.jsxs)("span",{class:"input-item",children:[Object(h.jsx)("i",{class:"fa fa-key"}),Object(h.jsx)("input",{class:"form-input",type:"password",placeholder:"Password",id:"pwd",name:"password",onChange:function(e){return c(e.target.value)},required:!0})]}),Object(h.jsx)("button",{className:"log-in",type:"submit",children:" Log In "})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"btn submits sign-up",children:[Object(h.jsx)(b.b,{className:"defaultLink",to:"/Register",children:"Sign Up"}),Object(h.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})]})}),x]})})})}n(154),n(155);var f=n(108),O=n.n(f),x=n(111),g=n.n(x),v=n(215),y=n(212),N=n(211),_=n(214),C=n(109),w=n.n(C),k=n(110),S=n.n(k),I=n(34),L=n(19),R=s.a.createContext();function U(){return Object(a.useContext)(R)}function M(e){var t=e.children,n=Object(a.useState)([]),s=Object(i.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)({}),d=Object(i.a)(o,2),p=d[0],b=d[1],m={headers:{"x-access-token":sessionStorage.config}};function f(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://messagesapp1.herokuapp.com/api/logIn/"+sessionStorage.id,m);case 2:return t=e.sent,b({id:t.data._id,name:t.data.name,phone:t.data.phone,imageName:t.data.imageName,LastSeen:t.data.LastSeen}),e.abrupt("return",t.data.contacts);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f().then((function(e){return r(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]);var x=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==p.phone){e.next=3;break}return console.log("cant Add yourself"),e.abrupt("return");case 3:if(0===c.filter((function(e){return e.phone===t})).length){e.next=7;break}return console.log("already exists"),e.abrupt("return");case 7:return e.prev=7,e.next=10,j.a.get("https://messagesapp1.herokuapp.com/api/logIn/getByPhone/"+t,m);case 10:if("no such user"===(n=e.sent)){e.next=26;break}return a={id:n.data._id,phone:n.data.phone,name:n.data.name,imageName:n.data.imageName},s=[].concat(Object(I.a)(c),[a]),r(s),i=Object(L.a)(Object(L.a)({},p),{},{contacts:s}),e.prev=16,e.next=19,j.a.put("https://messagesapp1.herokuapp.com/api/logIn/"+sessionStorage.id,i,{headers:{"x-access-token":sessionStorage.config}});case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(16),console.log(e.t0);case 24:e.next=27;break;case 26:console.log("user dosent exist");case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(7),console.log(e.t1);case 32:case"end":return e.stop()}}),e,null,[[7,29],[16,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(R.Provider,{value:{setContacts:r,setInfo:b,info:p,config:m,contacts:c,createContact:x,getSearchContacts:function(e){f().then((function(t){var n=t.filter((function(t){return!0===t.name.includes(e)}));r(n)}))}},children:t})}var z=n(104),P=n.n(z),A=s.a.createContext();function q(){return Object(a.useContext)(A)}function E(e){var t=e.userId,n=e.children,s=Object(a.useRef)(),c=Object(a.useState)([]),r=Object(i.a)(c,2),o=r[0],d=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.current=P()("wss://messagesapp1.herokuapp.com:443/");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.current.emit("AddUser",sessionStorage.id),s.current.on("getConnectedUsers",(function(e){d(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(h.jsx)(A.Provider,{value:{socket:s,ConnectedUsers:o},children:n})}var F=s.a.createContext();function G(){return Object(a.useContext)(F)}function D(e){e.id;var t=e.children,n=U(),s=n.contacts,c=n.info,r=Object(a.useState)([]),o=Object(i.a)(r,2),d=o[0],p=o[1],b=Object(a.useState)(),m=Object(i.a)(b,2),f=m[0],O=m[1],x=Object(a.useRef)(d),g=Object(a.useRef)(f),v=Object(a.useState)(!1),y=Object(i.a)(v,2),N=y[0],_=y[1],C=q(),w=C.socket,k=C.ConnectedUsers,S=Object(a.useState)(""),R=Object(i.a)(S,2),M=R[0],z=R[1],P=Object(a.useState)(""),A=Object(i.a)(P,2),E=A[0],G=A[1],D={headers:{"x-access-token":sessionStorage.config}},B=new Audio("https://res.cloudinary.com/dsrgpqnyv/video/upload/v1630680168/juntos-607_qsfc7i.mp3");function T(){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://messagesapp1.herokuapp.com/api/conversations/UserConversations/"+sessionStorage.id,D);case 3:return t=e.sent,n=t.data.map((function(e){var t=e;return 1===e.Participants.length&&e.Name===sessionStorage.name&&(t=Object(L.a)(Object(L.a)({},t),{},{Name:e.Participants[0].name,ConversationImage:e.Participants[0].image})),f&&f.id===t.id&&O(t),t})),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function J(){return(J=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T().then((function(e){var n=e.filter((function(e){return!0===e.Name.includes(t)}));p(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(u.a)(l.a.mark((function e(t,n,a){var r,i,o,u,b,h,m,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a,i=!1,0!==t.length){e.next=5;break}return console.log("no participants choosen"),e.abrupt("return");case 5:if(o=null,1===t.length&&(o=d.find((function(e){return e.Name===n}))),!o){e.next=11;break}O(o),e.next=41;break;case 11:if((u=t.map((function(e){return s.filter((function(t){return e===t.id}))[0]}))).push({id:c.id,name:c.name,phone:c.phone,imageName:c.imageName,LastSeen:c.LastSeen}),!(t.length>1)){e.next=30;break}return(b=new FormData).append("file",r),b.append("upload_preset","whatsApp_clone"),b.append("cloud_name","dsrgpqnyv"),b.append({secure:!0}),e.prev=19,e.next=22,j.a.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/image/upload",b);case 22:h=e.sent,r=h.data.url,e.next=29;break;case 26:e.prev=26,e.t0=e.catch(19),console.log(e.t0);case 29:i=!0;case 30:return m={Name:n,creatorId:sessionStorage.id,Participants:u,Messages:[],LastMessage:{id:"",sender:"",message:""},ConversationImage:r,isGroup:i},e.prev=31,e.next=34,j.a.post("https://messagesapp1.herokuapp.com/api/conversations",m,D);case 34:"created"===(f=e.sent).data.status&&(console.log(f.data.conversation),O(f.data.conversation),f.data.conversation.Messages.length>0&&p((function(e){return[].concat(Object(I.a)(e),[f.data.conversation])}))),e.next=41;break;case 38:e.prev=38,e.t1=e.catch(31),console.log(e.t1);case 41:case"end":return e.stop()}}),e,null,[[19,26],[31,38]])})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=w.current){e.next=2;break}return e.abrupt("return");case 2:w.current.on("user-typing",(function(e){var t=e.user,n=e.conversationId;f&&f._id===n&&z(t.name)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=10;break}if(f.isGroup){e.next=10;break}if(!k.some((function(e){return e.userId===f.Participants[0].id}))){e.next=6;break}G(""),e.next=10;break;case 6:return e.next=8,j.a.get("https://messagesapp1.herokuapp.com/api/logIn/"+f.Participants[0].id,D);case 8:t=e.sent,G(t.data.LastSeen);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k,f]),Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T().then((function(e){return p(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=Object(a.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.UpdatedConv,B.play(),a=!1,s=x.current.map((function(e){if(e._id===n._id){a=!0;var t=Object(L.a)(Object(L.a)({},e),{},{Messages:n.Messages,LastMessage:n.LastMessage});return g.current&&g.current._id===n._id&&O(t),t}return e})),a?p(s):n.isGroup?p((function(e){return[].concat(Object(I.a)(e),[n])})):(c=Object(L.a)(Object(L.a)({},n),{},{Name:n.Participants[0].name,ConversationImage:n.Participants[0].imageName}),p((function(e){return[].concat(Object(I.a)(e),[c])})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[p]);Object(a.useEffect)((function(){if(null!=w.current)return x.current=d,g.current=f,w.current.on("receive-message",V),function(){return w.current.off("receive-message",V)}}),[d,f]);return Object(h.jsx)(F.Provider,{value:{createGroupFlag:N,setCreateGroupFlag:_,sendMessage:function(e,t,n,a){var s=new Intl.DateTimeFormat("en",{hc:"h12",year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",timeZone:"Asia/Jerusalem"}).formatToParts(new Date).reduce((function(e,t){return e[t.type]=t.value,e}),Object.create(null)),r="".concat(s.day,"/").concat(s.month,"/").concat(s.year,"  ").concat(s.hour,":").concat(s.minute),i=!1;null!=a&&(i=!0);var o={id:c.id,name:c.name,message:e,timeSent:r,containsImage:t,containsRecord:i,recordURL:a};!0===t&&(o=Object(L.a)(Object(L.a)({},o),{},{imageURL:n}));var l={id:c.id,phone:c.phone,name:c.name,image:c.imageName},u=Object(L.a)(Object(L.a)({},f),{},{Messages:[].concat(Object(I.a)(f.Messages),[o]),LastMessage:o});w.current.emit("send-message",{sender:l,UpdatedConversation:u,conversationId:f._id}),function(e){var t=!1;O(e);var n=d.map((function(n){return n._id===e._id?(t=!0,e):n}));p(t?n:function(t){return[].concat(Object(I.a)(t),[e])})}(u)},conversations:d,createConversation:function(e,t,n){return H.apply(this,arguments)},setConversations:p,setSelectedConversation:O,selectedConversation:f,currentConversationIsConnected:E,typingFlag:M,setTypingFlag:z,getSearchConverastions:function(e){return J.apply(this,arguments)}},children:t})}n(101);function B(){var e=G(),t=e.setSelectedConversation,n=(e.selectedConversation,e.conversations);U().info;function a(){return(a=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(n);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"Chats",children:Object(h.jsx)("div",{className:"contacts_list",children:n.map((function(e,t){return Object(h.jsxs)("div",{onClick:function(){return function(e){return a.apply(this,arguments)}(e)},className:"ChatsListItem",children:[Object(h.jsx)(v.a,{src:""+e.ConversationImage}),Object(h.jsxs)("div",{className:"chatInfo",children:[Object(h.jsxs)("span",{className:"chatName",children:[Object(h.jsx)("h2",{children:e.Name})," "]}),Object(h.jsxs)("span",{children:[" ",e.LastMessage.message.slice(0,25),"... "]})]})]},t)}))})})}function T(e){var t=e.newConversationCallback,n=e.openModalCallback,a=U().contacts,s=G(),c=s.createConversation;s.setCreateGroupFlag;return Object(h.jsxs)("div",{className:"Chats",children:[Object(h.jsx)("h4",{className:"new_chat_title",children:"Start New Chat:"}),Object(h.jsx)(N.a,{style:{height:"30px",margin:"5px 0px",fontSize:"10px"},onClick:function(){return n()},className:"add_new_Button",children:"Create Group"}),Object(h.jsx)("div",{className:"contacts_list",children:a.map((function(e){return Object(h.jsxs)("div",{className:"ChatsListItem",onClick:function(){return function(e){var n=e.id,a=e.name,s=e.image;c([n],a,s),t()}({id:e.id,name:e.name,image:e.imageName})},children:[Object(h.jsx)(v.a,{src:e.imageName}),Object(h.jsxs)("div",{className:"chatInfo",children:[" ",Object(h.jsxs)("h2",{children:[e.name," "]})," "]})]})}))})]})}n(185);var W=n(41),J=n.n(W);function H(e){var t=e.closeModal,n=Object(a.useRef)(),s=U().createContact;function c(){return(c=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(n.current.value),t();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"add_new",children:Object(h.jsx)("div",{className:"add_new_contact_border",children:Object(h.jsxs)("div",{className:"add_contact_model",children:[Object(h.jsxs)("div",{className:"title_and_close",children:[Object(h.jsx)("h2",{className:"add_contact_title",children:"Enter contact phone"}),Object(h.jsx)(y.a,{className:"close_add_new",onClick:function(){return t()},children:Object(h.jsx)(J.a,{fontSize:"large"})})]}),Object(h.jsxs)("div",{className:"add_new_contact",children:[Object(h.jsx)("h3",{className:"enter_phone",children:"Phone :"}),Object(h.jsx)("input",{className:"add_new_input",type:"text",ref:n,required:!0}),Object(h.jsx)("button",{className:"add_new_button",onClick:function(){return c.apply(this,arguments)},children:" Add Contact"})]})]})})})}var V=n(62),Y=n.n(V),Z=n(73),K=n.n(Z),Q=n(72),X=n.n(Q);var $=function(e){var t=e.closeModal,n=Object(a.useState)([]),s=Object(i.a)(n,2),c=s[0],r=s[1],o=U().contacts,l=G(),u=l.createConversation,d=l.setCreateGroupFlag,j=Object(a.useState)(""),p=Object(i.a)(j,2),b=p[0],m=p[1],f=Object(a.useState)(),O=Object(i.a)(f,2),x=O[0],g=O[1],y=Object(a.useState)(),N=Object(i.a)(y,2),_=N[0],C=N[1],w=Object(a.useState)(!1),k=Object(i.a)(w,2),S=k[0],L=k[1];function R(e){g(e.target.files[0]),C(window.URL.createObjectURL(e.target.files[0]))}return Object(h.jsx)("div",{className:"add_new",children:Object(h.jsx)("div",{className:"add_new_group_border",children:Object(h.jsx)("div",{className:"new_conversation new_group",children:!0!==S?Object(h.jsxs)("div",{className:"top_new_group",children:[_?Object(h.jsxs)("div",{className:"change_group_image",children:[Object(h.jsx)(v.a,{src:_,style:{height:"110px",width:"110px",backgroundColor:"gray",margin:"15px"},children:" "}),Object(h.jsxs)("div",{className:"change_image_on_hover",style:{display:"flex",flexDirection:"column",alignItems:"center",position:"absolute",zIndex:"1",color:"white"},children:[Object(h.jsx)(X.a,{style:{position:"absolute",zIndex:"0",opacity:"0.1",height:"80px",width:"80px"}}),Object(h.jsx)(K.a,{style:{height:"30px",width:"30px",color:"white"}}),Object(h.jsx)("input",{accept:"image/*",id:"file",type:"file",name:"file",onChange:R}),Object(h.jsx)("span",{style:{fontSize:"10px"},children:"Change Image "})]})]}):Object(h.jsx)("div",{className:"add_group_image",children:Object(h.jsxs)(v.a,{style:{height:"110px",width:"110px",backgroundColor:"gray",margin:"15px"},children:[Object(h.jsx)(X.a,{style:{position:"absolute",zIndex:"0",opacity:"0.1",height:"80px",width:"80px"}}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",position:"absolute",zIndex:"1",color:"white"},children:[Object(h.jsx)(K.a,{style:{height:"30px",width:"30px",color:"white"}}),Object(h.jsx)("input",{accept:"image/*",id:"file",type:"file",name:"file",onChange:R}),Object(h.jsx)("span",{style:{fontSize:"10px"},children:"add group image"})]})]})}),Object(h.jsxs)("div",{className:"group_name",children:[Object(h.jsx)("span",{style:{padding:"5px",margin:"5px",fontSize:"13px",color:"#fcfcfc"},children:" Group Name:"}),Object(h.jsx)("input",{onChange:function(e){return m(e.target.value)}})]}),Object(h.jsxs)("button",{style:{display:"flex",alignItems:"center",width:"180px",justifyContent:"center"},className:"add_new_button",onClick:function(){return L(!0)},children:[Object(h.jsx)(Y.a,{style:{margin:"5px"}})," Add Members"]})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"add_contact_title",children:" choose Members :"}),Object(h.jsx)("div",{style:{overflowY:"overlay",height:"200px"},children:o.map((function(e){return Object(h.jsxs)("div",{className:"contactItem",children:[Object(h.jsx)("input",{type:"checkbox",value:c.includes(e.id),id:e.name,style:{marginRight:"10px"},onChange:function(){return t=e.id,void(c.includes(t)?r((function(e){return e.filter((function(e){return e!==t}))})):r((function(e){return[].concat(Object(I.a)(e),[t])})));var t}}),Object(h.jsx)(v.a,{src:""+e.imageName,fontSize:"large"}),Object(h.jsxs)("div",{className:"contactInfo",children:[" ",Object(h.jsxs)("h2",{style:{fontWeight:"400"},children:[e.name," "]})," "]})]})}))}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(h.jsx)("button",{className:"add_new_button",type:"submit",onClick:function(){return d(!1),u(c,b,x),void t()},children:"Create"})})]})})})})};function ee(e){e.id;var t=Object(a.useState)("conversations"),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],d=U(),j=d.info,p=d.getSearchContacts,b=Object(a.useState)(!1),m=Object(i.a)(b,2),f=m[0],x=m[1],C=G().getSearchConverastions,k=Object(a.useState)(""),I=Object(i.a)(k,2),L=I[0],R=I[1];function M(){u(!1)}function z(e){u(!0),R(e)}return Object(h.jsxs)("div",{className:"sideBar",children:[Object(h.jsxs)("div",{className:"sidebar_top",children:[Object(h.jsx)(v.a,{src:j.imageName,fontSize:"large"}),Object(h.jsxs)("div",{className:"sidebar_top_right",children:[Object(h.jsx)(y.a,{onClick:function(){return c("conversations")},children:Object(h.jsx)(O.a,{fontSize:"large"})}),Object(h.jsx)(y.a,{fontSize:"large",onClick:function(){return c("contacts")},children:Object(h.jsx)(w.a,{fontSize:"large"})}),Object(h.jsx)(y.a,{children:Object(h.jsx)(S.a,{})})]})]}),f?Object(h.jsxs)("div",{className:"activeSearch",children:[Object(h.jsx)("div",{className:"arrowButton",children:Object(h.jsx)(y.a,{onClick:function(){return x(!1)},children:Object(h.jsx)(Y.a,{fontSize:"large"})})}),Object(h.jsx)("input",{className:"searchBlock",type:"text",onChange:function(e){"conversations"===s?C(e.target.value):p(e.target.value)}})," "]}):Object(h.jsx)("div",{className:"searchBar",children:Object(h.jsxs)("div",{className:"searchContainer",children:[Object(h.jsx)(g.a,{}),Object(h.jsx)("input",{placeholder:"search",type:"text",onClick:function(){return x(!0)}})]})}),"contacts"===s?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"sidebar_middle",children:Object(h.jsx)(N.a,{style:{fontSize:"10px"},onClick:function(){return z("NEW_CONTACT")},className:"add_new_Button",children:"Add New Contact"})}),Object(h.jsx)("div",{className:"sidebar_bottom",children:Object(h.jsx)(T,{newConversationCallback:function(){return c("conversations")},openModalCallback:function(){return z("NEW_GROUP")}})})]}):Object(h.jsx)("div",{className:"sidebar_bottom",children:Object(h.jsx)(B,{})}),Object(h.jsx)(_.a,{className:"Modal",open:l,onClose:M,children:"NEW_GROUP"===L?Object(h.jsx)($,{closeModal:M}):Object(h.jsx)(H,{closeModal:M})})]})}n(102);var te=n(115),ne=n.n(te),ae=n(117),se=n.n(ae),ce=n(116),re=n.n(ce),ie=n(114),oe=n.n(ie),le=n(112),ue=n.n(le),de=n(113),je=n(213);var pe=function(e){var t=e.message,n=Object(a.useState)(!1),s=Object(i.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)(null),l=Object(i.a)(o,2),u=l[0],d=l[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"sender_name",children:t.name}),t.containsImage?Object(h.jsx)("img",{className:"image_in_message",src:t.imageURL,alt:"",onClick:function(){return e=t.imageURL,r(!0),void d(e);var e},width:"200px",height:"200px"}):"",Object(h.jsxs)("p",{className:"message_time_and_content",children:[Object(h.jsx)("span",{className:"message_content",children:t.message}),Object(h.jsx)("span",{className:"message_time",children:t.timeSent.substring(11,17)})," "]}),Object(h.jsx)(je.a,{onClose:function(){return r(!1)},open:c,children:Object(h.jsx)("img",{src:u,alt:"",height:"500px",width:"500px"})})]})};n(188);var be=function(e){var t=e.message,n=e.sender,a=e.image,s=n.includes("chat_reciever")?"reciever":"sender";return Object(h.jsxs)("div",{className:"message_with_audio",children:[Object(h.jsxs)("div",{className:"audio_and_time",children:[Object(h.jsx)("div",{className:s,children:Object(h.jsx)("audio",{controls:!0,controlsList:"nodownload",children:Object(h.jsx)("source",{src:t.recordURL,type:"audio/mp3"})})}),Object(h.jsx)("span",{className:"message_time",children:t.timeSent.substring(11,17)})]}),Object(h.jsx)(v.a,{src:a,style:{height:"50px",width:"50px"}})]})};var he=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=q().socket,o=U().info,d=G(),p=d.sendMessage,b=d.selectedConversation,m=Object(a.useRef)(null),f=Object(a.useState)(!1),O=Object(i.a)(f,2),x=O[0],g=O[1],v=Object(a.useState)(!1),N=Object(i.a)(v,2),_=N[0],C=N[1],w=Object(de.useReactMediaRecorder)({audio:!0}),k=(w.status,w.startRecording),S=w.stopRecording,I=w.mediaBlobUrl,L=w.clearBlobUrl,R=Object(a.useState)(null),M=Object(i.a)(R,2),z=M[0],P=M[1],A=Object(a.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]);function E(){return(E=Object(u.a)(l.a.mark((function t(n){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("file",n.target.files[0]),a.append("upload_preset","whatsApp_clone"),a.append("cloud_name","dsrgpqnyv"),t.prev=4,t.next=7,j.a.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/image/upload",a);case 7:s=t.sent,e.imageCallback(s.data.url),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}function F(){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(),e.next=3,fetch(I);case 3:t=e.sent,P(t.blob());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){S(),L(),C(!1)}return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==z){e.next=25;break}return e.next=3,fetch(I).then((function(e){return e.blob()}));case 3:return t=e.sent,(n=new FormData).append("file",t),n.append("resource_type","video"),n.append("upload_preset","whatsApp_clone"),n.append("cloud_name","dsrgpqnyv"),e.prev=9,e.next=12,j.a.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/video/upload",n);case 12:a=e.sent,c=(c=a.data.url).slice(0,-4),c+="mp3",C(!1),L(),p(s,null,null,c),C(!1),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(9),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[9,22]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[z]),Object(h.jsxs)("div",{className:"body_and_footer",children:[Object(h.jsx)("div",{className:"chat_body",children:b.Messages.map((function(e,t){var n=b.Messages.length-1===t,a=e.id===sessionStorage.id?"chat_message":" chat_message chat_reciever",s=e.id===sessionStorage.id?o.imageName:b.ConversationImage;return Object(h.jsx)("div",{className:a,ref:n?A:null,children:e.containsRecord?Object(h.jsx)(be,{message:e,sender:a,image:s}):Object(h.jsx)(pe,{message:e})},t)}))}),Object(h.jsxs)("div",{className:"chat_footer_with_stickers",children:[x?Object(h.jsx)(ue.a,{onEmojiClick:function(e,t){return function(e,t){c(s+t.emoji)}(0,t)},pickerStyle:{width:"100%"}}):"",Object(h.jsxs)("div",{className:"chat_footer",children:[x?Object(h.jsxs)(y.a,{onClick:function(){return g(!1)},children:[Object(h.jsx)(J.a,{fontSize:"large"})," "]}):"",Object(h.jsx)(y.a,{onClick:function(){return g(!0)},children:Object(h.jsx)(ne.a,{fontSize:"large"})}),Object(h.jsx)("input",{accept:"image/*",className:"invisibleInput",id:"icon-button-file",type:"file",style:{visibility:"hidden"},onChange:function(e){return E.apply(this,arguments)}}),Object(h.jsx)("label",{htmlFor:"icon-button-file",children:Object(h.jsx)(y.a,{component:"span",children:Object(h.jsx)(re.a,{fontSize:"large"})})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(s,!1,null,null),c(" ")},className:"message_section",children:[Object(h.jsx)("input",{className:"message_input",ref:m,value:s,onChange:function(e){c(e.target.value),null!=r.current&&r.current.emit("typing",{user:o,Conversation:b})},type:"text",placeholder:"type a message"}),Object(h.jsx)("button",{type:"submit",children:" send "})]}),_?Object(h.jsxs)("div",{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)(J.a,{fontSize:"large",style:{color:"red"},onClick:B})}),Object(h.jsx)(y.a,{children:Object(h.jsx)(oe.a,{fontSize:"large",style:{color:"green"},onClick:F})})]}):Object(h.jsx)(y.a,{onClick:function(){C(!0),k()},children:Object(h.jsx)(se.a,{fontSize:"large"})})]})]})]})},me=(n(189),n(118)),fe=n.n(me);var Oe=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(""),s=Object(i.a)(n,2),c=s[0],r=s[1],o=q().socket,l=U().info,u=G(),d=u.sendMessage,j=u.selectedConversation;function p(t){!0===t&&d(c,!0,e.imageURL),r(" "),e.backToChat()}return Object(h.jsxs)("div",{className:"SendImage",children:[Object(h.jsx)("div",{className:"sendImageHeader"}),Object(h.jsx)(y.a,{type:"submit",onClick:function(){return p(!1)},children:Object(h.jsx)(J.a,{fontSize:"large"})}),Object(h.jsx)("img",{src:e.imageURL,alt:"",height:"300px",width:"300px"}),Object(h.jsx)("div",{className:"add_message",children:Object(h.jsxs)("form",{onSubmit:function(){return p(!0)},className:"message_section",children:[Object(h.jsx)(y.a,{type:"submit",children:Object(h.jsx)(fe.a,{fontSize:"large"})}),Object(h.jsx)("input",{className:"message_input",ref:t,value:c,onChange:function(e){r(e.target.value),null!=o.current&&o.current.emit("typing",{user:l,Conversation:j})},type:"text",placeholder:"type a message"})]})})]})};function xe(){var e=G(),t=e.selectedConversation,n=e.currentConversationIsConnected,s=e.typingFlag,c=e.setTypingFlag,r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(a.useState)(!1),j=Object(i.a)(d,2),p=j[0],b=j[1];return Object(h.jsxs)("div",{className:"chat",children:[Object(h.jsxs)("div",{className:"chat_header",children:[Object(h.jsx)(v.a,{src:t.ConversationImage}),Object(h.jsxs)("div",{className:"chat_header_info",children:[Object(h.jsxs)("h2",{children:[" ",t.Name," "]}),t.isGroup?function(){var e="";if(""!==s)e=Object(h.jsxs)("div",{className:"lastSeen",children:[" ",s," is typing..."]}),setTimeout((function(){return c("")}),1e3);else{var n="";t.Participants.forEach((function(e,a){a===t.Participants.length-1?n+=e.name:n=n+e.name+", "})),e=Object(h.jsxs)("div",{className:"lastSeen",children:[n," "]})}return e}():function(){var e="";return""===n?""!==s?(e=Object(h.jsx)("div",{className:"lastSeen",children:" typing..."}),setTimeout((function(){return c("")}),1e3)):e=Object(h.jsxs)("div",{className:"connected",children:[Object(h.jsx)("div",{className:"circle"})," online "]}):e=Object(h.jsx)("div",{className:"lastSeen",children:n}),e}()]})]}),l?Object(h.jsx)(Oe,{imageURL:p,backToChat:function(){b(null),u(!1)}}):Object(h.jsx)(he,{imageCallback:function(e){b(e),u(!0)}})]})}var ge=Object(p.h)((function(e){var t=e.id,n=G().selectedConversation;return Object(h.jsx)("div",{className:"dashboard",children:Object(h.jsxs)("div",{className:"dashboard_body",children:[Object(h.jsx)(ee,{id:t}),void 0!==n?Object(h.jsx)(xe,{id:t}):""]})})}));var ve=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),d=o[0],m=o[1],f=Object(a.useState)(),O=Object(i.a)(f,2),x=O[0],g=O[1],v=Object(p.g)();function y(){return(y=Object(u.a)(l.a.mark((function t(n){var a,c,r,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a="",(c=new FormData).append("file",x),c.append("upload_preset","whatsApp_clone"),c.append("cloud_name","dsrgpqnyv"),c.append({secure:!0}),t.prev=7,t.next=10,j.a.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/image/upload",c);case 10:r=t.sent,a=r.data.url,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),console.log(t.t0);case 17:return i={name:d,phone:s,imageName:a,contacts:[],LastSeen:"last seen at..."},t.prev=18,t.next=21,j.a.post("https://messagesapp1.herokuapp.com/api/logIn/Register",i);case 21:o=t.sent,sessionStorage.config=o.data.token,sessionStorage.id=o.data.User._id,sessionStorage.name=o.data.User.name,e.CanLogIn(o.data.User._id),v.push("/App"),t.next=32;break;case 29:t.prev=29,t.t1=t.catch(18),console.log(t.t1);case 32:case"end":return t.stop()}}),t,null,[[7,14],[18,29]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"overlay",children:[Object(h.jsx)("link",{rel:"stylesheet",href:"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"}),Object(h.jsx)("form",{className:"login_form",onSubmit:function(e){return y.apply(this,arguments)},children:Object(h.jsxs)("div",{className:"con",children:[Object(h.jsxs)("header",{className:"head-form",children:[Object(h.jsx)("h2",{children:"Register"}),Object(h.jsx)("p",{children:"welcome to  my whatsApp"})]}),Object(h.jsxs)("div",{className:"field-set",children:[Object(h.jsxs)("span",{className:"input-item",children:[Object(h.jsx)("i",{class:"fa fa-user-circle"}),Object(h.jsx)("input",{className:"form-input",id:"txt-input",type:"text",placeholder:"@UserName",onChange:function(e){return m(e.target.value)},required:!0})]}),Object(h.jsxs)("span",{className:"input-item",children:[Object(h.jsx)("i",{class:"fa fa-key"}),Object(h.jsx)("input",{className:"form-input",type:"password",placeholder:"Password",id:"pwd",name:"password",onChange:function(e){return c(e.target.value)},required:!0})]}),Object(h.jsx)("div",{id:"fileupload",children:Object(h.jsx)("div",{className:"myfileupload-buttonbar ",children:Object(h.jsxs)("label",{className:"myui-button",children:[Object(h.jsx)("i",{class:"fa fa-upload","aria-hidden":"true"}),Object(h.jsx)("span",{className:"text",children:"Add Picture"}),Object(h.jsx)("input",{id:"file",type:"file",name:"file",onChange:function(e){g(e.target.files[0])}})]})})}),Object(h.jsx)("button",{className:"log-in",type:"submit",children:" Register "})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"btn submits sign-up",children:[Object(h.jsx)(b.b,{className:"defaultLink",to:"/",children:"back to Log In"}),Object(h.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})]})})]})})]})};var ye=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(h.jsx)(E,{userId:n,children:Object(h.jsx)(M,{id:n,children:Object(h.jsx)(D,{children:Object(h.jsx)(ge,{id:n})})})});return Object(h.jsx)(b.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(p.d,{children:[sessionStorage.id,Object(h.jsxs)(p.b,{exact:!0,path:"/",children:[" ",Object(h.jsx)(m,{CanLogIn:s})]}),Object(h.jsxs)(p.b,{path:"/Register",children:[" ",Object(h.jsx)(ve,{CanLogIn:s})]}),sessionStorage.id?Object(h.jsxs)(p.b,{exact:!0,path:"/App",children:[" ",c," "]}):Object(h.jsx)(p.a,{to:"/"})]})})})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(ye,{})}),document.getElementById("root"))},75:function(e,t,n){}},[[190,1,2]]]);
//# sourceMappingURL=main.cf483840.chunk.js.map