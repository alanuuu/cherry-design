"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { staticClass: "c-radio", class: { "is-disabled": _vm.isDisabled } }, [_c("span", { staticClass: "c-radio-input" }, [_c("span", { staticClass: "c-radio-inner", class: {
    "c-radio-inner__selected": _vm.model === _vm.label,
    "is-disabled": _vm.isDisabled
  } }), _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], ref: "radio", staticClass: "c-radio-original", attrs: { "type": "radio", "name": _vm.group, "disabled": _vm.isDisabled }, domProps: { "value": _vm.label, "checked": _vm._q(_vm.model, _vm.label) }, on: { "change": function($event) {
    _vm.model = _vm.label;
  } } })]), _c("span", { staticClass: "c-radio-label" }, [_vm._t("default"), !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
