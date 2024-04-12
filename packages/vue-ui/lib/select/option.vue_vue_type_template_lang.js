"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.visiable ? _c("li", { staticClass: "c-select-option-item", class: _vm.cls, on: { "click": function($event) {
    $event.stopPropagation();
    return _vm.select.apply(null, arguments);
  } } }, [_vm._t("default", function() {
    return [_vm._v(_vm._s(_vm.label))];
  })], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
