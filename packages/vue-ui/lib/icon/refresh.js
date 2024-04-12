"use strict";
var refresh_vue_vue_type_template_lang = require("./refresh.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-refresh",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-refresh": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, refresh_vue_vue_type_template_lang.render, refresh_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/refresh.vue";
var IconRefresh = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconRefresh;
