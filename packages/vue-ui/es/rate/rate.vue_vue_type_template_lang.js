var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-rate", class: _vm.classes }, [_c("input", { attrs: { "type": "hidden" }, domProps: { "value": _vm.clickIndex } }), _vm._l(_vm.count, function(item, index) {
    return _c("span", { key: index, staticClass: "c-rate-icon c-rate", class: _vm.starCls(item), on: { "mousemove": function($event) {
      return _vm.handleMousemove(item);
    }, "mouseleave": function($event) {
      return _vm.handleMouseleave();
    }, "click": function($event) {
      return _vm.click(index);
    } } }, [_vm.character ? _c("span", [_vm._v(_vm._s(_vm.character))]) : _c(_vm.icon, { tag: "component" })], 1);
  }), _vm.showtext ? _c("span", { staticClass: "c-rate-text" }, [_vm._v(_vm._s(_vm.clickIndex))]) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
