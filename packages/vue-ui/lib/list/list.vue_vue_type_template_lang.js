"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.cls }, [_vm.header || _vm.$slots.header ? _c("div", { staticClass: "c-list-header" }, [_vm._t("header", function() {
    return [_vm._v(_vm._s(_vm.header))];
  })], 2) : _vm._e(), _c("div", [_c("ul", { staticClass: "c-list-content" }, [_vm._t("default")], 2)]), _vm.footer || _vm.$slots.footer ? _c("div", { staticClass: "c-list-footer" }, [_vm._t("footer", function() {
    return [_vm._v(_vm._s(_vm.footer))];
  })], 2) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
