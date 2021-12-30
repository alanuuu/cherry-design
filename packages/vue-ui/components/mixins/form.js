import { formItemKey } from '../form/context';

export default {
  inject: {
    formItem: {
      from: formItemKey,
      default: '',
    },
  },
  computed: {
    itemDisabled() {
      return this.disabled || this.formItem?.disabled;
    },
  },
};
