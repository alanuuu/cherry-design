"use strict";
var navBar_vue_vue_type_template_lang = require("./nav-bar.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const padding = 24;
const name = "c-nav-bar";
const __vue2_script = {
  name: "NavBar",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    active: {
      type: String
    },
    fixed: Boolean,
    top: Number
  },
  data() {
    return {
      lineStyle: {
        transform: `translateX(${padding}px)`
      }
    };
  },
  computed: {
    cls() {
      return {
        [name]: true,
        fixed: this.fixed
      };
    },
    style() {
      return this.fixed ? { top: this.top + "px" } : {};
    }
  },
  mounted() {
    this.getLineStyle();
  },
  watch: {
    active(cur, pre) {
      if (cur !== pre) {
        this.getLineStyle();
      }
    }
  },
  methods: {
    onClick(type) {
      this.$emit("click", type);
    },
    getLineStyle() {
      this.$nextTick(() => {
        const { items } = this.$refs;
        if (items && items.length) {
          const ref = items.find((v) => v.className.indexOf("active") > -1);
          const parent = this.$refs.bar.getBoundingClientRect();
          const rect = ref ? ref.getBoundingClientRect() : {};
          this.lineStyle = {
            width: rect.width - padding * 2 + "px",
            transform: `translateX(${rect.left - parent.left + padding}px)`
          };
        }
      });
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, navBar_vue_vue_type_template_lang.render, navBar_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/navs/nav-bar.vue";
var NavBar = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = NavBar;
