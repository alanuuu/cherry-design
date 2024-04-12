var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.link ? _c("span", { staticClass: "c-tag", class: _vm.classes, style: _vm.styles, on: { "click": _vm.onClick } }, [_vm._t("default")], 2) : _c("a", { staticClass: "c-tag", class: _vm.classes, style: _vm.styles, attrs: { "href": _vm.link }, on: { "click": _vm.onClick } }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
