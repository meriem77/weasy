(self.webpackChunk=self.webpackChunk||[]).push([[296],{7757:(t,r,e)=>{t.exports=e(5666)},5666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var s=u(t,r,e);if("normal"===s.type){if(n=e.done?v:h,s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=v,e.method="throw",e.arg=s.arg)}}}(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function m(){}function g(){}var w={};s(w,i,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(T([])));b&&b!==e&&n.call(b,i)&&(w=b);var _=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return m.prototype=g,s(_,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),s(_,c,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},2296:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>c});var n=e(7757),o=e.n(n);function i(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}const a={data:function(){return{loading:!1,form:{},errors:""}},methods:{login:function(){var t,r=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.loading=!0,r.errors="",axios.post("/login",r.form).then((function(t){r.loading=!1,t.data.user&&(axios.defaults.headers.common={Authorization:"Bearer "+t.data.user.token,"Content-Type":"application/json",Accept:"application/json"},r.$store.dispatch("createUserAuth",t.data.user),r.$store.dispatch("isLoggedIn",!0),r.$router.push({name:"home"}))})).catch((function(t){r.loading=!1,r.errors=t.response.data.message}));case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))})()}}};const c=(0,e(1900).Z)(a,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("v-main",[e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mt-15",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",lg:"6",md:"8"}},[t.errors?e("v-alert",{staticClass:"my-3",attrs:{prominent:"",type:"error"}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{staticClass:"grow"},[t._v("\n                                "+t._s(t.errors)+"\n                            ")])],1)],1):t._e(),t._v(" "),e("form",{on:{submit:function(r){return r.preventDefault(),t.login.apply(null,arguments)}}},[e("v-card",[e("v-card-text",[e("div",{staticClass:"my-5"},[e("v-row",[e("v-col",{attrs:{cols:"12",lg:"6",md:"6"}},[e("v-avatar",{staticStyle:{"margin-top":"-30px"},attrs:{tile:"",size:"300"}},[e("v-img",{attrs:{src:"assets/images/login.png",width:"60%","aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"6",md:"6"}},[e("v-text-field",{attrs:{outlined:"",label:"Email *",required:"",type:"email"},model:{value:t.form.email,callback:function(r){t.$set(t.form,"email",r)},expression:"form.email"}}),t._v(" "),e("v-text-field",{attrs:{outlined:"",label:"Mot de passe *",required:"",type:"password"},model:{value:t.form.password,callback:function(r){t.$set(t.form,"password",r)},expression:"form.password"}}),t._v(" "),e("v-btn",{attrs:{loading:t.loading,type:"submit",color:"primary",large:"",block:""}},[t._v("\n                                                Connexion\n                                            ")])],1)],1),t._v(" "),e("div",{staticClass:"mt-5"},[e("v-row",[e("v-col",{attrs:{cols:"12",lg:"6",md:"6"}},[e("h4",{staticClass:"text-lg-left text-md-left text-center"},[t._v("\n                                                    © "),e("a",{attrs:{href:"https://kaiztech.co",target:"_blank"}},[t._v("kaiztech.co")]),t._v("\n                                                    2021 - Tous droits réservés. ")])]),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"6",md:"6"}},[e("h4",{staticClass:"text-lg-right text-md-right text-center"},[t._v("V 0.0.1")])])],1)],1)],1)])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);