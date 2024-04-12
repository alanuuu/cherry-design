"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "navs", staticClass: "c-nav" }, [_c("c-nav-bar", { ref: "bar", attrs: { "items": _vm.itemData, "active": _vm.activeKey, "fixed": _vm.fixed, "top": _vm.top }, on: { "click": _vm.tagChange } }), _c("div", { staticClass: "c-nav-content" }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
