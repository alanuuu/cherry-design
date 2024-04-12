"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "select", class: _vm.cls }, [_c("div", { staticClass: "c-select-selectbox c-input-content", on: { "click": _vm.clickBox } }, [_vm.filterable ? _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.query, expression: "query" }], staticClass: "c-select-input", attrs: { "type": "text", "spellcheck": "false", "autocomplete": "off", "placeholder": _vm.placeholder, "disabled": _vm.itemDisabled }, domProps: { "value": _vm.query }, on: { "input": [function($event) {
    if ($event.target.composing) {
      return;
    }
    _vm.query = $event.target.value;
  }, _vm.handleInput] } }) : _vm.label ? _c("span", { staticClass: "c-select-placeholder c-select-value" }, [_vm._v(_vm._s(_vm.label))]) : _c("span", { staticClass: "c-select-placeholder" }, [_vm._v(_vm._s(_vm.placeholder))]), _c("icon-right", { staticClass: "c-select-icon" })], 1), _c("transition", { attrs: { "name": "c-drop" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.visiable, expression: "visiable" }], staticClass: "c-select-option" }, [_c("ul", { staticClass: "c-select-option-list" }, [_vm._t("default")], 2)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
