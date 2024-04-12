"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "bar", class: _vm.cls }, [_vm._l(_vm.items, function(v) {
    return _c("div", { key: v.name, ref: "items", refInFor: true, staticClass: "c-tab-bar-item", class: {
      "c-tab-active": _vm.active === v.name
    }, on: { "click": function($event) {
      return _vm.onClick(v.name);
    } } }, [_vm._v(" " + _vm._s(v.label) + " ")]);
  }), _c("div", { staticClass: "c-tab-bar-line", style: _vm.lineStyle })], 2);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
