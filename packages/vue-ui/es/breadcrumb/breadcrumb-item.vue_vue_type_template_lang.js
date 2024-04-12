var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { class: "c-breadcrumb-item" }, [_vm.isLink ? _c("Link", { attrs: { "href": _vm.href, "to": _vm.to, "replace": _vm.replace, "underline": false } }, [_vm._t("default")], 2) : _c("span", { class: "c-breadcrumb-item--inner" }, [_vm._t("default")], 2), _c("span", { class: _vm.separatorClass }, [_vm._v(" " + _vm._s(_vm.breadcrumb.separator) + " ")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
