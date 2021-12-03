<template>
  <div class="c-checkbox" :class="classes">
    <!-- 复选框组 -->
    <input
      v-if="group"
      class="c-checkbox-input"
      :class="classesinput"
      type="checkbox"
      :name="name"
      v-model="model"
      :value="label"
      :disabled="disabled"
      @change="change"
    />
    <!-- 单个复选框 -->
    <input
      v-else
      class="c-checkbox-input"
      :class="classesinput"
      type="checkbox"
      :name="name"
      :checked="checkValue"
      :disabled="disabled"
      @change="change"
    />
    <span>
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Checkbox',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
    },
    label: {
      type: [String, Number, Boolean],
    },
    name: {
      type: String,
    },
    value: {
      type: [String, Number, Boolean],
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        [`c-checkbox-${this.groupSize}`]: true,
        'c-checkbox-border': this.border,
        'c-checkbox-checked': this.checkValue,
      };
    },
    classesinput() {
      return {
        [`c-checkbox-input-${this.groupSize}`]: true,
        'c-checkbox-input-disabled': this.disabled,
      };
    },
  },
  data() {
    return {
      checkValue: this.value, // 是否被选中
      parent:
        this.$parent.$options.name === 'WCheckboxGroup' ? this.$parent : null,
      groupSize: this.size, // 组件大小
      group: false, // 是否未复选框组
      model: [],
    };
  },
  mounted() {
    if (this.parent) {
      this.groupSize = this.parent.size;
      this.group = true;
    }
  },
  methods: {
    change(val) {
      const { checked } = val.target;
      this.checkValue = checked;
      this.$emit('input', this.checkValue);
      if (this.parent) {
        this.parent.change(this.model);
      }
    },
  },
};
</script>
