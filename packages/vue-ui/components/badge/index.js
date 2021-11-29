import Badge from './badge.vue';

Badge.install = (Vue) => {
  Vue.component(Badge.name, Badge);
};

export default Badge;