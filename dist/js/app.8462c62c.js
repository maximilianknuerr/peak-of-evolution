(function(){"use strict";var t={6695:function(t,e,n){var a=n(9242),o=n(3396),i=n(7718),r=n(9271);const s={id:"app"};function l(t,e,n,a,l,c){const u=(0,o.up)("splash-screen"),f=(0,o.up)("NavBar"),d=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(i.q,null,{default:(0,o.w5)((()=>[t.isSplash?((0,o.wg)(),(0,o.j4)(u,{key:0,isSplash:t.isSplash},null,8,["isSplash"])):(0,o.kq)("",!0),t.isSplash?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(r.O,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(f),(0,o.Wm)(d)])),_:1}))])),_:1})])}var c=n(6949),u=n(6422),f=n(5936),d=n(3130),m=n(9234),p=n(3289),v=n(4310);const w={key:0},g=(0,o.Uk)("mdi-circle-small"),b=(0,o.Uk)("ABOUT "),h=(0,o.Uk)("mdi-circle-small"),_=(0,o.Uk)("FACTS "),k=(0,o.Uk)("mdi-circle-small"),y=(0,o.Uk)("TEAM "),W=(0,o.Uk)("mdi-circle-small"),C=(0,o.Uk)("TRAILER "),j=(0,o.Uk)("mdi-circle-small"),T=(0,o.Uk)("CONTACT ");function x(t,e,n,i,r,s){const l=(0,o.up)("v-toolbar-side-icon"),x=(0,o.up)("router-link"),O=(0,o.up)("list-menu");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(f.L,{height:"100",color:"rgba(235, 229, 210, 1)",class:"navbar",fixed:"",app:"",elevation:"0"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{class:"mr-3",src:c,height:"80px",width:"80px"})])),_:1}),(0,o.Wm)(m.C),s.isMobile?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(x,{to:"/about",class:"navbar-btn","active-link":"active"},{default:(0,o.w5)((()=>[(0,o.Wm)(p.t,{class:"dot",color:"#FF5808",size:"70px"},{default:(0,o.w5)((()=>[g])),_:1}),b])),_:1}),(0,o.Wm)(x,{to:"/facts",class:"navbar-btn","active-class":"active"},{default:(0,o.w5)((()=>[(0,o.Wm)(p.t,{class:"dot",color:"#FF5808",size:"70px"},{default:(0,o.w5)((()=>[h])),_:1}),_])),_:1}),(0,o.Wm)(x,{to:"/team",class:"navbar-btn","active-class":"active"},{default:(0,o.w5)((()=>[(0,o.Wm)(p.t,{class:"dot",color:"#FF5808",size:"70px"},{default:(0,o.w5)((()=>[k])),_:1}),y])),_:1}),(0,o.Wm)(x,{to:"/trailer",class:"navbar-btn"},{default:(0,o.w5)((()=>[(0,o.Wm)(p.t,{class:"dot",color:"#FF5808",size:"70px"},{default:(0,o.w5)((()=>[W])),_:1}),C])),_:1}),(0,o.Wm)(x,{to:"/contact",class:"navbar-btn"},{default:(0,o.w5)((()=>[(0,o.Wm)(p.t,{class:"dot",color:"#FF5808",size:"70px"},{default:(0,o.w5)((()=>[j])),_:1}),T])),_:1})])),s.isMobile?((0,o.wg)(),(0,o.j4)(d.T,{key:1,onClick:e[0]||(e[0]=(0,a.iM)((e=>t.menu=!t.menu),["stop"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{src:u})])),_:1})):(0,o.kq)("",!0)])),_:1}),t.menu&&s.isMobile?((0,o.wg)(),(0,o.j4)(O,{key:0,style:{"z-index":"50","box-shadow":"0 2px 2px 0 rgba(0, 0, 0, 0.16)",position:"fixed",width:"100%"},onClicked:e[1]||(e[1]=e=>t.menu=!t.menu)})):(0,o.kq)("",!0)])}var O=n(4075),M=n(6944),S=n(6019);const A=(0,o.Uk)(" ABOUT "),U=(0,o.Uk)(" FACTS "),F=(0,o.Uk)(" TEAM "),D=(0,o.Uk)(" TRAILER "),E=(0,o.Uk)(" CONTACT ");function B(t,e,n,i,r,s){return(0,o.wg)(),(0,o.j4)(M.i,{class:"list"},{default:(0,o.w5)((()=>[(0,o.Wm)(S.l,{class:"list-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(d.T,{to:"/about",class:"list-menu-btn",onClick:(0,a.iM)(s.onClickButton,["stop"]),elevation:"0"},{default:(0,o.w5)((()=>[A])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(O.J),(0,o.Wm)(S.l,{class:"list-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(d.T,{to:"/facts",class:"list-menu-btn",onClick:(0,a.iM)(s.onClickButton,["stop"]),elevation:"0"},{default:(0,o.w5)((()=>[U])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(O.J),(0,o.Wm)(S.l,{class:"list-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(d.T,{to:"/team",class:"list-menu-btn",onClick:(0,a.iM)(s.onClickButton,["stop"]),elevation:"0"},{default:(0,o.w5)((()=>[F])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(O.J),(0,o.Wm)(S.l,{class:"list-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(d.T,{to:"/trailer",class:"list-menu-btn",onClick:(0,a.iM)(s.onClickButton,["stop"]),elevation:"0"},{default:(0,o.w5)((()=>[D])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(O.J),(0,o.Wm)(S.l,{class:"list-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(d.T,{to:"/contact",class:"list-menu-btn",onClick:(0,a.iM)(s.onClickButton,["stop"]),elevation:"0"},{default:(0,o.w5)((()=>[E])),_:1},8,["onClick"])])),_:1})])),_:1})}var P={name:"ListMenu",data:()=>({}),methods:{onClickButton(){this.$emit("clicked")}}},Z=n(89);const N=(0,Z.Z)(P,[["render",B]]);var V=N,L={name:"NavBar",components:{ListMenu:V},data:()=>({menu:!1}),computed:{isMobile(){return this.$vuetify.display.smAndDown}}};const z=(0,Z.Z)(L,[["render",x],["__scopeId","data-v-03069c7a"]]);var q=z;const I={class:"{splash: true, fadeout: !isSplash}"},R=(0,o._)("p",{class:"splash-text"},"Peak of Evolution",-1),J=[R];function K(t,e,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",I,J)}var $={name:"SplashScreen",props:["isSplash"]};const H=(0,Z.Z)($,[["render",K]]);var G=H,Q={name:"App",components:{NavBar:q,SplashScreen:G},data:()=>({isSplash:!0}),created(){setTimeout((()=>{this.isSplash=!1}),2e3)}};const X=(0,Z.Z)(Q,[["render",l]]);var Y=X,tt=(n(9773),n(4402)),et=(0,tt.Rd)();async function nt(){const t=await n.e(461).then(n.t.bind(n,3657,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var at=n(678),ot=n(4565),it=n(3369),rt=n(6824);const st=t=>((0,o.dD)("data-v-3221d24f"),t=t(),(0,o.Cn)(),t),lt=st((()=>(0,o._)("div",{class:"about-text"},[(0,o._)("br"),(0,o._)("br"),(0,o._)("p",null," The emergence of man was mere coincidence. "),(0,o._)("p",null," Evolving from fish and having become comical apes, we give ourselves and small everyday situations around us an absurd amount of importance. Dressed in clothes, sitting at an office chair, we try to give ourselves meaning and create a world for ourselves in which we have importance. We take everything far too seriously, from everyday embarrassments to invented systems into which we willingly place ourselves. "),(0,o._)("br"),(0,o._)("p",null,[(0,o._)("span",{style:{"font-family":"Migra",color:"#FF5808"}},"Peak of Evolution"),(0,o.Uk)(" explores the systems, rituals and customs we have created to follow a preconceived path that gives us meaning and sets us apart from „mere animals“. As humanity, we have glorified ourselves and taken human narcissism to the extreme. ")])],-1)));function ct(t,e,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(it.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(rt.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{src:ot,class:"bgimg rotating"}),lt])),_:1})])),_:1})])}var ut={name:"ContactView",data:()=>({})};const ft=(0,Z.Z)(ut,[["render",ct],["__scopeId","data-v-3221d24f"]]);var dt=ft;const mt=t=>((0,o.dD)("data-v-5b1751f8"),t=t(),(0,o.Cn)(),t),pt=mt((()=>(0,o._)("div",{class:"about-text"},[(0,o._)("p",null," Like what you see? Want to chat? Feel free to contact us! ")],-1))),vt=mt((()=>(0,o._)("a",{class:"email",href:"mailto:poe.masterprojekt@gmail.com"},[(0,o._)("div",null," poe.masterprojekt@gmail.com ")],-1)));function wt(t,e,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(it.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(rt.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{src:ot,class:"bgimg rotating"}),pt])),_:1}),(0,o.Wm)(rt.o,{class:"justify-center"},{default:(0,o.w5)((()=>[vt])),_:1}),(0,o.Wm)(v.f,{src:ot,class:"bgimg-2 rotating"})])),_:1})])}var gt={name:"ContactView",data:()=>({})};const bt=(0,Z.Z)(gt,[["render",wt],["__scopeId","data-v-5b1751f8"]]);var ht=bt;function _t(t,e,n,a,i,r){const s=(0,o.up)("list-menu"),l=(0,o.up)("about-view");return r.isMobile?((0,o.wg)(),(0,o.j4)(s,{key:0})):((0,o.wg)(),(0,o.j4)(l,{key:1}))}var kt={name:"HomeView",components:{ListMenu:V,AboutView:dt},data:()=>({}),computed:{isMobile(){return this.$vuetify.display.smAndDown}}};const yt=(0,Z.Z)(kt,[["render",_t]]);var Wt=yt;const Ct=t=>((0,o.dD)("data-v-9f69a36c"),t=t(),(0,o.Cn)(),t),jt=Ct((()=>(0,o._)("div",{class:"about-text"},[(0,o._)("p",null,[(0,o.Uk)(" With a finished script and an innovative idea, the core team came together in November 2020 and began developing the project. "),(0,o._)("span",{style:{"font-family":"Migra",color:"#FF5808"}},"Peak of Evolution"),(0,o.Uk)(" is a CG short film by students of the University of Applied Science Salzburg. Real filmed footage of the sets built in miniature scale is meets digital characters. ")])],-1)));function Tt(t,e,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(it.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(rt.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{src:ot,class:"bgimg rotating"}),jt])),_:1}),(0,o.Wm)(v.f,{src:ot,class:"bgimg-2 rotating"})])),_:1})])}var xt={name:"ContactView",data:()=>({})};const Ot=(0,Z.Z)(xt,[["render",Tt],["__scopeId","data-v-9f69a36c"]]);var Mt=Ot;function St(t,e,n,a,i,r){const s=(0,o.up)("construction-view");return(0,o.wg)(),(0,o.j4)(s)}const At=t=>((0,o.dD)("data-v-5680a9c4"),t=t(),(0,o.Cn)(),t),Ut=At((()=>(0,o._)("div",{class:"about-text"},[(0,o._)("p",{style:{"font-family":"Migra","font-size":"96px"}}," Under Construction "),(0,o._)("p",null," Diese Seite wird gerade überarbeitet. ")],-1)));function Ft(t,e,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(it.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(rt.o,{class:"justify-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{src:ot,class:"bgimg rotating"}),Ut])),_:1})])),_:1})])}var Dt={name:"ConstructionView",data:()=>({})};const Et=(0,Z.Z)(Dt,[["render",Ft],["__scopeId","data-v-5680a9c4"]]);var Bt=Et,Pt={name:"TeamView",components:{ConstructionView:Bt},data:()=>({})};const Zt=(0,Z.Z)(Pt,[["render",St]]);var Nt=Zt;function Vt(t,e,n,a,i,r){const s=(0,o.up)("construction-view");return(0,o.wg)(),(0,o.j4)(s)}var Lt={name:"TrailerView",components:{ConstructionView:Bt},data:()=>({})};const zt=(0,Z.Z)(Lt,[["render",Vt]]);var qt=zt;const It=[{path:"/",name:"Home",component:Wt},{path:"/about",name:"About",component:dt},{path:"/contact",name:"Contact",component:ht},{path:"/facts",name:"Facts",component:Mt},{path:"/team",name:"Team",component:Nt},{path:"/trailer",name:"Trailer",component:qt}],Rt=(0,at.p7)({history:(0,at.r5)(),linkExactActiveClass:"active",routes:It});var Jt=Rt;nt(),(0,a.ri)(Y).use(Jt).use(et).mount("#app")},6422:function(t,e,n){t.exports=n.p+"img/Menu.b95d9938.png"},4565:function(t,e,n){t.exports=n.p+"img/Stern.a6aae2ef.png"},6949:function(t,e,n){t.exports=n.p+"img/logo.b6e81165.png"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,i){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],i=t[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var i=Object.create(null);n.r(i);var r={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&a;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){r[t]=function(){return a[t]}}));return r["default"]=function(){return a},n.d(i,r),i}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/webfontloader.9943f070.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="peak-of-evolution:";n.l=function(a,o,i,r){if(t[a])t[a].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=a),t[a]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var o=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/peak-of-evolution/"}(),function(){var t={143:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=i);var r=n.p+n.u(e),s=new Error,l=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,o[1](s)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,r=a[0],s=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(a);c<r.length;c++)i=r[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunkpeak_of_evolution"]=self["webpackChunkpeak_of_evolution"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6695)}));a=n.O(a)})();
//# sourceMappingURL=app.8462c62c.js.map