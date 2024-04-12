"use strict";
var right_vue_vue_type_template_lang = require("./right.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-right",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-right": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, right_vue_vue_type_template_lang.render, right_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/right.vue";
var IconRight = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconRight;
