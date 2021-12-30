<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import { formItemKey } from '../form/context';

export default {
  name: 'CheckboxGroup',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  data() {
    return {
      checkValue: false,
      children: [],
    };
  },
  inject: {
    formItem: formItemKey,
  },
  computed: {
    classes() {
      const name = 'c-checkbox-group';
      return {
        [name]: true,
      };
    },
  },
  methods: {
    change(val) {
      this.$emit('input', val);
      this.$emit('change', val);
      this.formItem.onField('change');
    },
    // 获取组件名为WCheckbox的子组件信息
    getChildren(name) {
      return this.$children.filter((item) => {
        return item.$options.name === name;
      });
    },
    // 更新value
    updateModel() {
      this.children = this.getChildren('Checkbox');
      if (this.children) {
        const { value } = this;
        this.children.forEach((item) => {
          // eslint-disable-next-line no-param-reassign
          item.model = value;
          // eslint-disable-next-line no-param-reassign
          item.checkValue = value.indexOf(item.label) > -1;
        });
      }
    },
  },
  mounted() {
    this.updateModel();
  },
  watch: {
    value() {
      this.updateModel();
    },
  },
};
</script>
