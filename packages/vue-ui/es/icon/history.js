import { staticRenderFns, render } from "./history.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "icon-history",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-history": true
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
__component__.options.__file = "components/icon/history.vue";
var IconHistory = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { IconHistory as default };
