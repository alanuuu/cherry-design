var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { "name": "c-fade" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], staticClass: "c-dialog" }, [_c("div", { staticClass: "c-dialog-body", class: { "c-dialog-border-shadow": !_vm.modal }, style: { width: _vm.width, marginTop: _vm.top } }, [_c("div", { class: ["c-dialog-header", { "c-dialog-center": _vm.center }] }, [_vm._t("title", function() {
    return [_c("div", { staticClass: "c-dialog-title" }, [_c("span", [_vm._v(_vm._s(_vm.title))])])];
  }), _c("span", { directives: [{ name: "show", rawName: "v-show", value: _vm.showClose, expression: "showClose" }], staticClass: "c-dialog-close-botton", on: { "click": _vm.close } }, [_c("icon-close")], 1)], 2), _c("div", { staticClass: "c-dialog-content" }, [_vm._t("default")], 2), _c("div", { class: ["c-dialog-footer", { "c-dialog-center": _vm.center }] }, [_vm._t("footer", function() {
    return [_c("c-button", { on: { "click": _vm.close } }, [_vm._v("\u786E \u5B9A")]), _c("c-button", { staticStyle: { "margin-right": "16px" }, attrs: { "ghost": true }, on: { "click": _vm.close } }, [_vm._v("\u53D6 \u6D88")])];
  })], 2)]), _c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.modal, expression: "modal" }], staticClass: "c-dialog-shadow", on: { "click": _vm.close } })])]);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
