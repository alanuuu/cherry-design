import { addons } from '@storybook/addons';
import cherryTheme from './cherry-design';

// When setting a theme, set a complete theme object. The theme is replaced, not combined
addons.setConfig({
  theme: cherryTheme,
  sidebar: {
    showRoots: true,// sidebar是否展示root
  }
});
