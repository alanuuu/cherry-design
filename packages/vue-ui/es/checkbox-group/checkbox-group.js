import formMixins from "../mixins/form.js";
import { staticRenderFns, render } from "./checkbox-group.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "CheckboxGroup",
  mixins: [formMixins],
  props: {
    value: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  data() {
    return {
      checkValue: false,
      children: []
    };
  },
  computed: {
    classes() {
      const name = "c-checkbox-group";
      return {
        [name]: true
      };
    }
  },
  methods: {
    change(val) {
      var _a;
      this.$emit("input", val);
      this.$emit("change", val);
      (_a = this.formItem) == null ? void 0 : _a.onField("change");
    },
    getChildren(name) {
      return this.$children.filter((item) => {
        return item.$options.name === name;
      });
    },
    updateModel() {
      this.children = this.getChildren("Checkbox");
      if (this.children) {
        const { value } = this;
        this.children.forEach((item) => {
          item.model = value;
          item.checkValue = value.indexOf(item.label) > -1;
        });
      }
    }
  },
  mounted() {
    this.updateModel();
  },
  watch: {
    value() {
      this.updateModel();
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
__component__.options.__file = "components/checkbox-group/checkbox-group.vue";
var CheckboxGroup = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { CheckboxGroup as default };
