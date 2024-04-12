"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.active, expression: "active" }], staticClass: "c-tab-item", attrs: { "name": _vm.name, "label": _vm.label } }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
