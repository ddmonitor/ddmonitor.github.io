(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function c(e){return s.p+"js/"+({views:"views"}[e]||e)+"."+{views:"696457c2"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={views:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({views:"views"}[e]||e)+"."+{views:"2f9987b6"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0035":function(e,t,n){"use strict";var a=n("efbc"),i=n.n(a);i.a},"03e5":function(e,t,n){"use strict";var a=n("c7a3"),i=n.n(a);i.a},"0423":function(e){e.exports=JSON.parse('{"appName":"DDモニター","empty":"データなし","template":"テンプレート","template_modes":{"standard":"標準","window":"ウィンドウ","mobile":"モバイル","common":"通常"},"buttons":{"language":"言語"}}')},"0839":function(e,t,n){},"15d5":function(e,t,n){},"22f0":function(e,t,n){},"2d41":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"b-video"},[e.valid?n("iframe",{attrs:{src:e.url,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}):n("div",{staticClass:"d-valign",staticStyle:{height:"100%"}},[n("h3",[e._v(e._s(e.$t("empty")))])])])},i=[],r=(n("99af"),n("a9e3"),n("d4ec")),o=n("bee2"),c=n("99de"),s=n("7e84"),u=n("262e"),l=n("9ab4"),d=n("60a3"),f=function(e){function t(){return Object(r["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"valid",get:function(){return this.aid&&/[0-9]+/.test(this.aid)}},{key:"url",get:function(){return"//player.bilibili.com/player.html?aid=".concat(this.aid,"&page=").concat(this.page)}}]),t}(d["d"]);l["a"]([Object(d["b"])(),l["c"]("design:type",String)],f.prototype,"aid",void 0),l["a"]([Object(d["b"])({default:1}),l["c"]("design:type",Number)],f.prototype,"page",void 0),f=l["a"]([Reflect.metadata("component:category","video"),d["a"]],f);var p=f,v=p,b=(n("590f"),n("2877")),m=Object(b["a"])(v,a,i,!1,null,null,null);t["default"]=m.exports},"3a18":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"blive_openwindow":"小窗口播放"},"en":{"blive_openwindow":"Open Mini Window"}}'),delete e.options._Ctor}},"3a20":function(e,t,n){"use strict";var a=n("22f0"),i=n.n(a);i.a},"3af5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"b-video"},[e.valid?n("iframe",{attrs:{src:e.url,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}):n("div",{staticClass:"d-valign",staticStyle:{height:"100%"}},[n("h3",[e._v(e._s(e.$t("empty")))])])])},i=[],r=(n("a15b"),n("d81d"),n("3835")),o=n("d4ec"),c=n("bee2"),s=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=n("60a3"),p=function(e){function t(){return Object(o["a"])(this,t),Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"valid",get:function(){return this.id&&/[A-Za-z0-9-_]+/.test(this.id)}},{key:"url",get:function(){return"https://www.youtube.com/embed/".concat(this.id,"?")+{rel:1,playlist:this.id,showinfo:0,enablejsapi:1}.entryList().map((function(e){var t=Object(r["a"])(e,2),n=t[0],a=t[1];return n+"="+a})).join("&")}}]),t}(f["d"]);d["a"]([Object(f["b"])(String),d["c"]("design:type",String)],p.prototype,"id",void 0),p=d["a"]([Reflect.metadata("component:category","video"),f["a"]],p);var v=p,b=v,m=(n("98ea"),n("2877")),h=Object(m["a"])(b,a,i,!1,null,null,null);t["default"]=h.exports},"423e":function(e){e.exports=JSON.parse('{"appName":"DD大屏","empty":"暂无数据","template":"模板","template_modes":{"standard":"标准","window":"窗口","mobile":"移动端","common":"通用"},"buttons":{"language":"语言","script_active":"脚本已激活","script_offline":"脚本已断开，点击安装脚本"},"menus":{"switch_template":"切换模板","template_manage":"模板管理","about":"关于"}}')},"42a2":function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"holo-schedule"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"iframe-wrap"},[n("iframe",{ref:"$iframe",attrs:{src:"https://schedule.hololive.tv/simple",border:"0",frameborder:"no",framespacing:"0"},on:{load:e.onLoad}})])])},r=[],o=n("d4ec"),c=n("bee2"),s=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=n("60a3"),p=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.loading=!0,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"onLoad",value:function(){this.loading=!1}}]),t}(f["d"]);d["a"]([Object(f["c"])(),d["c"]("design:type","function"===typeof(a="undefined"!==typeof HTMLIFrameElement&&HTMLIFrameElement)?a:Object)],p.prototype,"$iframe",void 0),p=d["a"]([Reflect.metadata("component:category","source"),f["a"]],p);var v=p,b=v,m=(n("fe13"),n("2877")),h=Object(m["a"])(b,i,r,!1,null,null,null);t["default"]=h.exports},"450c":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="450c"},"46d8":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n("2fe1");function i(e){return e.options?e.options:e}function r(e){return Object(a["a"])((function(t,n){(t.computed||(t.computed={}))["__META__"]=function(){return e}}))}},"590f":function(e,t,n){"use strict";var a=n("deb0"),i=n.n(a);i.a},6262:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DWrap",[n("table",{staticClass:"t t3-1"},[n("tr",[n("td",{staticStyle:{height:"100%",width:"30%"},attrs:{rowspan:"2"}},[n("div",[n("HoloSchedule")],1)]),n("td",[n("div",[n("YoutubeVideo",{attrs:{id:e.ids[0]}})],1)])]),n("tr",[n("td",[n("div",[n("YoutubeVideo",{attrs:{id:e.ids[1]}})],1)])])])])},i=[],r=(n("ac1f"),n("d4ec")),o=n("bee2"),c=n("99de"),s=n("7e84"),u=n("262e"),l=n("9ab4"),d=n("60a3");function f(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window;a.addEventListener(t,n),e.$once("hook:beforeDestroy",(function(){a.removeEventListener(t,n)}))}var p,v=n("46d8"),b=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.ids=["",""],e.current=0,e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){f(this,"message",this.onMessage)}},{key:"onMessage",value:function(e){if("M_OPEN_U_LINK"===e.data.type){var t=e.data.data.url,n=/\?v=([A-Za-z0-9-_]+)$/.exec(t);n&&(this.$set(this.ids,this.current,n[1]),this.current=(this.current+1)%2)}}}]),t}(d["d"]);l["a"]([Object(v["a"])({name:"hololive schedule",category:"hololive",description:"Hololive schedule with 2 Youtube stream windows.",path:"hololive1",icon:"/img/template/hololive.webp",mode:"standard"}),l["c"]("design:type","function"===typeof(p="undefined"!==typeof v["TemplateMeta"]&&v["TemplateMeta"])?p:Object)],b.prototype,"metadata",void 0),b=l["a"]([d["a"]],b);var m=b,h=m,g=(n("834f"),n("2877")),y=Object(g["a"])(h,a,i,!1,null,null,null);t["default"]=y.exports},"6d63":function(e,t,n){"use strict";var a=n("8cec"),i=n.n(a);i.a},7686:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"corner-tag"},[n("div",{staticClass:"corner-tag__body d-fill"},[e._t("default")],2),n("div",{staticClass:"corner-tag__tag"},[n("svg",{staticClass:"d-fill"},[n("path",{staticClass:"triangle",class:e.type,attrs:{d:"M0,0 L60,0 0,60 Z"}})]),n("span",{staticClass:"content d-valign"},[e._t("tag")],2)])])},i=[],r=n("d4ec"),o=n("99de"),c=n("7e84"),s=n("262e"),u=n("9ab4"),l=n("60a3"),d=function(e){function t(){return Object(r["a"])(this,t),Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(l["d"]);u["a"]([Object(l["b"])({default:""}),u["c"]("design:type",String)],d.prototype,"type",void 0),d=u["a"]([l["a"]],d);var f=d,p=f,v=(n("f78e"),n("2877")),b=Object(v["a"])(p,a,i,!1,null,null,null);t["default"]=b.exports},"77a6":function(e,t,n){var a={"./en.json":"edd4","./ja.json":"0423","./zh-CN.json":"423e","./zh-TW.json":"9ea5"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="77a6"},"834f":function(e,t,n){"use strict";var a=n("b734"),i=n.n(a);i.a},"8c20":function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yagoo-koatsu"},[n("div",{staticClass:"player-container"},[n("aplayer",{ref:"player",attrs:{audio:e.audio},on:{play:e.onPlay,pause:e.onPause}}),n("div",{staticClass:"visual"},[n("div",{staticClass:"volume-bar"},[n("div",{ref:"bar",staticClass:"bar",staticStyle:{width:"100%"}},[n("span",[e._v("血压")])]),n("div",{staticClass:"space"})]),e._m(0)])],1)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"avatar-wrap"},[n("div",{staticClass:"bg d-fill"}),n("img",{staticClass:"d-fill",attrs:{src:"/img/yagoo.jpg"}})])}],o=(n("ace4"),n("d3b7"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7"),n("d4ec")),c=n("bee2"),s=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=n("60a3"),p=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.audio={name:"Shiny Smily Story",artist:"hololive IDOL PROJECT",url:"/audio/sss.mp3",cover:"/img/sss.jpg",theme:"#49c8f0"},e.ctx=null,e.analyser=null,e.renderId=0,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){this.init()}},{key:"init",value:function(){try{var e=this.ctx=new(window.AudioContext||window.webkitAudioContext),t=e.createMediaElementSource(this.element),n=this.analyser=e.createAnalyser();t.connect(n),n.connect(e.destination)}catch(a){this.$message.warning("AudioContext does not supportted!")}}},{key:"onPlay",value:function(){this.beginRender()}},{key:"onPause",value:function(){cancelAnimationFrame(this.renderId)}},{key:"beginRender",value:function(){this.renderId=requestAnimationFrame(this.beginRender);var e=new Uint8Array(this.analyser.frequencyBinCount);this.analyser.getByteTimeDomainData(e);var t=e.reduce((function(e,t){return e+t}),0)/e.length;this.bar.style.width=t/255*100+"%"}},{key:"element",get:function(){return this.player.media.audio}}]),t}(f["d"]);d["a"]([Object(f["c"])(),d["c"]("design:type",Object)],p.prototype,"player",void 0),d["a"]([Object(f["c"])(),d["c"]("design:type","function"===typeof(a="undefined"!==typeof HTMLDivElement&&HTMLDivElement)?a:Object)],p.prototype,"bar",void 0),p=d["a"]([Reflect.metadata("component:category","tool"),f["a"]],p);var v=p,b=v,m=(n("fad9"),n("2877")),h=Object(m["a"])(b,i,r,!1,null,null,null);t["default"]=h.exports},"8cec":function(e,t,n){},"932f":function(e,t,n){"use strict";n.r(t);var a=n("d4ec"),i=n("bee2"),r=n("99de"),o=n("7e84"),c=n("262e"),s=n("9ab4"),u=n("60a3"),l=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"render",value:function(e){return e("div",{class:"d-wrap"},[this.$slots.default])}}]),t}(u["d"]);l=s["a"]([u["a"]],l),t["default"]=l},"98ea":function(e,t,n){"use strict";var a=n("0839"),i=n.n(a);i.a},"9a8b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"b-live"},[e.valid?n("div",{staticClass:"d-valign",staticStyle:{height:"100%"}},[n("el-button",{on:{click:e.openWindow}},[e._v(e._s(e.$t("blive_openwindow")))])],1):n("div",{staticClass:"d-valign",staticStyle:{height:"100%"}},[n("h3",[e._v(e._s(e.$t("empty")))])])])},i=[],r=(n("a15b"),n("d4ec")),o=n("bee2"),c=n("99de"),s=n("7e84"),u=n("262e"),l=n("9ab4"),d=n("60a3"),f=function(e){function t(){return Object(r["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"openWindow",value:function(){var e=.5*screen.availHeight,t=.5*screen.availWidth;window.open(this.url,"",["toolbar=yes","menubar=yes","height="+e,"width="+t].join(","))}},{key:"valid",get:function(){return this.roomid&&/[0-9]+/.test(this.roomid)}},{key:"url",get:function(){return"//live.bilibili.com/".concat(this.roomid,"?from=ddmonitor")}}]),t}(d["d"]);l["a"]([Object(d["b"])(),l["c"]("design:type",String)],f.prototype,"roomid",void 0),f=l["a"]([Reflect.metadata("component:category","video"),d["a"]],f);var p=f,v=p,b=(n("3a20"),n("2877")),m=n("df47"),h=Object(b["a"])(v,a,i,!1,null,null,null);"function"===typeof m["default"]&&Object(m["default"])(h);t["default"]=h.exports},"9ea5":function(e){e.exports=JSON.parse('{"appName":"DD監控室","empty":"暫無數據","buttons":{"language":"語言"}}')},a0cd:function(e,t,n){},b734:function(e,t,n){},c7a3:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("541d"),n("98db");var a=n("2b0e"),i=(n("d3b7"),n("bc3a")),r=n.n(i),o={baseURL:"http://127.0.0.1:8000",timeout:6e4},c=r.a.create(o);c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var s={install:function(e){e.$axios=c}};s.install=function(e){e.$axios=c,window.axios=c,Object.defineProperties(e.prototype,{$axios:{get:function(){return c}}})},a["default"].use(s);var u=n("5c96"),l=n.n(u),d=(n("cf1e"),n("fe0b"));a["default"].use(l.a,{i18n:function(e,t){return d["a"].t(e,t)}});var f=n("cf0d"),p=n.n(f),v=n("a250");a["default"].use(p.a,{defaultCover:"/img/dd.png",productionTip:!1}),a["default"].use(v["a"]);n("99af");var b=n("2909"),m=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",[n("AppBar")],1),n("div",{staticClass:"app-main"},[n("div",{staticClass:"app-left"}),n("div",{staticClass:"app-page"},[n("router-view")],1)])])},g=[],y=n("d4ec"),O=n("99de"),j=n("7e84"),w=n("262e"),_=n("9ab4"),C=n("60a3"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-bar"},[n("transition",{attrs:{name:"slide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],staticClass:"app-bar__wrapper"},[n("img",{staticClass:"logo",attrs:{src:"/img/dd.png"}}),n("router-link",{staticClass:"title",attrs:{to:"/"}},[e._v(" "+e._s(e.$t("appName"))+" ")]),n("div",{staticClass:"app-bar__menu"},[n("AppMenu",{attrs:{menu:e.$menu}})],1),n("div",{staticClass:"app-bar__buttons"},[n("el-tooltip",{attrs:{content:"GitHub",placement:"bottom"}},[n("el-button",{attrs:{size:"small",circle:"",icon:"fab fa-github"},on:{click:e.openGithub}})],1),n("el-tooltip",{attrs:{content:e.scriptActive?e.$t("buttons.script_active"):e.$t("buttons.script_offline"),placement:"bottom"}},[n("el-button",{attrs:{size:"small",circle:""},on:{click:e.installScript}},[e.scriptActive?n("i",{staticClass:"fa fa-link"}):n("i",{staticClass:"fa fa-link",staticStyle:{color:"red"}})])],1),n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.changeLanguage}},[n("el-tooltip",{attrs:{content:e.$t("buttons.language"),placement:"bottom"}},[n("span",{staticClass:"el-button el-button--small is-round"},[n("i",{staticClass:"fa fa-globe"}),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.languages,(function(t){return n("el-dropdown-item",{key:t.value,class:{"is-select":e.language==t.value},attrs:{command:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1)],1)],1)]),n("div",{staticClass:"arrow",class:{"is-expand":e.expand},on:{click:e.toggleExpand}})],1)},E=[],S=n("bee2"),x=n("4bb5"),$=function(){function e(t,n){Object(y["a"])(this,e),this.children=[],this.data={},this.id=t,this.code=n}return Object(S["a"])(e,[{key:"$icon",value:function(e){return this.icon=e,this}},{key:"$data",value:function(e){return this.data=e,this}},{key:"$children",value:function(e){return this.children=e,this}},{key:"name",get:function(){var e="menus."+this.code,t=d["a"].t(e);return e===t?this.code:t}}]),e}(),N=[new $("m1","template_manage").$icon("fa fa-cog")],T=n("cde4"),A=(n("d81d"),n("b0c0"),function(e){function t(){return Object(y["a"])(this,t),Object(O["a"])(this,Object(j["a"])(t).apply(this,arguments))}return Object(w["a"])(t,e),Object(S["a"])(t,[{key:"render",value:function(e){var t=e("el-menu",{attrs:{mode:"horizontal","menu-trigger":"click","default-active":"m1","background-color":"#256478","text-color":"#ffffff","active-text-color":"#edf047"},class:"app-menu"},[this.menuRender(this.menu)]);return t}},{key:"menuRender",value:function(e){var t=this,n=this.$createElement;return e.map((function(e){return e.children.length>0?n("el-submenu",{attrs:{index:e.id}},[n("div",{slot:"title"},[n("i",{class:e.icon,directives:[{name:"show",value:e.icon}]}),e.name]),t.menuRender(e.children)]):n("el-menu-item",{attrs:{index:e.id},on:{click:function(){return t.menuSelect(e)}}},[n("i",{class:e.icon,directives:[{name:"show",value:e.icon}]}),e.name])}))}},{key:"menuSelect",value:function(e){e.data.route&&this.$router.push(e.data.route),this.$emit("menu-select",e)}}]),t}(C["d"]));_["a"]([Object(C["b"])({type:Array,default:function(){return[]}}),_["c"]("design:type",Array)],A.prototype,"menu",void 0),A=_["a"]([C["a"]],A);var L=A,P=n("2fe1");function D(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}function M(e,t){localStorage.setItem(e,JSON.stringify(t))}function I(e,t){return Object(P["a"])((function(n,a){(n.computed||(n.computed={}))[a]={get:function(){return this.$store.state[t||a]},set:function(t){this.$store.commit(e,t)}}}))}var R=function(e){function t(){var e;return Object(y["a"])(this,t),e=Object(O["a"])(this,Object(j["a"])(t).apply(this,arguments)),e.languages=T.mapItem((function(e,t){return{label:e,value:t}})),e.expand=!0,e.$menu=[],e}return Object(w["a"])(t,e),Object(S["a"])(t,[{key:"created",value:function(){this.$menu=N}},{key:"changeLanguage",value:function(e){this.language=e}},{key:"toggleExpand",value:function(){this.expand=!this.expand}},{key:"installScript",value:function(){window.open("/ddhelper.user.js")}},{key:"openGithub",value:function(){window.open("https://github.com/ddmonitor/dd_monitor")}}]),t}(C["d"]);_["a"]([I("SET_LANGUAGE"),_["c"]("design:type",String)],R.prototype,"language",void 0),_["a"]([Object(x["a"])("isScriptActive"),_["c"]("design:type",Boolean)],R.prototype,"scriptActive",void 0),R=_["a"]([Object(C["a"])({components:{AppMenu:L}})],R);var U=R,z=U,B=(n("6d63"),n("2877")),F=Object(B["a"])(z,k,E,!1,null,null,null),G=F.exports,H=function(e){function t(){return Object(y["a"])(this,t),Object(O["a"])(this,Object(j["a"])(t).apply(this,arguments))}return Object(w["a"])(t,e),t}(C["d"]);H=_["a"]([Object(C["a"])({components:{AppBar:G}})],H);var J=H,W=J,Y=(n("03e5"),Object(B["a"])(W,h,g,!1,null,"9590d2f4",null)),q=Y.exports,Z=n("f72d");a["default"].use(m["a"]);var K=[{path:"/",component:q,children:[{path:"/",name:"home",component:function(){return n.e("views").then(n.bind(null,"bb51"))}}].concat(Object(b["a"])(Z["a"]))}],V=new m["a"]({routes:K}),Q=V,X=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("ac1f"),n("159b"),n("ddb0"),n("ade3")),ee=n("2f62");function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(X["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(){var e=n("450c");return e.keys().reduce((function(t,n){var a=e(n)["default"],i=/[a-zA-Z0-9-_]+\.ts$/.exec(n),r=i[1];return t[r]=a,t}),{})}a["default"].use(ee["a"]);var ie=new ee["a"].Store({modules:ne({},ae()),getters:{},state:{language:function(){var e=D("language")||"zh-CN";return d["a"].locale=e,document.title=d["a"].t("appName"),e}(),isScriptActive:!1},mutations:{SET_LANGUAGE:function(e,t){e.language=t,d["a"].locale=t,document.title=d["a"].t("appName"),M("language",t)},TOGGLE_SCRIPT_STATE:function(e,t){e.isScriptActive=t}}}),re=ie,oe=n("9483");Object(oe["a"])("".concat("/","sw.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("15f5"),n("fb98");var ce=n("46d8");function se(){var e=n("d60d");e.keys().forEach((function(t){var n=Object(_["b"])(e(t))["default"],i=Object(ce["c"])(n),r=i.name;if(!r||"t"===r){var o=/([a-zA-Z0-9-_]+)\.(?:vue|tsx)$/.exec(t);r=o?o[1]:""}console.log("Auto register component: "+r),a["default"].component(r,n)}))}se();var ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},le=[],de={name:"app",mounted:function(){var e=this;window.addEventListener("message",(function(t){console.debug(t.data,t.origin),"M_SCRIPT_INIT"===t.data.type&&e.$store.commit("TOGGLE_SCRIPT_STATE",!0)}))}},fe=de,pe=Object(B["a"])(fe,ue,le,!1,null,null,null),ve=pe.exports;a["default"].config.productionTip=!1,window.$app=new a["default"]({router:Q,store:re,i18n:d["a"],render:function(e){return e(ve)}}).$mount("#app"),window.__NEPTUNE_IS_MY_WAIFU__='{"code": 114514, "msg": "yagooのass♂hole" }'},cde4:function(e){e.exports=JSON.parse('{"zh-CN":"简体中文","zh-TW":"繁體中文","en":"English","ja":"日本語"}')},cf1e:function(e,t,n){},d60d:function(e,t,n){var a={"./DWrap.tsx":"932f","./template/CornerTag.vue":"7686","./template/source/HoloSchedule.vue":"42a2","./template/tool/YagooKoatsu.vue":"8c20","./template/video/BLive.vue":"9a8b","./template/video/BVideo.vue":"2d41","./template/video/YoutubeVideo.vue":"3af5"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="d60d"},d9aa:function(e,t,n){},deb0:function(e,t,n){},df47:function(e,t,n){"use strict";var a=n("3a18"),i=n.n(a);t["default"]=i.a},ea57:function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DWrap",{staticClass:"d-valign"},[n("div",{staticClass:"d-valign",staticStyle:{width:"75%"}},[n("el-form",[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入房间号"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1)],1),n("BLive",{staticStyle:{height:"auto"},attrs:{roomid:e.id}}),n("YagooKoatsu",{staticStyle:{"margin-top":"20px"}})],1)])},r=[],o=n("d4ec"),c=n("bee2"),s=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=n("60a3"),p=n("46d8"),v=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.id="",e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){}}]),t}(f["d"]);d["a"]([Object(p["a"])({name:"bilibili 直播极速版",category:"bilibili",description:"bilibili直播冲国dd特供，一键多开小窗",path:"bilifast",icon:"/img/template/bilibili.png",mode:"window"}),d["c"]("design:type","function"===typeof(a="undefined"!==typeof p["TemplateMeta"]&&p["TemplateMeta"])?a:Object)],v.prototype,"metadata",void 0),v=d["a"]([f["a"]],v);var b=v,m=b,h=(n("0035"),n("2877")),g=Object(h["a"])(m,i,r,!1,null,null,null);t["default"]=g.exports},edc0:function(e,t,n){var a={"./bilifast.vue":"ea57","./hololive1.vue":"6262"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="edc0"},edd4:function(e){e.exports=JSON.parse('{"appName":"DD Monitor","empty":"No data available","template":"template","template_modes":{"standard":"standard","window":"window","mobile":"mobile","common":"common"},"buttons":{"language":"Language","script_active":"The script is active","script_offline":"The script is inactive.Click to install"},"menus":{"switch_template":"Switch Template","template_manage":"Template Manage","about":"About"}}')},efbc:function(e,t,n){},f72d:function(e,t,n){"use strict";n("b0c0"),n("d3b7"),n("159b"),n("ddb0");var a=n("9ab4"),i=n("46d8");function r(){var e=[],t=n("edc0");return t.keys().forEach((function(n){var r,o=Object(a["b"])(t(n))["default"],c=Object(i["c"])(o);if(c.computed&&c.computed["__META__"])try{r=c.computed["__META__"]()}catch(s){return void console.warn("Parse metadata of template '".concat(n,"' failed: "),s)}r?(console.log(r),e.push({path:r.path,name:r.name,component:o,meta:r})):console.warn("Cannot find metadat of template '".concat(n,"'!"))})),e}t["a"]=r()},f78e:function(e,t,n){"use strict";var a=n("d9aa"),i=n.n(a);i.a},fad9:function(e,t,n){"use strict";var a=n("a0cd"),i=n.n(a);i.a},fb98:function(e,t,n){},fe0b:function(e,t,n){"use strict";n("d3b7"),n("ac1f"),n("466d"),n("159b"),n("ddb0");var a=n("2b0e"),i=n("a925"),r=n("9ab4");function o(){var e=n("77a6"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var i=a[1];t[i]=Object(r["b"])(e(n))["default"]}})),t}a["default"].use(i["a"]),t["a"]=new i["a"]({locale:"zh-CN",fallbackLocale:"en",messages:o()})},fe13:function(e,t,n){"use strict";var a=n("15d5"),i=n.n(a);i.a}});