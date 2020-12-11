(function(t){function e(e){for(var i,r,l=e[0],c=e[1],s=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/markdown-editor/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("HomeComponent")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-4"},[n("MarkdownEditor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("p",{staticClass:"text-caption grey--text"},[t._v(" **Bold** *Italic* _Underline_ - List with bullets # H1 ## H2 ### H3 #### H4 ##### H5 ###### H6 ")]),n("h3",[t._v("Preview:")]),n("div",{domProps:{innerHTML:t._s(t.renderedContent)}})],1)},l=[],c=(n("ac1f"),n("466d"),n("5319"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-editor"},[n("div",{staticClass:"markdown-editor__tools"},[n("button",{on:{click:function(e){t.imageModalVisible=!0}}},[t._v("Image")]),n("button",{on:{click:function(e){t.videoModalVisible=!0}}},[t._v("Video")]),n("button",{on:{click:function(e){return t.insert("\ntype",4)}}},[t._v("Description")]),n("button",{on:{click:function(e){return t.insert("\n> quote...",8)}}},[t._v("Quote")]),n("button",{on:{click:t.insertFootnote}},[t._v("Footnote")]),n("button",{on:{click:function(e){t.insert("[link](https://google.com)",19,1)}}},[t._v("Link")]),n("button",{on:{click:function(e){t.fileModalVisible=!0}}},[t._v("File")]),n("button",{on:{click:t.insertTwoColumns}},[t._v("2 columns")]),n("button",{on:{click:t.insertTable}},[t._v("Table")]),n("button",{on:{click:t.insertTableRow}},[t._v("Table row")])]),n("div",[n("textarea",{ref:"input",staticClass:"markdown-editor__textarea",attrs:{placeholder:"Type here"},domProps:{value:t.value},on:{input:t.onInput}})]),n("ImageModal",{attrs:{visible:t.imageModalVisible},on:{"update:visible":function(e){t.imageModalVisible=e},change:function(e){return t.insert(e)}}}),n("VideoModal",{attrs:{visible:t.videoModalVisible},on:{"update:visible":function(e){t.videoModalVisible=e},change:function(e){return t.insert(e)}}}),n("FileModal",{attrs:{visible:t.fileModalVisible},on:{"update:visible":function(e){t.fileModalVisible=e},change:function(e){return t.insert(e)}}})],1)}),s=[],u=(n("a630"),n("d81d"),n("fb6a"),n("3ca3"),n("a1f0"),n("2909")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.visible,width:"600"},on:{input:function(e){return t.$emit("update:visible",e)}}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v(" Choose an image ")]),n("v-card-text",[n("v-list",{attrs:{"three-line":""}},t._l(3,(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.onImageSelect(e)}}},[n("v-list-item-icon",[n("v-img",{attrs:{"max-width":"150",src:t.publicPath+"images/sample-"+e+".png"}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s("sample-"+e+".jpg")}})],1)],1)})),1),n("h3",[t._v("Upload:")]),n("v-file-input",{attrs:{"truncate-length":"15"},on:{change:t.onImageChange}})],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("update:visible",!1)}}},[t._v(" I accept ")])],1)],1)],1)},p=[],v=(n("caad"),n("b0c0"),n("d3b7"),n("2532"),{methods:{uploadFile:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image";return new Promise((function(n,i){var a;switch(t.name.includes("error")&&i("error"),e){case"video":a="http://techslides.com/demos/sample-videos/small.webm";break;case"file":a="https://file-examples-com.github.io/uploads/2017/02/file-sample_1MB.docx";break;default:a="https://picsum.photos/320/240";break}setTimeout((function(){n(a)}),1e3)}))}}}),f={name:"ImageModal",mixins:[v],props:{visible:{type:Boolean}},data:function(){return{publicPath:"/markdown-editor/"}},methods:{onImageSelect:function(t){var e="images/sample-".concat(t,".png");this.$emit("change","\n![text](".concat(this.publicPath+e,")")),this.$emit("update:visible",!1)},onImageChange:function(t){var e=this;t&&this.uploadFile(t).then((function(t){e.$emit("change","\n![text](".concat(e.publicPath+t,")")),e.$emit("update:visible",!1)})).catch((function(){alert("unsupported file name")}))}}},m=f,h=n("2877"),b=n("6544"),g=n.n(b),V=n("8336"),_=n("b0af"),C=n("99d9"),w=n("169a"),x=n("ce7e"),$=n("23a7"),k=n("adda"),y=n("8860"),M=n("da13"),I=n("5d23"),T=n("34c3"),P=n("2fa4"),L=Object(h["a"])(m,d,p,!1,null,null,null),S=L.exports;g()(L,{VBtn:V["a"],VCard:_["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VDialog:w["a"],VDivider:x["a"],VFileInput:$["a"],VImg:k["a"],VList:y["a"],VListItem:M["a"],VListItemContent:I["a"],VListItemIcon:T["a"],VListItemTitle:I["b"],VSpacer:P["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.visible,width:"600"},on:{input:function(e){return t.$emit("update:visible",e)}}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v(" Choose a video ")]),n("v-card-text",[n("v-list",{attrs:{"three-line":""}},t._l(3,(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.onVideoSelect(e)}}},[n("v-list-item-icon",[n("video",{attrs:{controls:"",preload:"metadata",src:t.publicPath+"videos/sample-"+e+".mp4"}})]),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s("sample-"+e+".mp4")}})],1)],1)})),1),n("h3",[t._v("Upload:")]),n("v-file-input",{attrs:{"truncate-length":"15"},on:{change:t.onVideoChange}})],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("update:visible",!1)}}},[t._v(" I accept ")])],1)],1)],1)},O=[],j={name:"VideoModal",mixins:[v],props:{visible:{type:Boolean}},data:function(){return{publicPath:"/markdown-editor/"}},methods:{onVideoSelect:function(t){var e="videos/sample-".concat(t,".mp4");this.$emit("change","\n![video](".concat(this.publicPath+e,")")),this.$emit("update:visible",!1)},onVideoChange:function(t){var e=this;t&&this.uploadFile(t,"video").then((function(t){e.$emit("change","\n![video](".concat(e.publicPath+t,")")),e.$emit("update:visible",!1)})).catch((function(){alert("unsupported file name")}))}}},H=j,E=Object(h["a"])(H,F,O,!1,null,null,null),B=E.exports;g()(E,{VBtn:V["a"],VCard:_["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VDialog:w["a"],VDivider:x["a"],VFileInput:$["a"],VList:y["a"],VListItem:M["a"],VListItemContent:I["a"],VListItemIcon:T["a"],VListItemTitle:I["b"],VSpacer:P["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.visible,width:"600"},on:{input:function(e){return t.$emit("update:visible",e)}}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v(" Choose a file ")]),n("v-card-text",[n("v-list",{attrs:{"three-line":""}},t._l(3,(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.onFileSelect(e)}}},[n("v-list-item-icon",[n("a",{attrs:{href:t.publicPath+"files/sample-"+e+".doc"}})]),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s("sample-"+e+".doc")}})],1)],1)})),1),n("h3",[t._v("Upload:")]),n("v-file-input",{attrs:{"truncate-length":"15"},on:{change:t.onFileChange}})],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("update:visible",!1)}}},[t._v(" I accept ")])],1)],1)],1)},D=[],U={name:"FileModal",mixins:[v],props:{visible:{type:Boolean}},data:function(){return{publicPath:"/markdown-editor/"}},methods:{onFileSelect:function(t){var e="files/sample-".concat(t,".doc");this.$emit("change","\n[file](".concat(this.publicPath+e,")")),this.$emit("update:visible",!1)},onFileChange:function(t){var e=this;t&&this.uploadFile(t,"file").then((function(t){e.$emit("change","\n[file](".concat(e.publicPath+t,")")),e.$emit("update:visible",!1)})).catch((function(){alert("unsupported file name")}))}}},R=U,J=Object(h["a"])(R,A,D,!1,null,null,null),q=J.exports;g()(J,{VBtn:V["a"],VCard:_["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VDialog:w["a"],VDivider:x["a"],VFileInput:$["a"],VList:y["a"],VListItem:M["a"],VListItemContent:I["a"],VListItemIcon:T["a"],VListItemTitle:I["b"],VSpacer:P["a"]});var Q={name:"MarkdownEditor",components:{FileModal:q,VideoModal:B,ImageModal:S},props:{value:{type:String}},data:function(){return{imageModalVisible:!1,videoModalVisible:!1,fileModalVisible:!1}},methods:{onInput:function(t){this.$emit("input",t.target.value)},insertFootnote:function(){var t=this,e=this.value.matchAll(/\[\^(\d+)]/g),n=Math.max.apply(Math,Object(u["a"])(Array.from(e).map((function(t){return+t[1]}))));n<0&&(n=0),this.insert("[^".concat(n+1,"]")),this.$nextTick((function(){t.append("\n[^".concat(n+1,"]: note"),3)}))},insertTable:function(){var t="\n| First Header | Second Header |\n| --- | --- |\n| Content Cell | Content Cell |\n";this.insert(t,77,65)},insertTableRow:function(){var t="\n| Content Cell | Content Cell |\n";this.insert(t,30,18)},insertTwoColumns:function(){var t="::: row [col-left]left[/col-left][col-right]right[/col-right]\n:::";this.insert(t,47,43)},insert:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=this.$refs.input.selectionStart,o=this.value,r=o.slice(0,a)+t+o.slice(a);this.$emit("input",r),this.$nextTick((function(){e.$refs.input.focus(),e.scrollTextarea(e.$refs.input,a+1),e.$refs.input.setSelectionRange(a+t.length-n,a+t.length-i)}))},append:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=this.value,o=a+t;this.$emit("input",o),this.$nextTick((function(){e.$refs.input.focus(),e.scrollTextarea(e.$refs.input,a.length+1),e.$refs.input.setSelectionRange(o.length-1-n,o.length-i)}))},scrollTextarea:function(t,e){t.selectionEnd=t.selectionStart=e,t.blur(),t.focus()}}},z=Q,G=(n("a4c3"),Object(h["a"])(z,c,s,!1,null,"319fd58a",null)),K=G.exports,N=n("d4cd"),W=n.n(N),X=n("e6f9"),Y=n.n(X),Z=n("746a"),tt=n.n(Z),et=n("9465"),nt=n.n(et),it=(new W.a).use(Y.a).use(nt.a,{html5embed:{useImageSyntax:!0}}).use(tt.a,"row",{validate:function(t){return t.trim().match(/^row\s+(.*)$/)},render:function(t,e){var n=t[e].info.trim().match(/^row\s+(.*)$/);if(1===t[e].nesting){var i=it.utils.escapeHtml(n[1]).replace("[col-left]","<div>").replace("[/col-left]","</div>").replace("[col-right]","<div>").replace("[/col-right]","</div>");return'<div class="editor-row">'+i}return"</div>\n"}}),at={name:"HomeComponent",components:{MarkdownEditor:K},data:function(){return{content:"",renderedContent:"",debouncedUpdate:null}},created:function(){var t=this;this.debouncedUpdate=this.$_.debounce((function(e){t.renderedContent=it.render(e)}),1e3)},watch:{content:function(t){this.debouncedUpdate(t)}}},ot=at,rt=Object(h["a"])(ot,r,l,!1,null,"ca41cc26",null),lt=rt.exports,ct={name:"App",components:{HomeComponent:lt}},st=ct,ut=(n("5c0b"),n("7496")),dt=n("f6c4"),pt=Object(h["a"])(st,a,o,!1,null,null,null),vt=pt.exports;g()(pt,{VApp:ut["a"],VMain:dt["a"]});var ft=n("f309");i["a"].use(ft["a"]);var mt=new ft["a"]({}),ht=n("2ef0"),bt=n.n(ht);i["a"].config.productionTip=!1,i["a"].prototype.$_=bt.a,new i["a"]({vuetify:mt,render:function(t){return t(vt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},a4c3:function(t,e,n){"use strict";n("dbba")},dbba:function(t,e,n){}});
//# sourceMappingURL=app.d40a43ee.js.map