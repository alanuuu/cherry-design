import { staticRenderFns, render } from "./space.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Space",
  props: {
    size: {
      type: Number,
      default: 12
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (val) => {
        return ["horizontal", "vertical"].indexOf(val) !== -1;
      }
    },
    alignItems: {
      type: String,
      default: "center",
      validator: (val) => {
        return ["flex-start", "flex-end", "center", "baseline", "stretch"].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    cls() {
      const name = "c-space";
      return {
        [name]: true,
        [name + "-" + this.direction]: true
      };
    },
    styles() {
      return {
        gap: this.size + "px",
        alignItems: this.alignItems
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
__component__.options.__file = "components/space/space.vue";
var Space = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Space as default };
