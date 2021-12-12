"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dataLoading: false,
      deleteDialog: false,
      deleteBtnLoading: false,
      deleteId: '',
      roles: [],
      breadcrumbs: [{
        text: 'Accueil',
        disabled: false,
        to: '/home'
      }, {
        text: 'Roles',
        disabled: true
      }]
    };
  },
  methods: {
    getRoles: function getRoles() {
      var _this = this;

      this.dataLoading = true;
      axios.get('/roles').then(function (response) {
        _this.roles = response.data;
        _this.dataLoading = false;
      })["catch"](function (error) {
        console.log(error);
        _this.dataLoading = false;
      });
    },
    deleteRole: function deleteRole() {
      var _this2 = this;

      this.deleteBtnLoading = true;
      axios["delete"]('/roles/' + this.deleteId).then(function () {
        _this2.deleteBtnLoading = false;
        _this2.$success = true;
        _this2.deleteDialog = false;

        var i = _this2.roles.map(function (item) {
          return item.id;
        }).indexOf(_this2.deleteId);

        _this2.roles.splice(i, 1);
      })["catch"](function (error) {
        console.log(error);
        _this2.deleteBtnLoading = false;
        _this2.deleteDialog = false;
      });
    }
  },
  created: function created() {
    this.getRoles();
  }
});

/***/ }),

/***/ "./resources/js/views/pages/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/pages/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=498ea718& */ "./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/pages/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/pages/index.vue?vue&type=template&id=498ea718& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_498ea718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=498ea718& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=template&id=498ea718&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/index.vue?vue&type=template&id=498ea718& ***!
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
                    [
                      _c(
                        "v-btn",
                        { attrs: { color: "primary", to: "/roles/create" } },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-plus")
                          ]),
                          _vm._v(
                            "\n                        Ajouter\n                    "
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
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-sheet",
                            { attrs: { color: "lighten-4" } },
                            [
                              _c("v-skeleton-loader", {
                                attrs: { type: "table-tbody" }
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
                : _vm._e(),
              _vm._v(" "),
              !_vm.dataLoading && _vm.roles.length > 0
                ? _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-simple-table", {
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function() {
                                        return [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [_vm._v("Nom")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [_vm._v("Description")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-right" },
                                                [_vm._v("Actions")]
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(_vm.roles, function(role) {
                                              return _c(
                                                "tr",
                                                { key: role.id },
                                                [
                                                  _c("td", [
                                                    _vm._v(_vm._s(role.name))
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(role.description)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass: "text-right"
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            icon: "",
                                                            to:
                                                              "roles/" +
                                                              role.id +
                                                              "/edit"
                                                          }
                                                        },
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "mdi-pencil-outline"
                                                            )
                                                          ])
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: { icon: "" },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              ;[
                                                                (_vm.deleteDialog = true),
                                                                (_vm.deleteId =
                                                                  role.id)
                                                              ]
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "mdi-delete-outline"
                                                            )
                                                          ])
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  false,
                                  111783539
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "v-dialog",
                                {
                                  attrs: { width: "400" },
                                  model: {
                                    value: _vm.deleteDialog,
                                    callback: function($$v) {
                                      _vm.deleteDialog = $$v
                                    },
                                    expression: "deleteDialog"
                                  }
                                },
                                [
                                  _c(
                                    "v-card",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "my-5",
                                              attrs: {
                                                color: "warning",
                                                size: "80"
                                              }
                                            },
                                            [_vm._v("mdi-information-outline")]
                                          ),
                                          _vm._v(" "),
                                          _c("h1", { staticClass: "mb-5" }, [
                                            _vm._v("Es-tu sûr?")
                                          ]),
                                          _vm._v(" "),
                                          _c("h3", { staticClass: "my-5" }, [
                                            _vm._v(
                                              "Vous ne pourrez pas revenir en arrière !"
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-actions",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                depressed: "",
                                                color: "secondary"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.deleteDialog = false
                                                }
                                              }
                                            },
                                            [_vm._v("Annuler")]
                                          ),
                                          _vm._v(" "),
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                depressed: "",
                                                color: "primary",
                                                loading: _vm.deleteBtnLoading
                                              },
                                              on: { click: _vm.deleteRole }
                                            },
                                            [
                                              _vm._v(
                                                "Supprimer\n                                    "
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
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.dataLoading && _vm.roles.length === 0
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