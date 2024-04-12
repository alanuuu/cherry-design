"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { class: _vm.cls, style: _vm.styles }, [_vm.src ? _c("img", { staticClass: "c-avatar-img", attrs: { "src": _vm.src }, on: { "error": _vm.handleError } }) : _vm._t("default")], 2);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
