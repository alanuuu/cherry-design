"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var empty = require("./imgs/empty.js");
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-empty" }, [_c("div", { staticClass: "c-empty-image", style: { width: _vm.width } }, [_vm.image ? _c("img", { attrs: { "src": _vm.image } }) : _vm._t("image", function() {
    return [_c("img", { attrs: { "src": empty } })];
  })], 2), _c("div", { staticClass: "c-empty-description" }, [_vm.$slots.description ? _vm._t("description") : _c("span", [_vm._v(_vm._s(_vm.description))])], 2), _vm.$slots.bottom ? _c("div", { staticClass: "c-empty-bottom" }, [_vm._t("bottom")], 2) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
