var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-input" }, [_c("input", _vm._b({ class: _vm.cls, attrs: { "disabled": _vm.itemDisabled, "placeholder": _vm.placeholder, "maxlength": _vm.maxlength, "type": _vm.type }, domProps: { "value": _vm.value }, on: { "input": _vm.onInput, "change": _vm.onChange, "blur": _vm.onBlur, "keyup": function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
      return null;
    }
    return _vm.onEnter.apply(null, arguments);
  } } }, "input", _vm.$attrs, false)), _vm.isWordLimitVisible ? _c("span", { staticClass: "c-input-tip" }, [_vm._v(_vm._s(_vm.textNum) + "/" + _vm._s(_vm.maxlength))]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
