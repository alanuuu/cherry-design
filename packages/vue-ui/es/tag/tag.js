import { staticRenderFns, render } from "./tag.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Tag",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (val) => {
        return ["small", "medium", "large"].includes(val);
      }
    },
    theme: {
      type: String,
      default: "normal",
      validator: (val) => {
        return ["normal", "light"].includes(val);
      }
    },
    circle: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true
    },
    color: String,
    link: String
  },
  computed: {
    classes() {
      return {
        [`c-tag-${this.size}`]: true,
        [`c-tag-${this.theme}`]: true,
        [`c-tag-${this.theme}-active`]: this.active,
        "c-tag-circle": this.circle
      };
    },
    styles() {
      return {
        background: this.color
      };
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
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
__component__.options.__file = "components/tag/tag.vue";
var Tag = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Tag as default };
