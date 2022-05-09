import Vue from 'vue';
import cherryUI from '@cherry-design/vue-ui/components'
import cherryIcon from '@cherry-design/vue-ui/components/icon';
import '@cherry-design/vue-ui/components/index.less';

Vue.use(cherryUI);
Vue.use(cherryIcon);

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