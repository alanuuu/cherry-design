<template>
  <div :class="cls" ref="select">
    <div class="c-select-selectbox c-input-content" @click="clickBox">
      <input
        v-if="filterable"
        type="text"
        spellcheck="false"
        autocomplete="off"
        v-model="query"
        class="c-select-input"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
      />
      <span v-else-if="label" class="c-select-placeholder c-select-value">{{
        label
      }}</span>
      <span v-else class="c-select-placeholder">{{ placeholder }}</span>
      <icon-right class="c-select-icon"></icon-right>
    </div>
    <transition name="c-drop">
      <div v-show="visiable" class="c-select-option">
        <ul class="c-select-option-list">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { IconRight } from '../icon';
export default {
  name: 'Select',
  components: {
    IconRight,
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    },
    value: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visiable: false,
      label: null,
      children: null,
      query: '',
    };
  },
  computed: {
    cls() {
      const name = 'c-select';
      return {
        [name]: true,
        [name + '-visiable']: this.visiable,
        [name + '-disabled']: this.disabled,
      };
    },
  },
  mounted() {
    if (this.value) {
      this.children = this.getChildren('Option');
      this.children.map((item) => {
        if (item.value === this.value) {
          this.label = item.label;
        }
      });
    }
    document.addEventListener('click', this.clickBlank);
  },
  methods: {
    clickBox() {
      if (!this.visiable && !this.disabled) {
        this.visiable = true;
      } else {
        this.visiable = false;
      }
    },
    // 获取组件名为option的子组件信息
    getChildren(name) {
      return this.$children.filter((item) => {
        return item.$options.name === name;
      });
    },
    selectData(value, label) {
      this.label = label;
      this.$emit('input', value);
      this.$emit('on-change', value);
      this.visiable = false;
      this.query = label;
    },
    handleInput(e) {
      this.children = this.getChildren('Option');
      this.children.forEach((item) => {
        item.inputText = e.target.value;
      });
      this.$emit('on-query-change', e.target.value);
    },
    clickBlank(e) {
      if (!this.$refs.select.contains(e.target) && this.visiable) {
        this.visiable = false;
        if (this.filterable) {
          this.children = this.getChildren('Option');
          this.children.map((item) => {
            if (item.value === this.value) {
              this.query = item.label;
            }
          });
        }
      }
    },
  },
  destroyed() {
    document.removeEventListener('click', this.clickBlank);
  },
};
</script>
