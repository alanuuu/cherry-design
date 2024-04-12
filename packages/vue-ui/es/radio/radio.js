import formMixins from "../mixins/form.js";
import { staticRenderFns, render } from "./radio.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Radio",
  mixins: [formMixins],
  props: {
    group: String,
    label: [String, Number],
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radioGroup: null
    };
  },
  methods: {
    setGroup(parent) {
      this.radioGroup = parent;
    }
  },
  computed: {
    inGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== "RadioGroup") {
          parent = parent.$parent;
        } else {
          this.setGroup(parent);
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.inGroup ? this.radioGroup.value : this.value;
      },
      set(val) {
        var _a;
        if (this.inGroup) {
          this.radioGroup.triggerInput(val);
        } else {
          this.$emit("input", val);
          if (!this.isGroup) {
            (_a = this.formItem) == null ? void 0 : _a.onField("change");
          }
        }
      }
    },
    isDisabled() {
      return this.itemDisabled;
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
__component__.options.__file = "components/radio/radio.vue";
var Radio = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Radio as default };
