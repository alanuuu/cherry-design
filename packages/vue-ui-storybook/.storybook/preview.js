import Vue from 'vue';
import CSDNUI from '@csdn-design/vue-ui/components'
import CSDNIcon from '@csdn-design/vue-ui/components/icon';
import '@csdn-design/vue-ui/components/index.less';

Vue.use(CSDNUI);
Vue.use(CSDNIcon);

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