import { staticRenderFns, render } from "./list-item.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "ListItem",
  inject: ["itemLayout"],
  data() {
    return {
      itemLayout: this.itemLayout
    };
  },
  computed: {
    verticalStyle() {
      return this.itemLayout === "vertical" ? {
        alignItems: "flex-start"
      } : {};
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
__component__.options.__file = "components/list/list-item.vue";
var ListItem = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { ListItem as default };
