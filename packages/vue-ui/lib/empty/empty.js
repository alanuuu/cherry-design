"use strict";
var empty_vue_vue_type_template_lang = require("./empty.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Empty",
  props: {
    image: String,
    width: {
      type: String,
      default: "200px"
    },
    description: {
      type: String,
      default: "\u6682\u65E0\u6570\u636E"
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, empty_vue_vue_type_template_lang.render, empty_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/empty/empty.vue";
var Empty = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Empty;
