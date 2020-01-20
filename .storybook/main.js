module.exports = {
  stories: ['../stories/**/*.stories*'],
  // addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpack: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: ['awesome-typescript-loader'],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
