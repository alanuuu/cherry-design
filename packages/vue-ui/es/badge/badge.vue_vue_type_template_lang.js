var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-badge" }, [_vm._t("default"), _vm.isShowTip ? _c("div", { class: _vm.cls }, [_vm._v(_vm._s(_vm.badgeValue))]) : _vm._e(), _vm.isShowDot ? _c("div", { class: _vm.dotCls }) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
