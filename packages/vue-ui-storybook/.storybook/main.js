const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.resolve.extensions.push('.ts', '.tsx', '.less', '.css')
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: require.resolve("style-loader")
        },
        {
          loader: require.resolve("css-loader",)
        },
        {
          loader: require.resolve("less-loader"),
          options: {
            lessOptions: {
              javascriptEnabled: true,
            }
          },
        },
      ],
    });
    return config;
  },
}