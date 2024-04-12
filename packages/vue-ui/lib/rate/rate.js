"use strict";
var form = require("../mixins/form.js");
var rate_vue_vue_type_template_lang = require("./rate.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Rate",
  mixins: [form],
  props: {
    count: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: "icon-star-fill"
    },
    character: {
      type: String,
      default: null
    },
    showtext: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      this.clickIndex = val;
    }
  },
  data() {
    return {
      clickIndex: this.value,
      hoverIndex: -1,
      ishover: false
    };
  },
  computed: {
    classes() {
      return {
        [`c-rate-${this.size}`]: true
      };
    },
    iconClasses() {
      return [
        {
          [`c-rate-${this.size}`]: true
        }
      ];
    }
  },
  methods: {
    click(val) {
      if (this.itemDisabled) {
        return;
      }
      this.clickIndex = val + 1;
      this.$emit("input", this.clickIndex);
      this.$nextTick(() => {
        var _a;
        (_a = this.formItem) == null ? void 0 : _a.onField("change");
      });
    },
    starCls(val) {
      return [
        {
          "c-rate-point": val <= this.clickIndex && !this.ishover,
          "c-rate-hover": val <= this.hoverIndex && !this.itemDisabled,
          "c-rate-hover-point": val === this.hoverIndex && !this.itemDisabled
        }
      ];
    },
    handleMousemove(value) {
      if (this.itemDisabled) {
        return;
      }
      this.ishover = true;
      this.hoverIndex = value;
    },
    handleMouseleave() {
      if (this.itemDisabled) {
        return;
      }
      this.hoverIndex = -1;
      this.ishover = false;
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, rate_vue_vue_type_template_lang.render, rate_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/rate/rate.vue";
var Rate = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Rate;
