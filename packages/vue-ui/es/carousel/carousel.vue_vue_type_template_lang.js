var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes }, [_c("div", { staticClass: "c-carousel-container", style: { height: _vm.height + "px" } }, [_c("button", { staticClass: "c-btn c-btn-left", on: { "click": _vm.prev } }, [_c("icon-left")], 1), _c("button", { staticClass: "c-btn c-btn-right", on: { "click": _vm.next } }, [_c("icon-right")], 1), _vm.dots ? _c("ul", { staticClass: "c-carousel-dot" }, _vm._l(_vm.itemsLen, function(index) {
    return _c("li", { key: index, on: { "click": function($event) {
      _vm.activeIndex = index - 1;
    } } }, [_c("button", { staticClass: "c-carousel-dot-btn", class: { "btn-active": index - 1 === _vm.activeIndex } })]);
  }), 0) : _vm._e(), _vm._t("default")], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
