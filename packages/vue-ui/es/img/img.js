import ImgPreview from "./img-preview.js";
import { staticRenderFns, render } from "./img.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const name = "c-image";
const __vue2_script = {
  name: "Img",
  props: {
    src: String,
    previewSrc: String,
    fit: {
      type: String,
      default: "contain"
    },
    preview: {
      type: Boolean,
      default: true
    },
    alt: String
  },
  components: {
    ImgPreview
  },
  data() {
    return {
      showView: false
    };
  },
  computed: {
    cls() {
      return {
        [name]: true
      };
    },
    imageStyle() {
      const fitType = this.fit && this.fit !== "" ? {
        "object-fit": this.fit
      } : { "object-fit": "none" };
      if (this.preview) {
        fitType.cursor = "pointer";
      }
      return fitType;
    }
  },
  methods: {
    clickImage() {
      if (this.preview && !this.showView) {
        this.showView = true;
      }
    },
    closeView() {
      if (this.preview && this.showView) {
        this.showView = false;
      }
    },
    handleError(e) {
      this.$emit("error", e);
    },
    handleLoad(e) {
      this.$emit("load", e);
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
__component__.options.__file = "components/img/img.vue";
var Img = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Img as default };
