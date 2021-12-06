<template>
  <div class="c-input" :style="{width: `${width}px`}">
    <input
      :class="cls"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="handleInput"
      :maxlength="maxlength"
      :type="type"
      :value="value"
    >
    <span v-if="isWordLimitVisible" class="c-input-tip">{{textNum}}/{{maxlength}}</span>
  </div>
</template>

<script>
import { prefix } from '../../constants';

export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
    },
    width: {
      type: Number,
      default: 200,
    },
    limit: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    textNum() {
      return this.value.length;
    },
    isWordLimitVisible() {
      return this.limit
        && this.maxlength
        && this.type !== 'password';
    },
    cls() {
      const name = prefix + '-input';
      return {
        [name + '-disabled']: this.disabled,
        [name + '-content']: true,
        [name + '-limit']: this.isWordLimitVisible,
      };
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
