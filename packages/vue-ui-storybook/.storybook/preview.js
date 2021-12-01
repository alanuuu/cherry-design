
import Vue from "vue";
import CSDNUI from "@csdn-design/vue-ui"
import '../../vue-ui/components/index.less';

Vue.use(CSDNUI);

export const parameters = {
  controls: {
    expanded: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}