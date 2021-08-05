"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_clubs_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/clubs/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/clubs/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      query: '',
      leagueId: '',
      leagueName: '',
      dataLoading: false,
      loadingLeague: false,
      DegradeModal: false,
      clubs: [],
      leagues: [],
      breadcrumbs: [{
        text: 'Accueil',
        disabled: false,
        to: '/home'
      }, {
        text: 'Clubs',
        disabled: true
      }]
    };
  },
  methods: {
    getLeagues: function getLeagues() {
      var _this = this;

      this.loadingLeague = true;
      this.dataLoading = true;
      axios.get('/leagues').then(function (response) {
        _this.loadingLeague = false;
        _this.leagues = response.data;
        _this.dataLoading = false;

        _this.getClubs();
      })["catch"](function (error) {
        console.log(error);
        _this.loadingLeague = true;
        _this.dataLoading = false;
      });
    },
    getClubs: function getClubs() {
      var _this2 = this;

      this.dataLoading = true;
      axios.post('/clubs', {
        leagueId: this.leagueId
      }).then(function (response) {
        _this2.clubs = response.data.data;
        _this2.dataLoading = false;
      })["catch"](function (error) {
        console.log(error);
        _this2.dataLoading = false;
      });
    }
  },
  created: function created() {
    this.getLeagues();
  },
  computed: {
    searchClubs: function searchClubs() {
      var _this3 = this;

      return this.clubs.filter(function (club) {
        return _this3.query ? club.name.toLowerCase().includes(_this3.query.toLowerCase()) : _this3.clubs;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/clubs/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/clubs/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_62075691___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=62075691& */ "./resources/js/views/clubs/index.vue?vue&type=template&id=62075691&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/clubs/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_62075691___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_62075691___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/clubs/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/clubs/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/clubs/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/clubs/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/clubs/index.vue?vue&type=template&id=62075691&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/clubs/index.vue?vue&type=template&id=62075691& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62075691___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62075691___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62075691___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=62075691& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/clubs/index.vue?vue&type=template&id=62075691&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/clubs/index.vue?vue&type=template&id=62075691&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/clubs/index.vue?vue&type=template&id=62075691& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        { staticClass: "mb-3" },
        [
          _c("v-breadcrumbs", {
            attrs: { items: _vm.breadcrumbs, large: "" },
            scopedSlots: _vm._u([
              {
                key: "divider",
                fn: function() {
                  return [_c("v-icon", [_vm._v("mdi-chevron-right")])]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-14" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  staticStyle: { "margin-bottom": "-38px" },
                  attrs: { md: "4", cols: "6", lg: "4" }
                },
                [
                  _c(
                    "v-btn",
                    { attrs: { color: "primary", to: "/clubs/create" } },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-plus")
                      ]),
                      _vm._v("\n                    Ajouter\n                ")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.dataLoading
        ? _c(
            "v-row",
            _vm._l(12, function(i) {
              return _c(
                "v-col",
                { key: i, attrs: { md: "4", cols: "6", lg: "2" } },
                [
                  _c(
                    "v-sheet",
                    { attrs: { color: "lighten-4" } },
                    [_c("v-skeleton-loader", { attrs: { type: "card" } })],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticStyle: { "margin-bottom": "-38px" },
              attrs: { md: "3", lg: "3", cols: "12" }
            },
            [
              _c("v-select", {
                attrs: {
                  dense: "",
                  solo: "",
                  placeholder: "Ligue...",
                  loading: _vm.loadingLeague,
                  items: _vm.leagues,
                  "item-value": "_id",
                  "item-text": "name"
                },
                on: { change: _vm.getClubs },
                model: {
                  value: _vm.leagueId,
                  callback: function($$v) {
                    _vm.leagueId = $$v
                  },
                  expression: "leagueId"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticStyle: { "margin-bottom": "-38px" },
              attrs: { cols: "12", lg: "4", md: "4" }
            },
            [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  solo: "",
                  "prepend-inner-icon": "mdi-magnify",
                  placeholder: "Recherche...",
                  clearable: ""
                },
                model: {
                  value: _vm.query,
                  callback: function($$v) {
                    _vm.query = $$v
                  },
                  expression: "query"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      !_vm.searchClubs
        ? _c(
            "v-row",
            _vm._l(_vm.searchClubs, function(club) {
              return _c(
                "v-col",
                { key: club._id, attrs: { md: "4", cols: "6", lg: "2" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "text-center", attrs: { ripple: "" } },
                    [
                      _c("v-img", { attrs: { src: club.logo } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("h3", { staticClass: "text--primary" }, [
                          _vm._v(_vm._s(club.name))
                        ]),
                        _vm._v(" "),
                        _c("h4", [
                          _c(
                            "strong",
                            {
                              staticStyle: {
                                "font-size": "30px",
                                color: "#26A69A"
                              }
                            },
                            [_vm._v(".")]
                          ),
                          _vm._v(" " + _vm._s(_vm.leagueName) + " ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            { attrs: { icon: "", large: "" } },
                            [_c("v-icon", [_vm._v("mdi-circle-edit-outline")])],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        : _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "text-center" },
                    [
                      _c("v-card-text", [
                        _c("img", {
                          attrs: {
                            src: "assets/images/no-data.png",
                            width: "30%"
                          }
                        })
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);