"use strict";
var navBar = require("./nav-bar.js");
var scroll = require("../packages/vue-ui/util/scroll.js");
var navs_vue_vue_type_template_lang = require("./navs.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const name = "c-nav";
let timer = null;
const __vue2_script = {
  name: "Navs",
  components: {
    CNavBar: navBar
  },
  props: {
    top: {
      type: Number,
      default: 0
    },
    items: Array,
    layout: {
      type: String,
      default: "top",
      validator: (val) => {
        return ["top", "bottom", "left", "right"].indexOf(val) > -1;
      }
    },
    duration: {
      type: Number,
      default: 450
    },
    isWindow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeKey: null,
      itemData: [],
      isTabClicked: false,
      fixed: false
    };
  },
  computed: {
    container() {
      var _a;
      return this.isWindow ? document.documentElement : (_a = this.$refs.navs) == null ? void 0 : _a.parentElement;
    },
    listener() {
      var _a;
      return this.isWindow ? document : (_a = this.$refs.navs) == null ? void 0 : _a.parentElement;
    }
  },
  created() {
    this.init();
  },
  mounted() {
    var _a;
    (_a = this.listener) == null ? void 0 : _a.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },
  beforeDestroy() {
    var _a;
    (_a = this.listener) == null ? void 0 : _a.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    init() {
      const slots = this.$slots.default;
      if (!slots && slots.length === 0) {
        return;
      }
      const vnodes = slots.filter((v) => {
        return /vue-component-[0-9]+-NavItem/i.test(v.tag);
      });
      if (vnodes.length > 0) {
        const itemData = vnodes.map((v) => v.componentOptions.propsData);
        this.itemData = this.items && this.items.length ? this.items : itemData;
      }
    },
    tagChange(type) {
      this.activeKey = type;
      this.isTabClicked = true;
      this.fixed = true;
      clearTimeout(timer);
      this.$nextTick(() => {
        const barHeight = this.getBarheight();
        const nav = document.querySelector(`.${name}-${this.activeKey}`);
        const offsetHeight = scroll.getOffsetTop(nav);
        scroll.scrollTo(offsetHeight - barHeight, {
          getContainer: () => this.container,
          callback: () => {
            timer = setTimeout(() => {
              this.isTabClicked = false;
            }, 20);
          },
          duration: this.duration
        });
      });
      this.$emit("change", type);
    },
    onScroll() {
      return requestAnimationFrame(this._onScroll);
    },
    _onScroll() {
      if (!this.$refs.bar || this.isTabClicked)
        return;
      const offsetTopNavs = this.itemData.map((v) => {
        const el = document.querySelector(`.${name}-${v.name}`);
        return scroll.getOffsetTop(el);
      });
      const offsetTop = scroll.getOffsetTop(this.$refs.navs);
      const top = scroll.getScroll(this.container, true);
      this.fixed = top + this.top >= offsetTop;
      const barHeight = this.getBarheight();
      const isEnd = scroll.isScrollToBottom(this.$refs.navs, {
        getContainer: () => this.container
      });
      console.log(top, offsetTopNavs);
      if (isEnd) {
        console.log("scroll end");
        this.activeKey = this.itemData[this.itemData.length - 1].name;
        return;
      }
      if (top <= offsetTopNavs[0]) {
        this.activeKey = this.itemData[0].name;
      }
      for (let i = 0; i < offsetTopNavs.length; i++) {
        if (top >= offsetTopNavs[i] - barHeight - this.top) {
          this.activeKey = this.itemData[i].name;
        }
      }
    },
    getBarheight() {
      return this.layout === "top" ? this.$refs.bar.$el.clientHeight : 0;
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, navs_vue_vue_type_template_lang.render, navs_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/navs/navs.vue";
var Navs = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Navs;
