"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a", { class: _vm.cls, attrs: { "href": _vm.disabled ? null : _vm.href }, on: { "click": _vm.handleClick } }, [_vm.$slots.default ? _c("span", { staticClass: "c-link--inner" }, [_vm._t("default")], 2) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
