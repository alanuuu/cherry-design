"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("form", { staticClass: "c-form", class: _vm.cls, attrs: { "disabled": _vm.disabled }, on: { "submit": function($event) {
    $event.preventDefault();
    return _vm.handleSubmit.apply(null, arguments);
  } } }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
