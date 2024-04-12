import { staticRenderFns, render } from "./backtop.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "BackTop",
  props: {
    height: {
      type: Number,
      default: 300
    },
    bottom: {
      type: Number,
      default: 50
    },
    right: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    window.addEventListener("resize", this.changeScroll);
    window.addEventListener("scroll", this.changeScroll);
  },
  computed: {
    styles() {
      return {
        bottom: this.bottom + "px",
        right: this.right + "px"
      };
    }
  },
  methods: {
    changeScroll() {
      this.show = window.pageYOffset >= this.height;
    },
    backTop() {
      const top = document.documentElement || document.body;
      top.scrollIntoView({
        behavior: "smooth"
      });
      this.$emit("back");
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.changeScroll);
    window.removeEventListener("scroll", this.changeScroll);
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/backtop/backtop.vue";
var BackTop = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { BackTop as default };
