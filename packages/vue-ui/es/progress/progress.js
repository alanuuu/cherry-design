import { staticRenderFns, render } from "./progress.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "CProgress",
  props: {
    process: {
      type: Number,
      default: 0
    },
    color: String,
    showPercent: Boolean
  },
  computed: {
    styles() {
      var _a;
      return {
        width: this.perent,
        background: (_a = this.color) != null ? _a : null
      };
    },
    percent() {
      return parseInt(this.process, 10) + "%";
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
__component__.options.__file = "components/progress/progress.vue";
var Progress = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Progress as default };
