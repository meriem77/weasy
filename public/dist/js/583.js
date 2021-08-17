"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[583],{7254:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".v-input__prepend-outer{display:none}",""]);const o=a},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:g(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function v(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function g(e,t){var n,r,a;if(t.singleton){var o=p++;n=m||(m=l(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=l(t),r=v.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=o}}}},7583:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});const r={data:function(){return{validateErrMessages:"",btnLoading:!1,formLoading:!1,breadcrumbs:[{text:"Accueil",disabled:!1,to:"/home"},{text:"Ligues",disabled:!1,to:"/leagues",exact:!0},{text:"Modifier une ligue",disabled:!0}],form:{name:"",logo:""}}},methods:{uploadFile:function(e){this.form.logo=e},updateLeague:function(){var e=this;this.validateErrMessages="",this.btnLoading=!0;var t=new FormData;t.append("name",this.form.name),t.append("logo",this.form.logo),axios.post("/leagues/"+this.$route.params.id,t).then((function(){e.$error=!1,e.btnLoading=!1,e.$success=!0,e.$router.push({name:"leagues"})})).catch((function(t){e.$error=!0,e.$success=!1,e.validateErrMessages=t.response.data.errors,e.btnLoading=!1}))},getLeagueById:function(){var e=this;this.formLoading=!0,axios.get("leagues/"+this.$route.params.id+"/edit").then((function(t){e.formLoading=!1,e.form.name=t.data.name})).catch((function(t){e.formLoading=!1,404===t.response.status&&e.$router.push({name:"notFound"})}))}},created:function(){this.getLeagueById()}};var a=n(3379),o=n.n(a),i=n(7254),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const c=(0,n(1900).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("v-card",{staticClass:"mb-3"},[n("v-breadcrumbs",{attrs:{items:e.breadcrumbs,large:""},scopedSlots:e._u([{key:"divider",fn:function(){return[n("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1),e._v(" "),e.formLoading?n("v-row",[n("v-col",{attrs:{lg:"8",cols:"12",md:"8"}},[n("v-skeleton-loader",{attrs:{type:"card"}})],1)],1):n("v-row",[n("v-col",{attrs:{lg:"8",cols:"12",md:"8"}},[n("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.updateLeague.apply(null,arguments)}}},[n("v-card",[n("v-card-title",{staticClass:"text--secondary"},[e._v("\n                                Modifier une ligue\n                            ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"12",md:"12"}},[n("v-text-field",{attrs:{"error-messages":e.validateErrMessages.name,outlined:"",dense:"",label:"Nom *"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",lg:"12",md:"12"}},[n("v-file-input",{ref:"logo",attrs:{"append-icon":"mdi-image",counter:"","error-messages":e.validateErrMessages.logo,outlined:"",dense:"","show-size":"",label:"Logo *"},on:{change:e.uploadFile}})],1)],1),e._v(" "),n("div",{staticClass:"my-2"},[n("v-btn",{attrs:{color:"primary",type:"submit",loading:e.btnLoading}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-content-save")]),e._v("\n                                        Enregistrer\n                                    ")],1),e._v(" "),n("v-btn",{attrs:{color:"secondary ml-2",to:"/leagues"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-cancel")]),e._v("\n                                        Annuler\n                                    ")],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);