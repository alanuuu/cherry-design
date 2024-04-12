"use strict";
var thumbUp_vue_vue_type_template_lang = require("./thumb-up.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-thumb-up",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-thumb-up": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, thumbUp_vue_vue_type_template_lang.render, thumbUp_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/thumb-up.vue";
var IconThumbUp = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconThumbUp;
