"use strict";
var header_vue_vue_type_template_lang = require("./header.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "LayoutHeader"
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, header_vue_vue_type_template_lang.render, header_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/layout/header.vue";
var Header = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Header;
