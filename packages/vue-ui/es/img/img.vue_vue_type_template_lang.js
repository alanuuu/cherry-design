var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.cls }, [_c("img", { staticClass: "c-image-img", style: _vm.imageStyle, attrs: { "src": _vm.src, "alt": _vm.alt }, on: { "click": _vm.clickImage, "error": _vm.handleError, "load": _vm.handleLoad } }), _vm.preview ? [_c("img-preview", { directives: [{ name: "show", rawName: "v-show", value: _vm.showView, expression: "showView" }], attrs: { "src": _vm.previewSrc && _vm.previewSrc !== "" ? _vm.previewSrc : _vm.src }, on: { "close": _vm.closeView } })] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;
export { render, staticRenderFns };
