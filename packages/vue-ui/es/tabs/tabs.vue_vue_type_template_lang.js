var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "tabs", staticClass: "c-tab" }, [_c("c-tab-bar", { ref: "bar", attrs: { "items": _vm.itemData, "active": _vm.currentName }, on: { "click": _vm.tagChange } }), _c("div", { staticClass: "c-tab-content" }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
