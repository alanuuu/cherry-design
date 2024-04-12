import formMixins from "../mixins/form.js";
import { staticRenderFns, render } from "./checkbox.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const name = "c-checkbox";
const __vue2_script = {
  name: "Checkbox",
  mixins: [formMixins],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium"
    },
    label: {
      type: [String, Number, Boolean]
    },
    name: {
      type: String
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  computed: {
    clsAll() {
      return {
        [name + "-" + this.groupSize]: true,
        [name + "-all-disabled"]: this.itemDisabled
      };
    },
    classes() {
      return {
        [name + "-checked"]: this.checkValue
      };
    },
    clsinner() {
      return {
        [name + "-" + this.groupSize]: true
      };
    },
    classesinput() {
      return {
        [name + "-input-disabled"]: this.itemDisabled
      };
    }
  },
  data() {
    return {
      checkValue: this.value,
      parent: this.$parent.$options.name === "CheckboxGroup" ? this.$parent : null,
      groupSize: this.size,
      group: false,
      model: []
    };
  },
  mounted() {
    if (this.parent) {
      this.groupSize = this.parent.size;
      this.group = true;
    }
  },
  methods: {
    change(val) {
      var _a;
      const { checked } = val.target;
      this.checkValue = checked;
      this.$emit("input", this.checkValue);
      if (this.parent) {
        this.parent.change(this.model);
      } else {
        (_a = this.formItem) == null ? void 0 : _a.onField("change");
      }
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
__component__.options.__file = "components/checkbox/checkbox.vue";
var Checkbox = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Checkbox as default };
