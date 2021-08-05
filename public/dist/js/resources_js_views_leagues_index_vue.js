"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_leagues_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/leagues/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/leagues/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dataLoading: false,
      leagues: [],
      breadcrumbs: [{
        text: 'Accueil',
        disabled: false,
        to: '/home'
      }, {
        text: 'Ligues',
        disabled: true
      }]
    };
  },
  methods: {
    getLanguages: function getLanguages() {
      var _this = this;

      this.dataLoading = true;
      axios.get('/leagues').then(function (response) {
        _this.leagues = response.data;
        _this.dataLoading = false;
      })["catch"](function (error) {
        console.log(error);
        _this.dataLoading = false;
      });
    }
  },
  created: function created() {
    this.getLanguages();
  }
});

/***/ }),

/***/ "./resources/js/views/leagues/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/leagues/index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_042e4938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=042e4938& */ "./resources/js/views/leagues/index.vue?vue&type=template&id=042e4938&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/leagues/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_042e4938___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_042e4938___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/leagues/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/leagues/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/leagues/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/leagues/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/leagues/index.vue?vue&type=template&id=042e4938&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/leagues/index.vue?vue&type=template&id=042e4938& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_042e4938___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_042e4938___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_042e4938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=042e4938& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/leagues/index.vue?vue&type=template&id=042e4938&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/leagues/index.vue?vue&type=template&id=042e4938&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/leagues/index.vue?vue&type=template&id=042e4938& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                { attrs: { color: "primary", to: "/leagues/create" } },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-plus")]),
                  _vm._v("\n                Ajouter\n            ")
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
            _vm._l(4, function(i) {
              return _c(
                "v-col",
                { key: i, attrs: { md: "3", cols: "6", lg: "3" } },
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
      _vm.leagues
        ? _c(
            "v-row",
            _vm._l(_vm.leagues, function(league) {
              return _c(
                "v-col",
                {
                  key: league.id,
                  attrs: { md: "4", cols: "6", lg: "3", eager: "" }
                },
                [
                  _c(
                    "v-card",
                    { staticClass: "text-center", attrs: { ripple: "" } },
                    [
                      _c("v-img", {
                        attrs: { src: league.logo, "aspect-ratio": "1" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "placeholder",
                              fn: function() {
                                return [
                                  _c(
                                    "v-row",
                                    {
                                      staticClass: "fill-height ma-0",
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
                      }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("h3", { staticClass: "text--primary" }, [
                          _vm._v(_vm._s(league.name))
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
                                to: "/leagues/" + league.id + "/edit"
                              }
                            },
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