var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", { staticClass: "c-checkbox-all", class: _vm.clsAll }, [_c("span", { staticClass: "c-checkbox", class: _vm.classes }, [_c("span", { staticClass: "c-checkbox-inner", class: _vm.clsinner }), _vm.group ? _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], staticClass: "c-checkbox-input", class: _vm.classesinput, attrs: { "type": "checkbox", "name": _vm.name, "disabled": _vm.itemDisabled }, domProps: { "value": _vm.label, "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : _vm.model }, on: { "change": [function($event) {
    var $$a = _vm.model, $$el = $event.target, $$c = $$el.checked ? true : false;
    if (Array.isArray($$a)) {
      var $$v = _vm.label, $$i = _vm._i($$a, $$v);
      if ($$el.checked) {
        $$i < 0 && (_vm.model = $$a.concat([$$v]));
      } else {
        $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
      }
    } else {
      _vm.model = $$c;
    }
  }, _vm.change] } }) : _c("input", { staticClass: "c-checkbox-input", class: _vm.classesinput, attrs: { "type": "checkbox", "name": _vm.name, "disabled": _vm.itemDisabled }, domProps: { "checked": _vm.checkValue }, on: { "change": _vm.change } })]), _vm._t("default", function() {
    return [_c("span", [_vm._v(_vm._s(_vm.label))])];
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
