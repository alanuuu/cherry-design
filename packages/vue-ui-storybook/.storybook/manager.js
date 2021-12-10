import { addons } from '@storybook/addons';
import csdnTheme from './csdn-design';

// When setting a theme, set a complete theme object. The theme is replaced, not combined
addons.setConfig({
  theme: csdnTheme,
  sidebar: {
    showRoots: true,// sidebar是否展示root
  }
});
