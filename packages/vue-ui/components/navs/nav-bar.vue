<template>
  <div :class="cls" :style="style" ref="bar">
    <div
      class="c-nav-bar-item"
      :class="{
        active: active === v.name,
      }"
      ref="items"
      v-for="v in items"
      :key="v.name"
      @click="onClick(v.name)"
    >
      {{ v.label }}
    </div>
    <div class="c-nav-bar-line" :style="lineStyle"></div>
  </div>
</template>

<script>
const padding = 24;
const name = 'c-nav-bar';
export default {
  name: 'NavBar',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    active: {
      type: String,
    },
    fixed: Boolean,
    top: Number,
  },
  data() {
    return {
      lineStyle: {
        transform: `translateX(${padding}px)`,
      },
    };
  },
  computed: {
    cls() {
      return {
        [name]: true,
        fixed: this.fixed,
      };
    },
    style() {
      return this.fixed ? { top: this.top + 'px' } : {};
    },
  },
  mounted() {
    this.getLineStyle();
  },
  watch: {
    active(cur, pre) {
      if (cur !== pre) {
        this.getLineStyle();
      }
    },
  },
  methods: {
    onClick(type) {
      this.$emit('click', type);
    },
    getLineStyle() {
      this.$nextTick(() => {
        const { items } = this.$refs;
        if (items && items.length) {
          const ref = items.find((v) => v.className.indexOf('active') > -1);
          const parent = this.$refs.bar.getBoundingClientRect();
          const rect = ref ? ref.getBoundingClientRect() : {};
          this.lineStyle = {
            width: rect.width - padding * 2 + 'px',
            transform: `translateX(${rect.left - parent.left + padding}px)`,
          };
        }
      });
    },
  },
};
</script>
