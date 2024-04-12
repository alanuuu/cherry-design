import { staticRenderFns, render } from "./tab-bar.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const padding = 24;
const name = "c-tab-bar";
const __vue2_script = {
  name: "TabBar",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    active: {
      type: String
    }
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
        [name]: true
      };
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
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/tabs/tab-bar.vue";
var TabBar = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { TabBar as default };
