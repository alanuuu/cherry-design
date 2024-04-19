var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("thead", { staticClass: "t-date-head" }, [_c("tr", _vm._l(_vm.weekdays, function(v, i) {
    return _c("th", { key: i, staticClass: "t-column-head", attrs: { "title": v } }, [_vm._v(" " + _vm._s(v) + " ")]);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
