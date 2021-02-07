(this.webpackJsonpcontent=this.webpackJsonpcontent||[]).push([[0],{102:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(58),r=(n(0),n(102),n(13)),i=n(42),c=n(16),l=n(29),o={alertCreated:Object(l.createAction)("alert created")(),alertDisplayed:Object(l.createAction)("alert displayed")(),alertCancelButtonClicked:Object(l.createAction)("alert cancel button clicked")(),alertCleared:Object(l.createAction)("alert cleared")()},s=n(31),d=n(76),u=n(85),j=n(77),b=n(15),h=n.n(b),p=n(30),x=h.a.mark(O),m=h.a.mark(f);function O(e){var t,n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(p.e)(o.alertCancelButtonClicked);case 3:if(t=a.sent,n=t.payload,e!==n){a.next=7;break}return a.abrupt("return");case 7:a.next=0;break;case 9:case"end":return a.stop()}}),x)}function f(e){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(p.c)(o.alertDisplayed(t));case 4:if(!t.duration){n.next=9;break}return n.next=7,Object(p.d)({delay:Object(p.b)(t.duration),click:O(t.id)});case 7:n.next=11;break;case 9:return n.next=11,Object(p.d)({click:O(t.id)});case 11:return n.next=13,Object(p.c)(o.alertCleared(t.id));case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),console.log(n.t0);case 18:case"end":return n.stop()}}),m,null,[[1,15]])}var g,v=h.a.mark(y);function y(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.f)(Object(l.getType)(o.alertCreated),f)]);case 2:case"end":return e.stop()}}),v)}!function(e){e[e.Right=0]="Right",e[e.Left=1]="Left"}(g||(g={}));var k=Object(u.a)(),C=Object(s.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alerts:[]},t=arguments.length>1?arguments[1]:void 0;return Object(j.a)(e,(function(e){switch(t.type){case Object(l.getType)(o.alertDisplayed):e.alerts=[].concat(Object(c.a)(e.alerts),[t.payload]);break;case Object(l.getType)(o.alertCleared):e.alerts=e.alerts.filter((function(e){return e.id!==t.payload}))}}))}),Object(d.composeWithDevTools)(Object(s.applyMiddleware)(k)));k.run(y);var w,A,B,S,D,z=i.c,P=n(164),T=n(43),L=n(44),W=(L.a.form(w||(w=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),L.a.form(A||(A=Object(T.a)(["\n  padding: 20px;\n  display: grid;\n  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  color: rgba(42, 42, 42, 1);\n  max-width: 330px;\n"])))),I=n(151),N=n(68),R=n.n(N),V=n(163),E=n(152),J=L.a.div(B||(B=Object(T.a)(["\n  position: absolute;\n  top: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),M=Object(L.a)(J)(S||(S=Object(T.a)(["\n  align-items: flex-start;\n  left: 0;\n"]))),q=Object(L.a)(J)(D||(D=Object(T.a)(["\n  align-items: flex-end;\n  right: 0;\n"]))),F=n(65),H=n(6),G=function(){var e=Object(i.b)(),t=z((function(e){return e.alerts})),n=Object(F.b)(t,(function(e){return e.id}),{unique:!0,trail:400/t.length,from:{opacity:0,transform:"scale(0.7)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.7)"}});return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(M,{children:n.filter((function(e){return e.item.position===g.Left})).map((function(t){var n=t.item,a=t.props,r=t.key;return Object(H.jsx)(F.a.div,{style:a,children:Object(H.jsxs)(V.a,{id:n.id,action:n.dismissible?Object(H.jsx)(I.a,{color:"inherit",size:"small",onClick:function(){return e(o.alertCancelButtonClicked(n.id))},children:Object(H.jsx)(R.a,{fontSize:"inherit"})}):null,children:[Object(H.jsx)(E.a,{children:n.title}),n.message]})},r)}))}),Object(H.jsx)(q,{children:n.filter((function(e){return e.item.position===g.Right})).map((function(t){var n=t.item,a=t.props,r=t.key;return Object(H.jsx)(F.a.div,{style:a,children:Object(H.jsxs)(V.a,{id:n.id,action:n.dismissible?Object(H.jsx)(I.a,{color:"inherit",size:"small",onClick:function(){return e(o.alertCancelButtonClicked(n.id))},children:Object(H.jsx)(R.a,{fontSize:"inherit"})}):null,children:[Object(H.jsx)(E.a,{children:n.title}),n.message]},n.id)},r)}))})]})},K=n(162),Q=n(87),U=n(153),X=n(154),Y=n(166),Z=n(158),$=n(165),_=n(157),ee=n(161),te=n(168),ne=n(159),ae=n(35);function re(){var e=Object(i.b)(),t=Object.keys(g).filter((function(e){return!isNaN(Number(e))})),n=Object(ae.b)({defaultValues:{title:"Welcome!",message:"Thanks for checking out my project.",dismissible:!0,durationAllowed:!1,duration:5e3,position:0}}),r=n.control,c=n.handleSubmit,l=n.watch;return Object(H.jsx)("div",{className:"App",children:Object(H.jsxs)(K.a,{display:"flex",alignItems:"center",minHeight:"100vh",flexDirection:"column",children:[Object(H.jsx)(G,{}),Object(H.jsxs)(K.a,{margin:"20px",children:[Object(H.jsx)(Q.a,{variant:"h3",align:"center",component:"h1",gutterBottom:!0,children:"SagaAlert"}),Object(H.jsx)(Q.a,{paragraph:!0,gutterBottom:!0,children:"This project highlights how easy it is to create a notification system using Redux Saga."})]}),Object(H.jsxs)(W,{onSubmit:c((function(t){(t.durationAllowed||t.dismissible)&&e(o.alertCreated({id:Object(P.a)(),title:t.title,message:t.message,duration:t.durationAllowed?t.duration:void 0,dismissible:t.dismissible,position:t.position}))})),style:{background:"#fff"},children:[Object(H.jsxs)(U.a,{margin:"normal",children:[Object(H.jsx)(X.a,{style:{marginBottom:"4px",fontSize:"14px"},children:"Title"}),Object(H.jsx)(ae.a,{name:"title",control:r,defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return Object(H.jsx)(Y.a,{placeholder:"Placeholder",fullWidth:!0,onChange:t,value:n,InputLabelProps:{shrink:!0}})}})]}),Object(H.jsxs)(U.a,{margin:"normal",children:[Object(H.jsx)(X.a,{style:{marginBottom:"4px",fontSize:"14px"},children:"Message"}),Object(H.jsx)(ae.a,{name:"message",control:r,defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return Object(H.jsx)(Y.a,{placeholder:"Placeholder",fullWidth:!0,onChange:t,value:n,InputLabelProps:{shrink:!0}})}})]}),Object(H.jsxs)(U.a,{margin:"normal",style:{display:"flex",justifyContent:"space-between",flexDirection:"row"},children:[Object(H.jsx)(Z.a,{control:Object(H.jsx)(ae.a,{name:"durationAllowed",control:r,render:function(e){return Object(H.jsx)($.a,Object(a.a)(Object(a.a)({},e),{},{color:"primary",checked:e.value,onChange:function(t){return e.onChange(t.target.checked)}}))}}),label:"Duration?"}),Object(H.jsx)(Z.a,{control:Object(H.jsx)(ae.a,{name:"dismissible",control:r,render:function(e){return Object(H.jsx)($.a,Object(a.a)(Object(a.a)({},e),{},{color:"secondary",checked:e.value,onChange:function(t){return e.onChange(t.target.checked)}}))}}),label:"Dismissible?"})]}),!l("durationAllowed")&&!l("dismissible")&&Object(H.jsx)(_.a,{children:"Expires or Dismissible must be allowed"}),Object(H.jsxs)(U.a,{margin:"normal",children:[Object(H.jsx)(X.a,{style:{marginBottom:"4px",fontSize:"14px"},children:"Duration"}),Object(H.jsx)(ae.a,{name:"duration",control:r,defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return Object(H.jsx)(Y.a,{placeholder:"Placeholder",fullWidth:!0,type:"number",onChange:t,disabled:!l("duration"),value:n,InputLabelProps:{shrink:!0}})}})]}),Object(H.jsxs)(U.a,{margin:"normal",children:[Object(H.jsx)(X.a,{style:{marginBottom:"4px",fontSize:"14px"},children:"Position"}),Object(H.jsx)(ae.a,{name:"position",control:r,render:function(e){var n=e.onChange,a=e.value;return Object(H.jsx)(ee.a,{variant:"outlined",value:t[a],onChange:n,children:t.map((function(e,t){return Object(H.jsx)(te.a,{value:t,children:g[e]},e)}))})}})]}),Object(H.jsx)(U.a,{margin:"normal",children:Object(H.jsx)(ne.a,{fullWidth:!0,color:"primary",variant:"contained",type:"submit",disabled:!l("duration")&&!l("dismissible"),children:"Create"})})]})]})})}var ie=document.getElementById("root");Object(r.render)(Object(H.jsx)(i.a,{store:C,children:Object(H.jsx)(re,{})}),ie)}},[[121,1,2]]]);
//# sourceMappingURL=main.5d5c4749.chunk.js.map