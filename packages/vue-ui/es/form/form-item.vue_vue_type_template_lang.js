var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("c-row", { staticClass: "c-form-item", class: _vm.cls }, [_c("c-col", { staticClass: "c-form-item--label", attrs: { "span": _vm.labelCol } }, [_vm.label ? _c("form-item-label", { attrs: { "required": _vm.isRequired } }, [_vm._v(_vm._s(_vm.label))]) : _vm._e()], 1), _c("c-col", { staticClass: "c-form-item--control", attrs: { "span": _vm.wrapperCol } }, [_c("div", { staticClass: "c-form-item--content" }, [_vm._t("default")], 2), _c("form-item-message", { attrs: { "status": _vm.status } }, [_vm._v(" " + _vm._s(_vm.message) + " ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
