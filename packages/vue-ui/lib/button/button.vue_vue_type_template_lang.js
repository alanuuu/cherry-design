"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", { class: _vm.cls, attrs: { "type": _vm.htmlType }, on: { "click": _vm.onClick } }, [_vm.loading ? _c("loading", { staticClass: "c-btn-icon", attrs: { "size": _vm.size, "isLoading": _vm.loading } }) : _vm._e(), _c("span", [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
