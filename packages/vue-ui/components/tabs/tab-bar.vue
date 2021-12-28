<template>
  <div :class="cls" ref="bar">
    <div
      class="c-tab-bar-item"
      :class="{
        'c-tab-active': active === v.name,
      }"
      ref="items"
      v-for="v in items"
      :key="v.name"
      @click="onClick(v.name)"
    >
      {{ v.label }}
    </div>
    <div class="c-tab-bar-line" :style="lineStyle"></div>
  </div>
</template>

<script>
const padding = 24;
const name = 'c-tab-bar';
export default {
  name: 'TabBar',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    active: {
      type: String,
    },
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
      };
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
