<template>
  <div class="wrap">
    <div class="icons">
      <div v-for="component in icons" :key="component.name" class="item" @click="copy(`icon-${component.name}`)">
        <component :is="`icon-${component.name}`" class="icon"></component>
        <span class="text">{{ `icon-${component.name}` }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard';
import Icons from '@csdn-design/vue-ui/components/icon/icons.json';

export default {
  name: 'icon',
  computed: {
    icons() {
      return Icons;
    },
  },
  methods: {
    copy(name) {
      copy(`<${name} />`)
      console.log(name);
      this.$toast({
         content: `复制成功 <${name} />`,
         type: 'none'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  margin-top: 20px;
  border: 1px solid #eee;
  color: #222226;
}
.icon {
  font-size: 36px;
}
.icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.item {
  height: 100px;
  width: 150px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  &:hover {
    background-color: #fc5531;
    color: #fff;
    .text {
      color: #fff;
    }
  }
}
.text {
  margin-top: 4px;
  display: inline-block;
  text-align: center;
}
</style>