"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_version_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/version/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/version/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
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
      validateErrMessages: '',
      dataLoading: false,
      btnLoading: false,
      dialog: false,
      version: '',
      breadcrumbs: [{
        text: 'Accueil',
        disabled: false,
        to: '/home'
      }, {
        text: 'Version',
        disabled: true
      }],
      form: {}
    };
  },
  methods: {
    getVersion: function getVersion() {
      var _this = this;

      this.dataLoading = true;
      axios.get('/version').then(function (response) {
        _this.dataLoading = false;
        _this.version = response.data;
        _this.form.version = response.data.version;
      })["catch"](function (error) {
        _this.dataLoading = false;
        console.log(error);
      });
    },
    updateVersion: function updateVersion() {
      var _this2 = this;

      this.btnLoading = true;
      this.validateErrMessages = '';
      axios.post('/version/update', {
        id: this.version.id,
        version: this.form.version
      }).then(function () {
        _this2.dialog = false;
        _this2.btnLoading = false;
        _this2.$error = false;
        _this2.$success = true;

        _this2.$store.dispatch("version", _this2.form.version);

        _this2.getVersion();
      })["catch"](function (error) {
        _this2.$error = true;
        _this2.$success = false;
        _this2.validateErrMessages = error.response.data.errors;
        _this2.btnLoading = false;
      });
    }
  },
  created: function created() {
    this.getVersion();
  }
});

/***/ }),

/***/ "./resources/js/views/version/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/version/index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_21c5be28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=21c5be28& */ "./resources/js/views/version/index.vue?vue&type=template&id=21c5be28&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/version/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_21c5be28___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_21c5be28___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/version/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/version/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/version/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/version/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/version/index.vue?vue&type=template&id=21c5be28&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/version/index.vue?vue&type=template&id=21c5be28& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21c5be28___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21c5be28___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21c5be28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=21c5be28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/version/index.vue?vue&type=template&id=21c5be28&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/version/index.vue?vue&type=template&id=21c5be28&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/version/index.vue?vue&type=template&id=21c5be28& ***!
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
              _vm.dataLoading
                ? _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "8", sm: "12", md: "8" } },
                        [
                          _c(
                            "v-sheet",
                            { attrs: { color: "lighten-4" } },
                            [
                              _c("v-skeleton-loader", {
                                attrs: { type: "article, actions" }
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
                : _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "8", sm: "12" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-title",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "primary",
                                        fab: "",
                                        depressed: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = true
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-pencil-outline")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "h4",
                                    { staticStyle: { color: "#007cc7" } },
                                    [_vm._v("V " + _vm._s(_vm.version.version))]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "div",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "v-avatar",
                                        { attrs: { tile: "", size: "300" } },
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src: "assets/images/version.png",
                                              "aspect-ratio": "1"
                                            },
                                            scopedSlots: _vm._u([
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
                                            ])
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("mdi-calendar-clock")
                                  ]),
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.version.updated_at) +
                                      "\n                        "
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
                  ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { width: "500" },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateVersion.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "text--secondary" },
                            [
                              _vm._v(
                                "\n                            Changer !\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c(
                              "div",
                              { staticClass: "mt-8" },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    outlined: "",
                                    dense: "",
                                    label: "Version *",
                                    "error-messages":
                                      _vm.validateErrMessages.version
                                  },
                                  model: {
                                    value: _vm.form.version,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "version", $$v)
                                    },
                                    expression: "form.version"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            { staticClass: "pa-4" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "secondary" },
                                  on: {
                                    click: function($event) {
                                      _vm.dialog = false
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-cancel")
                                  ]),
                                  _vm._v(
                                    "\n                                Fermer\n                            "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    type: "submit",
                                    loading: _vm.btnLoading
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-content-save")
                                  ]),
                                  _vm._v(
                                    "\n                                Enrigistrer\n                            "
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
                ]
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