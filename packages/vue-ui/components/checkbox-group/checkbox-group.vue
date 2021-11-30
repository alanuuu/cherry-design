<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CheckboxGroup',
  props: {
    value: {
      type: Array,
      default: [],
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
  computed: {
    classes() {
      return {
        [`c-checkbox-group-${this.size}`]: true,
      };
    },
  },
  methods: {
    change(val) {
      this.$emit('input', val);
      this.$emit('change', val);
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
          item.model = value;
          item.checkValue = value.indexOf(item.label) >= 0;
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