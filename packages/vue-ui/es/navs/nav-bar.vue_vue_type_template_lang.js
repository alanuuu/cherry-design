var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "bar", class: _vm.cls, style: _vm.style }, [_vm._l(_vm.items, function(v) {
    return _c("div", { key: v.name, ref: "items", refInFor: true, staticClass: "c-nav-bar-item", class: {
      active: _vm.active === v.name
    }, on: { "click": function($event) {
      return _vm.onClick(v.name);
    } } }, [_vm._v(" " + _vm._s(v.label) + " ")]);
  }), _c("div", { staticClass: "c-nav-bar-line", style: _vm.lineStyle })], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
