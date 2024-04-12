var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { staticClass: "c-list-item", style: _vm.verticalStyle }, [_vm.itemLayout === "vertical" ? [_c("div", { staticStyle: { "flex": "1" } }, [_vm._t("default"), _vm.$slots.action ? _c("ul", { staticClass: "c-list-item-action c-list-item-action-vertical" }, [_vm._t("action")], 2) : _vm._e()], 2), _vm.$slots.extra ? _c("div", { staticClass: "c-list-item-extra" }, [_vm._t("extra")], 2) : _vm._e()] : [_vm._t("default"), _vm.$slots.action ? _c("ul", { staticClass: "c-list-item-action" }, [_vm._t("action")], 2) : _vm._e(), _vm.$slots.extra ? _c("div", { staticClass: "c-list-item-extra" }, [_vm._t("extra")], 2) : _vm._e()]], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
