<template>
  <label class="c-checkbox-all" :class="clsAll">
    <span :class="classes" class="c-checkbox">
      <span class="c-checkbox-inner" :class="clsinner"></span>
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
    </span>
    <slot
      ><span>{{ label }}</span></slot
    >
  </label>
</template>
<script>
const name = 'c-checkbox';
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
    clsAll() {
      return {
        [name + '-border']: this.border,
        [name + '-' + this.groupSize]: true,
        [name + '-border-color']:
          this.border && this.checkValue && !this.disabled,
        [name + '-all-disabled']: this.disabled,
        [name + '-checked']: this.checkValue,
      };
    },
    classes() {
      return {
        [name + '-checked']: this.checkValue,
      };
    },
    clsinner() {
      return {
        [name + '-' + this.groupSize]: true,
      };
    },
    classesinput() {
      return {
        [name + '-input-disabled']: this.disabled,
      };
    },
  },
  data() {
    return {
      checkValue: this.value, // 是否被选中
      parent:
        this.$parent.$options.name === 'CheckboxGroup' ? this.$parent : null,
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
