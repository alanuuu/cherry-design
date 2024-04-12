var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-card", class: "is-" + _vm.shadow + "-shadow" }, [_vm.$slots.header || _vm.header ? _c("div", { staticClass: "c-card-header" }, [_vm._t("header", function() {
    return [_vm._v(_vm._s(_vm.header))];
  })], 2) : _vm._e(), _c("div", { staticClass: "c-card-body" }, [_vm._t("default")], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
