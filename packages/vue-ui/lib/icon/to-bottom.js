"use strict";
var toBottom_vue_vue_type_template_lang = require("./to-bottom.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-to-bottom",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-to-bottom": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, toBottom_vue_vue_type_template_lang.render, toBottom_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/to-bottom.vue";
var IconToBottom = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconToBottom;
