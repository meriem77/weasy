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
      league_id: 1,
      dataLoading: false,
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

      this.dataLoading = true;
      axios.get('/leagues').then(function (response) {
        _this.leagues = response.data;
        _this.dataLoading = false;

        _this.getClubs();
      })["catch"](function (error) {
        console.log(error);
        _this.dataLoading = false;
      });
    },
    getClubs: function getClubs() {
      var _this2 = this;

      this.dataLoading = true;
      axios.get('/clubs', {
        params: {
          league_id: this.league_id,
          club_id: this.$route.query.club_id
        }
      }).then(function (response) {
        _this2.clubs = response.data;
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
        return _this3.query ? club.name.toLowerCase().trim().includes(_this3.query.toLowerCase().trim()) : _this3.clubs;
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
        "v-main",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
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
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "d-flex",
                      attrs: { lg: "2", md: "2", cols: "12" }
                    },
                    [
                      _c(
                        "v-btn",
                        { attrs: { color: "primary", to: "/clubs/create" } },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-plus")
                          ]),
                          _vm._v(
                            "\n                        Ajouter\n                    "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      this.$route.query.club_id
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "ml-2",
                              staticStyle: { "margin-top": "1px" },
                              attrs: { text: "", color: "red" },
                              on: {
                                click: function($event) {
                                  ;[
                                    _vm.$router.replace("/clubs"),
                                    _vm.getClubs()
                                  ]
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-filter-remove-outline")
                              ]),
                              _vm._v(
                                "\n                        Reset\n                    "
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "d-lg-block d-md-block d-none",
                      attrs: { lg: "2", md: "2", cols: "12" }
                    },
                    [_vm._v(" ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { lg: "4", md: "4", cols: "4" } },
                    [
                      _c("v-autocomplete", {
                        staticStyle: { "margin-bottom": "-30px" },
                        attrs: {
                          solo: "",
                          dense: "",
                          items: _vm.leagues,
                          placeholder: "Ligue...",
                          "item-text": "name",
                          "item-value": "id"
                        },
                        on: { change: _vm.getClubs },
                        scopedSlots: _vm._u([
                          {
                            key: "selection",
                            fn: function(data) {
                              return [
                                _c(
                                  "v-avatar",
                                  {
                                    staticClass: "mr-3",
                                    attrs: { left: "", tile: "", size: "9%" }
                                  },
                                  [
                                    _c("v-img", {
                                      attrs: { src: data.item.logo }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(data.item.name) +
                                    "\n                        "
                                )
                              ]
                            }
                          },
                          {
                            key: "item",
                            fn: function(data) {
                              return [
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    { attrs: { tile: "" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: data.item.logo,
                                          "aspect-ratio": "1"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "placeholder",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "v-row",
                                                    {
                                                      staticClass:
                                                        "fill-height ma-0",
                                                      attrs: {
                                                        align: "center",
                                                        justify: "center"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-progress-circular",
                                                        {
                                                          attrs: {
                                                            indeterminate: "",
                                                            size: "20",
                                                            color: "primary"
                                                          }
                                                        }
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        domProps: {
                                          innerHTML: _vm._s(data.item.name)
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.league_id,
                          callback: function($$v) {
                            _vm.league_id = $$v
                          },
                          expression: "league_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { lg: "4", md: "4", cols: "8" } },
                    [
                      _c("v-text-field", {
                        staticStyle: { "margin-bottom": "-30px" },
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
              _vm.dataLoading
                ? _c(
                    "v-row",
                    _vm._l(6, function(i) {
                      return _c(
                        "v-col",
                        { key: i, attrs: { md: "3", cols: "6", lg: "2" } },
                        [
                          _c(
                            "v-sheet",
                            { attrs: { color: "lighten-4" } },
                            [
                              _c("v-skeleton-loader", {
                                attrs: { type: "card" }
                              })
                            ],
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
              !_vm.dataLoading && _vm.searchClubs.length > 0
                ? _c(
                    "v-row",
                    _vm._l(_vm.searchClubs, function(club) {
                      return _c(
                        "v-col",
                        {
                          key: club.id,
                          attrs: { md: "3", cols: "6", lg: "2" }
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "text-center",
                              attrs: { ripple: "", height: "100%" }
                            },
                            [
                              _c(
                                "v-avatar",
                                {
                                  staticClass: "my-3",
                                  attrs: { tile: "", size: "100" }
                                },
                                [
                                  _c("v-img", {
                                    attrs: { src: club.logo },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "placeholder",
                                          fn: function() {
                                            return [
                                              _c(
                                                "v-row",
                                                {
                                                  staticClass:
                                                    "fill-height ma-0",
                                                  attrs: {
                                                    align: "center",
                                                    justify: "center"
                                                  }
                                                },
                                                [
                                                  _c("v-progress-circular", {
                                                    attrs: {
                                                      indeterminate: "",
                                                      color: "primary"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _c(
                                  "h4",
                                  {
                                    staticClass:
                                      "text--primary d-inline-block text-truncate",
                                    staticStyle: { "max-width": "150px" }
                                  },
                                  [_vm._v(_vm._s(club.name))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h3",
                                  {
                                    staticClass: "my-2",
                                    staticStyle: { color: "#3e96e3" }
                                  },
                                  [_vm._v(_vm._s(club.slogan))]
                                ),
                                _vm._v(" "),
                                _c("h4", [
                                  _vm._v(" " + _vm._s(club.league.name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        icon: "",
                                        large: "",
                                        to: "/clubs/" + club.id + "/edit"
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-circle-edit-outline")
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
                    }),
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.dataLoading && _vm.searchClubs.length === 0
                ? _c(
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
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { tile: "", size: "400" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: "assets/images/no-data.png",
                                          "aspect-ratio": "1"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "placeholder",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "v-row",
                                                    {
                                                      staticClass:
                                                        "fill-height ma-0",
                                                      attrs: {
                                                        align: "center",
                                                        justify: "center"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-progress-circular",
                                                        {
                                                          attrs: {
                                                            indeterminate: "",
                                                            color: "primary"
                                                          }
                                                        }
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          false,
                                          3042438443
                                        )
                                      })
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
                    ],
                    1
                  )
                : _vm._e()
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