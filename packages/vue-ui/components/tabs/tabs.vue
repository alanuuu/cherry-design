<template>
  <div class="c-tab" ref="tabs">
    <c-tab-bar
      ref="bar"
      :items="itemData"
      @click="tagChange"
      :active="currentName"
    />
    <div class="c-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TabBar from './tab-bar.vue';

export default {
  name: 'Tabs',
  components: {
    CTabBar: TabBar,
  },
  data() {
    return {
      itemData: [],
      currentName: '',
    };
  },
  props: {
    layout: {
      type: String,
      default: 'top',
      validator: (val) => {
        return ['top', 'left'].indexOf(val) > -1;
      },
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const slots = this.$slots.default;
      if (!slots && slots.length === 0) {
        return;
      }
      // 获取子组件
      const vnodes = slots.filter((v) => {
        return /vue-component-[0-9]+-TabPane/i.test(v.tag);
      });
      if (vnodes.length > 0) {
        const itemData = vnodes.map((v) => v.componentOptions.propsData);
        this.itemData = this.items && this.items.length ? this.items : itemData;
        this.currentName = this.itemData[0]?.name;
      }
    },
    tagChange(type) {
      this.currentName = type;
      this.$emit('change', type);
    },
  },
};
</script>
