"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[140],{6140:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});const s={data:function(){return{query:"",league_id:3,dataLoading:!1,loadingLeague:!1,clubs:[],leagues:[],breadcrumbs:[{text:"Accueil",disabled:!1,to:"/home"},{text:"Clubs",disabled:!0}]}},methods:{getLeagues:function(){var t=this;this.loadingLeague=!0,this.dataLoading=!0,axios.get("/leagues").then((function(e){t.loadingLeague=!1,t.leagues=e.data,t.dataLoading=!1,t.getClubs()})).catch((function(e){console.log(e),t.loadingLeague=!0,t.dataLoading=!1}))},getClubs:function(){var t=this;this.dataLoading=!0,axios.get("/clubs",{params:{league_id:this.league_id}}).then((function(e){t.clubs=e.data,t.dataLoading=!1})).catch((function(e){console.log(e),t.dataLoading=!1}))}},created:function(){this.getLeagues()},computed:{searchClubs:function(){var t=this;return this.clubs.filter((function(e){return t.query?e.name.toLowerCase().trim().includes(t.query.toLowerCase().trim()):t.clubs}))}}};const l=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-main",[a("v-container",{attrs:{fluid:""}},[a("v-card",{staticClass:"mb-3"},[a("v-breadcrumbs",{attrs:{items:t.breadcrumbs,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1),t._v(" "),a("v-row",[a("v-col",{attrs:{lg:"2",md:"2",cols:"12"}},[a("v-btn",{attrs:{color:"primary",to:"/clubs/create"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("\n                        Ajouter\n                    ")],1)],1),t._v(" "),a("v-col",{staticClass:"d-lg-block d-md-block d-none",attrs:{lg:"4",md:"4",cols:"12"}},[t._v(" ")]),t._v(" "),a("v-col",{attrs:{lg:"2",md:"2",cols:"4"}},[a("v-select",{staticStyle:{"margin-bottom":"-30px"},attrs:{dense:"",solo:"",placeholder:"Ligue...",loading:t.loadingLeague,items:t.leagues,"item-value":"id","item-text":"name"},on:{change:t.getClubs},model:{value:t.league_id,callback:function(e){t.league_id=e},expression:"league_id"}})],1),t._v(" "),a("v-col",{attrs:{lg:"4",md:"4",cols:"8"}},[a("v-text-field",{staticStyle:{"margin-bottom":"-30px"},attrs:{dense:"",solo:"","prepend-inner-icon":"mdi-magnify",placeholder:"Recherche...",clearable:""},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1),t._v(" "),t.dataLoading?a("v-row",t._l(6,(function(t){return a("v-col",{key:t,attrs:{md:"3",cols:"6",lg:"2"}},[a("v-sheet",{attrs:{color:"lighten-4"}},[a("v-skeleton-loader",{attrs:{type:"card"}})],1)],1)})),1):t._e(),t._v(" "),!t.dataLoading&&t.searchClubs.length>0?a("v-row",t._l(t.searchClubs,(function(e){return a("v-col",{key:e.id,attrs:{md:"3",cols:"6",lg:"2"}},[a("v-card",{staticClass:"text-center",attrs:{ripple:"",height:"100%"}},[a("v-avatar",{staticClass:"my-3",attrs:{tile:"",size:"100"}},[a("v-img",{attrs:{src:e.logo},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)})],1),t._v(" "),a("v-card-text",[a("h4",{staticClass:"text--primary d-inline-block text-truncate",staticStyle:{"max-width":"150px"}},[t._v(t._s(e.name))]),t._v(" "),a("h3",{staticClass:"my-2",staticStyle:{color:"#3e96e3"}},[t._v(t._s(e.slogan))]),t._v(" "),a("h4",[t._v(" "+t._s(e.league.name))])]),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{icon:"",large:"",to:"/clubs/"+e.id+"/edit"}},[a("v-icon",[t._v("mdi-circle-edit-outline")])],1)],1)],1)],1)})),1):t._e(),t._v(" "),t.dataLoading||0!==t.searchClubs.length?t._e():a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"text-center"},[a("v-card-text",[a("v-avatar",{attrs:{tile:"",size:"400"}},[a("v-img",{attrs:{src:"assets/images/no-data.png","aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!1,3042438443)})],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);