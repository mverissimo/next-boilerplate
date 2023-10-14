import type { StorybookConfig } from '@storybook/nextjs';

import path from 'path';
import tsconfigPaths from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      strictMode: true,
    },
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve?.plugins || []),
        new tsconfigPaths({
          extensions: ['.ts', '.tsx'],
          configFile: path.join(__dirname, '../tsconfig.json'),
        }),
      ],
    };

    return config;
  },
};

export default config;
