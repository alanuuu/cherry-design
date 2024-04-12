"use strict";
var plus_vue_vue_type_template_lang = require("./plus.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-plus",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-plus": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, plus_vue_vue_type_template_lang.render, plus_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/plus.vue";
var IconPlus = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconPlus;
