"use strict";
var arrowDown_vue_vue_type_template_lang = require("./arrow-down.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-arrow-down",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-arrow-down": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, arrowDown_vue_vue_type_template_lang.render, arrowDown_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/arrow-down.vue";
var IconArrowDown = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconArrowDown;
