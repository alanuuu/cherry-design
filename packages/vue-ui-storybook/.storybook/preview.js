
import '../../vue-ui/components/index.less';

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