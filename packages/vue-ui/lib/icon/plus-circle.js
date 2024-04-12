"use strict";
var plusCircle_vue_vue_type_template_lang = require("./plus-circle.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-plus-circle",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-plus-circle": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, plusCircle_vue_vue_type_template_lang.render, plusCircle_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/plus-circle.vue";
var IconPlusCircle = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconPlusCircle;
