(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{175:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},243:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},252:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),i=n.n(r),s=n(28),o=(n(240),n(22)),l=n(35),j=n(123),b=n.n(j),d=n(206),u=n.n(d),m=n(205),O=n.n(m),h=(n(241),n(3)),x=["btn--primary","btn--outline"],p=["btn--medium","btn--large","btn--mobile","btn--wide"],f=["primary","blue","red","green"],g=function(e){var t=e.children,n=e.type,a=e.onClick,c=e.buttonStyle,r=e.buttonSize,i=e.buttonColour,s=x.includes(c)?c:x[0],o=p.includes(r)?r:p[0],l=f.includes(i)?i:null;return Object(h.jsx)("button",{className:"btn ".concat(s," ").concat(o," ").concat(l),onClick:a,type:n,children:t})};n(243);var v=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),i=Object(s.a)(r,2),l=i[0],j=i[1],d=function(){return c(!1)},m=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(a.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"navbar",children:Object(h.jsxs)("div",{className:"navbar-container container",children:[Object(h.jsxs)(o.b,{to:"/",className:"navbar-logo",onClick:d,children:[Object(h.jsx)(b.a,{className:"navbar-icon",children:" "}),"RecCenter Booking"]}),Object(h.jsx)("div",{className:"menu-icon",onClick:function(){return c(!n)},children:n?Object(h.jsx)(O.a,{}):Object(h.jsx)(u.a,{})}),Object(h.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(o.b,{to:"/",className:"nav-links",onClick:d,children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(o.b,{to:"/about",className:"nav-links",onClick:d,children:"About"})}),Object(h.jsx)("li",{className:"nav-login-btn",children:l?Object(h.jsx)(o.b,{to:"/centre/login",className:"login-btn-link",children:Object(h.jsx)(g,{buttonStyle:"btn--outline",children:" Centre Login "})}):Object(h.jsx)(o.b,{to:"/centre/login",className:"login-btn-link",onClick:d,children:Object(h.jsx)(g,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:" Centre Login "})})}),Object(h.jsx)("li",{className:"nav-login-btn",children:l?Object(h.jsx)(o.b,{to:"/user/login",className:"login-btn-link",children:Object(h.jsx)(g,{buttonStyle:"btn--outline",children:" User Login "})}):Object(h.jsx)(o.b,{to:"/user/login",className:"login-btn-link",onClick:d,children:Object(h.jsx)(g,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:" User Login "})})})]})]})})})},y=n(13);n(249),n(250);var C=function(e){var t=e.imageAlignment,n=e.topLine,a=e.headline,c=e.isLightText,r=e.description,i=e.isLightTextDescription,s=e.buttonLabel,l=e.image,j=e.alt;return Object(h.jsxs)("div",{className:"row section-row",style:{display:"flex",flexDirection:"left"===t?"row-reverse":"row"},children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"section-row-text-wrapper",children:[Object(h.jsx)("div",{className:"top-line",children:n}),Object(h.jsx)("h1",{className:c?"heading":"heading dark",children:a}),Object(h.jsx)("p",{className:i?"section-row-subtitle":"section-row-subtitle dark",children:r}),Object(h.jsx)(o.b,{to:"user/register",children:Object(h.jsx)(g,{buttonSize:"btn--wide",buttonColour:"blue",children:s})})]})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"section-row-img-wrapper",children:Object(h.jsx)("img",{src:l,alt:j,className:"section-row-img"})})})]})};var k=function(e){var t=e.isLightBackground,n=e.imageAlignment,a=e.topLine,c=e.headline,r=e.isLightText,i=e.description,s=e.isLightTextDescription,o=e.buttonLabel,l=e.image,j=e.alt;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:t?"home__main-section":"home__main-section dark-background",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(C,{imageAlignment:n,topLine:a,headline:c,isLightText:r,description:i,isLightTextDescription:s,buttonLabel:o,image:l,alt:j})})})})},N={isLightBackground:!1,imageAlignment:"",topLine:"REC CENTER",headline:"COME JOIN US",isLightText:!0,description:"Register for classes at the RecCenter!",isLightTextDescription:!0,buttonLabel:"Register Today",image:"schedule_calendar_home.svg",alt:"Alternate text"};var w=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(k,Object(y.a)({},N))})},D=n(19),S=n.n(D),T=n(80),L=n(37),B=n(372),E=n(29),A=n(18),q=n(60),F=n(23),V=(n(175),["children","style"]),I=["onFieldChange","appointmentData"];var R=function(){var e=[],t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1];function i(){return o.apply(this,arguments)}function o(){return(o=Object(L.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://rec-center-booking.herokuapp.com/rec-center").then((function(e){return e.json()})).then((function(t){return e=t})).catch((function(e){return e}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(L.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rec-center-booking.herokuapp.com/rec-center",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log("Added appointment")})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(L.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(t)[0],console.log(t[n]),e.next=4,fetch("https://rec-center-booking.herokuapp.com/rec-center/"+n,{method:"PATCH",body:JSON.stringify(t[n]),headers:{"Content-Type":"application/json","x-Trigger":"CORS"}}).then((function(e){return console.log("Edited card")})).catch((function(e){return e}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(L.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rec-center-booking.herokuapp.com/rec-center/"+t,{method:"delete"}).then((function(e){return console.log("Deleted appointment")})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){i().then((function(){return r(e)})).catch((function(e){return e}))}),[]);var d=Object(q.a)((function(e){return{today:{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)},weekend:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.06)},todayCell:{backgroundColor:Object(F.fade)(e.palette.primary.main,.1),"&:hover":{backgroundColor:Object(F.fade)(e.palette.primary.main,.14)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)}},weekendCell:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04),"&:hover":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)}},todayApp:{backgroundColor:"#0EA5E9",borderRadius:"8px"}}}));return Object(h.jsx)("div",{id:"main-panel",children:Object(h.jsx)(B.a,{id:"calendar",children:Object(h.jsxs)(A.f,{data:c,locale:"en-US",children:[Object(h.jsx)(E.s,{}),Object(h.jsx)(E.k,{onCommitChanges:function(t){var n=t.added,a=t.changed,c=t.deleted;n&&(function(e){return l.apply(this,arguments)}(n).then((function(){return console.log(n)})),i().then((function(e){return console.log(e)})).then((function(){return r(e)}))),a&&(function(e){return j.apply(this,arguments)}(a).then((function(){return console.log(a)})),i().then((function(e){return console.log(e)})).then((function(){return r(e)})).then((function(){return console.log(e)}))),void 0!==c&&(function(e){return b.apply(this,arguments)}(c).then((function(){return console.log(c)})),i().then((function(e){return console.log(e)})).then((function(){return r(e)})).then((function(){return console.log(e)})))}}),Object(h.jsx)(E.m,{}),Object(h.jsx)(A.i,{startDayHour:9,endDayHour:19,timeTableCellComponent:function(e){var t=d(),n=e.startDate,a=new Date(n);return a.getDate()===(new Date).getDate()?Object(h.jsx)(A.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.todayCell})):0===a.getDay()||6===a.getDay()?Object(h.jsx)(A.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekendCell})):Object(h.jsx)(A.i.TimeTableCell,Object(y.a)({},e))},dayScaleCellComponent:function(e){var t=d(),n=e.startDate;return e.today?Object(h.jsx)(A.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.today})):0===n.getDay()||6===n.getDay()?Object(h.jsx)(A.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekend})):Object(h.jsx)(A.i.DayScaleCell,Object(y.a)({},e))}}),Object(h.jsx)(A.d,{}),Object(h.jsx)(A.h,{}),Object(h.jsx)(A.e,{}),Object(h.jsx)(A.g,{}),Object(h.jsx)(A.c,{appointmentComponent:function(e){var t=e.children,n=(e.style,Object(T.a)(e,V));return Object(h.jsx)(A.c.Appointment,Object(y.a)(Object(y.a)({},n),{},{className:d().todayApp,children:t}))}}),Object(h.jsx)(A.b,{showCloseButton:!0,showOpenButton:!0}),Object(h.jsx)(A.a,{basicLayoutComponent:function(e){var t=e.onFieldChange,n=e.appointmentData,a=Object(T.a)(e,I);return Object(h.jsxs)(A.a.BasicLayout,Object(y.a)(Object(y.a)({appointmentData:n,onFieldChange:t},a),{},{children:[Object(h.jsx)(A.a.Label,{text:"Location",type:"title"}),Object(h.jsx)(A.a.TextEditor,{placeholder:"Room location",type:"ordinaryTextEditor",value:n.location,onValueChange:function(e){t({location:e})}}),Object(h.jsx)(A.a.Label,{text:"Maximum Class Size",type:"title"}),Object(h.jsx)(A.a.TextEditor,{placeholder:"0",type:"numberEditor",value:n.maxClassSize,onValueChange:function(e){t({maxClassSize:e})}}),Object(h.jsx)(A.a.BooleanEditor,{label:"Vaccinated participants only?",readOnly:!1,value:n.vaccinatedOnly,onValueChange:function(e){t({vaccinationOnly:e})}})]}))},booleanEditorComponent:function(e){return Object(h.jsx)(A.a.BooleanEditor,Object(y.a)(Object(y.a)({},e),{},{readOnly:!0}))},messages:{moreInformationLabel:"Class Description"}})]})})})},P=n(167),_=n(213),W=n.n(_),z=n(421),H=n(139),M=n.n(H),U=n(10),J=["children","style"],K=["children","appointmentData","classes"],Y=["children","appointmentData","classes"],G=["classes"];var Q=function(){var e=[],t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1];function i(){return(i=Object(L.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://rec-center-booking.herokuapp.com/user-cal").then((function(e){return e.json()})).then((function(t){return e=t})).catch((function(e){return e}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(L.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rec-center-booking.herokuapp.com/user-cal/"+t,{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-Trigger":"CORS"}}).then((function(e){return console.log("Edited card")})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){(function(){return i.apply(this,arguments)})().then((function(){return r(e)})).catch((function(e){return e}))}),[]);var l=Object(q.a)((function(e){return{today:{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)},weekend:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.06)},todayCell:{backgroundColor:Object(F.fade)(e.palette.primary.main,.1),"&:hover":{backgroundColor:Object(F.fade)(e.palette.primary.main,.14)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.primary.main,.16)}},weekendCell:{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04),"&:hover":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)},"&:focus":{backgroundColor:Object(F.fade)(e.palette.action.disabledBackground,.04)}},todayApp:{backgroundColor:"#558d60",borderRadius:"8px"}}})),j=function(e){return{icon:{color:e.palette.action.active},textCenter:{textAlign:"center"},headerColor:{backgroundColor:"#558d60"},header:{height:"260px",backgroundSize:"cover"},commandButton:{backgroundColor:"#96cfa9"}}},b=Object(U.a)(j,{name:"Header"})((function(e){e.children;var t=e.appointmentData,n=e.classes,a=Object(T.a)(e,K);return Object(h.jsx)(A.b.Header,Object(y.a)(Object(y.a)({},a),{},{className:n.headerColor,appointmentData:t,children:Object(h.jsx)(P.a,{onClick:function(){return function(e){return o.apply(this,arguments)}(t._id)},className:n.commandButton,children:Object(h.jsx)(W.a,{})})}))})),d=Object(U.a)(j,{name:"Content"})((function(e){e.children;var t=e.appointmentData,n=e.classes,a=Object(T.a)(e,Y);return Object(h.jsx)(A.b.Content,Object(y.a)(Object(y.a)({},a),{},{appointmentData:t,children:Object(h.jsxs)(z.a,{container:!0,alignItems:"center",children:[Object(h.jsx)(z.a,{item:!0,xs:2,className:n.textCenter,children:Object(h.jsx)(M.a,{className:n.icon})}),Object(h.jsx)(z.a,{item:!0,xs:10,children:Object(h.jsx)("span",{children:t.location})}),Object(h.jsx)(z.a,{item:!0,xs:2,className:n.textCenter,children:Object(h.jsx)(M.a,{className:n.icon})}),Object(h.jsx)(z.a,{item:!0,xs:10,children:Object(h.jsx)("span",{children:t.notes})}),Object(h.jsx)(z.a,{item:!0,xs:2,className:n.textCenter,children:Object(h.jsx)(M.a,{className:n.icon})}),Object(h.jsx)(z.a,{item:!0,xs:10,children:Object(h.jsxs)("span",{children:["Max ",t.maxClassSize," people in the class."]})})]})}))})),u=Object(U.a)(j,{name:"CommandButton"})((function(e){var t=e.classes,n=Object(T.a)(e,G);return Object(h.jsx)(A.b.CommandButton,Object(y.a)(Object(y.a)({},n),{},{className:t.commandButton}))}));return Object(h.jsx)("div",{id:"main-panel",children:Object(h.jsx)(B.a,{id:"calendar",children:Object(h.jsxs)(A.f,{data:c,locale:"en-US",children:[Object(h.jsx)(E.s,{}),Object(h.jsx)(A.i,{startDayHour:9,endDayHour:19,timeTableCellComponent:function(e){var t=l(),n=e.startDate,a=new Date(n);return a.getDate()===(new Date).getDate()?Object(h.jsx)(A.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.todayCell})):0===a.getDay()||6===a.getDay()?Object(h.jsx)(A.i.TimeTableCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekendCell})):Object(h.jsx)(A.i.TimeTableCell,Object(y.a)({},e))},dayScaleCellComponent:function(e){var t=l(),n=e.startDate;return e.today?Object(h.jsx)(A.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.today})):0===n.getDay()||6===n.getDay()?Object(h.jsx)(A.i.DayScaleCell,Object(y.a)(Object(y.a)({},e),{},{className:t.weekend})):Object(h.jsx)(A.i.DayScaleCell,Object(y.a)({},e))}}),Object(h.jsx)(A.h,{}),Object(h.jsx)(A.e,{}),Object(h.jsx)(A.g,{}),Object(h.jsx)(A.c,{appointmentComponent:function(e){var t=e.children,n=(e.style,Object(T.a)(e,J));return Object(h.jsx)(A.c.Appointment,Object(y.a)(Object(y.a)({},n),{},{className:l().todayApp,children:t}))}}),Object(h.jsx)(A.b,{headerComponent:b,contentComponent:d,commandButtonComponent:u,showCloseButton:!0})]})})})},X=(n(252),n(97));var Z=function(){return Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsxs)("section",{className:"footer-subscription",children:[Object(h.jsx)("p",{className:"footer-subscription-heading",children:"Join our mailing list to receive the latest updates"}),Object(h.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(h.jsx)("div",{className:"input-areas",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(h.jsx)(g,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(h.jsxs)("div",{className:"footer-links",children:[Object(h.jsxs)("div",{className:"footer-link-wrapper",children:[Object(h.jsxs)("div",{className:"footer-link-items",children:[Object(h.jsx)("h2",{children:"About Us"}),Object(h.jsx)(o.b,{to:"/",children:"How it works"}),Object(h.jsx)(o.b,{to:"/",children:"Careers"}),Object(h.jsx)(o.b,{to:"/",children:"Investors"}),Object(h.jsx)(o.b,{to:"/",children:"Terms of Service"})]}),Object(h.jsxs)("div",{className:"footer-link-items",children:[Object(h.jsx)("h2",{children:"Contact Us"}),Object(h.jsx)(o.b,{to:"/",children:"Contact"}),Object(h.jsx)(o.b,{to:"/",children:"Support"}),Object(h.jsx)(o.b,{to:"/",children:"Destinations"}),Object(h.jsx)(o.b,{to:"/",children:"Sponsorships"})]})]}),Object(h.jsxs)("div",{className:"footer-link-wrapper",children:[Object(h.jsxs)("div",{className:"footer-link-items",children:[Object(h.jsx)("h2",{children:"Videos"}),Object(h.jsx)(o.b,{to:"/",children:"Submit Video"}),Object(h.jsx)(o.b,{to:"/",children:"Ambassadors"}),Object(h.jsx)(o.b,{to:"/",children:"Agency"}),Object(h.jsx)(o.b,{to:"/",children:"Influencer"})]}),Object(h.jsxs)("div",{className:"footer-link-items",children:[Object(h.jsx)("h2",{children:"Social Media"}),Object(h.jsx)(o.b,{to:"/",children:"Instagram"}),Object(h.jsx)(o.b,{to:"/",children:"Facebook"}),Object(h.jsx)(o.b,{to:"/",children:"Youtube"}),Object(h.jsx)(o.b,{to:"/",children:"Twitter"})]})]})]}),Object(h.jsx)("section",{className:"social-media",children:Object(h.jsxs)("div",{className:"social-media-wrap",children:[Object(h.jsx)("div",{className:"footer-logo",children:Object(h.jsxs)(o.b,{to:"/",className:"social-logo",children:[Object(h.jsx)(b.a,{className:"navbar-icon"}),"COVID BOOKING"]})}),Object(h.jsx)("small",{className:"website-rights",children:"COVID BOOKING \xa9 2020"}),Object(h.jsxs)("div",{className:"social-icons",children:[Object(h.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook",children:Object(h.jsx)(X.a,{})}),Object(h.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram",children:Object(h.jsx)(X.b,{})}),Object(h.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Youtube",children:Object(h.jsx)(X.e,{})}),Object(h.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(h.jsx)(X.d,{})}),Object(h.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(h.jsx)(X.c,{})})]})]})})]})},$=n(433),ee=n(107),te=n(427),ne=n(218),ae=n(425),ce=n(431),re=n(428),ie=n(130),se=n.n(ie),oe=n(81),le=n(426),je=n(42),be=n(131),de=n(58),ue=n(163),me=n.n(ue),Oe="http://localhost:8000";var he=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),marginBottom:e.spacing(5)},submit:{margin:e.spacing(3,0,2)}}})),xe=de.b().shape({email:de.c().required("Email is required").email("Email is invalid"),password:de.c().required("Password is required").min(6,"Password must be at least 6 characters in length").max(50,"Password must not exceed 50 characters in length")});var pe=function(e){var t=e.user,n=he(),a=Object(je.e)({resolver:Object(be.a)(xe)}),c=a.handleSubmit,r=a.control;return Object(h.jsxs)(le.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(te.a,{}),Object(h.jsxs)("div",{className:n.paper,children:[Object(h.jsx)($.a,{className:n.avatar,children:Object(h.jsx)(se.a,{})}),Object(h.jsxs)(oe.a,{component:"h1",variant:"h5",children:[t," Sign In"]}),Object(h.jsxs)("form",{onSubmit:c((function(e){alert(JSON.stringify(e)),function(e){me.a.post("".concat(Oe,"/user/login"),e).then((function(e){console.log(e)}))}(e)})),className:n.form,noValidate:!0,children:[Object(h.jsx)(je.a,{control:r,name:"email",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(h.jsx)(ne.a,Object(y.a)(Object(y.a)({},t),{},{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}}),Object(h.jsx)(je.a,{control:r,name:"password",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(h.jsx)(ne.a,Object(y.a)(Object(y.a)({},t),{},{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:!!n,helperText:n?n.message:null}))}}),Object(h.jsx)(je.a,{control:r,name:"rememberMe",render:function(e){var t=e.field,n=t.value,a=t.onChange;return Object(h.jsx)(ae.a,{control:Object(h.jsx)(ce.a,{checked:n,onChange:a,value:"remember",color:"primary"}),label:"Remember me"})}}),Object(h.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Sign In"}),Object(h.jsx)(z.a,{container:!0,justifyContent:"center",children:Object(h.jsx)(z.a,{item:!0,children:Object(h.jsx)(re.a,{href:"/user/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})};var fe=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(pe,{user:"User"})})};var ge=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(pe,{user:"Recreation Centre"})})},ve=n(424),ye=n(164),Ce=n(34),ke=n(429),Ne=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3),marginBottom:e.spacing(5)},submit:{margin:e.spacing(3,0,2)}}})),we=de.b().shape({firstName:de.c().required("First name is required"),lastName:de.c().required("Last name is required"),email:de.c().required("Email is required").email("Email is invalid"),password:de.c().required("Password is required").min(6,"Password must be at least 6 characters in length").max(50,"Password must not exceed 50 characters in length"),firstDose:de.a().notRequired(),secondDose:de.a().notRequired()});function De(){var e=Ne(),t=Object(je.e)({resolver:Object(be.a)(we)}),n=t.handleSubmit,c=t.control,r=t.setValue,i=Object(a.useState)(null),o=Object(s.a)(i,2),l=o[0],j=o[1],b=Object(a.useState)(null),d=Object(s.a)(b,2),u=d[0],m=d[1];return Object(h.jsxs)(le.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(te.a,{}),Object(h.jsxs)("div",{className:e.paper,children:[Object(h.jsx)($.a,{className:e.avatar,children:Object(h.jsx)(se.a,{})}),Object(h.jsx)(oe.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(h.jsxs)("form",{onSubmit:n((function(e){alert(JSON.stringify(e)),function(e){me.a.post("".concat(Oe,"/user/register"),e).then((function(e){console.log(e)}))}(e)})),className:e.form,noValidate:!0,children:[Object(h.jsxs)(z.a,{container:!0,spacing:2,children:[Object(h.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(je.a,{control:c,name:"firstName",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(h.jsx)(ne.a,Object(y.a)(Object(y.a)({},t),{},{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(h.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(je.a,{control:c,name:"lastName",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(h.jsx)(ne.a,Object(y.a)(Object(y.a)({},t),{},{autoComplete:"lname",name:"lastName",variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(h.jsx)(z.a,{item:!0,xs:12,children:Object(h.jsx)(je.a,{control:c,name:"email",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(h.jsx)(ne.a,Object(y.a)(Object(y.a)({},t),{},{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(h.jsx)(z.a,{item:!0,xs:12,children:Object(h.jsx)(je.a,{control:c,name:"password",defaultValue:"",render:function(e){var t=e.field,n=e.fieldState.error;return Object(h.jsx)(ne.a,Object(y.a)(Object(y.a)({},t),{},{autoComplete:"current-password",name:"password",variant:"outlined",required:!0,fullWidth:!0,id:"password",type:"password",label:"Password",autoFocus:!0,error:!!n,helperText:n?n.message:null}))}})}),Object(h.jsx)(z.a,{item:!0,xs:12,children:Object(h.jsx)(ve.a,{children:" Please select the date you received your vaccination dose(s) below. Omit if you haven't been vaccinated."})}),Object(h.jsx)(Ce.a,{utils:ye.a,children:Object(h.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(ke.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"firstDose",emptyLabel:"Dose 1 Date",value:l,onChange:function(e){j(e),r("firstDose",e,{shouldValidate:!0,shouldDirty:!0})},disableFuture:"true",KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(h.jsx)(Ce.a,{utils:ye.a,children:Object(h.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(ke.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"secondDose",emptyLabel:"Dose 2 Date",value:u,onChange:function(e){m(e),r("secondDose",e,{shouldValidate:!0,shouldDirty:!0})},disableFuture:"true",KeyboardButtonProps:{"aria-label":"change date"}})})})]}),Object(h.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(h.jsx)(z.a,{container:!0,justifyContent:"center",children:Object(h.jsx)(z.a,{item:!0,children:Object(h.jsx)(re.a,{href:"/user/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var Se=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(De,{})})};var Te=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2);return t[0],t[1],Object(h.jsx)("div",{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:w}),Object(h.jsx)(l.a,{exact:!0,path:"/rec-center",component:R}),Object(h.jsx)(l.a,{exact:!0,path:"/user-cal",component:Q}),Object(h.jsx)(l.a,{exact:!0,path:"/user/login",component:fe}),Object(h.jsx)(l.a,{exact:!0,path:"/user/register",component:Se}),Object(h.jsx)(l.a,{path:"/user/:id/classes"}),Object(h.jsx)(l.a,{exact:!0,path:"/centre/login",component:ge}),Object(h.jsx)(l.a,{exact:!0,path:"/centre/register"}),Object(h.jsx)(l.a,{exact:!0,path:"/centre/:id/classes"}),Object(h.jsx)(l.a,{exact:!0,path:"/about"})]}),Object(h.jsx)(Z,{})]})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Te,{})}),document.getElementById("root"))}},[[369,1,2]]]);
//# sourceMappingURL=main.e7153284.chunk.js.map