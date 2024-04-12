import TabBar from "./tab-bar.js";
import { staticRenderFns, render } from "./tabs.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Tabs",
  components: {
    CTabBar: TabBar
  },
  data() {
    return {
      itemData: [],
      currentName: ""
    };
  },
  props: {
    layout: {
      type: String,
      default: "top",
      validator: (val) => {
        return ["top", "left"].indexOf(val) > -1;
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var _a;
      const slots = this.$slots.default;
      if (!slots && slots.length === 0) {
        return;
      }
      const vnodes = slots.filter((v) => {
        return /vue-component-[0-9]+-TabPane/i.test(v.tag);
      });
      if (vnodes.length > 0) {
        const itemData = vnodes.map((v) => v.componentOptions.propsData);
        this.itemData = this.items && this.items.length ? this.items : itemData;
        this.currentName = (_a = this.itemData[0]) == null ? void 0 : _a.name;
      }
    },
    tagChange(type) {
      this.currentName = type;
      this.$emit("change", type);
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
__component__.options.__file = "components/tabs/tabs.vue";
var Tabs = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Tabs as default };
