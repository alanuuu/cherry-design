import { staticRenderFns, render } from "./message-banned.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "icon-message-banned",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-message-banned": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/message-banned.vue";
var IconMessageBanned = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { IconMessageBanned as default };
