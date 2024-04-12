"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-progress" }, [_c("div", { staticClass: "c-progress-inner", style: _vm.styles }, [_vm.showPercent ? _c("span", { staticClass: "percent" }, [_vm._v(_vm._s(_vm.percent))]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
