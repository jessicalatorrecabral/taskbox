// .storybook/main.js

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};