(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{461:function(t,e,r){var content=r(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("461ac184",content,!0,{sourceMap:!1})},467:function(t,e,r){"use strict";r(461)},468:function(t,e,r){var n=r(18)(!1);n.push([t.i,"#default-toc ul{list-style-type:none}#default-toc li{border-left:2px solid #e5e5e5}#default-toc li.router-link-active{border-left-color:currentColor}#default-toc .v-toc-link{color:inherit}#default-toc.theme--dark li:not(.router-link-active){border-left-color:hsla(0,0%,100%,.5)}",""]),t.exports=n},469:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},472:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(7),r(10),r(6),r(11),r(16),r(27),r(43),r(32),r(41),r(54),r(34);var n=r(15),o=r(1),c=(r(59),r(28),r(58),r(33),r(164),r(55),r(61));function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"TableOfContent",props:{toc:{type:Array,default:function(){return[]}}},data:function(){return{offsets:[],timeout:null,drawer:null}},computed:h(h({},Object(c.b)("route",["hash","path"])),{},{scrolling:Object(c.d)("ui/scrolling")}),methods:{onClick:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t="#"+t,e.hash!==t){r.next=3;break}return r.abrupt("return");case 3:return e.scrolling=!0,e.$router.replace({path:e.path,hash:t}),r.next=7,e.$vuetify.goTo(t);case 7:e.scrolling=!1;case 8:case"end":return r.stop()}}),r)})))()},setOffsets:function(){var t,e=[],r=l(this.toc.slice().reverse());try{for(r.s();!(t=r.n()).done;){var n=t.value,section=document.getElementById(n.id);section&&e.push(section.offsetTop-40)}}catch(t){r.e(t)}finally{r.f()}this.offsets=e},findActiveIndex:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$vuetify.breakpoint.mobile){e.next=2;break}return e.abrupt("return");case 2:if(r=t.toc,0!==(n=window.pageYOffset||document.documentElement.offsetTop||0)){e.next=7;break}return t.hash&&t.$router.replace({path:t.path}),e.abrupt("return");case 7:if(t.offsets.length!==r.length&&t.setOffsets(),o=t.offsets.findIndex((function(t){return t<n})),c=o>-1?t.offsets.length-1-o:0,n+window.innerHeight===document.documentElement.offsetHeight&&(c=t.toc.length-1),(l="#"+t.toc[c].id)!==t.hash){e.next=14;break}return e.abrupt("return");case 14:return t.scrolling=!0,e.next=17,t.$router.replace({path:t.path,hash:l});case 17:t.scrolling=!1;case 18:case"end":return e.stop()}}),e)})))()},onScroll:function(){clearTimeout(this.timeout),!this.scrolling&&this.toc.length&&(this.timeout=setTimeout(this.findActiveIndex,17))}}},m=(r(467),r(37)),y=r(42),w=r.n(y),x=r(227),O=r(211),k=r(458),j=r(469),_=r.n(j),S=r(230),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"py-4 pr-4 pl-3",attrs:{id:"default-toc",app:"",clipped:"",right:"",floating:"",width:"300",color:"rgb(0, 0, 0, 0)"},scopedSlots:t._u([t.toc.length?{key:"prepend",fn:function(){return[r("div",{staticClass:"mb-2 text-h6 font-weight-medium text--primary"},[t._v(t._s(t.$t("tos"))+"\n      ")])]},proxy:!0}:null],null,!0),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v(" "),r("ul",{staticClass:"mb-6"},t._l(t.toc,(function(e){var n=e.id,o=e.depth,text=e.text;return r("router-link",{key:text,attrs:{to:"#"+n,exact:""},scopedSlots:t._u([{key:"default",fn:function(e){var c=e.href,l=e.isActive;return[r("li",{staticClass:"pl-3 text-body-2 py-1 font-weight-regular",class:{"primary--text router-link-active":l,"text--disabled":!l,"pl-6":3===o,"pl-9":4===o,"pl-12":5===o}},[r("a",{staticClass:"v-toc-link d-block transition-swing text-decoration-none",attrs:{href:c},domProps:{textContent:t._s(text)},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onClick(n)}}})])]}}],null,!0)})})),1)]),t._v(" "),t.toc.length>0?r("v-btn",{staticClass:"hidden-lg-and-up",attrs:{color:"accent",elevation:"6",fab:"",bottom:"",right:"",rounded:"",fixed:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[r("v-icon",[t._v("mdi-table-of-contents")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:x.a,VIcon:O.a,VNavigationDrawer:k.a}),_()(component,{Scroll:S.b})}}]);