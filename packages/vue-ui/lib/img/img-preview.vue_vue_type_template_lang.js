"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-image-view" }, [_c("div", { staticClass: "c-image-view-mask", on: { "click": _vm.clickView } }), _c("icon-close-circle", { staticClass: "c-image-view-close", nativeOn: { "click": function($event) {
    return _vm.close.apply(null, arguments);
  } } }), _c("div", { staticClass: "c-image-view-size" }, [_c("icon-narrow", { staticClass: "c-image-view-size-narrow", nativeOn: { "click": function($event) {
    return _vm.changeImgSize("down");
  } } }), _c("icon-blow-up", { staticClass: "c-image-view-size-blowup", nativeOn: { "click": function($event) {
    return _vm.changeImgSize("up");
  } } })], 1), _c("div", { staticClass: "c-image-view-image" }, [_c("img", { ref: "image", staticClass: "c-image-view-img", style: _vm.imgStyle, attrs: { "src": _vm.src } })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
exports.render = render;
exports.staticRenderFns = staticRenderFns;
