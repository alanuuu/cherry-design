"use strict";
var form = require("../mixins/form.js");
require("../icon/cherry-vue-icon.js");
require("../icon/arrow-down.js");
require("../icon/arrow-left.js");
require("../icon/arrow-right.js");
require("../icon/arrow-up.js");
require("../icon/at.js");
require("../icon/blow-up.js");
require("../icon/caret-down.js");
require("../icon/caret-left.js");
require("../icon/caret-right.js");
require("../icon/caret-up.js");
require("../icon/check-circle.js");
require("../icon/check-square.js");
require("../icon/close-circle.js");
require("../icon/close.js");
require("../icon/code-block.js");
require("../icon/code-square.js");
require("../icon/code.js");
require("../icon/download.js");
require("../icon/export.js");
require("../icon/eye-invisible.js");
require("../icon/eye.js");
require("../icon/faceBook-circle-fill.js");
require("../icon/facebook-square-fill.js");
require("../icon/google-circle-fill.js");
require("../icon/heart-fill.js");
require("../icon/heart.js");
require("../icon/history.js");
require("../icon/home.js");
require("../icon/import.js");
require("../icon/left-circle.js");
require("../icon/left.js");
require("../icon/list.js");
require("../icon/loading.js");
require("../icon/menu-fold.js");
require("../icon/menu-unfold.js");
require("../icon/message-banned.js");
require("../icon/message.js");
require("../icon/more-vertical.js");
require("../icon/more.js");
require("../icon/narrow.js");
require("../icon/plus-circle.js");
require("../icon/plus.js");
require("../icon/poweroff.js");
require("../icon/qq-circle-fill.js");
require("../icon/question-circle.js");
require("../icon/refresh.js");
require("../icon/reply.js");
require("../icon/right-circle.js");
var right = require("../icon/right.js");
require("../icon/save.js");
require("../icon/scan.js");
require("../icon/search.js");
require("../icon/select-all.js");
require("../icon/send.js");
require("../icon/settings.js");
require("../icon/share-alt.js");
require("../icon/share-external.js");
require("../icon/share-internal.js");
require("../icon/star-fill.js");
require("../icon/star.js");
require("../icon/sync.js");
require("../icon/thumb-down-fill.js");
require("../icon/thumb-down.js");
require("../icon/thumb-up-fill.js");
require("../icon/thumb-up.js");
require("../icon/to-bottom.js");
require("../icon/to-left.js");
require("../icon/to-right.js");
require("../icon/to-top.js");
require("../icon/translate.js");
require("../icon/twitter-circle-fill.js");
require("../icon/upload.js");
require("../icon/voice.js");
require("../icon/warning-circle.js");
require("../icon/weibo-circle-fill.js");
var select_vue_vue_type_template_lang = require("./select.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Select",
  mixins: [form],
  components: {
    IconRight: right
  },
  props: {
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visiable: false,
      label: null,
      children: null,
      query: ""
    };
  },
  computed: {
    cls() {
      const name = "c-select";
      return {
        [name]: true,
        [name + "-visiable"]: this.visiable,
        [name + "-disabled"]: this.itemDisabled
      };
    }
  },
  mounted() {
    if (this.value) {
      this.children = this.getChildren("Option");
      this.children.map((item) => {
        if (item.value === this.value) {
          this.label = item.label;
        }
        return item;
      });
    }
    document.addEventListener("click", this.clickBlank);
  },
  methods: {
    clickBox() {
      if (!this.visiable && !this.itemDisabled) {
        this.visiable = true;
      } else {
        this.visiable = false;
      }
    },
    getChildren(name) {
      return this.$children.filter((item) => {
        return item.$options.name === name;
      });
    },
    selectData(value, label) {
      var _a;
      this.label = label;
      this.$emit("input", value);
      this.$emit("change", value);
      (_a = this.formItem) == null ? void 0 : _a.onField("change");
      this.visiable = false;
      this.query = label;
    },
    handleInput(e) {
      this.children = this.getChildren("Option");
      this.children.forEach((item) => {
        item.inputText = e.target.value;
      });
      this.$emit("query-change", e.target.value);
    },
    clickBlank(e) {
      var _a;
      if (!this.$refs.select.contains(e.target) && this.visiable) {
        this.visiable = false;
        if (this.filterable) {
          this.children = this.getChildren("Option");
          this.children.map((item) => {
            if (item.value === this.value) {
              this.query = item.label;
            }
            return item;
          });
        }
        (_a = this.formItem) == null ? void 0 : _a.onField("change");
      }
    }
  },
  destroyed() {
    document.removeEventListener("click", this.clickBlank);
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, select_vue_vue_type_template_lang.render, select_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/select/select.vue";
var Select = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Select;
