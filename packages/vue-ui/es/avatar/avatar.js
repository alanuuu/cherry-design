import { staticRenderFns, render } from "./avatar.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Avatar",
  props: {
    size: {
      type: String,
      default: "medium",
      validator(val) {
        return ["large", "medium", "small"].indexOf(val) !== -1;
      }
    },
    shape: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "square"].indexOf(val) !== -1;
      }
    },
    src: String,
    color: String
  },
  computed: {
    cls() {
      const name = "c-avatar";
      return {
        [name]: true,
        [name + "-image"]: !!this.src,
        [name + "-" + this.shape]: true,
        [name + "-" + this.size]: true
      };
    },
    styles() {
      return {
        color: this.color
      };
    }
  },
  methods: {
    handleError(e) {
      this.$emit("error", e);
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
__component__.options.__file = "components/avatar/avatar.vue";
var CAvatar = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { CAvatar as default };
