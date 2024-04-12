var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-list-item-meta", style: _vm.metaStyle }, [_vm.avatar || _vm.$slots.avatar ? _c("div", { staticClass: "c-list-item-meta-avatar" }, [_vm._t("avatar", function() {
    return [_c("c-avatar", { attrs: { "src": _vm.avatar } })];
  })], 2) : _vm._e(), _c("div", { staticClass: "c-list-item-meta-content" }, [_vm.title || _vm.$slots.title ? _c("div", { staticClass: "c-list-item-meta-title" }, [_vm._t("title", function() {
    return [_vm._v(_vm._s(_vm.title))];
  })], 2) : _vm._e(), _vm.description || _vm.$slots.description ? _c("div", { staticClass: "c-list-item-meta-description" }, [_vm._t("description", function() {
    return [_vm._v(_vm._s(_vm.description))];
  })], 2) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
