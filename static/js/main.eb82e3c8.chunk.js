(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{74:function(e,a,t){e.exports=t(99)},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){e.exports=t.p+"static/media/beverage-background.02002650.jpg"},99:function(e,a,t){"use strict";t.r(a);var n,r,o,l=t(0),i=t.n(l),c=t(8),s=t.n(c),m=(t(79),t(80),t(24)),u=t(25),d=t(30),p=t(26),g=t(31),h=t(66),f=t.n(h),b=t(4),E=t(128),v=t(129),y=t(130),x=t(68),w=t(133),C=t(137),k=t(132),N=t(131),O=(t(81),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null},t.handleMenu=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t.navHome=function(){window.location.href="/"},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.anchorEl,t=Boolean(a);return i.a.createElement("div",{className:"".concat(e.root," header")},i.a.createElement(E.a,null,i.a.createElement(v.a,null,i.a.createElement("img",{src:"./assets/images/RES-icon-crop.png",alt:"Raven's eye logo",className:"".concat(e.icon," logo"),onClick:this.navHome}),i.a.createElement(y.a,{variant:"h5",color:"textPrimary",className:"".concat(e.grow," brand"),onClick:this.navHome},"Raven's Eye Solutions"),i.a.createElement("a",{href:"#about-us"},i.a.createElement(N.a,{color:"default",className:"navigation-link"},"ABOUT")),i.a.createElement("a",{href:"#contact-form"},i.a.createElement(N.a,{color:"default",variant:"outlined",className:"navigation-link"},"CONTACT")),i.a.createElement(k.a,{className:"hamburger","aria-owns":"menu-appbar","aria-haspopup":"true",onClick:this.handleMenu,color:"default"},i.a.createElement(w.a,null,"menu")),i.a.createElement(x.a,{className:"hamburger",id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:t,onClose:this.handleClose},i.a.createElement("a",{href:"#about-us"},i.a.createElement(C.a,{onClick:this.handleClose},"ABOUT")),i.a.createElement("a",{href:"#contact-form"},i.a.createElement(C.a,{onClick:this.handleClose},"CONTACT"))))))}}]),a}(l.Component)),S=Object(b.a)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginRight:15},icon:{height:"35px",width:"auto",marginRight:"15px"}})(O),j=(t(93),function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.props,t=a.height,n=a.media;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"parallax-container",align:"center",style:{height:t||"480px",backgroundImage:"url(".concat(n,")")}},i.a.createElement(y.a,{variant:"h2",align:"center",color:"textPrimary",className:"parallax-text"},"We See the Future of Your Business"),i.a.createElement("a",{href:"#get-in-touch"},i.a.createElement(N.a,{variant:"contained",color:"primary",className:e.button},"GET IN TOUCH")),i.a.createElement(y.a,{variant:"h3",align:"center",color:"textPrimary",className:"parallax-text"},"Avoid the Confusion of the Technology World while Receiving High-End Products for Your Business.")))}}]),a}(l.Component)),T=Object(b.a)(function(e){return{button:{color:e.palette.text.primary}}})(j),B=(t(94),Object(b.a)({container:{width:"100%",textAlign:"center"}})(function(e){var a=e.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"slant-div",style:{borderBottom:"".concat(e.slantSize," solid ").concat(e.bgColor),transform:"skewY(".concat(e.angle,")")}}),i.a.createElement("div",{className:a.container,style:{backgroundColor:e.bgColor,paddingBottom:"calc(".concat(e.slantSize," / 1.5)")}},e.children))})),A=t(134),W=t(136),M=(t(95),Object(A.a)(function(e){return{container:{display:"flex",flexDirection:"column",backgroundColor:e.palette.primary.main,justifyContent:"center",padding:"30px"},textField:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},button:{margin:"10px auto",width:"100px"}}})),P=!1,R=function(e,a){if(e.target.value.trim().length>0)switch(a){case"n":n=!0;break;case"e":r=!0;break;case"m":P=!0}else"n"===a&&(n=!1),"e"===a&&(r=!1),"em"===a&&(P=!1)},z=function(e){var a=M(),t=function(a){n&&r&&P||(a.preventDefault(),e.setWarningMessage("Please fill out the entire contact form before submitting!"))};return i.a.createElement("form",{className:a.container,noValidate:!0,id:"contact-form",name:"contact-form",method:"POST",onSubmit:function(e){return t(e)}},i.a.createElement(W.a,{required:!0,label:"Name",defaultValue:"",className:a.textField,margin:"normal",variant:"outlined",autoComplete:"name",name:"name",onChange:function(e){return R(e,"n")}}),i.a.createElement(W.a,{required:!0,label:"Email Address",defaultValue:"",className:a.textField,margin:"normal",variant:"outlined",autoComplete:"email",name:"email",onChange:function(e){return R(e,"e")}}),i.a.createElement(W.a,{required:!0,label:"How can we help you?",className:a.textField,margin:"normal",variant:"outlined",name:"message",onChange:function(e){return R(e,"m")}}),i.a.createElement("input",{type:"hidden",name:"form-name",value:"contact-form"}),i.a.createElement(N.a,{variant:"contained",className:a.button,type:"submit"},"Send"))},H=(t(96),Object(b.a)(function(e){return{container:{backgroundColor:e.palette.background.default,padding:"30px"}}})(function(e){var a=e.classes;return i.a.createElement("div",{id:"footer",className:a.container},i.a.createElement(y.a,{variant:"body2",align:"center",color:"textPrimary"},"Raven's Eye Solutions \xa9 2019"))})),D=(t(97),Object(b.a)(function(e){return{modal:{position:"fixed",top:"8vh",width:"calc(90vw - 30px)",left:"50%",marginLeft:"-45vw",padding:"15px",borderRadius:"15px",zIndex:"1200",backgroundColor:e.palette.error.dark,boxShadow:"0 2px 8px 4px "+e.palette.background.paper,textAlign:"center",display:"none"}}})(function(e){var a=e.classes;return i.a.createElement("div",{className:a.modal,id:"modal",onClick:function(){return document.getElementById("modal").style.display="none"}},i.a.createElement(y.a,{variant:"body2",color:"textPrimary"},e.text))})),F=t(69),I={CoolDarkBlue:Object(F.a)({palette:{primary:{main:"#1480c9"},type:"dark"},themeName:"Cool Dark Blue",typography:{useNextVariants:!0,fontFamily:["Merriweather","serif"].join(",")}})},q=t(67),G=t.n(q),V=t(135),U=t(98),Y=[["WordPress","Squarespace","Netlify","Hosting Management"],["React","Node.js","Angular","Svelte.js"],["Pouracle","Data Collection","REST APIs","Social Media Management","Consulting"]],J=["computer","phone_android","wifi"],L=["Websites","Web Applications","Custom Solutions"],$=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={warningMessage:""},t.setWarningMessage=function(e){t.setState({warningMessage:e});var a=document.getElementById("modal");a.style.display="block",clearTimeout(o),o=window.setTimeout(function(){a.style.display="none"},3e3)},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){console.log("The theme: ",I.CoolDarkBlue);var e=this.props.classes;return i.a.createElement(G.a,{theme:I.CoolDarkBlue},i.a.createElement(S,null),i.a.createElement(T,{height:"calc(250px + 30vw)",media:U}),i.a.createElement(B,{slantSize:"80px",angle:"2deg",bgColor:I.CoolDarkBlue.palette.background.default},i.a.createElement(y.a,{className:e.sectionHead,variant:"body2",id:"about-us"},"We create what you need to succeed:"),i.a.createElement(V.a,{container:!0,spacing:2,className:e.grid},J.map(function(a,t){return i.a.createElement(V.a,{item:!0,xs:12,sm:4,key:t},i.a.createElement(y.a,{variant:"body2"},i.a.createElement(w.a,{color:"primary"},a)),i.a.createElement(y.a,{className:f()(e.textSection,e.bold),variant:"body2"},L[t]),Y[t].map(function(a,t){return i.a.createElement(y.a,{className:e.textSection,variant:"body2",key:t},a)}))}))),i.a.createElement(B,{slantSize:"80px",angle:"2deg",bgColor:I.CoolDarkBlue.palette.background.paper,className:e.secondSlantSection},i.a.createElement(y.a,{className:e.sectionHead,variant:"body2",id:"get-in-touch"},"Get In Touch"),i.a.createElement(y.a,{className:e.textSection,variant:"body2"},"1) Make an appointment"),i.a.createElement(y.a,{className:e.textSection,variant:"body2"},"2) Tell us your needs"),i.a.createElement(y.a,{className:e.textSection,variant:"body2"},"3) We will build your future together")),i.a.createElement(z,{setWarningMessage:this.setWarningMessage}),i.a.createElement(H,null),i.a.createElement(D,{text:this.state.warningMessage}))}}]),a}(l.Component),_=Object(b.a)(function(e){return{sectionHead:{fontSize:"2rem",paddingBottom:"20px",width:"85%",margin:"0 auto",color:e.palette.primary.contrastText},textSection:{margin:"0 auto",paddingTop:"10px",width:"90%",maxWidth:"640px",fontSize:"1.3rem",color:e.palette.primary.contrastText},bold:{fontWeight:"bold",fontSize:"1.9rem",paddingTop:"0"},grid:{width:"100%",textAlign:"center",margin:"50px 0"},p:{margin:"0"},contactForm:{height:"800px",marginBottom:"100px"}}})($);var K=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[74,1,2]]]);
//# sourceMappingURL=main.eb82e3c8.chunk.js.map