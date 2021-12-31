import { formItemKey } from '../form/context';

export default {
  inject: {
    formItem: {
      from: formItemKey,
      default: {
        onField: () => {},
      },
    },
  },
  computed: {
    itemDisabled() {
      return this.disabled || this.formItem?.disabled;
    },
  },
};
