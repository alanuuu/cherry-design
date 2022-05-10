import Vue from 'vue';
import CherryUI from '@cherry-design/vue-ui/components'
import CherryIcon from '@cherry-design/vue-ui/components/icon';
import '@cherry-design/vue-ui/components/index.less';

Vue.use(CherryUI);
Vue.use(CherryIcon);

export const parameters = {
  controls: {
    expanded: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      array: /Array$/
    },
  },
}