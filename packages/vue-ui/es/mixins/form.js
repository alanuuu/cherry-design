import { formItemKey } from "../form/context.js";
var formMixins = {
  inject: {
    formItem: {
      from: formItemKey,
      default: {
        onField: () => {
        }
      }
    }
  },
  computed: {
    itemDisabled() {
      var _a;
      return this.disabled || ((_a = this.formItem) == null ? void 0 : _a.disabled);
    }
  }
};
export { formMixins as default };
