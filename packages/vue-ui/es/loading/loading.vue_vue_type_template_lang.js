var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-loading" }, [!!_vm.$slots.default ? [_c("div", { staticClass: "c-loading-content" }, [_vm._t("default")], 2), _c("div", { staticClass: "c-loading-layer" }, [_c("div", { staticClass: "c-loading-inner" }, [_c("icon-loading", { staticClass: "c-loading-icon", attrs: { "stroke-width": "4" } })], 1), _vm.tip ? _c("div", { staticClass: "c-loading-tip" }, [_c("span", [_vm._v(_vm._s(_vm.tip))])]) : _vm._e()])] : [_c("icon-loading", { staticClass: "c-loading-icon", attrs: { "stroke-width": "4" } })]], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
