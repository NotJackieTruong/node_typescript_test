(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[9],{379:function(e,a,t){},471:function(e,a,t){"use strict";t.r(a);var s=t(7),i=t(63),r=t(0),l=t(232),n=t(468),c=t(467),o=t(338),u=t(65),d=t(26),m=t(23),j=t(158),b={updateUser:function(e,a){return Object(j.a)({url:"/users/".concat(a),method:"put",headers:{},data:e})}},f=b,O=t(76),p=(t(379),t(455),t(73)),S=t(233),g=t(472),h=t(386),v=t.n(h),I=(t(33),t(37)),x=t(80),y=t(3);a.default=function(){var e=Object(m.c)(),a=Object(r.useState)({}),t=Object(i.a)(a,2),j=(t[0],t[1],Object(r.useState)("view")),b=Object(i.a)(j,2),h=b[0],N=b[1],E=Object(r.useState)(""),w=Object(i.a)(E,2),C=w[0],L=w[1],T=Object(m.d)((function(e){return e.auth.userInfo}));Object(r.useEffect)((function(){console.log({userInfo:T}),L(x.a.API_ENDPOINT_URL+"/"+T.avatar.url)}),[T]);var P=[Object(y.jsx)(p.a,{className:"align-self-center mr-1 ml-1",style:{color:"#fff",fontSize:1.5*d.a.STYLES.ICON_SIZE}},0),Object(y.jsx)(S.a,{className:"align-self-center mr-1 ml-1",style:{color:"#fff",fontSize:1.5*d.a.STYLES.ICON_SIZE}},1)];return Object(y.jsxs)("div",{style:{backgroundColor:"#fff",padding:d.a.STYLES.SPACING,borderRadius:d.a.STYLES.BORDER_RADIUS,marginRight:d.a.STYLES.SPACING,marginLeft:d.a.STYLES.SPACING,marginBottom:d.a.STYLES.SPACING},children:[Object(y.jsx)(n.a,{title:"My Profile"}),Object(y.jsx)("div",{className:"avatar-cropper-container",style:{width:260,height:260,margin:"auto",backgroundImage:'url("'.concat(C,'")'),backgroundSize:"contain"},children:Object(y.jsx)(v.a,{text:"Change your Avatar",actions:P,icon:Object(y.jsx)(g.a,{style:{color:"#fff",fontSize:2.5*d.a.STYLES.ICON_SIZE}}),maxSize:2097152,apply:function(e){console.log("Apply event: ",e);var a=e,t=new FileReader;t.readAsDataURL(a),t.onload=function(e){console.log("Image: ",e.target.result),I.a.emitUpdateUserProfileImage({_id:T._id,avatarId:T.avatar._id,data:e.target.result})}},isBack:!0,rootStyle:{borderRadius:"100%",overflow:"hidden"}})}),Object(y.jsxs)(c.a,{className:"mt-5",name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a),f.updateUser(Object(s.a)(Object(s.a)({},a),{},{fullName:a.firstName+" "+a.lastName}),T._id).then((function(a){var t;(null===a||void 0===a?void 0:a.success)?(e(Object(O.d)(a.data.user)),l.a.success({message:a.message})):l.a.error({message:null!==(t=null===a||void 0===a?void 0:a.message)&&void 0!==t?t:"Error while updating"});N("view")}))},onFinishFailed:function(e){console.log("Failed:",e)},colon:!1,preserve:!1,requiredMark:!1,scrollToFirstError:!0,children:[Object(y.jsx)(c.a.Item,{label:"First name",name:"firstName",rules:[{required:!0,message:"Please input your first name!"}],initialValue:T.firstName,children:Object(y.jsx)(o.a,{disabled:"view"===h})}),Object(y.jsx)(c.a.Item,{label:"Last name",name:"lastName",rules:[{required:!0,message:"Please input your last name!"}],initialValue:T.lastName,children:Object(y.jsx)(o.a,{disabled:"view"===h})}),Object(y.jsx)(c.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],initialValue:T.email,children:Object(y.jsx)(o.a,{disabled:"view"===h})}),Object(y.jsx)(c.a.Item,{wrapperCol:{offset:8,span:16},children:"view"===h?Object(y.jsx)(u.a,{type:"primary",onClick:function(){N("edit")},children:"Edit"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(u.a,{htmlType:"button",style:{margin:"0 8px"},onClick:function(){N("view")},type:"danger",children:"Cancel"}),Object(y.jsx)(u.a,{htmlType:"submit",type:"primary",children:"Save"})]})})]})]})}}}]);
//# sourceMappingURL=9.a9da0e59.chunk.js.map