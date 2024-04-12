var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { "name": "c-fade" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "c-toast", style: _vm.styles }, [_c("div", { staticClass: "c-toast-content" }, [_c("div", { staticStyle: { "display": "inline-flex", "align-items": "center" } }, [_c("div", { staticClass: "c-toast-content-text", class: _vm.cls }, [_vm.icon !== "none" ? _c(_vm.icon, { tag: "component", class: _vm.clsIcon }) : _vm._e(), _c("span", [_vm._v(_vm._s(_vm.message))])], 1), _vm.showClose ? _c("icon-close", { staticClass: "c-toast-content-close", nativeOn: { "click": function($event) {
    return _vm.close.apply(null, arguments);
  } } }) : _vm._e()], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
