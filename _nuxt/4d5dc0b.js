(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{479:function(t,n,e){var content=e(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("1b7833da",content,!0,{sourceMap:!1})},487:function(t,n,e){"use strict";e(479)},488:function(t,n,e){var r=e(18)(!1);r.push([t.i,".with-background{background-color:#005ca7}.with-background>.v-responsive__sizer{padding-bottom:0!important}",""]),t.exports=r},522:function(t,n,e){"use strict";e.r(n);e(54);var r=e(56),o={data:function(){return{loading:!1,spinner:!1}},computed:{drawer:Object(r.d)("ui/drawer"),background_img:function(){return this.$img("/images/uj_novum_blue.jpg",{fit:"inside",quality:50,width:1500,height:1500})},uj_logo_img:function(){return this.$img("/images/uj_white.png",{fit:"inside",quality:80,width:200,height:200})}},mounted:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading&&(t.spinner=!0)}),100)},methods:{endLoading:function(){var t=this;this.loading=!1,this.spinner&&setTimeout((function(){t.spinner=!1}),200)}}},l=(e(487),e(35)),c=e(42),d=e.n(c),h=e(220),m=e(167),f=e(202),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"fill-height"},[e("v-img",{staticClass:"fill-height with-background",attrs:{dark:"",src:t.background_img},on:{load:function(n){return t.endLoading()}}},[e("div",{staticClass:"d-flex align-content-center justify-center flex-wrap flex-column fill-height"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-5",attrs:{src:t.uj_logo_img,height:t.$vuetify.breakpoint.lgAndUp?"250rem":"150rem",alt:"Collegium Novum"}}),t._v(" "),e("h1",{staticClass:"text-lg-h1 text-h2 mb-3"},[t._v(t._s(t.$t("studentguide")))]),t._v(" "),e("h2",{staticClass:"text-lg-h4 text-h5"},[t._v(t._s(t.$t("ssuj")))]),t._v(" "),t.spinner?e("v-progress-circular",{staticClass:"mt-7",attrs:{indeterminate:"",size:"40"}}):t._e(),t._v(" "),t.spinner?t._e():e("v-btn",{staticClass:"mt-6 hidden-lg-and-up",attrs:{outlined:"","x-large":""},on:{click:function(n){t.drawer=!0}}},[t._v("Spis treści\n        ")])],1)])])],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:h.a,VImg:m.a,VProgressCircular:f.a})}}]);